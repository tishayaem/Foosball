import React from 'react';
import './App.css';
import { listOfTeams } from './list';
import Quarterfinals from './Quarterfinals';

export default class Draw extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawPressed: false
        }
    }
    buttonClick = () => {
        this.setState({ drawPressed: true })
    }

    shuffle = (xs) => {
        return xs.slice(0).sort(function () {
            return 0.5 - Math.random();
        });
    };

    formingTeams = () => {

        let namesRaw = []
        listOfTeams.map(function (obj) {
            namesRaw.push(obj.people)
        });

        let names = this.shuffle(namesRaw.join().split(','))

        let formedTeamsArray = listOfTeams.slice()

        formedTeamsArray.forEach((obj, index) => {
            if (obj.people.length === 1) {
                obj.people.push(names[index])
            }
        })
        return formedTeamsArray
    }
  


  render() {
        return (
            
            <div className="Test">
                
                {this.state.drawPressed && <div><Quarterfinals /> </div>}
                {this.shuffle(this.formingTeams()).map((i) => <div><div>{i.country}</div><div>{i.people}</div></div>)}
                <button onClick={this.buttonClick.bind(this)}>
                    Draw
                </button>
            </div>


        )
    }
}