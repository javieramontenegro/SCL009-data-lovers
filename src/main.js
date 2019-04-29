/* Manejo del DOM */
const data=POKEMON.pokemon;
const order = document.getElementById("mySelect");
const orderDos = document.querySelectorAll("button.ordered-by")
console.log(orderDos);
// LISTENER PARA LLAMAR A LA FUNCION SORT
 
order.addEventListener('change',()=>{
  let sort = document.getElementById("mySelect").value;
  let sorted = window.sortData(data,sort);
  
 container.innerHTML="";
  addElement (sorted);
  console.log("sorted");
 
  })
// LISTENER PARA LLAMAR A LA FUNCION SORT FINALLL
 
orderDos.forEach(element => {
  element.addEventListener('click', () =>{ 
    console.log("click");
    container.innerHTML="";
    addElement(window.sortData(data,element.getAttribute("ordered-by")));

  })
}       )
   
   
    
  
   
    




  
// FIND
const btnSearch = document.getElementsByTagName("button")[1];

btnSearch.addEventListener('click', (e) => {
e.preventDefault()
let pokeSearch = document.getElementsByTagName("input")[0].value;

const pokeName= data.find (element => { return element.name === pokeSearch;})

    container.innerHTML = 
`  
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


// FUNCION MOSTRAR CARTAS 
const container = document.getElementById("show-data")
 
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
    addElement(data);
  });
  
    

 
 // FUNCION MODAL  
 btnInfo= document.getElementsByClassName("btn btn-primary");
 btnInfo.addEventListener('click', () =>{
      
   data.forEach(element =>{
    modal.innerHTML += 
    
   name = ` ${element.num}; ` 
   
   console.log("el modal funciona")
    })
 
 })
  