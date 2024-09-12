import {Link} from 'react-router-dom';
import ErrorMis from '../errorMis/ErrorMis';

const Page404 = () => {
    return (
        <div style={{    
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: 'center'}}>
            <ErrorMis></ErrorMis>
            <div style={{fontSize: "40px"}}>
                Link to 
                <Link to="/" style={{color: "#a13131"}}> Back!</Link>
            </div>
        </div>
    )
}
export default Page404;