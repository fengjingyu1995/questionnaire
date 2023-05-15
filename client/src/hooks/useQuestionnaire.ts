import { useEffect, useState } from 'react';
import {
  fetchQuestionnaire,
  submitQuestionnaire,
} from '../api/questionnaireApi';
import { useNavigate } from 'react-router-dom';
import { QuestionnaireData, QuestionValue } from '../api/questions.model';

export type QuestionnaireFormData = {
  [id: string]: QuestionValue;
};

export const useQuestionnaire = () => {
  const [questionnaireData, setQuestionnaireData] =
    useState<QuestionnaireData | null>(null);
  const [formData, setFormData] = useState<QuestionnaireFormData>({});
  const [activeStep, setActiveStep] = useState(0);

  const [isSubmitQuestionnaireLoading, setIsSubmitQuestionnaireLoading] =
    useState(false);
  const [submitQuestionnaireError, setSubmitQuestionnaireError] = useState<
    string | null
  >(null);

  useEffect(() => {
    fetchQuestionnaire().then(data => {
      setQuestionnaireData(data);
    });
  }, []);
  const navigate = useNavigate();

  const updateFormData = (questionId: string, value: QuestionValue) => {
    setFormData(prevFormData => {
      const newUserFormData = { ...prevFormData, [questionId]: value };
      return newUserFormData;
    });
  };
  const handleBack = () => {
    if (submitQuestionnaireError) {
      setSubmitQuestionnaireError(null);
    }
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const isLastStep = questionnaireData
    ? activeStep === questionnaireData.questions?.length - 1
    : false;
  const handleNext = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitQuestionnaireError) {
      setSubmitQuestionnaireError(null);
    }

    if (isLastStep) {
      // complete
      setIsSubmitQuestionnaireLoading(true);
      try {
        await submitQuestionnaire(formData);
        setIsSubmitQuestionnaireLoading(false);
        navigate('/complete');
      } catch (error) {
        setIsSubmitQuestionnaireLoading(false);
        setSubmitQuestionnaireError(
          'Fail to submit the questionnaire, please retry.'
        );
      }
    } else {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  };
  return {
    questionnaireData,
    formData,
    activeStep,
    isSubmitQuestionnaireLoading,
    handleNext,
    handleBack,
    updateFormData,
    isLastStep,
    submitQuestionnaireError,
  };
};
