import './singleComic.scss';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../Spinner/Spinner';
import ErrorMis from '../errorMis/ErrorMis';
import Helmet from "react-helmet";

const SingleComic = () => {
    const {comicid} = useParams();
    let [comic, SetComic] = useState(null);
    const { getComics, loading, error } = useMarvelService();
    useEffect(() => {
        if (!comicid) {
            return;
        }
        getComics(comicid)
        .then(comics => 
            SetComic(comics))
    }, [comicid])
    const spinner = loading ? <div 
            style={{display: 'flex',
            justifyContent: "center",
            width: '100%'}}>
        <Spinner/></div> : null
    const ErrorMistake = error ? <div 
            style={{display: 'flex',
            justifyContent: "center",
            width: '100%'}}>
        <ErrorMis/></div> : null
    const elem = !comic || error || loading ? null : <View comic={comic}/>
    return (
        <>
            <div className="single-comic">
                {elem}
            </div>
            {ErrorMistake}
            {spinner}
        </>
    )
}
    const View = ({ comic }) => { 
        return (
            <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Road</title>
                    <meta
                    name="description"
                    content="2323"
                  />
            </Helmet>
                <img src={comic.thumbnail} alt="x-men" className="single-comic__img"/>
                <div className="single-comic__info">                    
                    <h2 className="single-comic__name">{comic.title}</h2>
                    <p className="single-comic__descr">{comic.description}</p>
                    <p className="single-comic__descr">{comic.pageCount}</p>
                    <p className="single-comic__descr">Language: {comic.language}</p>
                    <div className="single-comic__price">{comic.price}</div>
                </div>
                <Link to="/comics" className="single-comic__back">Back to all</Link>
            </>
        )
    }
export default SingleComic;