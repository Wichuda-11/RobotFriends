import React, { useState, useEffect}from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
//import { robots } from "./robots";
import Scroll from "../components/Scroll";
import './App.css';


function App () {
  //constructor(){
  //super()
  // this.state = {
  //  robots: [],
  //  searchfield: "",
  // };
  //}

  //เก็บค่า robot และ set ค่า arrey ว่าง สามารถตั้งชื่ออะไรก็ได้
  const [robots, setRobots] = useState([]);
  //เก็บค่า และ set ค่า ช่องค้นหา
  const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0)


  //componentDidMount(){
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(response => response.json())
  //   .then(users => this.setState({ robots: users }));
  //}

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
     .then(response => response.json())
     .then(users => {setRobots(users )});
     console.log(count)
  },[count]) //การรันเมื่อจำนวนเปลี่ยนแปลงเท่านั้น

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RobotFriends</h1>
      <button onClick={() =>setCount(count+1)}> Click Me!</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App