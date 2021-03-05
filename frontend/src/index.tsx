import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from 'components/client/Main';
import Schedule from 'components/client/Schedule';

import Panel from 'components/admin/Panel';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path='/agendamento/'>
                    <Schedule />
                </Route>

                <Route path='/admin/agendamentos/'>
                    <Panel />
                </Route>

                <Route path='/'>
                    <Main />
                </Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);