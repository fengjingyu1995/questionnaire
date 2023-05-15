import express from 'express';
import cors from 'cors';
import questionnaire from './data/questionnaire.json';

const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.get('/questionnaire', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(questionnaire));
});

app.post('/questionnaire/submit', (req, res) => {
  console.log(req.body);
  res.send('questionnaire is received');
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
