import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MarvelService from '../../services/MarvelService.js';
import './charList.scss';
import Spinner from '../Spinner/Spinner.js'
import Error from '../errorMis/ErrorMis.js'

class CharList extends Component {
    HeroRef = React.createRef();
    state = {
        heroes: [],
        loading: true,
        error: false,
        offset: 210,
        newChartLoading:false
    };
    marvelService = new MarvelService();
    componentDidMount() {
        this.onRequest();
    }
    onChartLoaded = (NewHero) => {
        let ended = false
        if (NewHero.length < 9) {
            ended = true;
        }
        
        this.setState(({heroes, offset}) => ({
            heroes: [...heroes, ...NewHero],
            loading: false,
            newChartLoading: false,
            offset: offset + 9,
            charEndded: ended
        }))
    }
    onChartLoading = () => {
        this.setState({
            newChartLoading: true
        })
    }
    ErrorMes = () => {
        this.setState({
            loading: false,
            error: true
        })
    }
    onRequest(offset) {
        this.onChartLoading();
        this.marvelService
            .getAllCharacters(offset)
            .then(this.onChartLoaded)
            .catch(this.ErrorMes)
    }
    itemRefs = []; 
    setRef = (ref) => {
        this.itemRefs.push(ref)
    }
    focusItem = (id) => {
        this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));
        this.itemRefs[id].classList.add('char__item_selected');
        this.itemRefs[id].focus();
    }
    render() {
        const hero = this.state
        const {loading, error, offset, newChartLoading, charEndded} = this.state
        const elem = hero.heroes.map((hero, i) => (
            <li
             tabIndex={0} 
             className="char__item" 
             key={hero.id} 
             ref={this.setRef}
             onClick={() => {
                this.props.OnCharLoaded(hero.id);
                this.focusItem(i)
             }}
             onKeyPress={(e) => {
                if(e.key ===' ' || e.key === "Enter") {
                    this.props.OnCharLoaded(hero.id);
                    this.focusItem(i);
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
                    onClick={() => this.onRequest(offset)}
                    disabled={newChartLoading}
                    style={{'display': charEndded ? 'none' : 'block'}}>
                    <div
                     className="inner">load more</div>
                </button>
            </div>
        )
    }
}

CharList.propTypes = {
    OnCharLoaded: PropTypes.func.isRequired
}
export default CharList;