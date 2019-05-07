
/* Manejo del DOM */
const pokeData=window.POKEMON.pokemon;
const container = document.getElementById("show-data")
const orderDos = document.querySelectorAll("button.ordered-by")
const btnSearch = document.getElementsByTagName("button")[18];
const typeResult = document.getElementsByName("options")

// FUNCION ACTIVDA
window.addEventListener('load', () =>{
  addElement(pokeData);
});

// LISTENER PARA LLAMAR A LA FUNCION SORT
orderDos.forEach(element => {
  element.addEventListener('click', () =>{ 
    container.innerHTML="";
    addElement(window.sortData(pokeData,element.getAttribute("ordered-by")));
  })
})


//LISTENER PARA FUNCIÓN FILTER
typeResult.forEach(element => {
  element.addEventListener('click', () =>{ 
    container.innerHTML="";
    addElement(window.filterType(pokeData,element.getAttribute("option-by")));
  })
})


//LISTENER PARA LLAMAR A FIND
btnSearch.addEventListener('click', (e) => {
e.preventDefault();

let pokeSearch = document.getElementsByTagName("input")[0].value;
pokeSearch = upperFirst(pokeSearch.toLowerCase());
let showName = window.filterName(pokeData,pokeSearch);

container.innerHTML =  `
<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2" >
  <div class="card  border-dark text-center rounded-lg mb-3"  >
    <p class="card-text">${showName.num}</p>
    <img src="${showName.img}" class="card-img-top" alt="...">
    <h5 class="card-title">${showName.name}</h5>
    <button type="button" id="info" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Info
    </button>
  </div>
</div>`

});

function upperFirst(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
  } 




  // FUNCION MOSTRAR CARTAS 
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
//console.log("lista pokemon");
 }

  
 // FUNCION MODAL  
 /*btnInfo= document.getElementsByClassName("btn btn-primary");
 btnInfo.addEventListener('click', () =>{
      
   pokeData.forEach(element =>{
    modal.innerHTML += 
    
   name = ` ${element.num}; ` 
   
   console.log("el modal funciona")
    })
 
 })*/
  

// FUNCION FILTRAR POR NOMBRE

