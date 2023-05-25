import './App.css';

import { useState, useEffect } from 'react';
// import axios from "axios";
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
// import Profile from "./components/card-list/App";

// function component
const App = () => {
  console.log('render');

  const [searchFiled, setSearchFiled] = useState('');
  const [monsters, setMonsters] = useState([]);
  // const [stringField, setStringField] = useState('');
  const [filterMonsters, setFilterMonsters] = useState(monsters);
  useEffect(() => {
    console.log('effect fired');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);
  useEffect(() => {
    const newFilterMonster = monsters.filter(el => {
      return el.name.toLocaleLowerCase().includes(searchFiled);
    });
    setFilterMonsters(newFilterMonster);
    console.log('effect is firing');
  }, [monsters, searchFiled]);


  const onSearchChanged = event => {
    const searchFiledString = event.target.value.toLocaleLowerCase();
    setSearchFiled(searchFiledString);
  };
  // const onStringFieldChanged = event => {
  //   setStringField(event.target.value);
  // };
  // const [count, setCount] = useState(0);
  // function handleClick () {
  //   setCount(count + 1);
  // }
  // function reset () {
  //   setCount(0);
  // }
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChanged}
        placeholder="search monster"
        className=" monster-search"
      />
      {/* <SearchBox
        onChangeHandler={onStringFieldChanged}
        placeholder="set string"
      /> */}
      <CardList monsters={filterMonsters} />
      {/* <button className="btn" onClick = {handleClick}>you press me {count} times</button>
    <br/>
    <button className="btn" onClick = {reset}>Reset</button> */}
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchFiled: "",
//     };
//     // console.log("1");
//   }

//   componentDidMount() {
//     // console.log("2");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         return response.json();
//       })
//       .then((user) => {
//         this.setState(() => {
//           return { monsters: user };
//         });
//       });
//   }

//   onSearchChanged = (event) => {
//     const searchFiled = event.target.value.toLocaleLowerCase();
//     // console.log(searchFiled);
//     // [{name: 'search'}, {name: 'Jonas'}]

//     this.setState({ searchFiled });
//   };

//   render() {
//     // 解构
//     const { monsters, searchFiled } = this.state;
//     const { onSearchChanged } = this;
//     // console.log("3");
//     const filter = monsters.filter((el) => {
//       return el.name.toLocaleLowerCase().includes(searchFiled);
//     });
//     // console.log(axios.isCancel('something'));

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         {/* {filter.map((mon) => {
//           return <h1 key={mon.id}>{mon.name}</h1>;
//         })} */}
//         <SearchBox
//           onChangeHandler={onSearchChanged}
//           placeholder="search monster"
//           className=" monster-search"
//         />

//         <CardList monsters={filter} />
//         {/* <Profile/> */}
//       </div>
//     );
//   }
// }
export default App;
