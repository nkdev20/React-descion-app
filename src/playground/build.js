class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            'visibility':true
        }
    }

    handleToggleVisibility(){
        this.setState((previousState) => {
            return{
                visibility:!previousState.visibility
            };
        });
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.handleToggleVisibility}>{ this.state.visibility === true?'Show Details':'Hide Details'}</button>
                {
                    this.state.visibility &&(
                    <div>
                        <p>The state is visible</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
// const appRoot = document.getElementById('app');
// let msg = "";
// const display = () => {
//     msg = "Displaying Details";
//     render();
//     // console.log(root.msg);
// }

// const hide = () => {
//     msg= "";
//     render();
// }
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick = { msg === ''? display: hide}>{ msg === ''?'Show Details':'Hide Details'}</button>
//             <p>{msg}</p>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }


// render();