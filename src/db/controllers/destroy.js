const destroyPet = async (req, res) => {
    try {
        const { Pets, params: {id} } = req;
        const deletedPet = await req.Pets.removePet(id);

        return res.send("Pet has been removed").sendStatus(200);
        
    } catch (err) {
        console.error(err);
        return res.sendStatus(400);
    }
}

module.exports = destroyPet;