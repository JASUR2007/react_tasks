import {Component} from "react";
import "./app-filter.css";

class AppFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            earn: ''
        }
    }
    onCategory = (e) => {
        let earn = e.target.value;
        if (earn === undefined) {
            earn = '0';
        }
        // console.log(earn)
        document.querySelectorAll('.btn').forEach(button => {
            button.className = "btn btn-outline-light";
        });
        e.target.className = "btn btn-light";
        this.setState({earn})
        this.props.SearchCategory(earn);
    }
    render() {
        return (
            <div className="btn-group">
                <button type="button"
                        className="btn btn-light"
                        value='0' 
                        onClick={this.onCategory}>
                        Все сотрудники
                </button>
                <button type="button"
                        className="btn btn-outline-light"
                        value='rise'
                        onClick={this.onCategory}>
                        На повышение
                </button>
                <button type="button"
                        className="btn btn-outline-light"
                        value="1000"
                        onClick={this.onCategory}>
                        З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;