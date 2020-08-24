import express from 'express';
import bodyParse from 'bodyParse';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.get('*', (req, res) =>
  res.status(200).send('<html><h1>Hello World!</h1></html>'),
);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
