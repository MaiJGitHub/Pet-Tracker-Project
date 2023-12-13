const knex = require('./knex');

class Pets {
  static async createNewPet({petname, profilepicture, species, isfriendly}) {
    try {
      const query = `INSERT INTO pets (petname, profilepicture, species, isfriendly) values (?, ?, ?, ?) returning *`;
      const res = await knex.raw(query, [petname, profilepicture, species, isfriendly]);

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