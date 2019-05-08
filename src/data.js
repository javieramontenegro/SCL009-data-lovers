// FUNCION SORT
/*const sortData = (data,condition) => {
   
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
  */
  
 window.sortData= sortData;





// FILTRAR NOMBRE

const filterName = (data,name) =>{
let obj={};
 
obj =data.find (element => {
  return element.name === name;
});
return obj;

}
window.filterName=filterName;


 //FILTRAR POR TIPO


const filterData = (data,condition) =>{
  let typeResult=[];
  typeResult = data.filter(element => element.type.includes(condition));

return typeResult;

}

window.filterData = filterData;



