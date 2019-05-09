# **Pokedex de Kanto**

![portada](https://i.pinimg.com/originals/a0/43/3d/a0433da5db760d960dd7d60647e5f4b2.png)



## **Índice**
***
* [Definición del Producto](#definición-del-droducto)
* [Historias de Usuario](#historias-de-usuario)
* [Diseño de la Interfaz de Usuario](#diseño-de-la-interfaz-de-usuario)
* [Implementación de la Interfaz de Usuario](#implementación-de-la-interfaz-de-usuario)



## **Definición del Producto**
***

Pokedex (de Kanto) es una webapp que facilita a los jugadores de Pokemon Go, la obtención de características o datos que permitan mejorar los resultados de sus batallas.

* ¿Quiénes son los principales usuarios de producto?  
Jugadores de Pokemon Go principiantes o que requieran información de forma rápida y sencilla acerca de su Pokemon favorito.

* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
Obtener información de Pokemones filtrando la información por tipo, buscando por un nombre específico  

* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?  
Para el usuario es primordial encontrar información de forma rápida y precisa, y que tenga solo la información relevante para las batalles. Es por esto que se determinó que la información mas relevante es:    
    - Nombre.
    - ID.
    - Tipo de Pokemon y sus debilidades.
    
* ¿Cuándo utilizarían el producto?  
Cada vez que jueguen Pokemon Go

## **Historias de Usuario**
***
* Nuestras historias de usuario están basadas en los requerimientos u objetivos que tendría el usuario de Pokemon GO al utilizar la webapp. Estos requeimientos son:
    - Ordenar por ID. 
    - Ordenar por orden alfabético.  
    - Buscar por Nombre.  
    - Buscar por Tipo.  


__Historia 1__  
_Como_ usuario _quiero_ ordenar por ID para _poder_ obtener la colección completa de la Pokedex y así ver facilmente los pokemones faltantes en sua Pokedex personal.

__Hitoria 2__  
_Como_ usuario _quiero_ ordenar alfabéticamente los Pokemones para _poder_  obtener la colección completa de la Pokedex sin recordar el nombre de un pokemon, pero sabiendo su inicial.

__Historia 3__  
_Como_ usario _quiero_ buscar por Nombre para _poder_ acceder de forma precisa y rápida a la información del Pokemon que necesite.

__Historia 4__  
_Como_ usario quiero buscar por Tipo para _poder_ obtener un listado de pokemones que me puedan ser útiles, según su tipo, en una determinada batalla.

__Historia 5__  
_Como_ usario quiero conocer la cantidad de Pokemones por tipo para _poder_ saber posibles poekmones faltantes en mi Pokedex

La planificación y organización y "definition of done" se realizó mediante el uso de la interfaz Trello que puedes ver en el siguiente enlace:
[ver aquí.](https://trello.com/b/UBktUEKT/data-lover)



## **Diseño de la Interfaz de Usuario**
***

El proceso de diseño se realizó con base en las historias de usuario y sus necesidades, realizando los primeros sketch para luego iterarlos y llegar a nuestro prototipo final. La webapp entrega una interfaz simple e intuitiva que permite acceder fácilmente a las funciones que se entregan.

Así mismo se realizó una _heurística de usabilidad_ simplificada y que puedes [ver aquí.](https://docs.google.com/spreadsheets/d/1jC7bD4u4tps7TZL9eawcgm5ns97GqSZ7clBM1Tc3AtE/edit?usp=sharing)


### **- Prototipo de Baja Fidelidad**

Nuestro primer objetivo fue distribuir cada elemento de la webapp, de acuerdo a lo visto en las historias de usuario, como se ve en el siguiente sketch:

![Sketch1](https://i.pinimg.com/originals/c0/b9/7c/c0b97c81be4d7d0655f4eab916267cfc.jpg)
  

**Test de Usuario 1.**  
El sketch anterior fue presentado a los distintos grupos de trabajo en Laboratoria para obtener feed-back, y de ello se resolvió mantener la distribución y prepararlo para ser nuevamente testeado.

El nuevo sketch quedó de la siguiente manera:  
Portada  
![Sketch-portada](https://i.pinimg.com/564x/a3/68/c0/a368c025456bc9029b03de92f41c0519.jpg)  

Búsqueda Avanzada  
![Sketch-busq-avanzada](https://i.pinimg.com/564x/1a/fa/a3/1afaa3709c8c4f1f2df040342ed6b496.jpg)  

Pop-up  
![Sketch-pop-up](https://i.pinimg.com/originals/1d/f5/6d/1df56d01881da37281af12d8000b7817.jpg)  

**Test de usuario 2**  
Este sketch fue testeado usuarios reales que se encontraban en el sector de Parque Forestal, punto de encuetro de jugadores habituales de Pokemon GO.
![actividad-parque](https://i.pinimg.com/originals/bb/e0/42/bbe042bf7f8f5d987b5036ee7f1a1f03.jpg)

Se obtuvieron las siguientes problemas de usabilidad:  
- El pop-up no tiene botón cerrar.  

No se encontraron otros problemas.  


### **- Prototipo Alta Fidelidad**  

A partir del último test de usabilidad, se generó un prototipo de alta fidelidad con la aplicación Figma que puedes [ver aquí.](https://www.figma.com/file/TdLcaIsivoJBSOxnaOWWRw/Kanto-Pokedex)

Este prototipo fue testeado y generó las siguientes observaciones de usabilidad y que fueron más relacionadas al diseño que a la funcionabilidad:
- Pop-up es muy grande.
- cambiar background.
- Poner logos en los tipos de Pokemón
- Añadir datos curiosos.

De lo anterior rescatamos la sugerencia de achicar la ventana del pop-up que contiene la información detallada del Pokemon.

Una vez obtenido el prototipo final, este fue exportado a la aplicación Zeplin que puedes [ver aquí.](zpl.io/a7W1vBE)
  



## **Implementación de la Interfaz de Usuario**
***
Nuestra página consta de dos elementos principales para su funcionamiento, una barra de navegación "NAV-BAR" y la interfaz en forma de "CARDS" que muestra la data.

En Nav_Bar contiene accesos que pertimitirán al usuario obtener la información que necesita, a través de:

__- Un buscador:__ Permite buscar Pokemones por nombre.  
__- Un drop-down menu:__ Permite ordenar la data por orden alfabético y numérico.  
__- Una búsqueda avanzada:__ Mediante un menú desplegable, el usuario accede a la búsqueda según tipo de pokemon.

El resultado final de la implementación lo puedes ver en nuestro repositorio de GitHub Page ver aquí [aquí.](zpl.io/a7W1vBE)  

***

## Build With  
- Vanilla Javascript (ES6)
- HTML5
- CSS
- Figma
- Google Fonts
- GitHub
