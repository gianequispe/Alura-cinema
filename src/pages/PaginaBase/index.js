import Cabecera from "components/Cabecera/Cabecera";
import Container from "components/Container";
import Pie from "components/Pie/Pie";
import FavoritosProvider from "context/Favoritos";
import { Outlet } from "react-router-dom";
// outlet, genera una ruta padre donde se encargara de manejar todas las demas rutas

function PaginaBase() {
    return(
        <main>
            <Cabecera/>
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Pie/>
        </main>
    )
}

export default PaginaBase;