import React from 'react'
import './home.css'
import BigCard from '../components/bigCard'
import AddTask from '../components/addTask'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Do : [],
            Doing : [],
            Did: [],
        }

        this.getData = this.getData.bind(this);
        this.sendMove = this.sendMove.bind(this)
    }

    getData(val) {
        const Do = this.state.Do.slice()
        Do.push(val)
        this.setState({
            Do: Do
        })
    }

    sendMove(val) {
        console.log('from home: ' + val.moveFrom + val.moveTo + val.task)
        const target = this.state[val.moveFrom].slice()
        //hapus task dari posisi awal
        const index = target.indexOf(val.task)
        target.splice(index, 1)
        // pindah ke posisi tujuan
        if (val.moveTo === 'Delete') {
            this.setState({
                [val.moveFrom]: target,
            })
        } else {
            this.setState({
                [val.moveTo]: [...this.state[val.moveTo], val.task],
                [val.moveFrom]: target,
            })
        }
    }

    render() {
        return (
            <div className="container mt-5">
                <h1 style={{textAlign:"center", color:"white"}}>Dev Work Board</h1>
                <br />
                <AddTask sendData={this.getData} />
                <div className="mt-5 maincard">
                    <BigCard title="Do" tasks={this.state.Do} sendMove={this.sendMove} />
                    <BigCard title="Doing" tasks={this.state.Doing} sendMove={this.sendMove} />
                    <BigCard title="Did" tasks={this.state.Did} sendMove={this.sendMove} />
                </div>
            </div>
        )
    }
}

export default Home