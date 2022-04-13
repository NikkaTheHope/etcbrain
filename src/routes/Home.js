import {Link} from "react-router-dom";

const Home = () => {
  
    return (
        <div>
            <h2><Link to="/">Home</Link></h2>
            <h2><Link to="/refactoring">Refatoring</Link></h2>
        </div>
    );
  }
  
export default Home;