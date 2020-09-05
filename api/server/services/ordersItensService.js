import database from '../src/models';
// import ordersItens from '../src/models/ordersItens';

class ordersItensService {
  static async getAllOrderItens(orderId) {
    try {
      return await database.ordersItens.findAll({
        where: { orderId: Number(orderId) },
      });
    } catch (error) {
      throw error;
    }
  }

  static async getOrderItem(id) {
    try {
      const theItem = await database.ordersItens.findOne({
        where: { id: Number(id) },
      });

      return theItem;
    } catch (error) {
      throw error;
    }
  }

  static async addOrderItem(newItem) {
    try {
      return await database.ordersItens.create(newItem);
    } catch (error) {
      throw error;
    }
  }

  static async updateOrderItem(id, updateItem) {
    try {
      const itemToUpdate = await database.ordersItens.findOne({
        where: { id: Number(id) },
      });

      if (itemToUpdate) {
        await database.ordersItens.update(updateItem, {
          where: { id: Number(id) },
        });

        return updateItem;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteItem(id) {
    try {
      const itemToDelete = await database.ordersItens.findOne({
        where: { id: Number(id) },
      });

      if (itemToDelete) {
        const deletedItem = await database.ordersItens.destroy({
          where: { id: Number(id) },
        });
        return deletedItem;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default ordersItensService;
