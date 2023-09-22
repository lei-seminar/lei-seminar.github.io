import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';


class ContentCard extends React.Component {
    render() {
        return (
            <p>{this.props.text}</p>
        );
    }
}

export default ContentCard;