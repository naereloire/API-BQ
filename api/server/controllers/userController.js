import userService from '../services/userService';
import Util from '../utils/Utils';

const util = new Util();

class userController {
  static async getAllusers(req, res) {
    try {
      const allUsers = await userService.getAllUsers();
      if (allUsers.length > 0) {
        util.setSuccess(200, 'users retrieved', allUsers);
      } else {
        util.setSuccess(200, 'No user found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async addUser(req, res) {
    if (!req.body.name || !req.body.email || !req.body.sector) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newUser = req.body;
    try {
      const createdUser = await userService.addUser(newUser);
      util.setSuccess(201, 'User Added!', createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedUser(req, res) {
    const alteredUser = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateUser = await userService.updateUser(id, alteredUser);
      if (!updateUser) {
        util.setError(404, `Cannot find user with the id: ${id}`);
      } else {
        util.setSuccess(200, 'User updated', updateUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error.message);
      return util.send(res);
    }
  }

  // static async getAuthor(req, res) {
  //   const { id } = req.params;

  //   if (!Number(id)) {
  //     util.setError(400, 'Please input a valid numeric value');
  //     return util.send(res);
  //   }

  //   try {
  //     const theAuthor = await AuthorService.getAuthor(id);

  //     if (!theAuthor) {
  //       util.setError(404, `Cannot find Author with the id ${id}`);
  //     } else {
  //       util.setSuccess(200, 'Found Author', theAuthor);
  //     }
  //     return util.send(res);
  //   } catch (error) {
  //     util.setError(404, error);
  //     return util.send(res);
  //   }
  // }
}

export default userController;
