import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';
import { LoggedElement } from '../Assets/styles';

interface ILoggedProps {
    logged: boolean;
    username: string;
    onLogOn: () => void;
}

export const Logged = (props: ILoggedProps) => {
    return props.logged ?
        (
            <LoggedElement>
                <Button onClick={props.onLogOn} startIcon={<PersonIcon />} title={props.username}>
                    {props.username}
                </Button>
            </LoggedElement>
        )
        : (
            <LoggedElement>
                <Button onClick={props.onLogOn}>LOGIN</Button>
            </LoggedElement>
        );
};