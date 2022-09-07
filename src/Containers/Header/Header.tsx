import { useState } from "react";
import { HeaderElement, HeaderLogo } from "./Assets/styles";
import { Logged } from "./Components/Logged";
import { Navigation } from "./Components/Navigation";
import { Link } from 'react-router-dom';

export const Header = () => {
    const [logged, setLogged] = useState(false);

    const updateLogged = () => {
        setLogged((state) => !state);
    };

    return (

        <HeaderElement>
            <Link to='/'>
                <HeaderLogo>
                    <img src="https://cdn-icons-png.flaticon.com/512/864/864815.png" alt="icon" />
                </HeaderLogo>
            </Link>
            <Navigation />
            <Logged logged={logged} username={"Seppo Hovi"} onLogOn={updateLogged} />
        </HeaderElement>
    );
};