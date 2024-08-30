import React, {Component} from 'react';
 // eslint-disable-next-line 
import {Container, Row, Col} from 'react-bootstrap';
import  styled  from 'styled-components'; 
import './App.css';
import BootstrapTest from './BootstrapTest';
// function WhoAmI (props) {
//   return (
//     <div>
//         <h1>My name is {props.name}, surname - {props.surname}</h1>
//         <a href={props.line}>My profile</a>
//     </div>
//   )
// }
const EmpItem = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgb(0,0,0, .2);
  input {
    color: red;
    margin 10px 0 10px 0;
  }
`
export const Header = styled.h2`
  font-size: 20px;
  h1 {
    color:red;
    font-size:30px
  }
`;
class WhoAmI extends Component {
    constructor(props) {
      super(props);
      this.state = {
        years: 27,
        text: '+++',
        inputText: ''
      }
      this.nextYear = this.nextYear.bind(this);
    }
    nextYear() {
      this.setState(state => ({
        years: state.years + 1
      }))
    }
    Input = (e, color) => {
      console.log(color + 1)
      this.setState({inputText: e.target.value})
    }
 
    render() {
      const { name, surname, line } = this.props;
      const {years, inputText} = this.state;
      return (
        <EmpItem>
        <Header>
          My name is {name}, surname - {surname}, age - {years}, value - {inputText}
        </Header>
        <a className="styled-link" href={line}>My1 profile</a>
        <form className="styled-form px-3 bg-black">
          <span>
            <input
              className="styled-input"
              type="text"
              onChange={(e) => this.Input(e, 'some color')}
            />
          </span>
        </form>
        <div className="styled-div">
          {/* Ваш контент */}
        </div>
        <button className="styled-button" onClick={this.nextYear}>
          {this.state.text}
        </button>
      </EmpItem>
      )
    }
  }
  const Wrapper = styled.div`
    width: 500px;
    margin: 50px auto 0 auto;
  `;
  const DynamicChanges = (props) => {
    return (
        <div className={'mb-3 p-3 border border-' + props.color}>
          {
            React.Children.map(props.children, child => {
              return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
            })
          }
        </div>
    )
  }
  const HelloGreeting = () => {
    return (
      <div style={{width: '600px', margin: '0 auto'}}>
        <DynamicChanges color={'primary'}>
            <h2>Hello world!</h2>
        </DynamicChanges>
      </div>
    )
  }
  const Message = (props) => {
    return(
      <h2>The counter is  {props.counter}</h2>
    )
}
class Counter extends Component {
    state = {
        counter: 0
    }
    ChangeCounter = () => {
        this.setState(({counter}) => ({
            counter: counter + 1
        }))
    }
    render() {
        return (
            <>
                <button 
                    className={'btn btn-primary'}
                    onClick={this.ChangeCounter}>
                    Click ME
                </button>
                {this.props.render(this.state.counter)}
                {this.props.render(this.state.counter)}
            </>
        )
    }
}
function App() {
  return (
    <Wrapper style={{marginTop: '50rem', paddingBottom:'5rem'}}>
        <BootstrapTest
            left = {
              <DynamicChanges color={'primary'}>
                <h2>This wheel was hard</h2>
                <h2>hello world!</h2>
              </DynamicChanges>
            }
            right = {
              <DynamicChanges color={'primary'}>
                 <h2>Right</h2>
              </DynamicChanges>
            }
        />
        <HelloGreeting/>
       <WhoAmI name="John" surname="Smith" line="facebook.com"/>
       <WhoAmI name="Alex" surname="Jacobs" line="vk.com"/>
        <Counter render={counter => (
          <Message counter={counter}/>
        )}/>
    </Wrapper>
  );
}

export default App;
