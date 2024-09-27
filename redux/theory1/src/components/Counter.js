import { connect } from "react-redux";
import { inc, dec, rnd } from "../actions"
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();
    return (
        <div className="jumbotron">
            <h1 id="counter">{counter.value}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">Dec</button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">Inc</button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">Random</button>
        </div>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         counter: state.value
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     // const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
//     //  return {
//     //     inc,
//     //     dec,
//     //     rnd

//     // }
//     return bindActionCreators(actions, dispatch)
// }
// export default connect(mapStateToProps, actions)(Counter);
export default Counter;