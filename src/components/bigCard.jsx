import React from 'react'
import {Card} from 'react-bootstrap'
import SmallCard from './smallCard'

class BigCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.sendMove = this.sendMove.bind(this)
    }

    sendMove(val) {
        let data = val
        data.moveFrom = this.props.title
        this.props.sendMove(data)
    }

    render() {
        return (
            <div>
                <Card style={{ width: '23rem'}} bg="light">
                <Card.Header>{this.props.title}</Card.Header>
                <Card.Body>
                    {this.props.tasks ? this.props.tasks.map((task, i) => <SmallCard key={i} task={task} title={this.props.title} sendMove={this.sendMove} />) : null }
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default BigCard