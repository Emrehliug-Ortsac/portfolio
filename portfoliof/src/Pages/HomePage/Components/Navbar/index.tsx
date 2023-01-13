import { Component } from "react";
import '../Navbar/styles.css';

class Navbar extends Component {
    render() {
        return <nav className="navbar navbar-expand-md bg-light fixed-top">
            <div className="container-fluid">
                <a href="localhost:3000" className="navbar-brand">
                    <img src="../../favicon_io/favicon-32x32.png" alt="" />
                </a>
            </div>
            <div id="navbarCollapse" className="collapse navbar-collapse">
                <ul className="list-links m-0">
                    <li className="nav-item">
                        <a href="">developer</a>
                    </li>
                    <li className="nav-item">
                        <a href="">website</a>
                    </li>
                </ul>
            </div>
        </nav>
    }
}

export default Navbar;