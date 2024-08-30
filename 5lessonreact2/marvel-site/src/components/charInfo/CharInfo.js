import {Component} from 'react';
import PropTypes from 'prop-types';
import MarvelService from '../../services/MarvelService';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../errorMis/ErrorMis';
import Skeleton from '../skeleton/Skeleton'
import './charInfo.scss';

class CharInfo extends Component {
    state = {
        char: null,
        loading: false,
        error: false,
    }
    marvelService = new MarvelService();
    componentDidMount() {
        this.updateChar();
        // <Skeleton/>
    }
    componentDidUpdate(prevProps) {
            // this.updateChar()
        if (this.props.HeroId !== prevProps.HeroId) {
            this.updateChar()
        }
    }
    updateChar = () => {
        const {HeroId} = this.props;
        
        if (!HeroId) {
            return;
        }
        this.onHeroLoading();
        this.marvelService
            .getCharacter(HeroId)
            .then(this.onHeroLoaded)
            .catch(this.onError)
    }
    onHeroLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            error: false
        })
    }
    onHeroLoading = () => {
        this.setState({
            loading: true,
            error: false
        })
    }
    onError = () => {
        this.setState({
            loading: false, 
            error: true
        })
    }
    render() {
        const {char, loading, error} = this.state;
        const view = !char || loading || error ? null : <View char={char}/>
        const skeleton = !(char || loading || error) ? <Skeleton/> : null
        const onError = error ? <ErrorMessage/> : null
        const spinner = loading ? <Spinner/> : null
        return (
            <div className="char__info">
                {spinner}
                {onError}
                {view}
                {skeleton}
            </div>
        )   
    }
}
const View = ({ char }) => {
    const { name, thumbnail, descr, wiki, homepage, comics } = char
    const description = descr ? `${descr.slice(0, 400)}...` : 'there is no available description'
    return(
        <>
            <div className="char__basics">
                <img 
                 src={thumbnail}
                 style={thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' 
                    ? { objectFit: 'fill' } 
                    : null} 
                 alt={name}/>
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