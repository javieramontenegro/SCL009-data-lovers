
/* Manejo del DOM */
const pokeData=window.POKEMON.pokemon;
const order = document.querySelectorAll("button.ordered-by");

const filter = document.type.options;
const container = document.getElementById("show-data");
const btnSearch = document.getElementsByTagName("button")[0];
let pokeSearch = document.getElementsByTagName("input")[3].value;
console.log(filter);


// FUNCION FILTRAR POR NOMBRE

btnSearch.addEventListener('click', (e) => {
e.preventDefault();

container.innerHTML="";
let pokeName = window.filterName(pokeData,document.getElementsByTagName("input")[18].value)

container.innerHTML = 
`  
<div class=" col-12  col-sm-6 col-md-4 col-lg-3 col-xl-2 " >
<div class="card  border-dark text-center rounded-lg mb-3"  >
  <p class="card-text">${pokeName.num}</p>
    <img src="${pokeName.img}" class="card-img-top" alt="...">

    <h5 class="card-title">${pokeName.name}</h5>
<div>  
   <button type="button"  class="btn btn-primary " data-toggle="modal" data-target="#exampleModal">
     Info
   </button>
</div>
<br>
</div>

</div>`

console.log(pokeName);


});

// FUNCION FILTRO
document.type.options.forEach(element => {
element.addEventListener('click',() => {
  container.innerHTML="";
  let pokeFilter = window.filterData(pokeData,filter.value)

  container.innerHTML += 
`  
<div class=" col-12  col-sm-6 col-md-4 col-lg-3 col-xl-2 " >
<div class="card  border-dark text-center rounded-lg mb-3"  >
  <p class="card-text">${pokeFilter.num}</p>
    <img src="${pokeFilter.img}" class="card-img-top" alt="...">

    <h5 class="card-title">${pokeFilter.name}</h5>
<div>  
   <button type="button"  class="btn btn-primary " data-toggle="modal" data-target="#exampleModal">
     Info
   </button>
</div>
<br>
</div>

</div>`


})


})
  
   
  






// LISTENER PARA LLAMAR A LA FUNCION SORT 
order.forEach(element => {
  element.addEventListener('click', () =>{ 
   // console.log("click");
    container.innerHTML="";
    addElement(window.sortData(pokeData,element.getAttribute("ordered-by")));

    
  })
})



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
    //console.log("lista pokemon");
     }
   
  
  // FUNCION ACTIVDA
  
  window.addEventListener('load', () =>{
    addElement(pokeData);
  });
  


 
 // FUNCION MODAL  
 
  








/*
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
*/



