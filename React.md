# React

## react concept

#### react 出现

* React是由Facebook开发的JavaScript库，用于构建用户界面。React的产生是为了解决在开发大规模复杂应用程序时遇到的问题。传统的JavaScript开发方式是在DOM（文档对象模型）上直接进行操作，但是当应用程序变得复杂时，这种方式会导致代码难以维护、性能下降和开发效率低下。

  React引入了一个新的开发模式，称为组件化开发，它将用户界面划分为独立的组件，每个组件都有自己的状态和行为，并且可以组合成更大的组件。这种开发模式使得代码更加模块化、可重用性更高，同时也让开发者更容易理解和维护代码。

  React还引入了一种称为虚拟DOM（Virtual DOM）的机制。虚拟DOM是一个轻量级的JavaScript对象，它代表了真实DOM中的元素，但是没有实际的渲染成页面上的元素。当组件状态改变时，React会比较虚拟DOM的差异，并且只更新必要的部分，从而提高了渲染性能。

  因此，React的产生是为了解决传统JavaScript开发方式在开发大型、复杂应用时的问题，并且引入了组件化开发和虚拟DOM等新机制，使得开发更加高效、易于维护和具有更好的性能。

  ### react运行机制

  ​	React的核心特性是组件化开发和虚拟DOM。

  1. 组件化开发

  React的组件化开发是将用户界面划分为独立的组件，每个组件都有自己的状态和行为，并且可以组合成更大的组件。这种开发模式使得代码更加模块化、可重用性更高，同时也让开发者更容易理解和维护代码。

  组件可以是类组件或函数组件。类组件通过继承React.Component来定义，函数组件是一个简单的JavaScript函数，它接收一个props对象作为输入，输出一个React元素。

  1. 虚拟DOM

  React的虚拟DOM是一个轻量级的JavaScript对象，它代表了真实DOM中的元素，但是没有实际的渲染成页面上的元素。当组件状态改变时，React会比较虚拟DOM的差异，并且只更新必要的部分，从而提高了渲染性能。

  虚拟DOM的更新过程如下：

  - 当组件状态改变时，React会生成一个新的虚拟DOM树。
  - React会比较新旧虚拟DOM树的差异，并且只更新需要更新的部分。
  - React将更新后的虚拟DOM树与真实DOM树进行比较，并将需要更新的部分重新渲染到页面上。

  React的特性运行机制可以总结为以下几个步骤：

  1. 初始化组件：React会在组件被渲染到页面上之前初始化组件，并设置组件的初始状态。
  2. 渲染虚拟DOM：React会使用组件的状态和属性生成虚拟DOM树，并将其渲染到页面上。
  3. 监听状态变化：React会监听组件状态的变化，当状态发生改变时，React会生成一个新的虚拟DOM树。
  4. 更新虚拟DOM：React会比较新旧虚拟DOM树的差异，并且只更新需要更新的部分。
  5. 重新渲染到页面：React将更新后的虚拟DOM树与真实DOM树进行比较，并将需要更新的部分重新渲染到页面上。
  6. 卸载组件：当组件被移除时，React会卸载组件并清理组件的状态。

![IMG_1311(20230409-103611)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304091148482.JPG)

![IMG_1312(20230409-104132)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304091149552.JPG)

* don't touch the DOM, I'll do it.
  * DECLARATIVE
  * components
* build websites like lego blocks
* unidirectional data flow
* ui, the rest is up to you
* ![IMG_1314(20230409-111826)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304091148718.JPG)

![IMG_1315(20230409-114458)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304091148362.JPG)

JSX是一种JavaScript的语法扩展，它允许我们在JavaScript中编写类似于HTML的代码，以方便地构建UI界面。React使用JSX来描述用户界面，将JSX编译为纯JavaScript代码后，再交由React进行处理。

JSX让我们可以在JavaScript中直接使用HTML标签和属性，如：

