import { useEffect, useState } from "react";
import { ISession } from "../../Interfaces/session";
import { ISessionItem } from "../../Interfaces/sessionitem";
import { ISoftware } from "../../Interfaces/software";
import { mockSessionItems, mockSessions, mockSoftwares } from "../../Mock/";
import { CircularProgress } from '@mui/material';

export const SessionsContainer: React.FC = () => {
    const [sessions, setSessions] = useState<ISession[]>([] as ISession[]);
    const [softwares, setSoftwares] = useState<ISoftware[]>([] as ISoftware[]);
    const [sessionItems, setSessionItems] = useState<ISessionItem[]>([] as ISessionItem[]);
    const [pending, setPending] = useState(true);

    const fetchSoftwares = () => {
        setSoftwares(mockSoftwares);
    };

    const fetchSessions = () => {
        setSessions(mockSessions);
    };

    const fetchSessionItems = () => {
        setSessionItems(mockSessionItems);
    };

    useEffect(() => {
        fetchSoftwares();
        fetchSessions();
        fetchSessionItems();
    }, []);

    const getSoftware = (id: number): string => {
        var res = softwares.find(x => x.id === id);

        if (res) return res.name;

        return "";
    };

    const getSessionDate = (id: number): string => {
        var res = sessions.find(x => x.id === id);

        if (!res) return "";
        return res.date.toLocaleDateString();
    };

    return pending ?
        <CircularProgress />
        : (
            <div>
                {sessionItems.map(x => (
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: '1 1 33%' }}>{getSoftware(x.softwareId)}</div>
                        <div style={{ flex: '1 1 33%' }}>{x.saldo}</div>
                        <div style={{ flex: '1 1 33%' }}>{getSessionDate(x.sessionId)}</div>
                    </div>
                ))}
            </div>
        );
};;