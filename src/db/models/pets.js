const knex = require('./knex');

class Pets {
  static async createNewPet(petname, profilepicture, species, isFriendly) {
    try {
      const query = `INSERT INTO pets (petname, profilepicture, species, isFriendly) values (?, ?, ?, ?) returning *`;
      const res = await knex.raw(query, [petname, profilepicture, species, isFriendly]);

      return res.rows;

    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async getAllPets() {
    try {
      const query = `SELECT * FROM pets`;
      const res = await knex.raw(query);

      if(res.rows.length === 0) {
        return [];
      }
      return res.rows;

  } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async removePet(id) {
    try {
      const query = `DELETE FROM pets WHERE id = ? returning *`;
      const res = await knex.raw(query, [id]);
       console.log("Pet has been removed");

      return res.rows;
  } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = Pets;