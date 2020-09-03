import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './server/routes/userRoutes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;
app.use('/api/users', userRoutes);

app.get('*', (req, res) =>
  res.status(200).send('<html><h1>Hello World!</h1></html>'),
);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
module.exports = app;
