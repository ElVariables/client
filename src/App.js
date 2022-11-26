import { Route, Routes, BrowserRouter } from 'react-router-dom';

import AuthState from './context/State';

import FormEl from './components/Form';
import Header from './components/Header';
import Home from './container/Home';
import StorePage from './container/Store';
import MovieDetails from './container/Store/MovieDetails';
import Docs from './container/Docs';
import Private from './components/Header/Private';

function App() {
    return (
        <div className="App">
            <AuthState>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="form" element={<FormEl />} />
                        <Route path="store/">
                            <Route index element={<StorePage />} />
                            <Route path=":id" element={<MovieDetails />} />
                        </Route>
                        <Route path="docs" element={<Private component={Docs} />}>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthState>
        </div>
    );
}

export default App;
