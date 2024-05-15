/* eslint-disable react/prop-types */
import React from "react";

class Searchbar extends React.Component {
  state = {
    searchValue: "speed",
    type: "all",
  };

  handleText = (e) => {
    if (e.key === "Enter") this.props.searchMovies(this.state.searchValue, this.state.type);
  };
  handleVal = (e) => {
    console.log(e.target.dataset.type,)
    this.setState(() => ({
      type: e.target.dataset.type,
    }), () => {
      this.props.searchMovies(this.state.searchValue, this.state.type)
    });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <div className="search">
        <div className="search-bar">
          <input
            type="search"
            name="search"
            pattern=".*\S.*"
            required
            value={searchValue}
            onChange={(e) => {
              this.setState({ searchValue: e.target.value });
            }}
            onKeyUp={this.handleText}
            autoComplete="off"
          />
          <button
            className="search-btn"
            value={searchValue}
            onClick={(e) => {
              e.preventDefault();
              this.setState({ searchValue: e.target.value });
              this.props.searchMovies(this.state.searchValue);
            }}
          >
            <span>Search</span>
          </button>
        </div>

        <div className="radio">
          <input
            className="radio__input"
            type="radio"
            name="MyRadio"
            id="myRadio1"
            data-type="all"
            onChange={this.handleVal}
            checked={this.state.type === "all"}
          />
          <label className="radio__label" htmlFor="myRadio1">
            All
          </label>
          <input
            className="radio__input"
            type="radio"
            name="MyRadio"
            id="myRadio2"
            data-type="movie"
            onChange={this.handleVal}
            checked={this.state.type === "movie"}
          />
          <label className="radio__label" htmlFor="myRadio2">
            Movie
          </label>
          <input
            className="radio__input"
            type="radio"
            name="MyRadio"
            id="myRadio3"
            data-type="series"
            onChange={this.handleVal}
            checked={this.state.type === "series"}
          />
          <label className="radio__label" htmlFor="myRadio3">
            Series
          </label>
        </div>
      </div>
    );
  }
}

export default Searchbar;
