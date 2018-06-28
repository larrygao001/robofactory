import React, {Component} from 'react';
import CardList from "../component/CardList";
import Scroll from "../component/scroll";
import SearchBox from '../component/SearchBox';
import '../font.css';


class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}))
    }

    onSearchChange=(e)=>{
        this.setState({searchfield:e.target.value})
    }

    render(){
        const {robots, searchfield} =this.state;
        const filteredRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? <h1>loading</h1> :
            <div className="tc">
                <h1 className="f1">Robofactory</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
    }
}
export default App;