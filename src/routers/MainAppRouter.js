import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { LoginScreen } from "../componentes/login/LoginScreen";
import { Signup } from '../componentes/signin/SignInUserScreen';
import { TwitterRouter } from "./TwitterRouter";

export const MainAppRouter = () =>{
    return(
        <Router>
            <div>
                <Routes>
                    <Route exact path="/login" element={<LoginScreen />} />
                    <Route exact path="/Signup" element={<Signup/>} />
                    <Route path="*" element={<TwitterRouter/>}
                    />
                </Routes>
            </div>
            </Router>
    )
}
