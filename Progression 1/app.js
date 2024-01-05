

class ReactContainer extends React.Component{
    // Constructor here

    render(){
        return React.createElement(`div`, null, `Hey Kalvians! Welcome to react Learning!`,
        React.createElement(`div`, null , `Let's rock and roll`))
    }
}

const container = document.getElementById('react-container')
ReactDOM.render(React.createElement(ReactContainer), container)




