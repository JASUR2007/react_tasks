import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import MarvelService from '../../services/MarvelService';
import Spinner from '../Spinner/Spinner'
import ErrorMis from '../errorMis/ErrorMis'
import { Component } from 'react';
class RandomChar extends Component {
    state = {
        char: {},
        loading: true,
        error: false
    }
    componentDidMount() {
        this.updateChar();
    }

    marvelService = new MarvelService();
    onChatLoaded = (char) => {
        this.setState({
            char, 
            loading: false
        })
    }
    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }
    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService
        .getCharacter(id)
        .then(this.onChatLoaded)
        .catch(this.onError);
    }
    randomHero = () => {
        this.setState({
            loading: true
        })
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService
        .getCharacter(id)
        .then(this.onChatLoaded)
        .catch(this.onError);
    }
    render() {
        const {char, loading, error} = this.state
        const errorMessage = error ? <ErrorMis/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;
        //  if (description === '') {
        //     description = 'not found'; 
        // }else if (description.length > 100) {
        //         description = description.slice(0, 100) + '...';
        //     } 
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
                        <div className="inner" onClick={this.randomHero}>try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
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