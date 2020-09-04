import menuService from '../services/menuService';
import Util from '../utils/Utils';

const util = new Util();

class menuController {
  static async getAllMenus(req, res) {
    try {
      const allMenus = await menuService.getAllMenus();
      if (allMenus.length > 0) {
        util.setSuccess(200, 'Menu retrieved', allMenus);
      } else {
        util.setSuccess(200, 'No menu found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async getMenu(req, res) {
    const { menu } = req.params;

    if (!Number(menu)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theMenu = await menuService.getMenu(menu);
      if (!theMenu.length > 0) {
        util.setError(404, `Cannot find Menu Nº ${menu}`);
      } else {
        util.setSuccess(200, 'Found Menu', theMenu);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error.message);
      return util.send(res);
    }
  }

  static async addItem(req, res) {
    if (!req.body.item || !req.body.menu || !req.body.price || !req.body.type) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newItem = req.body;
    try {
      const createdItem = await menuService.addMenuItem(newItem);
      util.setSuccess(201, 'Item Added!', createdItem);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedMenuItem(req, res) {
    const alteredItem = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateItem = await menuService.updateMenuItem(id, alteredItem);
      if (!updateItem) {
        util.setError(404, `Cannot find item with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Item updated', updateItem);
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
      const itemToDelete = await menuService.deleteItem(id);

      if (itemToDelete) {
        util.setSuccess(200, 'Item deleted');
      } else {
        util.setError(404, `Item with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default menuController;
