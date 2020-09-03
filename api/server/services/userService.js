import database from '../src/models';

class userService {
  static async getAllUsers() {
    try {
      return await database.users.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addUser(newuser) {
    try {
      return await database.users.create(newuser);
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, updateuser) {
    try {
      const userToUpdate = await database.users.findOne({
        where: { id: Number(id) },
      });

      if (userToUpdate) {
        await database.users.update(updateuser, {
          where: { id: Number(id) },
        });

        return updateuser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getUser(id) {
    try {
      const theUser = await database.users.findOne({
        where: { id: Number(id) },
      });

      return theUser;
    } catch (error) {
      throw error;
    }
  }
}

export default userService;
