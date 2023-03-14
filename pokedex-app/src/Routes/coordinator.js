export const goToPokemonListPage = (navigator) => {
    navigator('/')
}

export const goToPokedexPage = (navigator) => {
    navigator('/pokedex')
}

export const goToPokemonDetailPage = (navigator, id) => {
    navigator(`/detail/${id}`)
}