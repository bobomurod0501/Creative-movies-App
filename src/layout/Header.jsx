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
            <div>
                <a href="#"> <img src="https://www.bhmpics.com/downloads/the-walking-dead-season-8-Wallpapers/1.the-walking-dead-season-8-amc.jpg" className="headerImg" alt="" /></a>
                <div className="playIcon">

                </div>
            </div>
        </header>;
    }
}

export default Header;