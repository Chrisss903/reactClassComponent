import React from 'react';
import SideBar from './sideBar';
import NavBar from './navBar';
import { Provider } from 'react-redux';
import { store, persistor } from '../task4_Redux/Store.js';
import { PersistGate } from 'redux-persist/integration/react';
import Box from '@mui/material/Box';

import './SematicElements.css';

class HomePage extends React.Component {
    render() {
        return (
            <Provider store={store}>
                {/* PersistGate should wrap the entire content to wait for rehydration */}
                <PersistGate loading={null} persistor={persistor}>
                    <Box className='mainPage'>
                        <NavBar />
                        <Box className='mainPageAlign'>
                            <SideBar />
                        </Box>
                    </Box>
                </PersistGate>
            </Provider>
        );
    }
}

export default HomePage;
