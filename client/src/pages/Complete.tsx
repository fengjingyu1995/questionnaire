import Container from '@mui/material/Container';
import './Complete.css';
import Typography from '@mui/material/Typography';

function Complete() {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography align="center" variant="h3" color="initial" component="h1">
        Thank you for filling out the form!
      </Typography>
    </Container>
  );
}

export default Complete;
