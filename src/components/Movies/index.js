import style from './style.module.css';
import { Link } from 'react-router-dom';

const Movies = ({ title, poster_path, overview, vote_average, id }) => {
    const imgURL = 'https://image.tmdb.org/t/p/w500';
    return (
        <Link to={`${id}`} style={{ color: 'black', textDecoration: 'none' }}>
            <div className={style.container}>
                {<img src={imgURL + poster_path} alt={title} className={style.movie_img} />}
                <div className={style.movie_info}>
                    <div className={style.movie_title}>{title}</div>
                    <div className={style.btn}></div>
                    <span className={style.vote_average}>{vote_average}</span>
                </div>
            </div>
        </Link>
    );
};

export default Movies;
