/* eslint-disable react/prop-types */
import React from "react";
import Movie from "./Movie";

class Movies extends React.Component {
  state = {};

  render() {
    const { movies } = this.props;

    return (
      <div className="movies">
        {movies?.length ? (
          movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
          
          <div className="error">
            <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center">Data is not found</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Look like you`re lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <a href="index.html" className="link_404">
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        )}
      </div>
    );
  }
}

export default Movies;
