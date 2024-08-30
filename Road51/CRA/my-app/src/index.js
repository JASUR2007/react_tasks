import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Header } from './App';
// const elem = <h2>Hello world!</h2>;

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello world!');

// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hellow mir'
//   }
// };
const text = 'Helo world';
const elem = (
 <div>
    <h2 className ='text'>Txt: {text} {2+2}</h2>
  <input type="text" />
  <label htmlFor=""></label>
  <button/>
  <button tabIndex="0">click</button>
 </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <App/>,
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
