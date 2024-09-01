import {Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import { useState, useEffect } from 'react';
// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }
//     componentDidMount() {
//         document.title = `Render: ${this.state.slide}`;
//     }
//     componentDidUpdate() {
//         document.title = `Render: ${this.state.slide}`;
//     }
//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }


const Slider = (props) => {
    
    const [slide, setSlide] = useState(10);
    const [autoplay, setAutoPlay] = useState(false);

    useEffect(() => {
        document.title = `Slide: ${slide}`;
    }, [])

    useEffect(() => {
        document.title = `Slide1: ${slide}`
    }, [slide])
    function changeSlide(i) {
        setSlide(slide => slide + i)
    }
    function toggleAutoPlay() {
        setAutoPlay(autoplay => !autoplay);
    }
    // const [state, setState] = useState({slide: 0, autoplay: false});

    // function changeSlide(i) {   
    //     setState(state => ({...state, slide: state.slide + i}));
    // }
    // function toggleAutoPlay() {
    //     setState(state => ({...state, autoplay: !state.autoplay}));
    // }
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoPlay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}


function App() {
  return (
        <Slider/>
  );
}

export default App;
