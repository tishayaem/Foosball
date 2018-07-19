import React from 'react';
import { listOfTeams } from './list';
import Draw from './Draw';

export default class FormTeams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfTeams,
            isPressed: false,
            drawPressed: false
        }


    }

    componentDidMount() {
        // this.setState({
        //     list: listOfTeams[0]
        // })
    }

    buttonClick = () => {
        this.setState({isPressed: true})
    }

    render() {

        return (
            <div>
                {
                    this.state.listOfTeams
                        .map(function (obj) {
                            return (
                                <div className="CountryPeople">
                                    <div>{obj.country + "=>"}</div>
                                    <div>{obj.people[0] + "and" + obj.people[1]}</div>
                                </div>
                            )
                        })
                }
                <button onClick={this.buttonClick.bind(this)}>
                    Form Teams
                </button>
                {this.state.isPressed && <div><Draw /> </div>}
                {console.log(this.state.isPressed)}

              

            </div>

        


                )
            }
}