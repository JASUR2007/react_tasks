import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../errorMis/ErrorMis';
import Skeleton from '../skeleton/Skeleton'
import './charInfo.scss';

const CharInfo = (props) => {
    const [char, SetChar] = useState(null);
    const { loading, error, getCharacter } = useMarvelService();
    useEffect(() => {
        updateChar();
    }, [])
    useEffect(() => {
        updateChar(props.HeroId);
    }, [props.HeroId]);
    const updateChar = () => {
        const { HeroId } = props;

        if (!HeroId) {
            return;
        }
        getCharacter(HeroId)
            .then(onHeroLoaded)
    }
    const onHeroLoaded = (char) => {
        SetChar(char);
    }
    const view = !char || loading || error ? null : <View char={char} />
    const skeleton = !(char || loading || error) ? <Skeleton /> : null
    const ErrorMistake = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    return (
        <div className="char__info">
            {spinner}
            {ErrorMistake}
            {view}
            {skeleton}
        </div>
    )
}
const View = ({ char }) => {
    const { name, thumbnail, descr, wiki, homepage, comics } = char
    const description = descr ? `${descr.slice(0, 400)}...` : 'there is no available description'
    return (
        <>
            <div className="char__basics">
                <img
                    src={thumbnail}
                    style={thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
                        ? { objectFit: 'fill' }
                        : null}
                    alt={name} />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : 'there is no available comics'}
                {
                    comics.map((item, i) => {
                        // eslint-disable-next-line
                        if (i > 9) return;
                        return (
                            <li key={i} className="char__comics-item">
                                {item.name}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
CharInfo.propTypes = {
    HeroId: PropTypes.number
}
export default CharInfo;