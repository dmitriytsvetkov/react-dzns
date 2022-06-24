import React from 'react';
import MainScreen from '../../pages/MainScreen/MainScreen';
import Header from '../Header/Header';
import HistoryRouter from '../../history-route';
import {browserHistory} from '../../browser-history';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import ParticipantsScreen from '../../pages/ParticipantsScreen/ParticipantsScreen';

function App() {
    return (
        <HistoryRouter history={browserHistory}>
            <div className={'site-container'}>
                <Header/>
                <main>
                    <Routes>
                        <Route
                            path={AppRoute.Root}
                            element={<MainScreen/>}
                        />
                        <Route
                            path={AppRoute.Participants}
                            element={<ParticipantsScreen/>}
                        />
                    </Routes>
                </main>
            </div>
        </HistoryRouter>
    );
}

export default App;
