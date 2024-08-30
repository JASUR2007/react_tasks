import {Component} from 'react';
import ErrorMis from '../errorMis/ErrorMis';

class ErrorBoundary extends Component {
    state = {
        error: false
    }
    componentDidCatch(error, errorInfo) {
        console.log(error)
        console.log(errorInfo)
        this.setState({
            error: true
        })
    }
    render() {
        if (this.state.error) {
            return <ErrorMis/>;
        }        
        return this.props.children;
    }
}

export default ErrorBoundary;