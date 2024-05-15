import React from "react";

class Header extends React.Component{
    state = {};

    render(){
        return <header>
            <div className="header__nav">
                <a href="#" className="brand__logo">Creative Movie App</a>
                <ul>
                    <li>
                        <a href="#">Movies</a>
                    </li>
                    <li>
                        <a href="#">Serials</a>
                    </li>
                    <li>
                        <a href="#">Logout</a>
                    </li>
                </ul>
            </div>
            <div className="headerBrandImg">
              <div className="playImg">
                 <img src="https://cdn-icons-png.flaticon.com/128/9974/9974136.png" alt="play Icon" />
                 
              </div>
              
            </div>
        </header>;
    }
}

export default Header;