import {Component} from 'react';
import history from '../history';
import {NavLink} from 'react-router-dom';
import './css/Navbar.css';
import logo from '../pngegg.png';

class Navbar extends Component{
    constructor(props){
        super(props);

        this.state = {
            logged : false,
            name : "Jeba Regan Raj"
        }
    }

    dataSetter = (e)=>{
        e.preventDefault();
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid mx-auto">
                    <div className='navbar-first'>
                        <img alt="logo" src={logo} height="40px" width="40px"></img>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="d-flex col-4 navbar-next" autoComplete='off'>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink className="nav-link dropdown-toggle" to="/">Location</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {this.state.name}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/profile">My profile</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/tickets">My tickets</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/logout">Sign out</NavLink></li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;