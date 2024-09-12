import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import decoration from '../../resources/img/vision.png';
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import {useState} from 'react'

const WebPages = () => {
    let [selectedHero, SetSelectedHero] = useState(null);
    let onCharLoaded = (id) => {
            SetSelectedHero(id);
    }
    return (
        <>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">        
                <ErrorBoundary>        
                    <CharList OnCharLoaded={onCharLoaded}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <CharInfo HeroId={selectedHero}/>
                </ErrorBoundary>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default WebPages; 
