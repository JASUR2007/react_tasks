import { useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

function useImputWithValidate(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = event => {
        setValue(event.target.value);
    }
    const validateInput = () => {
        return value.search(/\d/) >= 0  
    }

    return {value, onChange, validateInput}
}

const Form = () => {
    // const [text, setText] = useState('');
    // const [textArea, setTextArea] = useState('');
    // const validateInput = (text) => {
    //     return text.search(/\d/) >= 0  
    // }
    const input = useImputWithValidate('');
    const textArea = useImputWithValidate('');
    const color = input.validateInput() ? 'text-danger': null;
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <input value={input.value + "/" + textArea.value} type="text" className="form-control" readOnly/>
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input 
                        value={input.value}
                        // onChange={(e) => setText(e.target.value)}
                        onChange={input.onChange}
                        type="email"
                        className={`form-control ${color}`}
                        id="exampleFormControlInput1" 
                        placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea
                        // onChange={e => setTextArea(e.target.value)}
                        onChange={textArea.onChange}
                        value={textArea.value} 
                        className="form-control"
                        id="exampleFormControlTextarea1" 
                        rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
}

function App() {
    return (
        <Form/>
    );
}

export default App;