```jsx
const element = <h1>Hello, world!</h1>;
```

在上面的例子中，`<h1>`标签和`Hello, world!`的内容看起来非常像HTML，但实际上是JSX语法的一部分。

JSX也支持在标签中使用JavaScript表达式，以便更灵活地构建界面。例如：

```jsx
const name = "Alice";
const element = <h1>Hello, {name}!</h1>;
```

在上面的例子中，`{name}`是一个JavaScript表达式，它会被解析为`Alice`，从而渲染出`<h1>Hello, Alice!</h1>`这个元素。

总之，JSX是一种方便的语法扩展，它允许我们在JavaScript中使用类似HTML的语法来构建用户界面。

#### 构建react

```jsx
npx create-react-app my-app
cd my-app
npm start
```



![image-20230409125106758](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304091251888.png)

* 重要的文件

* ```
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  ```

  ```json
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
  ```

  

  ### classes vs hooks

  * 重要理解渲染

  * UI components

  * function components

    * ```jsx
      function Profile() {
        return (
          <>
          <div>  <h1 className='name'>{user.name}</h1>
          </div>
            <img
              className="avatar"
              src={user.imageUrl}
              alt={'Photo of ' + user.name}
              style={{
                
                width: user.imageSize,
                height: user.imageSize
              }}
            />
          </>
        );
      }
      ```

    * class components

      * ```jsx
        class Profile extends Component {
          render() {
            return (
              <>
                <div>
                  {" "}
                  <h1 className="name">{user.name}</h1>
                </div>
                <img
                  className="avatar"
                  src={user.imageUrl}
                  alt={"Photo of " + user.name}
                  style={{
                    width: user.imageSize,
                    height: user.imageSize,
                  }}
                />
              </>
            );
          }
        }
        ```

      * ![image-20230410105917916](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304101059082.png)

#### shallow merge

`shallow merge` 是一种合并两个对象（Object）的方法，它将源对象的属性（source object）浅合并到目标对象（target object）中，并返回合并后的新对象，同时保留目标对象中未被源对象覆盖的属性。

在 React 中，`shallow merge` 是一种常用的组合 state 的方式。当我们需要更新组件的 state 时，我们可以使用 `setState` 方法，并将新的 state 对象作为参数传入。`setState` 方法会将新的 state 对象与原有的 state 对象进行浅合并，并触发组件的重新渲染。

例如，假设我们有一个组件的 state 如下：

```
this.state = {
  name: 'Alice',
  age: 25,
  address: {
    city: 'New York',
    state: 'NY'
  }
}
```

如果我们想要更新 state 中的 `name` 和 `address` 属性，但保留 `age` 属性，我们可以使用 `shallow merge` 来实现：

```
phpCopy codethis.setState({
  name: 'Bob',
  address: {
    city: 'San Francisco'
  }
})
```

经过浅合并后，组件的 state 会变为：

```
{
  name: 'Bob',
  age: 25,
  address: {
    city: 'San Francisco'
  }
}
```

可以看到，`age` 属性并没有被修改，而 `name` 和 `address` 属性则被更新了。这就是 `shallow merge` 在 React 中的应用。

* 用setState改变对象属性

  * ```jsx
            <button
              onClick={() => {
                this.setState({ imageUrl: "https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202303251449897.png",
              imageSize: 200,
            user: {firstName: 'michael', lastName: 'sjuny'}});
                console.log(this.state);
                
              }}
              className="btn"
            >
              Change name
            </button>
    ```

  * 看效果

  * 原始

    * ![image-20230410130214913](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304101302950.png)

  * 点击按钮第一次，发现属性并没有改变

    * ![image-20230410130034236](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304101300324.png)

 * 点击按钮第二次
   * 属性已经改变 user
   * ![image-20230410130229765](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304101302836.png)

