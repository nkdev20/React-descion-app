
const appRoot = document.getElementById('app');
let msg = "";
const display = () => {
    msg = "Displaying Details";
    render();
    // console.log(root.msg);
}

const hide = () => {
    msg= "";
    render();
}
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick = { msg === ''? display: hide}>{ msg === ''?'Show Details':'Hide Details'}</button>
            <p>{msg}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
}


render();