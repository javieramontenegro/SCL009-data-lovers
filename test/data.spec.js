global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('sortData', () => {
  const data =[
    {
      "id": 1,
      "num": "001",
      "name": "Bulbasaur"
    },
    {
      "id": 2,
      "num": "002",
      "name": "Ivysaur"
    },
    {
      "id": 3,
      "num": "003",
      "name": "Venusaur"
    }
    ]




  
  it('debería ser una función', () => {
    assert.equal(typeof window.sortData, 'function');
  });

  it('debería retornar la mini data ordenada desde la Z hasta la An', () => {
    assert.deepEqual(window.sortData(data,"za"), [
      
    { 
    "id": 3,
    "num": "003",
    "name": "Venusaur"},
  {
    "id": 2,
    "num": "002",
    "name": "Ivysaur"

  },
  {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur"

  }
  
  ]);
  });
})



  
