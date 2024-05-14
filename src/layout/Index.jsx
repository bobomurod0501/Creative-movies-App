import React from "react";
import Movies from "../components/Movies"
import Searchbar from "../components/Searchbar";

class Index extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=31474b8c&s=speed")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        return this.setState({ movies: data.Search });
      });
  }

  searchMovies = (text) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=31474b8c&s=${text}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        return this.setState({ movies: data.Search });
      });
  }

  render() {
    console.log(this.state.movies);
    return <div className="container">
        <Searchbar searchMovies={this.searchMovies}/>
        <Movies movies={this.state.movies}/>
    </div>;
  }
}

export default Index;
