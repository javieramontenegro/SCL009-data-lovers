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

