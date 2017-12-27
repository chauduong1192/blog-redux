import React from 'react';
import AppContainer from '../containers/App.container';
const App = (props) => (
    <AppContainer>
        {props.children}
    </AppContainer>
)

export default App;