* 为什么会出现这种情况呢
* 因为setState是异步进行的，所以console.log会先显示出来
* 需要等到state加载运行完毕后 ，才会更新属性，他不会阻塞其他进程的，所以console先运行

##### 函数组件类组件

在React中，有两种类型的组件：类组件和函数组件。

类组件使用ES6类定义，并扩展基础React组件类。它们使用`render()`方法返回一个React元素。类组件可以访问生命周期方法，如`componentDidMount`、`shouldComponentUpdate`、`componentDidUpdate`和`componentWillUnmount`。

函数组件使用JavaScript函数定义并返回一个React元素。它们以前被称为无状态函数组件，主要用于呈现表示组件。但是，随着React Hooks的引入，函数组件现在可以管理状态并具有类似于`useEffect`的生命周期方法。

下面是类组件和函数组件之间的一些关键区别：

1. 语法：类组件使用ES6类定义，而函数组件使用JavaScript函数定义。
2. 状态管理：类组件具有状态对象，可以使用`setState()`修改状态。函数组件可以使用Hook，例如`useState()`来管理状态。
3. 生命周期方法：类组件可以访问多个生命周期方法，包括`componentDidMount`、`shouldComponentUpdate`和`componentWillUnmount`。函数组件可以使用Hook，例如`useEffect()`来实现类似的功能。
4. 性能：函数组件通常比类组件更快、更轻，因为它们没有创建和管理类实例的开销。
5. 使用：类组件仍然在某些情况下使用，例如需要管理比简单的键值对更复杂的状态。但是，对于不需要状态管理的简单组件，通常更喜欢使用函数组件。

最终，选择类组件或函数组件将取决于您的应用程序的具体需求。然而，随着React Hooks的引入，由于其简单性和性能，函数组件变得越来越受欢迎。



##### setState()

#### Parameters 

- `nextState`: Either an object or a function.
  - If you pass an object as `nextState`, it will be shallowly merged into `this.state`.
  - If you pass a function as `nextState`, it will be treated as an *updater function*. It must be pure, should take the pending state and props as arguments, and should return the object to be shallowly merged into `this.state`. React will put your updater function in a queue and re-render your component. During the next render, React will calculate the next state by applying all of the queued updaters to the previous state.
- **optional** `callback`: If specified, React will call the `callback` you’ve provided after the update is committed.

#### Returns 

`setState` does not return anything.

* eg

  * ```jsx
     this.setState(() => {
                  return {
                    user: { firstName: "michael", lastName: "sjuny" },
                    imageSize: 240,
                  };
                }, () => {
                  console.log(this.state);
                
                });
              }}
    ```



### 怪物项目



* 创建怪物对象

  * ```json
     this.state = {
          monster1: {
            name: "Jonas",
          },
          monster2: {
            name: "jack",
          },
          monster3: {
            name: "jill",
          },
        };
    ```

* 我们引用数据

  * ```
     render() {
        return (
          <div className="App">
            <h1>{this.state.monster1.name}</h1>
            <h1>{this.state.monster2.name}</h1>
            <h1>{this.state.monster3.name}</h1>
          </div>
        );
      }
    ```

  * 我们想一个这样的事，如果有100个怪物呢，那么我们要粘贴100次h1吗，太麻烦了，有没有解决办法呢？肯定有的。

  * 解决 Array.prototype.map()

  * 吧数据存入数组里面

    * ```javascript
        monsters: [
              {
                name: "Jonas",
              },
              {
                name: "jack",
              },
              {
                name: "jill",
              },
              {
                name: "Juny",
              },
              {
                name: "Steven",
              },
            ],
      ```

      * ```JsX
          <div className="App">
                {this.state.monsters.map((mon) => {
                  return <h1>{mon.name}</h1>;
                })}
              </div>
        ```

    * 我们可以给他加上key properties

      * ```
         return <h1 key={mon.id}>{mon.name}</h1>;
        ```

  * 再看DOM 

    * ![image-20230410153500498](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304101535594.png)

