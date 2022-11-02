import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import InstanceContext from './context/auth';

import FormEl from './components/Form';
import Header from './components/Header';
import Home from './container/Home';
import StorePage from './container/Store';

function App() {
    const [authCtx, setAuthCtx] = useState(null);
    return (
        <div className="App">
            <InstanceContext.Provider value={{ user: authCtx, setUser: setAuthCtx }}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/form" element={<FormEl />} />
                        <Route path="/store" element={<StorePage />} />
                    </Routes>
                </BrowserRouter>
            </InstanceContext.Provider>
        </div>
    );
}

export default App;
