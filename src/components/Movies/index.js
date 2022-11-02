import { useState } from 'react';
import style from './style.module.css';

const Movies = ({ title, poster_path, overview, vote_average }) => {
    const imgURL = 'https://image.tmdb.org/t/p/w500';
    const [show, setShow] = useState(false);

    return (
        <div className={style.container}>
            {<img src={imgURL + poster_path} alt={title} className={style.movie_img} />}
            <div className={style.movie_info}>
                <div className={style.movie_title}>{title}</div>
                <div className={style.btn}>
                    <div className={style.watch}>
                        <i class="fa-solid fa-play"></i>
                    </div>
                    <div className={style.more_info}>
                        <p onClick={() => setShow(!show)}>
                            ...
                            {show ? <p className={style.movie_overview}>{overview}</p> : null}
                        </p>
                    </div>
                </div>
                <span className={style.vote_average}>{vote_average}</span>
            </div>
        </div>
    );
};

export default Movies;
