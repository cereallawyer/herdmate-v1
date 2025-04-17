
// HerdMate v1.0 - App Logic (simplified view)

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  let animals = JSON.parse(localStorage.getItem('animals')) || [];

  function saveAnimals() {
    localStorage.setItem('animals', JSON.stringify(animals));
  }

  function renderAnimals() {
    app.innerHTML = '<h2>Animal List</h2>';
    animals.forEach((animal, i) => {
      app.innerHTML += `
        <div style="border:1px solid #ccc; margin:10px; padding:10px;">
          <strong>${animal.name}</strong><br>
          Sire: ${animal.sire} | Dam: ${animal.dam} | Tag: ${animal.tag}<br>
          <button onclick="editAnimal(${i})">Edit</button>
          <button onclick="deleteAnimal(${i})">Delete</button>
        </div>
      `;
    });

    app.innerHTML += `
      <h3>Add Animal</h3>
      <input id="name" placeholder="Name" />
      <input id="sire" placeholder="Sire" />
      <input id="dam" placeholder="Dam" />
      <input id="tag" placeholder="Ear Tag" />
      <button onclick="addAnimal()">Add</button>
    `;
  }

  window.addAnimal = () => {
    const name = document.getElementById('name').value;
    const sire = document.getElementById('sire').value;
    const dam = document.getElementById('dam').value;
    const tag = document.getElementById('tag').value;
    animals.push({ name, sire, dam, tag });
    saveAnimals();
    renderAnimals();
  };

  window.deleteAnimal = (i) => {
    animals.splice(i, 1);
    saveAnimals();
    renderAnimals();
  };

  window.editAnimal = (i) => {
    const a = animals[i];
    const newName = prompt("Edit name:", a.name);
    if (newName !== null) {
      animals[i].name = newName;
      saveAnimals();
      renderAnimals();
    }
  };

  renderAnimals();
});
