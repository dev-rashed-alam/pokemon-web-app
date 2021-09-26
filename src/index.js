import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {ChakraProvider} from "@chakra-ui/react"
import {Provider} from "react-redux";
import appStore from "./store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={appStore}>
            <ChakraProvider>
                <App/>
            </ChakraProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
