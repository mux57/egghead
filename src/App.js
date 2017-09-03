import React from 'react';
class App extends React.Component{

    render() {
        return <Button> yo <Heart /> </Button>
    }
}

class Heart extends React.Component{
    render(){
        return <span>&hearts;</span>
    }
}
const Button = (props) => <button>{props.children}</button>

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
