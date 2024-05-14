/* eslint-disable react/prop-types */
import React from "react";
import Movie from "./Movie"

class Movies extends React.Component{
    state = {}

    render(){

        const{movies = []} = this.props
        
        return <div className="movies">
            {movies.length ?( movies.map((movie) => (
                <Movie key={movie.imdbID} {...movie}/>
            ))) : (
                <h5 className="notFound">Data is not found</h5>
            )}
        </div>;
    }
}

export default Movies;