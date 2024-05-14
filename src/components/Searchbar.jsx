/* eslint-disable react/prop-types */
import React from "react";

class Searchbar extends React.Component {
  state = {
    searchValue: "",
  };

  handleText = (e) => {
    if (e.key === "Enter") this.props.searchMovies(this.state.searchValue);
  };
  handleVal = () => {
    this.props.searchMovies(this.state.searchValue);
  }

  render() {
    const { searchValue } = this.state;
    return (
      <div>
        <form action="" className="search-bar">
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
                e.preventDefault()
              this.setState({ searchValue: e.target.value });
              this.props.searchMovies(this.state.searchValue);
            }}
          >
            <span>Search</span>
          </button>
        </form>
       
    <div className="selector">
        <div className="selector-item">
            <input type="radio" id="radio1" name="selector" className="selector-item_radio" checked/>
            <label htmlFor="radio1" className="selector-item_label">radio 1</label>
        </div>
        <div className="selector-item">
            <input type="radio" id="radio2" name="selector" className="selector-item_radio"/>
            <label htmlFor="radio2" className="selector-item_label">radio 2</label>
        </div>
        <div className="selector-item">
            <input type="radio" id="radio3" name="selector" className="selector-item_radio"/>
            <label htmlFor="radio3" className="selector-item_label">radio 3</label>
        </div>
    </div>

      </div>
    );
  }
}

export default Searchbar;
