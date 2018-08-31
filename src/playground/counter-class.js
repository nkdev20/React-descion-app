class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }

    }

    handlePlusOne(){
        this.setState((prevState) => {
            return {
                count:prevState.count +1
            };
        });
    }

    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count:prevState.count -1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count:0
            };
        });
        // this.setState({
        //     count:0
        // });
    }

    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);
    
            if(!isNaN(count)) {
                this.setState(() =>({count}));
            }
        } catch (e) {

        }
    }


    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count)
            localStorage.setItem('count', json);

        }
    }

    render(){
        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick = {this.handlePlusOne}>+1</button>
                <button onClick = {this.handleMinusOne}>-1</button>
                <button onClick = {this.handleReset}>Reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count:100
// }

ReactDOM.render(<Counter count = {-10}/>, document.getElementById('app'));