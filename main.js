// let container = document.getElementById("container");
// let body = document.body
// let card = document.createElement("div")

// let name_api = fetch("https://rickandmortyapi.com/api/character")
// .then((Response) => Response.json())
// .then((data) =>{
//     data.results.forEach(item => {
//     let name = document.createElement("h3");
//     let img = document.createElement("img")
//     img.src = item.image
//     name.innerText = item.name; 

//      card.appendChild(name);
//      card.appendChild(img)
//      container.appendChild(card);

//     }) 

//     body.appendChild(container)
// });






// let container = document.getElementById("container");
// let body = document.body;

// let name_api = fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => response.json())
//   .then((data) => {
//     data.results.forEach(item => {
//       let card = document.createElement("div");
//       let name = document.createElement("h3");
//       name.innerText = item.name;

//       card.appendChild(name);

//       container.appendChild(card);
//     });

//     body.appendChild(container);
//   });


let container = document.getElementById("container");
let body = document.body;

let name_api = fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach(item => {
      let card = document.createElement("div");
      card.classList.add("card"); 

      let image = document.createElement("img");
      image.src = item.image; // تعيين الرابط الخاص بالصورة

      
      let name = document.createElement("h3");
      name.innerText = item.name;

      card.appendChild(image);
      card.appendChild(name);

      container.appendChild(card);
    });

    body.appendChild(container);
  })
