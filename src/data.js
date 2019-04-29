// FUNCION SORT
const sortData = (data,condition) => {
   
    let arr = [];
    // de a/z
    if (condition === "az"){
  

      arr= pokeData.sort(sortByName)
    }
  //de z/a
  if (condition === "za"){
    arr= pokeData.sort(sortByName).reverse();
  }


  // del 1/151 
  if (condition === "idAscending"){
    arr= pokeData.sort(sortById)
  }
  // del 151/1
  if (condition === "idDescending"){
    arr= pokeData.sort(sortById).reverse();
  }
    return arr
  }
  
  function sortById(a,b) {
    if (a.id > b.id){
      return 1
      }
      return -1;
  }
  function sortByName(a,b) {
    if (a.name > b.name){
      return 1
      }
      return -1;
  }
  
 window.sortData= sortData;


//filtrar por tipo
//let selectType = 'Poison'


const filterData = (data,conditon) =>{
const pokeType = pokeData.filter(element => element.type.includes(selectType));

let typeResult="";

pokeType.forEach(element => {
  typeResult= typeResult + element.name + '<br>';

  document.getElementById("show-type").innerHTML = typeResult;


});


}

window.filterData = filterData;


//window.onload = pokeType(POKEMON.pokemon);
