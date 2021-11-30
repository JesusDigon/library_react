import './App.css';
import './menu.css';
import Menu from './Menu.js';
import List from './List.js';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [
        {id:0, rating:5, title:'Harry Potter', image: 'libro01.jpg'},
        {id:1, rating:4, title:'el señor d elos anillos', image: 'libro02.jpg'},
        {id:2, rating:2, title:'Cancion de Hielo y Fuego', image: 'libro03.jpg'},
        {id:3, rating:3, title:'Sapiens', image: 'libro04.jpg'},
        {id:4, rating:1, title:'Maradona', image: 'libro05.jpg'},
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <Menu name="Marcos" title="Amazon"/> 
        <List items={this.state.books}/>
      </div>
    );
  }
}

export default App;
