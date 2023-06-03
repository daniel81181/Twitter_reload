import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../componentes/comunes/Navbar';
import { MuroScreen } from '../componentes/muro/MuroScreen';



export const TwitterRouter = () => {
    return (
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route exact path = "/Muro" element = {<MuroScreen/>}/>
                    <Route
                        path="*"
                        element={<Navigate to="/Muro" replace />}
                    />
                </Routes>
            </div>
        </>
    )
}
