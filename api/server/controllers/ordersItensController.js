import ordersItensService from '../services/ordersItensService';
import Util from '../utils/Utils';

const util = new Util();

class ordersItensController {
  static async getAllOrderItens(req, res) {
    try {
      const allOrderItens = await ordersItensService.getAllOrderItens();
      if (allOrderItens.length > 0) {
        util.setSuccess(200, 'Itens retrieved', allOrderItens);
      } else {
        util.setSuccess(200, 'No Itens found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async getOrderItem(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theItem = await ordersItensService.getOrderItem(id);

      if (!theItem) {
        util.setError(404, `Cannot find item with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Item', theItem);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error.message);
      return util.send(res);
    }
  }

  static async addOrderItem(req, res) {
    if (!req.body.count || !req.body.menuId || !req.body.orderId) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newItem = req.body;
    try {
      const createdItem = await ordersItensService.addOrderItem(newItem);
      util.setSuccess(201, 'Item Added!', createdItem);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updateItensCount(req, res) {
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    if (!req.body.count) {
      util.setError(400, 'Please input a valid status');
      return util.send(res);
    }
    const alteredItem = {
      count: req.body.count,
    };
    try {
      const updateItem = await ordersItensService.updateOrderItem(
        id,
        alteredItem,
      );
      if (!updateItem) {
        util.setError(404, `Cannot find item with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Order item count updated', updateItem);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error.message);
      return util.send(res);
    }
  }

  static async deleteItem(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const itemToDelete = await ordersItensService.deleteItem(id);

      if (itemToDelete) {
        util.setSuccess(200, 'Item deleted');
      } else {
        util.setError(404, `Item with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

export default ordersItensController;
