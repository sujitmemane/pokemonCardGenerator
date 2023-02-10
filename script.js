const button = document.querySelector(".generate");
const result = document.querySelector("#result");

const generateCard = async function () {
  const id = Math.floor(Math.random() * 150) + 1;
  console.log(id);
  const res = await fetch(` https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  console.log(data);
  console.log(data.sprites.back_shiny);
  console.log(data.name);

  const pokemonImg = data.sprites.back_default;
  const pokeName = data.name;
  const attack = data.stats[1].base_stat;
  const defence = data.stats[2].base_stat;
  const speed = data.stats[5].base_stat;
  console.log(attack, defence, speed);

  result.innerHTML = `
   <img class="pokemonImg"  src="${pokemonImg}">
   <h1 class="pokeName">${pokeName.toUpperCase()}</h1>
   <div class="stat">
   <div>
 <h4>ATTACK</h4>${attack} <h3></h3>
   </div>
   <div>
 <h4>DEFENCE</h4>${defence} <h3></h3>
   </div>
   <div>
 <h4>SPEED</h4>${speed} <h3></h3>
   </div>
   </div>
   
  `;
};

button.addEventListener("click", generateCard);
window.addEventListener("load", generateCard);
