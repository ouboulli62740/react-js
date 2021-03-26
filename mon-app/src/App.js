
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'Dracula',
          id: 'asc1'
        },
        {
          name: 'Frakenstein',
          id: 'asc2'
        },
        {
          name: 'Elephant Man',
          id: 'asc3'
        }
      ]
    }
  }
  render() {
    return(
        <div className="App">
                  {
                    this.state.monsters.map(monster => (
                    <h1 key={monster.id}>{monster.name}</h1>
                    ))
                  }
        </div>
      );
    }
  }

export default App;
