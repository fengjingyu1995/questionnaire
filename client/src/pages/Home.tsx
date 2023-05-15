import Question from '../components/Question/Question';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import './Home.css';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuestionnaire } from '../hooks/useQuestionnaire';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

const Home = () => {
  const {
    questionnaireData,
    formData,
    activeStep,
    isSubmitQuestionnaireLoading,
    submitQuestionnaireError,
    handleNext,
    handleBack,
    updateFormData,
    isLastStep,
  } = useQuestionnaire();

  if (!questionnaireData) {
    return <div>Loading...</div>;
  }

  const { questions, questionnaireTitle } = questionnaireData;
  const currentQuestion = questions[activeStep];

  return (
    <Container maxWidth="lg">
      <form className="questionnaire" onSubmit={e => handleNext(e)}>
        <FormControl error={!!submitQuestionnaireError} variant="standard">
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
          <FormHelperText>
            {submitQuestionnaireError ? submitQuestionnaireError : ''}
          </FormHelperText>

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
                endIcon={isLastStep ? undefined : <ChevronRight />}
              >
                {isLastStep ? 'Submit' : 'Next'}
              </Button>
            </Box>
          </Box>
        </FormControl>
      </form>
    </Container>
  );
};

export default Home;
