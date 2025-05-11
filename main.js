let container = document.getElementById("container");
let body = document.body;

let api = fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
      data.results.forEach(item => {
      let card = document.createElement("div");
      card.classList.add("card"); 

      let image = document.createElement("img");
      image.src = item.image; 

      
      let name = document.createElement("h3");
      name.innerText = item.name;

      // add name and img to card:
      card.appendChild(image);
      card.appendChild(name);

      // add card to container:
      container.appendChild(card);
    });

       // adding container to body: 
    body.appendChild(container);
  })
