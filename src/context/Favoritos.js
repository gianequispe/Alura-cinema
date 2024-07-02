import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext()

//es recomendable establecer un displayName más descriptivo para que sea más fácil identificar el contexto en las herramientas de desarrollo 
FavoritosContext.displayName = "Favoritos";

//se crea un estado [favorito, setFavorito]
export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (<FavoritosContext.Provider value={{ favorito, setFavorito }}>
        {children}
    </FavoritosContext.Provider>
    );
}

export function useFavoritosContext() {
    const {favorito, setFavorito}= useContext(FavoritosContext)

    function agregarFavorito(nuevoFavorito) {
        const favoritoRepetido = favorito.some(
            (item)=>item.id === nuevoFavorito.id
        );

        let nuevaLista = [...favorito]
        if(!favoritoRepetido) {
            nuevaLista.push(nuevoFavorito)
            return setFavorito(nuevaLista)
        }

        nuevaLista = favorito.filter((item) => item.id !== nuevoFavorito.id)
        return setFavorito(nuevaLista)
    }
    return {favorito, agregarFavorito}
}