import database from '../src/models';

class menuService {
  static async getAllMenus() {
    try {
      return await database.menus.findAll();
    } catch (error) {
      throw error;
    }
  }
  static async getMenu(menu) {
    try {
      const theMenu = await database.menus.findAll({
        where: { menu: Number(menu) },
      });

      return theMenu;
    } catch (error) {
      throw error;
    }
  }
  static async addMenuItem(newItem) {
    try {
      return await database.menus.create(newItem);
    } catch (error) {
      throw error;
    }
  }

  static async updateMenuItem(id, updatedMenuItem) {
    try {
      const itemToUpdate = await database.menus.findOne({
        where: { id: Number(id) },
      });

      if (itemToUpdate) {
        await database.menus.update(updatedMenuItem, {
          where: { id: Number(id) },
        });

        return updatedMenuItem;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteItem(id) {
    try {
      const itemToDelete = await database.menus.findOne({
        where: { id: Number(id) },
      });

      if (itemToDelete) {
        const deletedItem = await database.menus.destroy({
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

export default menuService;
