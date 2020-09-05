import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './server/routes/userRoutes';
import menuRoutes from './server/routes/menuRoutes';
import orderRoutes from './server/routes/orderRoutes';
import ordersItensRoutes from './server/routes/ordersItensRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger_output.json';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;
app.use('/api', userRoutes);
app.use('/api', menuRoutes);
app.use('/api', orderRoutes);
app.use('/api', ordersItensRoutes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('*', (req, res) =>
  res.status(200).send('<html><h1>Hello World!</h1></html>'),
);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
module.exports = app;
