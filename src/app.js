class Indecesion extends React.Component{
    render(){

        const title = 'indescion';
        const subtitle = 'Put your life in hands of computer';
        const options = ['Thing one', 'Thing Two', 'Thing Three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options = {options}/>
                <AddOption />  
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick(){
        alert("hello that pick");
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll()
    {
        alert("Remove All");
    }
    render(){
        return(
            <div>
            <button onClick={this.handleRemoveAll}>do Something</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render(){
        return(
            <div>
              {this.props.optionText }
            </div>
        )
    }
}

class AddOption extends React.Component {
    render(){
        return(
            <div>
                <form>
                    <input type="text" name="option"/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<Indecesion />, document.getElementById('app'));