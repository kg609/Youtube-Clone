import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ""};
  }

  render(){
    return (
      <header >
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav">
           {/*<li className="nav-item active">
           <a className="nav-link" href="#">Home</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">About</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">Contact</a>
    </li> */}
    <li>Link 1</li>
           
        </ul>
      
        
        <form className="input-group search-bar">
          <input
          className="form-control"
          placeholder="What are you looking for..."
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-danger">Search</button>
          </span>
        </form>
        </nav>
      </header>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
