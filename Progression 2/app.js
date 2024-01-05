

class ReactContainer extends ReactContainer.component{
    // JSX tags
    // JSX there should be one parent element
    render(){
        return (
            <div>Hello! Welcome to Kalvium
                <div>This is babel</div>
            </div>
        )
    }
}

const container = document.getElementById('react-container')
// Directly pass the component to render
ReactDOM.render(<ReactContainer/>, container)