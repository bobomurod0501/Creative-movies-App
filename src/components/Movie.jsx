/* eslint-disable react/prop-types */
import React from "react";


class Movie extends React.Component{
    state = {}


    render(){
        const {Title, Year, imdbID, Type, Poster} = this.props
        console.log("data", this.props)
        return(
            <div key={imdbID} className="card">
                <div className="card__img">
                    <img src={Poster} className="movieImg" alt="" />
                </div>
                <div className="card__info">
                    <p>{Type}</p>
                    <h5>{Title}</h5>
                    <p>{Year}</p>
                </div>
            </div>
        );
    }
}

export default Movie;