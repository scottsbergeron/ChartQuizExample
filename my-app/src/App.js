import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
    state = {
        persons: [
            {name: 'Scott', age:28},
            {name: 'Bill', age:56}
        ]
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age:28},
                {name: 'Bill', age:56}
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Scott', age:28},
                {name: event.target.value, age:56}
            ]
        });
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <button
                    style={style}
                    onClick={this.switchNameHandler.bind(this, 'Goat')}>Click Here</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, 'Billy')}>My Hobbies: Racing</Person>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    changed={this.nameChangedHandler}/>
            </div>
        );
    }
}

export default App;
