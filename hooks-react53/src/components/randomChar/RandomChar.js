import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../Spinner/Spinner'
import ErrorMis from '../errorMis/ErrorMis'
import { useState, useEffect } from 'react';
const RandomChar = () => {
    const [char, SetChar] = useState({});
    const {loading, error, getCharacter, ClearError} = useMarvelService();
    useEffect(() => {
        updateChar();
    }, []);
    const onChatLoaded = (char) => {
        SetChar(char);
    }
    const updateChar = () => {
        ClearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id)
         .then(onChatLoaded)
    }
    const errorMessage = error ? <ErrorMis/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View char={char}/> : null;
    return (
        <div className="randomchar">
                {errorMessage}
                {spinner}
                {content}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main">
                    <div className="inner" onClick={updateChar}>try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
}
const View = (char) => {
    const {name, descr, homepage, wiki, thumbnail} = char.char;
    let description = descr ? `${descr.slice(0, 150)}...` : 'There is no description for this character';

    return (
        <div className="randomchar__block">
        <img src={thumbnail} alt="Random character" 
            className={thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' 
                ? 'randomchar__img object-fit' 
                : 'randomchar__img'}/>
        <div className="randomchar__info">
            <p className="randomchar__name">{name}</p>
            <p className="randomchar__descr">
                {description}
            </p>
            <div className="randomchar__btns">
                <a href={homepage} className="button button__main">
                    <div className="inner">homepage</div>
                </a>
                <a href={wiki} className="button button__secondary">
                    <div className="inner">Wiki</div>
                </a>
            </div>
        </div>
    </div>
    )
}
export default RandomChar;