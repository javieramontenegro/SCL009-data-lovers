
/* Manejo del DOM */
const pokeData=POKEMON.pokemon;
const order = document.querySelectorAll("button.ordered-by")
const container = document.getElementById("show-data")
//console.log(order);

// LISTENER PARA LLAMAR A LA FUNCION SORT FINALLL
 
order.forEach(element => {
  element.addEventListener('click', () =>{ 
   // console.log("click");
    container.innerHTML="";
    addElement(window.sortData(pokeData,element.getAttribute("ordered-by")));

  })
})

//FUNCION PARA ACHICAR IMAGEN -- INTENTO 
function imageSize() {
let image = document.getElementsByClassName("card-img-top");
image.width="50";
};

// FUNCION MOSTRAR CARTAS 

 function addElement (info) { 
      info.forEach(element => {
        container.innerHTML += 
          `  
    <div class=" col-12  col-sm-6 col-md-4 col-lg-3 col-xl-2 " >
       <div class="card  border-dark text-center rounded-lg mb-3"  >
            <p class="card-text">${element.num}</p>
              <img src="${element.img}" class="card-img-top" alt="...">
        
              <h5 class="card-title">${element.name}</h5>
          <div>  
             <button type="button"  class="btn btn-primary " data-toggle="modal" data-target="#exampleModal">
               Info
             </button>
          </div>
          <br>
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
 
  

// FUNCION FILTRAR POR NOMBRE

const btnSearch = document.getElementsByTagName("button")[0];

btnSearch.addEventListener('click', (e) => {
e.preventDefault();

let pokeSearch = document.getElementsByTagName("input")[2].value;

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
// DATA PRUEBA

