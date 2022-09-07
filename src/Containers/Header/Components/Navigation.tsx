import { NavigationElement, NavigationItem } from "../Assets/styles";
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <NavigationElement>
            <Link to={'/sessions'}>
                <NavigationItem>
                    SESSIOT
                </NavigationItem>
            </Link>
            <Link to={'/statistics'}>
                <NavigationItem>
                    STATISTIIKKA
                </NavigationItem>
            </Link>
            <Link to={'/preferences'}>
                <NavigationItem>
                    ASETUKSET
                </NavigationItem>
            </Link>
        </NavigationElement>
    );
};