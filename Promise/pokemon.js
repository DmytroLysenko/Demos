const pokemonList = [
  "https://pokeapi.co/api/v2/pokemon/1",
  "https://pokeapi.co/api/v2/pokemon/12",
  "https://pokeapi.co/api/v2/pokemon/21",
  "https://pokeapi.co/api/v2/pokemon/31",
  "https://pokeapi.co/wrong-url",
];

function insertToDom(element) {
  document.body.appendChild(element);
}

function createImage(url) {
  const image = document.createElement("img");
  image.setAttribute("src", url);
  image.setAttribute("alt", "pokemon");
  return image;
}

function fetchItem(url) {
  return fetch(url).then((res) => res.json());
}

// function fetchItem(url) {
//   return new Promise((res, rej) => {
//     fetch(url)
//       .then((r) => r.json())
//       .then((data) => res(data))
//       .catch((e) => rej(e));
//   });
// }

(async () => {
  try {
    for (let i = 0; i < pokemonList.length; i++) {
      const pokemon = await fetchItem(pokemonList[i]);
      insertToDom(createImage(pokemon.sprites.front_default));
    }
  } catch (err) {
    console.error("err", err);
  }
})();
