const createNewPet = async (req, res) => {
    try {
        const newPet = await req.Pets.createNewPet(req.body);

        return res.send(newPet);

    } catch (err) {
        console.error(err);
        return res.sendStatus(400);

    }
}

module.exports = createNewPet;