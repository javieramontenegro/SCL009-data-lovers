/* Manejo del DOM */
const pokeData=window.POKEMON.pokemon;
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
  addElement(pokeData);
});


// LISTENER PARA LLAMAR A LA FUNCION SORT 
order.forEach(element => {
  element.addEventListener('click', () =>{ 
   // console.log("click");
    container.innerHTML="";
    modalImp.innerHTML="";
    calculate.innerHTML ="";
    let cardSort= window.sortData(pokeData,element.getAttribute("ordered-by"),element.getAttribute("name"));
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
  let cardFilter =window.filterType(pokeData,element.getAttribute("type-poke"));
  
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

let element = window.filterName(pokeData,pokeSearch);


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
 
  modal(pokeData); 
  createButtonType(pokeData);
  createButtonWeak (pokeData);
