import React, { useState, useEffect, useRef  } from 'react';
import PropTypes from 'prop-types';
import MarvelService from '../../services/MarvelService.js';
import './charList.scss';
import Spinner from '../Spinner/Spinner.js'
import Error from '../errorMis/ErrorMis.js'

const CharList = ({ OnCharLoaded }) => {
    // let HeroRef = React.createRef();
    const itemRefs = useRef([]); 
    const [heroes, SetHeroes] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [error, SetError] = useState(false);
    const [offset, SetOffset] = useState(210);
    const [newChartLoading, SetNewChartLoading] = useState(false);
    const [charEndded, SetCharEndded] = useState(true);
    // state = {
    //     heroes: [],
    //     loading: true,
    //     error: false,
    //     offset: 310,
    //     newChartLoading:false
    // };
    const marvelService = new MarvelService();
    useEffect(() => {
        onRequest(offset);
    }, [])
    //  componentDidMount = () => {
    //     onRequest();
    // }
    const onChartLoaded = (NewHero) => {
        SetCharEndded(false);
        if (NewHero.length < 9) {
            SetCharEndded(true);
        }
        SetHeroes(heroes => [...heroes, ...NewHero]);
        SetLoading(false);
        SetNewChartLoading(false);
        SetOffset(offset => offset + 9);
        // this.setState(({heroes, offset}) => ({
        //     heroes: [...heroes, ...NewHero],
        //     loading: false,
        //     newChartLoading: false,
        //     offset: offset + 9,
        //     charEndded: ended
        // }))
    }
    const onChartLoading = () => {
        SetNewChartLoading(true);
        // this.setState({
        //     newChartLoading: true
        // })
    }
    const ErrorMes = () => {
        SetLoading(false);
        SetError(true);
        // this.setState({
        //     loading: false,
        //     error: true
        // })
    }
    const onRequest = (offset) =>{
        onChartLoading();
        marvelService
            .getAllCharacters(offset)
            .then(onChartLoaded)
            .catch(ErrorMes)
    }
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
    // const hero = this.state
    // const {loading, error, offset, newChartLoading, charEndded} = this.state
    const RenderElem = (arr) => {
        const elem = arr.map((hero, i) => (
            <li
                tabIndex={0} 
                className="char__item" 
                key={hero.id} 
                ref={setRef}
                onClick={() => {
                OnCharLoaded(hero.id);
                focusItem(i)
                }}
                onKeyPress={(e) => {
                if(e.key ===' ' || e.key === "Enter") {
                    OnCharLoaded(hero.id);
                    focusItem(i);
                }
                }}>
                <img src={hero.thumbnail} 
                    alt={hero.name}
                    className={hero.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' 
                        ? 'object-fit'
                        : ''
                    }/>
                <div className="char__name">{hero.name}</div>
            </li>
        ));
        return elem;
    }
    const elem = RenderElem(heroes);

    const spinner = loading ? <Spinner/> : null
    const errorMes = error ? <Error/> : null
    const content = !(loading || errorMes) ? elem : null
    return (
        <div className="char__list">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {spinner}
                {errorMes}
            </div>
            <ul className="char__grid">
                {content}
            </ul>
            <button 
                className="button button__main button__long"
                onClick={() => onRequest(offset)}
                disabled={newChartLoading}
                style={{'display': charEndded ? 'none' : 'block'}}>
                <div
                    className="inner">load more</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    OnCharLoaded: PropTypes.func.isRequired
}
export default CharList;