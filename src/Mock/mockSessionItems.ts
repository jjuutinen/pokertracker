import { ISessionItem } from "../Interfaces/sessionitem";

export const mockSessionItems: ISessionItem[] = [
    {
        id: 1,
        sessionId: 1,
        softwareId: 3,
        saldo: parseFloat((Math.random() * 100).toFixed(2)),
        note: "Hyvä aloitussessio"
    },
    {
        id: 2,
        sessionId: 1,
        softwareId: 5,
        saldo: parseFloat((Math.random() * 100).toFixed(2)),
        note: "Parit pillit napsu"
    },
    {
        id: 3,
        sessionId: 2,
        softwareId: 3,
        saldo: parseFloat((Math.random() * 100).toFixed(2))
    },
    {
        id: 4,
        sessionId: 2,
        softwareId: 5,
        saldo: parseFloat((Math.random() * 100).toFixed(2)),
        note: "Hyvä aloitussessio"
    },
    {
        id: 5,
        sessionId: 2,
        softwareId: 8,
        saldo: parseFloat((Math.random() * 100).toFixed(2)),
        note: "Hyvä aloitussessio"
    },
    {
        id: 6,
        sessionId: 3,
        softwareId: 1,
        saldo: parseFloat((Math.random() * 100).toFixed(2)),
        note: "Hyvä aloitussessio"
    },
    {
        id: 7,
        sessionId: 3,
        softwareId: 3,
        saldo: parseFloat((Math.random() * 100).toFixed(2)),
        note: "Hyvä aloitussessio"
    },
    {
        id: 8,
        sessionId: 4,
        softwareId: 8,
        saldo: parseFloat((Math.random() * 100).toFixed(2)),
        note: "Hyvä aloitussessio"
    },
    {
        id: 9,
        sessionId: 5,
        softwareId: 7,
        saldo: parseFloat((Math.random() * 100).toFixed(2)),
        note: "Hyvä aloitussessio"
    },
    {
        id: 10,
        sessionId: 5,
        softwareId: 9,
        saldo: parseFloat((Math.random() * 100).toFixed(2)),
        note: "Hyvä aloitussessio"
    }
];