### Component lifecycle

1- Mounting: The component is created and inserted into the DOM. The following methods are called in order:
constructor()
static getDerivedStateFromProps()
render()
componentDidMount()

2- Updating: The component is re-rendered due to changes in state or props. The following methods are called in order:
static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

3- Unmounting: The component is removed from the DOM. The following method is called:
componentWillUnmount()

### `componentDidMount()` 

constructor()第一

render()第二调用

componentDidMount()第三调用

![image-20230411214445362](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304112144430.png)

![image-20230411214731095](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304112147145.png)

* 组件

  * ```JsX
    import {Component} from 'react';
    
    class CardList extends Component {
        render() {
            console.log("render from CardList")
    
            const {monsters} = this.props;
            console.log(monsters);
           
            return (
                <div className="card-list">
                  {monsters.map((mon) => {
                    return <h1 key={mon.id}>{mon.name}</h1>
                  })}
                   
    
    
                </div>
            )
        }
    }
    
    export default CardList;
    ```

  * props参数，接收一个对象或方法

  * React 组件使用*props*相互通信。每个父组件都可以通过给它们 props 将一些信息传递给它的子组件。Props 可能会让您想起 HTML 属性，但您可以通过它们传递任何 JavaScript 值，包括对象、数组和函数。

  * onChange()

    * ```javascript
      onSearchChanged = (event) => {
        const searchFiled = event.target.value.toLocaleLowerCase();
        // console.log(searchFiled);
        // [{name: 'search'}, {name: 'Jonas'}]
      
        this.setState({ searchFiled });
      }
      
      
      ```

    * 搜索过滤条件

      * ```javascript
         const filter = monsters.filter((el) => {
              return el.name.toLocaleLowerCase().includes(searchFiled);
        ```

    * 引用import

      * ```javascript
        import "./App.css";
        import { Component } from "react";
        // import axios from "axios";
        import CardList from "./components/card-list/card-list.component";
        // import Profile from "./components/card-list/App";
        
        ```

      * render会渲染两次，运行的时候
      
      * 调用API生成怪物
      
        * ```JsX
          componentDidMount() {
              // console.log("2");
              fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => {
                  return response.json();
                })
                .then((user) => {
                  this.setState(() => {
                    return { monsters: user };
                  });
                });
            }
          
          ```
      
        * prop如何传参
      
          * ```JsX
                 <SearchBox
                      onChangeHandler={onSearchChanged}
                      placeholder="search monster"
                      className=" monster-search"
                    />
              
                    <CardList monsters={filter} />
            ```
      
        * 如何用prop代替字符串输入
      
          * ```JsX
                const { name, id, email } = this.props.monster;
                return (
                  <div className="card-container" key={id}>
                    <img
                      src={`https://robohash.org/${name}.png?set=set2&size=180x180`}
                      title={name}
                      alt={name}
                    />
                    <h2 className="card-name">{name}</h2>
                    <p className="card-email">{email}</p>
                  </div>
                );
            ```
      
        * component 分离出来，方便管理
      
          * ![image-20230415155830829](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304151558879.png)
          * ![image-20230415155911081](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304151559139.png)
      
  
  #### 效果
  
  ![image-20230415155958303](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304151559405.png)
  
  <video src="C:\Users\jackdeng\Videos\Captures\React App - Google Chrome 2023-04-15 16-00-10.mp4"></video>
  
  ### 函数组件和类组件
  
  类组件和函数式组件在 React 中都可以用来创建 UI 元素，但它们之间有一些不同点，主要包括以下几个方面：
  
  1. 定义方式：类组件是使用 ES6 中的 class 关键字定义的，而函数式组件是使用 JavaScript 函数定义的。
  2. 状态管理：类组件可以通过 state 对象来管理组件的状态，而函数式组件则通常使用 React Hooks 来管理状态。
  3. 生命周期：类组件支持更多的生命周期方法（如 componentDidMount、shouldComponentUpdate 等），而函数式组件只支持一部分生命周期方法（如 useEffect、useState 等）。
  4. 性能：由于函数式组件没有类组件中的实例化过程，因此它们通常比类组件更轻量级，性能更高。此外，由于函数式组件没有自己的状态，因此它们通常更容易进行优化。
  
  ![image-20230415162840592](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304151628670.png)
  
  * React 函数组件是一种使用 JavaScript 函数来定义组件的方式。当使用函数组件时，每当组件被渲染时，React 将会调用这个函数，并传递一些属性（props）作为函数的参数。函数组件的运行机制原理如下：
  
    1. React 将函数组件的定义转换成一个虚拟节点（Virtual DOM）。
    2. 当需要渲染组件时，React 会创建一个新的虚拟节点，并将组件的属性传递给这个虚拟节点。
    3. React 将新的虚拟节点与之前的虚拟节点进行比较，找出需要更新的部分。
    4. React 使用更新后的虚拟节点更新 DOM，从而更新组件的显示内容。
  
    React 函数组件的运行机制可以被简单地概括为“函数输入属性，输出 JSX”，也就是说，函数组件将组件的属性作为输入，返回一个 JSX 元素作为输出。因为函数组件是纯函数，所以它们不会在内部维护任何状态，也不会对外部环境产生任何副作用，从而使得它们的行为更加可预测、更易于测试和调试。
  
    

#### impure function && pure function 

* React 中的函数可以分为纯函数和不纯函数两种类型。

  纯函数指的是输入相同，输出也一定相同的函数，而且没有副作用（不会改变函数外部的状态或环境）。React 中的 Function Component 很大程度上就是纯函数，因为它们只接受 props 作为输入，并渲染 UI，不会修改任何外部状态或环境。

  不纯函数指的是具有副作用的函数，即可能会对外部状态或环境产生影响，并且每次调用时可能会返回不同的结果。在 React 中，不纯函数通常是指与 UI 渲染相关的操作，例如操作 DOM 元素、发送网络请求等，因为它们都可能会对外部状态或环境产生影响。

  React 中的渲染机制基于 Virtual DOM，每当组件状态发生变化时，React 会重新构建 Virtual DOM 树，并与上一次的 Virtual DOM 树进行比较，从而确定需要更新的部分并进行渲染。如果 Function Component 是一个纯函数，那么它的输出只会依赖于 props，这样 React 就可以在比较 Virtual DOM 树时更加高效地确定哪些部分需要更新。

  相比之下，如果 Function Component 是一个不纯函数，那么它的输出可能会依赖于外部状态或环境，这样 React 就无法确定何时需要重新渲染组件。为了避免这种情况，React 鼓励开发者在编写 Function Component 时遵循“单向数据流”的原则，即只接受 props 作为输入，不直接修改任何外部状态或环境，以确保组件的输出始终可以被视为纯函数。

### 将所有类组件整合为函数组件

* 先了解useState

* > `useState`是一个 React Hook，可让您向组件添加[状态变量。](https://react.dev/learn/state-a-components-memory)
  >
  > ```javascript
  > const [state, setState] = useState(initialState);
  > ```
  >
  > `useState`返回一个恰好有两个值的数组：
  >
  > 1. 当前状态。在第一次渲染期间，它将与`initialState`您通过的匹配。
  > 2. 允许您将状态更新为不同值并触发重新渲染的[`set`函数](https://react.dev/reference/react/useState#setstate)。
  > 3. 它只影响从*下一次*`useState`渲染开始返回的内容。

* 开始整合

* > 工程布局
  >
  > ![image-20230515115456233](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202305151154336.png)
  >
  > card-component
  >
  > 将参数monster传进方法
  >
  > ```javascript
  > const Card = ({monsters}) =>  {
  >       const { name, id, email } =monsters;   //解构获得对应属性
  > ```
  >
  > ```jsx
  > const Card = ({monsters}) =>  {
  >     const { name, id, email } =monsters;
  >     return (
  >       <div className="card-container" key={id}>
  >         <img
  >           src={`https://robohash.org/${id}.png?set=set2&size=180x180`}
  >           title={name}
  >           alt={email}
  >         />
  >         <h2 className="card-name">{name}</h2>
  >         <p className="card-email">{email}</p>
  >       </div>
  >     );
  > }
  > export default Card;
  > 
  > ```
  >
  > card-list
  >
  > ```jsx
  > const CardList = ({ monsters }) => {
  >   console.log('render from CardList');
  >   return (
  >     <div className="card-list" >
  >       {monsters.map(mon => {
  >         return <Card monsters={mon}  key={mon.id}/>;
  >       })}
  >     </div>
  >   );
  > };
  > export default CardList;
  > 
  > ```
  >
  > search-box
  >
  > ```JsX
  > const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  >   return (
  >     <input
  >       type="search"
  >       className={`search-box ${className}`}
  >       placeholder={placeholder}
  >       onChange={onChangeHandler}
  >     />
  >   );
  > };
  > export default SearchBox;
  > 
  > ```

  > App
  >
  > ```javascript
  > import { useState, useEffect } from 'react';
  > ```
  >
  > 
  >
  > 使用useState
  >
  > ```javascript
  >   const [searchFiled, setSearchFiled] = useState('');
  >   const [monsters, setMonsters] = useState([]);
  >   // const [stringField, setStringField] = useState('');
  >   const [filterMonsters, setFilterMonsters] = useState(monsters);
  > ```
  >
  > 通过useEffect，只抓取一次,避免一直循环
  >
  > ```JsX
  > useEffect(() => {
  >     console.log('effect fired');
  >     fetch('https://jsonplaceholder.typicode.com/users')
  >       .then(response => response.json())
  >       .then(users => setMonsters(users));
  >   }, []);
  > ```
  >
  > ```JsX
  >    useEffect(() => {
  >     const newFilterMonster = monsters.filter(el => {
  >       return el.name.toLocaleLowerCase().includes(searchFiled);
  >     });
  >     setFilterMonsters(newFilterMonster);
  >     console.log('effect is firing');
  >   }, [monsters, searchFiled]);
  > 
  >  
  > ```
  >
  > searchChanged
  >
  > ```jsx
  >   const onSearchChanged = event => {
  >     const searchFiledString = event.target.value.toLocaleLowerCase();
  >     setSearchFiled(searchFiledString);
  >   };
  > ```
  >
  > 
  >
  > return()
  >
  > ```jsX
  >   return (
  >     <div className="App">
  >       <h1 className="app-title">Monsters Rolodex</h1>
  > 
  >       <SearchBox
  >         onChangeHandler={onSearchChanged}
  >         placeholder="search monster"
  >         className=" monster-search"
  >       />
  >      
  >       <CardList monsters={filterMonsters} />
  >     
  >     </div>
  >   );
  > ```
  >
  > 
  >
  > `useEffect` 的依赖数组是可选的，它包含所有在回调函数中使用的变量。当依赖数组中的任何变量发生变化时，React 会重新执行回调函数。
  >
  > Effect 可以让你[的组件](https://react.dev/learn/synchronizing-with-effects)与一些外部系统（比如聊天服务）保持同步。在这里，*外部系统*是指任何不受 React 控制的代码，例如：
  >
  > - [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)用和管理的计时器[`clearInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval)。
  > - [`window.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)使用和的事件订阅[`window.removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)。
  > - 具有 API 的第三方动画库，例如`animation.start()`和`animation.reset()`.
  >
  > **如果您没有连接到任何外部系统，[您可能不需要效果器。](https://react.dev/learn/you-might-not-need-an-effect)**

  
