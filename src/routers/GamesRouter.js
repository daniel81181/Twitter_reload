import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { VideojuegosApp } from '../VideojuegosApp';
import { Navbar } from '../componentes/comunes/Navbar';
import { GameCollectionApp } from '../componentes/games/GameCollectionApp';
import { BuscadorScreen } from '../componentes/buscador/BuscadorScreen';
import { MuroScreen } from '../componentes/muro/MuroScreen';



export const GamesRouter = () => {
    return (
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route exact path = "/Muro" element = {<MuroScreen/>}/>
                    <Route
                        path="*"
                        element={<Navigate to="/MuroScreen" replace />}
                    />
                </Routes>
            </div>
        </>
    )
}
