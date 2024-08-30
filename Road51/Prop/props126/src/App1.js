import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';

class App1 extends Component {
  //  MyRef = React.createRef();
    // constructor(props) {
    //     super(props);
    //     this.MyRef = React.createRef(); 
    // }
    // componentDidMount() {
    //     this.MyRef.current.focus();
    // }
    setInputRef = elem => {
      this.MyRef = elem;
    }
    focusFirstTi = () => {
      if (this.MyRef) {
        this.MyRef.focus();
      }
    }
    render() {
        return (
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={this.setInputRef} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
                {/* <TextInp ref={this.MyRef}/> */}
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onClick={this.focusFirstTi} type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3"  controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
          </Form>
        )
    }
}
class TextInp extends Component {
  Dosmth = () => {
    console.log('done')   
  }
  render() {
    return (
      <>
        <Form.Control  type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </>
    )
  }
}
function App() {
    return (
        <Form/>
    );
}

export default App1;
