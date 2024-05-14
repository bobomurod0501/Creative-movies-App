import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Index from "./layout/Index"

class App extends React.Component{
    state = {}

    render(){
        return <div className="container">
            <Header />
            <Index />
            <Footer />
        </div>;
    }
}

export default App;