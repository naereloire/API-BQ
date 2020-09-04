import database from '../src/models';
// import users from '../src/models/users';

class orderService {
  static async getAllOrders() {
    try {
      return await database.orders.findAll();
    } catch (error) {
      throw error;
    }
  }
  static async getOrder(id) {
    try {
      const theOrder = await database.orders.findOne({
        where: { id: Number(id) },
      });

      return theOrder;
    } catch (error) {
      throw error;
    }
  }

  static async addOrder(newOrder) {
    try {
      return await database.orders.create(newOrder);
    } catch (error) {
      throw error;
    }
  }

  static async updateOrder(id, updateOrder) {
    try {
      const statusToUpdate = await database.orders.findOne({
        where: { id: Number(id) },
      });

      if (statusToUpdate) {
        await database.orders.update(updateOrder, {
          where: { id: Number(id) },
        });

        return updateOrder;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default orderService;
