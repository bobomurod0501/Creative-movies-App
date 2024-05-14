import React from "react";

class Footer extends React.Component{
    state = {};

    render(){
        return <footer className="page-footer">
            <div className="footer-copright">
                <div className="container">
                    <h3>&copy; copyright reserved {new Date().getFullYear()}</h3>
                </div>
            </div>
        </footer>;
    }
}

export default Footer;