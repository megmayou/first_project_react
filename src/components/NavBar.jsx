function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handleClickNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      return setPokemonIndex(pokemonIndex + 1);
    }
  };

  const handleClickPrevious = () => {
    if (pokemonIndex > 0) {
      return setPokemonIndex(pokemonIndex - 1);
    }
  };

  return (
    <>
      <button onClick={handleClickPrevious}>Précédent</button>
      <button onClick={handleClickNext}>Suivant</button>
    </>
  );
}

export default NavBar;
