  import './App.css';
  import {Component, StrictMode } from 'react';

  const Header = () => {
    return <h2>hello world!</h2>
  }

  // const Field = () => {
  //   const holder = 'Enter me'
  //   const styledfield = {
  //     width: '300px',
  //     height: '200px'
  //   }
  //   return <input 
  //             type="text"  
  //             placeholder={holder}
  //             style={styledfield}/>
  // }

  class Field_1 extends Component {
    render() {
      const holder = 'Enter me';
      const styledfield = {
        width: '300px',
        height: '200px'
      };
      return (
        <div>
            <input 
              type="text"  
              placeholder={holder}
              style={styledfield}
            />
        </div>
      );
    }
  }
  function Btn() {
    const text = 'log in';
    const res = () => {
      return 'Log in1';
    }
    const p = <p>Loged</p>
    const logged = false;

    return (
      <div>
        <button>{res()}</button>
        <button>{logged ? 'Enter' : text}</button>
      </div>
    )
  }
  function App() {
    return (
      <div className="App">
          <StrictMode>
            <Header/>
          </StrictMode>
          <Field_1/>
        <Btn/>
      </div>
    );
  }

  export {Header};
  export default App;
