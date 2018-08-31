

class Indecesion extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            'options': []
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if(options) {
                this.setState(() =>({options}));
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }
    //handle action 
    handlePick(){
        console.log("hello");
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }


    //Handle delete option
    handleDeleteOptions()
    {
        // this.setState(() => {
        //     return {
        //         'options':[]
        //     };
        // });

        this.setState(() => ({ options : [] }));


    }


    //handle single delte
    handleDeleteOption(optionToRemove) 
    {
        this.setState((prevState) => ({
            options:prevState.options.filter((option) => optionToRemove !== option )
        }));
    }


    //handle option
    handleAddOption(option)
    {
        if(!option) {
            return "Enter valid value to add";
        } else if (this.state.options.indexOf(option) >-1) {
            return "This option already exist";
        }

        // this.setState((prevState) => {
        //     return {
        //         'options':prevState.options.concat([option])
        //     };
        // });

        this.setState((prevState) => ({
            'options':prevState.options.concat([option])
        }));
    }

    render(){

        const title = 'indescion';
        const subtitle = 'Put your life in hands of computer';
        // const options = ['Thing one', 'Thing Two', 'Thing Three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOption={this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options 
                  options = {this.state.options}
                  handleDeleteOptions = {this.handleDeleteOptions}
                  handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                 />  
            </div>
        )
    }


}
// Indecesion.defaultProps = {
//     options:[]
// }   
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}           
        </div>
    ) 
}

Header.defaultProps = {
    title : 'Indescion'
}
// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOption}
            >
                What should i do?
            </button>
        </div>
    );
};

// class Action extends React.Component {

//     render(){
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOption}
//                 >
//                     What should i do?
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add option to get started </p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption = {props.handleDeleteOption}
                    />
                ))
            }
        </div>
    )
}
// class Options extends React.Component {

//     render(){
//         return(
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />)
//                 }
//             </div>
//         )
//     }
// }

const Option = (props) => {
    return(
        <div>
          {props.optionText }
          <button 
            onClick = {(e) => {
                props.handleDeleteOption(props.optionText)
            }}
          >
          remove</button>
        </div>
    )
}
// class Option extends React.Component {
//     render(){
//         return(
//             <div>
//               {this.props.optionText }
//             </div>
//         )
//     }
// }

class AddOption extends React.Component {
    constructor(props)
    {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        console.log(error);
        // this.setState(() => {
        //     return { error };
        // });
        this.setState(() => ({error}));
        if(!error) {
            e.target.elements.option.value = '';
        }

    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.handleAddOption}>
                    <input type="text" name="option"/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

const User = (props) => {
    return (
        <div>
            <p>Name:{props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}

ReactDOM.render(<Indecesion options={['pn','fse']}/>, document.getElementById('app'));