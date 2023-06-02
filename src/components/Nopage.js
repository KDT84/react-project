import { Link } from 'react-router-dom';

function Nopage () {
    return (
        <>
            <h1 className="not-found">Page not found! </h1>;
            <Link className="back-home" to= "/"> 🏡 Home </Link>
        </>
    );
}

export default Nopage;