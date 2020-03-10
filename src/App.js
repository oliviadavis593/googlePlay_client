import React, { Component } from 'react';
import PlayStore from './playstore/playstore';

class App extends Component {
  //setting up initial state in constructor
  constructor(props) {
    super(props);
    this.state = {
      apps: [],
      sort: '',
      genre: '',
      error: null
    }
  }

  //create methods to udpate state
  setSort(sort) {
    this.setState({
      sort
    });
  }

  setGenre(genre) {
    this.setState({
      genre
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    //construct a URL with query string
    const baseUrl = 'http://localhost:8000/apps';
    const params = [];
    if(this.state.sort) {
      params.push(`sort=${this.state.sort}`);
    }
    if(this.state.genre) {
      params.push(`genre=${this.state.genre}`);
    }
    const query = params.join('&');
    const url = `${baseUrl}?${query}`;

    //perform fetch
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      //update the state with returned data
      .then(data => {
        this.setState({
          apps: data,
          error: null //resets errors
        })
      })
      //if there's any error when fetching data => display a message to user
      .catch(err => {
        this.setState({
          error: 'Sorry, could not display apps at this time.'
        })
      })
  }
  
  //inside render => display a list of apps & the form 
  //attach onChange listeneres to components for updating the state
  //..as the user selects values
  render() {
    //map over all the apps
    const apps = this.state.apps.map((app, i) => {
      return <PlayStore {...app} key={i} />
    })
    return(
      <main className='App'>
        <h1>Googleplay Store</h1>
        <div className='genres'>
          <form onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor='genres'>Genres:</label>
            <select
            id='genres'
            name='genres'
            onChange={e => this.setGenre(e.target.value)}
            >
              <option value='none'>None</option>
              <option value='action'>Action</option>
              <option value='strategy'>Strategy</option>
              <option value='casual'>Casual</option>
              <option value='arcade'>Arcade</option>
              <option value='card'>Card</option>
            </select>


            <label htmlFor='sort'>Sort:</label>
            <select
            id='sort'
            name='sort'
            onChange={e => this.setSort(e.target.value)}
            >
              <option value='none'>None</option>
              <option value='rating'>Rating</option>
              <option value='app'>App</option>
            </select>
            <button submit='submit'>Search</button>
          </form>
          <div className='App_error'>
            {this.state.error}
          </div>
        </div>
        { apps }
      </main>
    )
  }
}

export default App; 

/*
TO DO:
//App.js
- Will not filter genre => get error that it can't display
- Will not filter sort => get error that it can't display
//playstore.js
- Current Version, Android Version and Content Rating will not display
Note: Spaces in the array for each of these keys 
*/