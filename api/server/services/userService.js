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
      const theuser = await database.user.findOne({
        where: { id: Number(id) },
      });

      return theuser;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const userToDelete = await database.user.findOne({
        where: { id: Number(id) },
      });

      if (userToDelete) {
        const deleteduser = await database.user.destroy({
          where: { id: Number(id) },
        });
        return deleteduser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default userService;
