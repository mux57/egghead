import React from 'react';
class App extends React.Component{
    render() {
        return <Title />
    }
}
const Title= (props) => <h1>Title: {props.text}</h1>
Title.propTypes = {
    text(props,propName,component){
        if (!(propName in props)){
            return new Error('missing $(propName)')
        }

        if (props[propName].length < 10){
            return new Error(" $(propName) length is less than 10")
        }
    }
}

// class Heart extends React.Component{
//     render(){
//         return <span>&hearts;</span>
//     }
// }
// const Button = (props) => <button>{props.children}</button>

//     constructor(){
//         super();
//         this.state = {
//             txt: "this is the value from app.js"
//         }
//     }
//     update( e){
//         this.setState({txt: e.target.value});
//     }
//     render(){
//         return (
//             <div>
//                 <p>{this.state.txt}</p>
//                 <Widget update= {this.update.bind(this)} />
//             </div>
//         )
//     };
// }

// const Widget = (props) =>
//     <input type="text" onChange={props.update} />

// App.propTypes ={
//     txt: React.PropTypes.string,
//     cat: React.PropTypes.number.isRequired
// }
// App.defaultProps ={
//     txt: "yo! I am default txt",
//     cat : 5
// }

// const App = ()=> <h1>Good Morning</h1>

export default App;
