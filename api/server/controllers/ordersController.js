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

  // static async addOrder(req, res) {
  //   if (!req.body.name || !req.body.email || !req.body.sector) {
  //     util.setError(400, 'Please provide complete details');
  //     return util.send(res);
  //   }
  //   const newUser = req.body;
  //   try {
  //     const createdUser = await userService.addUser(newUser);
  //     util.setSuccess(201, 'User Added!', createdUser);
  //     return util.send(res);
  //   } catch (error) {
  //     util.setError(400, error.message);
  //     return util.send(res);
  //   }
  // }

  // static async updatedUser(req, res) {
  //   const alteredUser = req.body;
  //   const { id } = req.params;
  //   if (!Number(id)) {
  //     util.setError(400, 'Please input a valid numeric value');
  //     return util.send(res);
  //   }
  //   try {
  //     const updateUser = await userService.updateUser(id, alteredUser);
  //     if (!updateUser) {
  //       util.setError(404, `Cannot find user with the id: ${id}`);
  //     } else {
  //       util.setSuccess(200, 'User updated', updateUser);
  //     }
  //     return util.send(res);
  //   } catch (error) {
  //     util.setError(404, error.message);
  //     return util.send(res);
  //   }
  // }

  // static async getUser(req, res) {
  //   const { id } = req.params;

  //   if (!Number(id)) {
  //     util.setError(400, 'Please input a valid numeric value');
  //     return util.send(res);
  //   }

  //   try {
  //     const theUser = await userService.getUser(id);

  //     if (!theUser) {
  //       util.setError(404, `Cannot find User with the id ${id}`);
  //     } else {
  //       util.setSuccess(200, 'Found User', theUser);
  //     }
  //     return util.send(res);
  //   } catch (error) {
  //     util.setError(404, error.message);
  //     return util.send(res);
  //   }
  // }
}

export default orderController;
