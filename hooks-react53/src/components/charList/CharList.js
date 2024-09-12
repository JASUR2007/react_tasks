import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import useMarvelService from '../../services/MarvelService.js';
import './charList.scss';
import Spinner from '../Spinner/Spinner.js';
import Error from '../errorMis/ErrorMis.js';

const CharList = ({ OnCharLoaded }) => {
    const itemRefs = useRef([]);
    const [heroes, SetHeroes] = useState([]);
    const [offset, SetOffset] = useState(210);
    const [newChartLoading, SetNewChartLoading] = useState(false);
    const [charEndded, SetCharEndded] = useState(false);

    const { loading, error, getAllCharacters } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, []);

    const onChartLoaded = (NewHero) => {
        SetCharEndded(NewHero.length < 9);
        SetHeroes(heroes => [...heroes, ...NewHero]);
        SetNewChartLoading(false);
        SetOffset(offset => offset + 9);
    };

    const onRequest = (offset, initial) => {
        initial ? SetNewChartLoading(false) : SetNewChartLoading(true); // Handle spinner for "Load More"
        getAllCharacters(offset)
            .then(onChartLoaded)
            .catch(() => SetNewChartLoading(false)); // Stop spinner in case of error
    };

    const setRef = (ref) => {
        if (ref && !itemRefs.current.includes(ref)) {
            itemRefs.current.push(ref);
        }
    };

    const focusItem = (id) => {
        itemRefs.current.forEach((item) =>
            item.classList.remove('char__item_selected')
        );
        if (itemRefs.current[id]) {
            itemRefs.current[id].classList.add('char__item_selected');
            itemRefs.current[id].focus();
        }
    };

    const RenderElem = (arr) => {
        return arr.map((hero, i) => (
            <li
                tabIndex={0}
                className="char__item"
                key={hero.id}
                ref={setRef}
                onClick={() => {
                    OnCharLoaded(hero.id);
                    focusItem(i);
                }}
                onKeyPress={(e) => {
                    if (e.key === ' ' || e.key === "Enter") {
                        OnCharLoaded(hero.id);
                        focusItem(i);
                    }
                }}>
                <img src={hero.thumbnail}
                    alt={hero.name}
                    className={hero.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
                        ? 'object-fit'
                        : ''
                    } />
                <div className="char__name">{hero.name}</div>
            </li>
        ));
    };

    const elem = RenderElem(heroes);

    // Adjust the spinner logic based on loading state from useHttps
    const spinner = loading && !newChartLoading ? <Spinner /> : null;
    const errorMes = error ? <Error /> : null;

    return (
        <div className="char__list">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {spinner}
                {errorMes}
            </div>
            <ul className="char__grid">
                {elem}
            </ul>
            <button
                className="button button__main button__long"
                onClick={() => onRequest(offset)}
                disabled={newChartLoading}
                style={{ 'display': charEndded ? 'none' : 'block' }}>
                <div className="inner">load more</div>
            </button>
        </div>
    );
};

CharList.propTypes = {
    OnCharLoaded: PropTypes.func.isRequired
};

export default CharList;
