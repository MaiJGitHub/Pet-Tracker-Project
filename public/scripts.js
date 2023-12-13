// const fetchPet = (petname, profilepicture, species, isfriendly) => fetch('/api/pets', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             petname,
//             profilepicture,
//             species,
//             isfriendly
//         })
//     })

//create a new pet card
document.querySelector('#add-pet-btn').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(submitForm);
    const { petname, profilepicture, species, isfriendly } = Object.fromEntries(formData);

    const createPetCard = () => {
        const petList = document.querySelector('#pet-list');
        const singlePetCard = document.createElement('li');

        singlePetCard.innerHTML = `
        <h3>${petname}</h3>
        <img src="${profilepicture}" alt="${petname}">
        <p>${species}</p>
        <p>${isfriendly}</p>
        <button>Remove</button>
        `

        if(isfriendly === 'on') {
            petFriendly.textContent = 'Friendly!';
        } else {
            petFriendly.textContent = 'Not so Friendly...';
        }

        singlePetCard.append(petTitle, petPicture, petSpecies, petFriendly, removeBtn);
        petList.append(singlePetCard);

        submitForm.reset();
    }

    createPetCard();
})


const main = () => {
    fetchPets();
}
main();