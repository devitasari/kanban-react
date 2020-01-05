import React from 'react'
import { Button, Form} from 'react-bootstrap'

class AddTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value : '',
            show : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showInputForm = this.showInputForm.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.sendData(this.state.value)
        event.preventDefault();
        this.showInputForm()
    }

    renderInputForm() {
        if (this.state.show) {
            return (<div>
                    <Form.Group>
                        <Form.Label style={{color:"white"}}>New Task</Form.Label>
                        <Form.Control type="text" placeholder="Input New Task Here..." value={this.state.value} onChange={this.handleChange} />
                    </Form.Group>
            </div>)
        } else {
            return (
            <div>
                <Button variant="light" onClick={this.showInputForm}>
                Add Task
                </Button>
            </div>)
        }
    }

    showInputForm() {
        this.setState({
            value: '',
            show : !this.state.show
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                {this.renderInputForm()}
            </Form>
        )
    }
}
  
  

export default AddTask
