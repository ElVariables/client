import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import InstanceContext from './context/auth';

import FormEl from './components/Form';
import Header from './components/Header';
import Home from './container/Home';
import StorePage from './container/Store';
import MovieDetails from './container/Store/MovieDetails';

function App() {
    const [authCtx, setAuthCtx] = useState(null);
    return (
        <div className="App">
            <InstanceContext.Provider value={{ user: authCtx, setUser: setAuthCtx }}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="form" element={<FormEl />} />
                        <Route path="store/">
                            <Route index element={<StorePage />} />
                            <Route path=":id" element={<MovieDetails />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </InstanceContext.Provider>
        </div>
    );
}

export default App;
