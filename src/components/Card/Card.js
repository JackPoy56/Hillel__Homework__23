import React from 'react';
import "./Card.css";
import {string} from 'prop-types';

class Card extends React.Component {
    render() {
        return (
            <div className="Card">
                <img src={this.props.avatar} alt='avatar'/>
                <div className="wrap">
                    <p>Name: {this.props.name}</p>
                    <p>Surname: {this.props.surname}</p>
                    <p>Age: {this.props.age}</p>
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    avatar: string,
    name: string,
    surname: string,
    age: string
};

export default Card;