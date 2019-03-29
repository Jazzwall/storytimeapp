//define component named Hello
class Hello extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            message: "my friend!!"
        };

        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage()
    {
        this.setState
        (
            {message: this.state.storySoFar}
        );
    }

    componentDidMount()
    {
        fetch("https://storytimeapi.azurewebsites.net/api/values")
        .then(r=>this.setState({"storySoFar":r.text()}))
        //.then(i=>this.setState({i}));
    }

    render()
    {
        return(
            <div>
            <h1>Hello {this.state.message}!</h1>
            <button onClick={this.updateMessage}>Click Me!</button>
            </div>
        )
    }
}

//render component named Hello within DOM element "root"
ReactDOM.render
(
    <Hello message="my friend"/>,
    document.getElementById("root")
);