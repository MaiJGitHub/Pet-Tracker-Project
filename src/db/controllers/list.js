const { all } = require("../routes");

const listPets = async (req, res) => {
    try {
        const allPets = await req.Pets.getAllPets();

        return res.send(allPets).status(200);

    } catch (err) {
        console.error(err);
        return res.sendStatus(400);
    }
}

module.exports = listPets;