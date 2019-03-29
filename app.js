//define component named Hello
class Hello extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            toggleSwitch: true
            //message: "my friend!!"
        };
        this.toggleListType = this.toggleListType.bind(this);
        this.callAPI = this.callAPI.bind(this);

        //this.updateMessage = this.updateMessage.bind(this);
    }

    // updateMessage()
    // {
    //     this.setState
    //     (
    //         {message: this.state.storySoFar}
    //     );
    // }

    componentDidMount()
    {
        fetch("https://storytimeapi.azurewebsites.net/api/values")
        .then(r=>r.text())
        .then(i=>this.setState({storySoFar: i}));
    }

    callAPI()
    {
        fetch("https://storytimeapi.azurewebsites.net/api/values")
        .then(r=>r.text())
        .then(i=>this.setState({storySoFar: i}));  
    }

    toggleListType()
    {
        this.setState({toggleSwitch: !this.state.toggleSwitch});
    }

    render()
    {
        var ts = this.state.toggleSwitch;

        var cc =
        [
            <h1>Story So Far!</h1>,
            <button onClick={this.toggleListType}>Click Me!</button>
        ]

        var a = 
        <div> {cc}
            <ul>
                <li>{this.state.storySoFar}</li>
            </ul>
        </div>

        var b = 
        <div> {cc}
            <ol>
                <li>{this.state.storySoFar}</li>
            </ol>
        </div>

        return(ts?a:b);
    }
}

//render component named Hello within DOM element "root"
ReactDOM.render
(
    <Hello message="my friend"/>,
    document.getElementById("root")
);