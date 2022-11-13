import './style.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Popular from '../../components/Movies/Popular';
import NowPlaying from '../../components/Movies/Playing';
import TopRated from '../../components/Movies/TopRated';
import UpComing from '../../components/Movies/UpComing';
import MoviesFilter from '../../components/Share/MoviesFilter';
import SearchBox from '../../components/Movies/SearchBox/';

const StorePage = () => {
    const [searchBox, setSearchBox] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const onSearch = (e) => {
        const searchTerm = e.target.value;
        searchHandle(searchTerm);
    };

    const searchHandle = async (searchTerm) => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    query: searchTerm,
                },
            });
            console.log(data.results)
            setSearchResults(data.results);
            setSearchBox(true);
        } catch (error) {
            console.log(error);
            setSearchBox(false);
        }
    };

    useEffect(() => {
        searchHandle();
    }, []);

    return (
        <div className="container">
            <div className="Title">
                <div className="Title-Page">
                    <div className="app-content">
                        <p>
                            app
                            <br />
                            STORE
                        </p>
                    </div>
                    <div className="title-second">theMovie</div>
                </div>
                <div className="SearchBox">
                    <input className="SearchBox-Input" onChange={onSearch}></input>
                    <div className="SearchBox-Btn">
                        <p>search</p>
                        {searchBox ? (
                            <div className="search">
                                {searchResults &&
                                    searchResults
                                        .splice(0, 7)
                                        .map((movie) => <SearchBox key={movie.id} {...movie}></SearchBox>)}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            <MoviesFilter name="the most finding">{<Popular />}</MoviesFilter>
            <MoviesFilter name="cinema trending">{<NowPlaying />}</MoviesFilter>
            <MoviesFilter name="forget something">{<TopRated />}</MoviesFilter>
            <MoviesFilter name="up coming">{<UpComing />}</MoviesFilter>
        </div>
    );
};

export default StorePage;
