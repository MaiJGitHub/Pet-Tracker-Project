
//create a new pet card
const handleSubmit = () => {
    const submitForm = document.querySelector('#new-pets-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(submitForm);
        const { petname, profilepicture, species, isfriendly } = Object.fromEntries(formData);
    
        fetch("/api/pets", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            console.log("New user created:", data)
            return data;
        })
        .catch(error => {
            console.error("Error:", error)
        })
    
        const createPetCard = () => {
            const petList = document.querySelector('#pet-list');
            const singlePetCard = document.createElement('li');
            const petTitle = document.createElement('h3');
            const petImg = document.createElement('img');
            const petSpecies = document.createElement('p');
            const petfriendly = document.createElement('p');
            const removeBtn = document.createElement('button');

            petTitle.innerHTML = petname;
            petImg.src = profilepicture;
            petImg.alt = petname;
            petSpecies.textContent = species;
            petfriendly.textContent = isfriendly;
            removeBtn.textContent = 'Remove';
    
            if(isfriendly === 'on') {
                petfriendly.textContent = 'Friendly!';
            } else {
                petfriendly.textContent = 'Not so Friendly...';
            }

            singlePetCard.append(petTitle, petImg, petSpecies, petfriendly, removeBtn);
            petList.append(singlePetCard);
    
            submitForm.reset();
        }
        createPetCard();
    });
}

handleSubmit();