const pokeData = POKEMON.pokemon


const container = document.getElementById("show-data")

// filtrar por nombre

const btnSearch = document.getElementsByTagName("button")[1];

btnSearch.addEventListener('click', (e) => {
e.preventDefault();

let pokeSearch = document.getElementsByTagName("input")[0].value;

const pokeName= pokeData.find (element => {
    return element.name === pokeSearch;
});
console.log(pokeName);

container.innerHTML =  `
<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2" >
  <div class="card  border-dark text-center rounded-lg mb-3"  >
    <p class="card-text">${pokeName.num}</p>
    <img src="${pokeName.img}" class="card-img-top" alt="...">

    <h5 class="card-title">${pokeName.name}</h5>

    <button type="button" id="info" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Info
    </button>
  </div>

</div>`

});


function addElement (info) {
     info.forEach(element => {
       container.innerHTML +=
         `
          <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2" >
         <div class="card  border-dark text-center rounded-lg mb-3"  >
         <p class="card-text">${element.num}</p>
         <img src="${element.img}" class="card-img-top" alt="...">

         <h5 class="card-title">${element.name}</h5>

         <button type="button" id="info" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
         Info
       </button>
       </div>

   </div>`

 });
   console.log("lista pokemon");
    }

// FUNCION ACTIVDA
window.addEventListener('load', () =>{
    addElement(pokeData);
  });


//filtrar por tipo
let selectType = 'Poison'




