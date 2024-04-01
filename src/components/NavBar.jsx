function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <section>
      {pokemonList.map((allPokemon, index) => (
        <button key={allPokemon.name} onClick={() => setPokemonIndex(index)}>
          {allPokemon.name}
        </button>
      ))}
    </section>
  );
}

export default NavBar;
