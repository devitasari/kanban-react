import React from 'react'
import {Card, Button} from 'react-bootstrap'

class SmallCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.moveDo = this.moveDo.bind(this);
        this.moveDoing = this.moveDoing.bind(this);
        this.moveDid = this.moveDid.bind(this);
        this.delete = this.delete.bind(this);

    }

    moveDo() {
        this.props.sendMove({moveTo:'Do', task:this.props.task})
    }

    moveDoing() {
        this.props.sendMove({moveTo:'Doing', task:this.props.task})
    }

    moveDid() {
        this.props.sendMove({moveTo:'Did', task:this.props.task})
    }

    delete() {
        this.props.sendMove({moveTo:'Delete', task:this.props.task})
    }

    renderButton(val) {
        let display
        if (val === 'Do') {
            display =
                <div>
                    <Button variant="success" size="sm" onClick={this.moveDoing} className="mr-2">Doing</Button>
                    <Button variant="success" size="sm" onClick={this.moveDid} className="mr-2">Did</Button>
                    <Button variant="success" size="sm" onClick={this.delete} className="mr-2">X</Button>
                </div>
            
        } else if (val === 'Doing') {
            display =
                <div>
                    <Button variant="success" size="sm" onClick={this.moveDo} className="mr-2">Do</Button>
                    <Button variant="success" size="sm" onClick={this.moveDid} className="mr-2">Did</Button>
                    <Button variant="success" size="sm" onClick={this.delete} className="mr-2">X</Button>
                </div>
        } else {
            display =
            <div>
                <Button variant="success" size="sm" onClick={this.moveDo} className="mr-2">Do</Button>
                <Button variant="success" size="sm" onClick={this.moveDoing} className="mr-2">Doing</Button>
                <Button variant="success" size="sm" onClick={this.delete} className="mr-2">X</Button>
            </div>
        }

        return display
    }

    render() {
        return (
            <Card className="mb-1" draggable="true" id={this.props.task} onDragStart={this.props.onDragStart}>
            <Card.Body>{this.props.task}</Card.Body>
            <Card.Footer>
                {this.renderButton(this.props.title)}
            </Card.Footer>
            </Card>
        )
    }
}

export default SmallCard