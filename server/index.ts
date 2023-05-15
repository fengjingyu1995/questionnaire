import express from 'express';
import questionnaire from './data/questionnaire.json'

const app = express();
const port = 3000;

app.get('/questionnaire', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(questionnaire));
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
