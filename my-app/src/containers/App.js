import React, {Component} from 'react';
import './App.css';
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from '../components/Persons/Persons';

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    persons: [
      {id: 1, name: 'Scott', age: 28},
      {id: 2, name: 'Bill', age: 56}
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit
          showPersons={this.state.showPersons}
          personLength={this.state.persons.length}
          btnClicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
