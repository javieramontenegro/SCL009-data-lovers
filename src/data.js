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


