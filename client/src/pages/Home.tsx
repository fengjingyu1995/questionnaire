import { useEffect, useState } from 'react';
import {
  fetchQuestionnaire,
  submitQuestionnaire,
} from '../api/questionnaireApi';
import { QuestionValue, QuestionnaireData } from '../api/questions.model';
import Question from '../components/Question/Question';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import './Home.css';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

export type QuestionnaireFormData = {
  [id: string]: QuestionValue;
};

const Home = () => {
  const [questionnaireData, setQuestionnaireData] =
    useState<QuestionnaireData | null>(null);
  const [formData, setFormData] = useState<QuestionnaireFormData>({});
  const [activeStep, setActiveStep] = useState(0);

  const [isSubmitQuestionnaireLoading, setIsSubmitQuestionnaireLoading] =
    useState(false);

  useEffect(() => {
    fetchQuestionnaire().then(data => {
      setQuestionnaireData(data);
    });
  }, []);
  const navigate = useNavigate();

  if (!questionnaireData) {
    return <div>Loading...</div>;
  }

  const { questions, questionnaireTitle } = questionnaireData;

  const isLastStep = () => activeStep === questions?.length - 1;
  const updateFormData = (questionId: string, value: QuestionValue) => {
    setFormData(prevFormData => {
      const newUserFormData = { ...prevFormData, [questionId]: value };
      return newUserFormData;
    });
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleNext = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLastStep()) {
      // complete
      setIsSubmitQuestionnaireLoading(true);
      try {
        await submitQuestionnaire(formData);
        setIsSubmitQuestionnaireLoading(false);
        navigate('/complete');
      } catch (error) {
        setIsSubmitQuestionnaireLoading(false);
      }
    } else {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  };
  const currentQuestion = questions[activeStep];

  return (
    <Container maxWidth="lg">
      <form className="questionnaire" onSubmit={e => handleNext(e)}>
        <Typography variant="h3" component="h1" color="primary">
          {questionnaireTitle}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={(activeStep / questions.length) * 100}
        />
        <Question
          key={currentQuestion.id}
          question={currentQuestion}
          updateFormData={updateFormData}
          value={formData[currentQuestion.id]}
        />
        <Box sx={{ display: 'flex', flexDirection: 'row', py: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
            startIcon={<ChevronLeft />}
            size="large"
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isSubmitQuestionnaireLoading && <CircularProgress size="25px" />}
            <Button
              type="submit"
              size="large"
              sx={{ mr: 1 }}
              endIcon={isLastStep() ? undefined : <ChevronRight />}
            >
              {isLastStep() ? 'Submit' : 'Next'}
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default Home;
