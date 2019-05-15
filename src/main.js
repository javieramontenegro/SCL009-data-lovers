/* Manejo del DOM */
fetch("https://raw.githubusercontent.com/javieramontenegro/SCL009-data-lovers/master/src/data/pokemon/pokemon.json")
.then(function(resp){
 return resp.json();
 })
.then(function(data){
 console.log(data.pokemon);





//const pokeData=window.POKEMON.pokemon;
const calculate = document.getElementById("calculo")
const order = document.querySelectorAll("button.ordered-by");
const filter = document.querySelectorAll("button.type-poke");
const container = document.getElementById("show-data");
const btnSearch = document.getElementsByTagName("button")[0];
let modalImp = document.getElementById("modal");
let btnType="";
let btnWeak ="";

// FUNCION ACTIVDA
window.addEventListener('load', () =>{
  addElement(data.pokemon);
});
//FUNCIONES
const sortData = (data, sortBy, condition) => {
  let arr = [];

  if (sortBy == "name"){

    if(condition === "az"){
     
      arr = data.sort((a, b) => a.name.localeCompare(b.name));
    }
    else {
      arr = data.sort((a, b) => a.name.localeCompare(b.name)).reverse();
    }
  }
  else {
    if(condition === "idAsc"){
      arr = data.sort(sortById);
    }
    else {
      arr = data.sort(sortById).reverse();
    }
  }
  return arr;
}


function sortById(a,b) {
  if (a.id > b.id){
    return 1
  }
    return -1;
}

  
window.sortData= sortData;


//FILTRAR POR NOMBRE
const filterName = (pokeData, pokeSearch) =>{
  const pokeName = pokeData.find(element => element.name === pokeSearch);
  
  return pokeName
  }


window.filterName= filterName;

//  FILTRAR POR TIPO

const filterType = (pokeData,typeResult) =>{
  const pokeType = pokeData.filter(element => element.type.includes(typeResult));
  
  return pokeType

}


  window.filterType= filterType;


//CALCULAR CANTIDAD DE POKEMON SEGUN TIPO
const computeStats = (data) =>{
  
  
  return data.length

}
window.computeStats = computeStats;





// LISTENER PARA LLAMAR A LA FUNCION SORT 
order.forEach(element => {
  element.addEventListener('click', () =>{ 
   // console.log("click");
    container.innerHTML="";
    modalImp.innerHTML="";
    calculate.innerHTML ="";
    let cardSort= window.sortData(data.pokemon,element.getAttribute("ordered-by"),element.getAttribute("name"));
     addElement(cardSort);
     modal(cardSort);
     createButtonType(cardSort);
     createButtonWeak (cardSort);

    }) 
}) 


 // FUNCION FILTRO
filter.forEach(element => {
element.addEventListener('click',() => {
  container.innerHTML="";
  modalImp.innerHTML="";
  let cardFilter =window.filterType(data.pokemon,element.getAttribute("type-poke"));
  
  addElement(cardFilter);
  modal(cardFilter);
  createButtonType(cardFilter);
  createButtonWeak (cardFilter);
  calculate.innerHTML = "La cantidad de Pokemon tipo "+ element.getAttribute("type-poke") + " es "+ window.computeStats(cardFilter);
  
})
})   
    
 

//LISTENER PARA LLAMAR A FIND
btnSearch.addEventListener('click', (e) => {
e.preventDefault();
container.innerHTML="";
modalImp.innerHTML="";
calculate.innerHTML ="";
let pokeSearch = document.getElementsByTagName("input")[0].value;
pokeSearch = upperFirst(pokeSearch.toLowerCase());

let element = window.filterName(data.pokemon,pokeSearch);


container.innerHTML =  `
<div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2" >
  <div class="card  border-dark text-center rounded-lg mb-3  ${element.type[0]}"  >
    <p class="card-text">${element.num}</p>
    <img src="${element.img}" class="card-img-top" alt="...">
    <h5 class="card-title">${element.name}</h5>

    <button type="button" id="info" class="btn btn-primary" data-toggle="modal" data-target="#modal${element.id}">

    Info
    </button>
  </div>
</div>`


modalImp.innerHTML +=
  `
           <div class="modal fade" id="modal${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                       <div class="modal-header">
                       <section>
                       <h5 class="modal-title" id="exampleModalLabel">${element.name} N°${element.num} </h5>
                       </section>
                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                        </button>
                             </div>
                       <div class="modal-body">
                          <div class="container-fluid">
                                 <div class="row">  
                                      <div class="col-sm-12">
                                          <div class="row">
                                            <div class="col-7 col-sm-6">
                                                <img src="${element.img}"  alt="...">
                                                <section>
                                                   <h5 >Altura:</h5>
                                                    <h5 >${element.height}</h5>
                                                    <h5 >Peso:</h5>
                                                    <h5 >${element.weight}</h5>
                                                  </section>    
                                                </div>    
                                             
                                               <div class="col-3 col-sm-6">
                                                  <h5 class="modal-title" >Tipo: </h5>
                                           
                                                    <div id="type${element.id}"  class="col-3 col-sm-6">
                                                       <button  class=" btn btn-primary  ${element.type}" >${element.type}</button>
                                                    </div>
                                                
                                                 <h5 >Debilidad: </h5>
                                                 
                                                 <div id="weak${element.id}" > 
                                                       <button  class=" btn btn-primary  ${element.weaknesses}" >${element.weaknesses}</button>
                                                 </div>
                                                   
                                                 </div>
                                           </div>
                                         </div>         
                                           
                                   </div>     
                           </div>
                       </div>
                    </div>
                        <div class="modal-footer">
                       
                    
                 </div>
               </div>
           </div>
       </div>
`



});

 
    function upperFirst(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
      } 




  // FUNCION MOSTRAR CARTAS 
 function addElement (info) { 

      info.forEach(element => {
        container.innerHTML += 
          `  
    <div class=" col-6  col-sm-4 col-md-4 col-lg-3 col-xl-2 " >
       <div class="card  border-dark text-center rounded-lg mb-3 ${element.type[0]}"  >
            <p class="card-text">${element.num}</p>
              <img src="${element.img}"  alt="...">
        
              <p class="card-title">${element.name}</p>
          <div>  
              
              <a  class="btn btn-primary " data-toggle="modal" data-target="#modal${element.id}" href="#modal${element.id}">
                Info
               </a>
               
            </div>
          <br>
       </div>
        
    </div>`
       
    
  });
    
     }

 
 // FUNCION MODAL  
 
function modal (info) {
info.forEach(element => {
  modalImp.innerHTML +=
  `
           <div class="modal fade" id="modal${element.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                       <div class="modal-header">
                       <section>
                       <h5 class="modal-title" id="exampleModalLabel">${element.name} N°${element.num} </h5>
                       </section>
                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                        </button>
                             </div>
                       <div class="modal-body">
                          <div class="container-fluid">
                                 <div class="row">  
                                      <div class="col-sm-12">
                                          <div class="row">
                                            <div class="col-7 col-sm-6">
                                                <img src="${element.img}"  alt="...">
                                                    <section>
                                                   <h5 >Altura:</h5>
                                                    <h5 >${element.height}</h5>
                                                    <h5 >Peso:</h5>
                                                    <h5 >${element.weight}</h5>
                                                    </section>   
                                                 </div>    
                                             
                                               <div class="col-3 col-sm-6">
                                                  <h5 class="modal-title" >Tipo: </h5>
                                           
                                                    <div id="type${element.id}"  class="col-3 col-sm-6"></div>
                                                
                                                 <h5 >Debilidad: </h5>
                                                 
                                                 <div id="weak${element.id}" ></div>
                                                   
                                                 </div>
                                           </div>
                                         </div>         
                                           
                                   </div>     
                           </div>
                       </div>
                    </div>
                        <div class="modal-footer">
                       
                    
                 </div>
               </div>
           </div>
       </div>
`

})


}

    
//FUNCION CREAR BOTON TIPO
function createButtonType (data) {
  data.forEach(element =>{
    element.type.forEach(element =>{

      btnType += `<button class="btn btn-primary ${element}">
      ${element}
</button>`
   
});
document.getElementById(`type${element.id}`).innerHTML = btnType;
 btnType="";   

 })}

  


//FUNCION CREAR BOTON DEBILIDAD
function createButtonWeak (data) {
  data.forEach(element =>{
    element.weaknesses.forEach(element =>{
      
      btnWeak += `<button class=" btn btn-primary  ${element}" >
      ${element}

  </button>`
    } );

   
    document.getElementById(`weak${element.id}`).innerHTML = btnWeak;
    btnWeak="";
  })}
 
  modal(data.pokemon); 
  createButtonType(data.pokemon);
  createButtonWeak (data.pokemon);

});
 /* const numero = 1;
const url =`https://pokeapi.co/api/v2/pokemon/${numero}`;
  let myInit = { method: 'GET',
                 headers:{'Content-Type' :'application/json'},
                 mode:'no-cors',
                 cache:'default'
 };*/
 
              