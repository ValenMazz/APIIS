const pokemons = [
    { name: "Bulbasaur", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
    { name: "Ivysaur", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
    { name: "Venusaur", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" }
  ];
  
  let index = 0;
  

  document.body.style.textAlign = "center";
  document.body.style.fontFamily = "Arial, sans-serif";
  document.body.style.background = "#f2f2f2";
  

  const title = document.createElement("h1");
  title.textContent = "Mini Pokédex";
  document.body.appendChild(title);
  

  const card = document.createElement("div");
  card.style.background = "white";
  card.style.display = "inline-block";
  card.style.padding = "20px";
  card.style.borderRadius = "15px";
  card.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.2)";
  card.style.marginTop = "50px";
  card.style.textAlign = "center";
  document.body.appendChild(card);
  

  const pokeName = document.createElement("h2");
  card.appendChild(pokeName);
  

  const pokeImg = document.createElement("img");
  pokeImg.style.width = "150px";
  card.appendChild(pokeImg);
  

  const btnContainer = document.createElement("div");
  btnContainer.style.marginTop = "15px";
  card.appendChild(btnContainer);
  

  function estiloBoton(btn) {
    btn.style.margin = "10px";
    btn.style.padding = "10px 20px";
    btn.style.border = "none";
    btn.style.borderRadius = "8px";
    btn.style.background = "#4CAF50";
    btn.style.color = "white";
    btn.style.fontSize = "16px";
    btn.style.cursor = "pointer";
    btn.onmouseover = () => btn.style.background = "#45a049";
    btn.onmouseout = () => btn.style.background = "#4CAF50";
  }
  
  const btnPrev = document.createElement("button");
  btnPrev.textContent = "⬅ Atrás";
  estiloBoton(btnPrev);
  
  const btnNext = document.createElement("button");
  btnNext.textContent = "Adelante ➡";
  estiloBoton(btnNext);
  
  btnContainer.appendChild(btnPrev);
  btnContainer.appendChild(btnNext);
  

  function mostrarPokemon(i) {
    pokeName.textContent = pokemons[i].name;
    pokeImg.src = pokemons[i].img;
  }
  

  btnPrev.addEventListener("click", () => {
    index = (index - 1 + pokemons.length) % pokemons.length;
    mostrarPokemon(index);
  });
  
  btnNext.addEventListener("click", () => {
    index = (index + 1) % pokemons.length;
    mostrarPokemon(index);
  });
  

  mostrarPokemon(index);