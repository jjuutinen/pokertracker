import * as React from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StatisticsContainer } from './Statistics/StatisticsContainer';
import { SessionsContainer } from './Sessions/SessionsContainer';
import { PreferencesContainer } from './Preferences/PreferencesContainer';
import { PageWrapper } from './Common/Components/PageWrapper';
import { RouteConfig } from '../Constants/Routes';


export const Main: React.FC = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route
                        path={RouteConfig.Index.path}
                        element={
                            <PageWrapper>
                                <div>Tervetuloa!</div>
                            </PageWrapper>
                        }
                    />
                    <Route
                        path={RouteConfig.Statistics.path}
                        element={
                            <PageWrapper headingText={RouteConfig.Statistics.pageHeader}>
                                <StatisticsContainer />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path={RouteConfig.Sessions.path}
                        element={
                            <PageWrapper headingText={RouteConfig.Sessions.pageHeader}>
                                <SessionsContainer />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path={RouteConfig.Preferences.path}
                        element={
                            <PageWrapper headingText={RouteConfig.Preferences.pageHeader}>
                                <PreferencesContainer />
                            </PageWrapper>
                        }
                    />
                </Routes>
                <Footer />
            </Router>
        </>
    );
};