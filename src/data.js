  // FUNCION SORT

  const sortData = (data,condition) => {
    let arr = [];

    // de a/z
    if (condition === "az"){
        arr= data.sort(sortByName)
    }

    //de z/a
    if (condition === "za"){
      arr= data.sort(sortByName).reverse();
    }

    // del 1/151 
    if (condition === "idAscending"){
      arr= data.sort(sortById)
    }

    // del 151/1
    if (condition === "idDescending"){
      arr= data.sort(sortById).reverse();
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


//window.onload = pokeType(POKEMON.pokemon);
