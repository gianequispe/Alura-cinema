//primero instalar una dependencia 'Router DOM' npm install react-router-dom
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";

//Al importar el footer y el header hará que aparezca en todas mis páginas
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import PaginaBase from "pages/PaginaBase";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        //browserRouter, avisa que se manejara rutas a traves de esa funcion
        <BrowserRouter>
            {/*Routes, el manejador (tiene las rutas en su interior) */}
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    {/* Route, ruta especifica a la cual nosotras nos vamos a estar refiriendo */}
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;