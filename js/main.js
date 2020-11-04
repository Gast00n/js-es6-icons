/**
 * 
 * 
 * FontIcons - Gestione eventi Javascript
 * 
 * 
 */

$(document).ready(function () {

// Icon set
const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
];

// Color set
const colors = [
    'blue',
    'orange',
    'purple'
];

//Icons container
const container = $('.icons');

//Stampa Icone sullo schermo
// printIcons(icons,container);

//Stampa con Colore
const coloredIcons = colorIcons(icons,colors);
printIcons(coloredIcons, container);


}); //END DOC READY


/*************************************************************************
 * Funzione Custom per la stampa delle icone a video
 */

 function printIcons(icons,container) {
     icons.forEach((icon) => {
        const {family, prefix, name, color} = icon //Destructuring dell'Array di Oggetti contenente le info per le icone
        
        const html = 
        `<div class="icon">
            <i class="${family} ${prefix}${name}"
            style="color: ${color}"></i>
            <div class="title">${name}</div>
        </div>`

        container.append(html); //Stampa ciclica
    });
 }


 /*************************************************************************
  * Funzione per Colorare le Icons
  */
 function colorIcons(icons, colors) {

     const types = getType(icons);

     //Assegnazione colore
     const coloredIcons = icons.map((icon) => {
         const indexType = types.indexOf(icon.type);

         return {
             ...icon,
             color: colors[indexType]
         }

     });

 }





 /*************************************************************************
  * Funzione per ottenere i Tipi di Icona
  */

  function getType(icons) {
      const types = [];

      icons.forEach( icon  => {
          if (! types.includes(icon.type)) {
              types.push(icon.type);
          }

      });
      return types
  }

