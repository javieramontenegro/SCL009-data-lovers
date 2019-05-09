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

 it('debería retornar la mini data ordenada alfabéticamente A/Z', () => {
  assert.deepEqual(window.sortData(data,"name","az"), [
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
},
]);
});

it('debería retornar la mini data ordenada alfabéticamente Z/A', () => {
  assert.deepEqual(window.sortData(data,"name","za"), [
{
 "id": 3,
 "num": "003",
 "name": "Venusaur"
},
{
 "id": 2,
 "num": "002",
 "name": "Ivysaur"
},
{
 "id": 1,
 "num": "001",
 "name": "Bulbasaur"
},

]);
});

it('debería retornar la mini data ordenada desde el id 1 hasta el id 3', () => {
  assert.deepEqual(window.sortData(data, "id", "idAsc"), [

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
    },
]);
});

it('debería retornar la mini data ordenada desde el id 3 hasta el id 1', () => {
  assert.deepEqual(window.sortData(data, "id", "idDes"), [

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



describe('filterName', () => {

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
    assert.equal(typeof window.filterName, 'function');
  });
 
  it('Debería retornar el Pokemon llamado Ivysaur', () => {
    assert.deepEqual(window.filterName(data,"Ivysaur"), {"id": 2, "num": "002", "name": "Ivysaur"});
    
  });
 })


describe('filterType', () => {
  const data =[
    {
      "id": 1,
      "num": "001",
      "name": "Bulbasaur",
      "type": [
        "Grass",
        "Poison"
      ],
    },
    {
      "id": 2,
      "num": "002",
      "name": "Ivysaur",
      "type": [
        "Grass",
        "Poison"
      ],
    },
    {
    "id": 7,
    "num": "007",
    "name": "Squirtle",
    "type": ["Water"
    ],
    },
    ]
 
  it('debería ser una función', () => {
    assert.equal(typeof window.filterType, 'function');
  });
 
  it('debería retornar el Pokemon de tipo Agua (water)', () => {
    assert.deepEqual(window.filterType(data,"Water"), [
 
    {
    "id": 7,
    "num": "007",
    "name": "Squirtle",
    "type": ["Water"
        ],
        },
 
  ]);
  });
 
});
 