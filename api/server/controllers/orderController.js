import orderService from '../services/orderService';
import Util from '../utils/Utils';

const util = new Util();

class orderController {
  static async getAllOrders(req, res) {
    try {
      const allOrders = await orderService.getAllOrders();
      if (allOrders.length > 0) {
        util.setSuccess(200, 'orders retrieved', allOrders);
      } else {
        util.setSuccess(200, 'No order found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async getOrder(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theOrder = await orderService.getOrder(id);

      if (!theOrder) {
        util.setError(404, `Cannot find order with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Order', theOrder);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error.message);
      return util.send(res);
    }
  }

  static async addOrder(req, res) {
    if (
      !req.body.cliente ||
      !req.body.mesa ||
      !req.body.total ||
      !req.body.status ||
      !req.body.garcomId
    ) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newOrder = req.body;
    try {
      const createdOrder = await orderService.addOrder(newOrder);
      util.setSuccess(201, 'Order Added!', createdOrder);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updateStatusOrder(req, res) {
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    if (!req.body.status) {
      util.setError(400, 'Please input a valid status');
      return util.send(res);
    }
    const alteredOrder = {
      status: req.body.status,
    };
    try {
      const updateOrder = await orderService.updateOrder(id, alteredOrder);
      if (!updateOrder) {
        util.setError(404, `Cannot find order with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Order status updated', updateOrder);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error.message);
      return util.send(res);
    }
  }
}

export default orderController;
