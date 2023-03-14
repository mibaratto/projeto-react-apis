import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonDetailPage } from "../Pages/PokemonDetailPage/PokemonDetailPage";
import { PokemonListPage } from "../Pages/PokemonListPage/PokemonListPage"
import { PokedexPage } from "../Pages/PokedexPage/PokedexPage"
import { Header } from "../Components/Header/Header"


 export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<PokemonListPage />}/>
                <Route path="/pokedex" element={<PokedexPage />}/>
                <Route path="/detail/:id" element={<PokemonDetailPage />}/>
            </Routes>
        </BrowserRouter>
    )
 }