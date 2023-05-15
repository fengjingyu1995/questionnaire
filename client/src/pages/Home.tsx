import { useEffect, useState } from 'react';
import { fetchQuestions } from '../api/fetchQuestions';
import { QuestionValue, QuestionnaireData } from '../api/questions.model';
import Question from '../components/Question/Question';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import './Home.css';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

type FormData = {
  [id: string]: QuestionValue;
};

const Home = () => {
  const [questionnaireData, setQuestionnaireData] =
    useState<QuestionnaireData | null>(null);
  const [formData, setFormData] = useState<FormData>({});
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    fetchQuestions().then(data => {
      setQuestionnaireData(data);
    });
  }, []);
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

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLastStep()) {
      // complete
      console.log(formData);
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
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button
            type="submit"
            sx={{ mr: 1 }}
            endIcon={isLastStep() ? undefined : <ChevronRight />}
          >
            {isLastStep() ? 'Complete' : 'Next'}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Home;
