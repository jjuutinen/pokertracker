export enum Routes {
    Index = 0,
    Sessions = 1,
    Statistics = 2,
    Preferences = 3,
    Login = 4
}


export const RouteConfig = {
    "Index": {
        pageHeader: "Etusivu",
        path: "/",
        routeId: Routes.Index
    },
    "Sessions": {
        pageHeader: "Sessiot",
        path: "/sessions",
        routeId: Routes.Sessions
    },
    "Statistics": {
        pageHeader: "Tilastot",
        path: "/statistics",
        routeId: Routes.Statistics
    },
    "Preferences": {
        pageHeader: "Asetukset",
        path: "/preferences",
        routeId: Routes.Preferences
    }
};