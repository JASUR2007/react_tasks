// import { useState, memo } from 'react';
// import { Container } from 'react-bootstrap';
// import './App.css';

// function propsCompare(prevProps, nextProps) {
//     return prevProps.mail.name === nextProps.mail.name && prevProps.text === nextProps.text
// }
// const Form = memo((props) => {
//     console.log('render')
//     return (
//         <Container>
//             <form className="w-50 border mt-5 p-3 m-auto">
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//                     <input value={props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                     <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                 </div>
//             </form>
//         </Container>
//     )
// }, propsCompare)
// function App() {
//     const [data, setData] = useState({
//         mail: {
//             name: "name@example.com"
//         },
//         text: 'some text'
//     });

//     return (
//         <>
//             <Form mail={data.mail} text={data.text} />
//             <button
//                 onClick={() => setData({
//                     mail: {
//                         name: "name@example.com"
//                     },
//                     text: 'some text'
//                 })}>
//                 Click me
//             </button>
//         </>
//     );
// }

// export default App;
import { useState, memo, Component, createContext } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

const dataContest = createContext({
    mail: "name@example.com",
    text: 'some text'
});
const { Provider, Consumer } = dataContest;
// function propsCompare(prevProps, nextProps) {
//     return prevProps.mail.name === nextProps.mail.name && prevProps.text === nextProps.text
// }
const Form = (props) => {
    console.log('render')
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                </div>
                <InputComponent />
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
}
class InputComponent extends Component {
    render() {
        return (
            // <Consumer>
            //     {
            //         value => {
            //             return (
            //                 <input 
            //                     value={value.mail} 
            //                     type="email"
            //                     className='form-control'
            //                     id="exampleFormControlInput1" 
            //                     placeholder="name@example.com" />
            //             )
            //         }
            //     }
            // </Consumer>
            <input 
                value={this.context.mail} 
                type="email"
                className='form-control'
                id="exampleFormControlInput1" 
                placeholder="name@example.com" />
            
        )
    }
}
InputComponent.contextType = dataContest;
function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text'
    });

    return (
        <Provider value={data}>
            <Form text={data.text} />
            <button
                onClick={() => setData({
                    mail: "asame@example.com",
                    text: 'some text'
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;
