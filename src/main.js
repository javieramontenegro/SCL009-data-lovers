
/* Manejo del DOM */
const pokeData=POKEMON.pokemon;
const orderDos = document.querySelectorAll("button.ordered-by")
const container = document.getElementById("show-data")
console.log(orderDos);

// LISTENER PARA LLAMAR A LA FUNCION SORT FINALLL
 
orderDos.forEach(element => {
  element.addEventListener('click', () =>{ 
    console.log("click");
    container.innerHTML="";
    addElement(window.sortData(pokeData,element.getAttribute("ordered-by")));

  })
})

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
    console.log("lista pokemon");
     }
   
  
  // FUNCION ACTIVDA
  
  window.addEventListener('load', () =>{
    addElement(pokeData);
  });
  
    

 
 // FUNCION MODAL  
 btnInfo= document.getElementsByClassName("btn btn-primary");
 btnInfo.addEventListener('click', () =>{
      
   pokeData.forEach(element =>{
    modal.innerHTML += 
    
   name = ` ${element.num}; ` 
   
   console.log("el modal funciona")
    })
 
 })
  

// FUNCION FILTRAR POR NOMBRE

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
