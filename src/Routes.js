import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/home';
import Pesquisadores from './Pages/Pesquisadores/pesquisadores';
import Sobre from './Pages/Sobre/sobre';
import Projetos from './Pages/Projetos/projetos';

const MyRoutes = () => {

    return (
        <div>
        <Routes>
            <Route path="/home" element={<Home />} />   
            <Route path="/pesquisadores" element={<Pesquisadores />} />   
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} /> 
        </Routes>
        </div>
        
    );
}

export default MyRoutes;