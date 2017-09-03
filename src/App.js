import React from 'react';
class App extends React.Component{
    render(){
        // return <h1> hello Eggos</h1>
        let txt= this.props.txt;
        return (
            <div>
                <p>{txt}</p>
            </div>
        )
    };
}

App.propTypes ={
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}
App.defaultProps ={
    txt: "yo! I am default txt",
    cat : 5
}

// const App = ()=> <h1>Good Morning</h1>

export default App;
