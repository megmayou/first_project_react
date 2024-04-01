function NavBar({ pokemonList, setPokemonIndex }) {
  const handleClick = (index, allPokemon) => {
    setPokemonIndex(index);
    if (allPokemon.name === "pikachu") {
      return alert("pika pikachu !!");
    }
  };
  return (
    <section>
      {pokemonList.map((allPokemon, index) => (
        <button
          key={allPokemon.name}
          onClick={() => handleClick(index, allPokemon)}
        >
          {allPokemon.name}
        </button>
      ))}
    </section>
  );
}

export default NavBar;
