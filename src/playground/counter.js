let count = 0;
const addOne = () => {
    count++;
    // console.log("Hello");
    renderCountApp();
}
const minusOne = ()=> {
    count--;
    // console.log("Minus One");
    renderCountApp();
}

const reset = () => {
    // console.log("Reset");
    count = 0;
    renderCountApp();
}
let id = "my-id";

// console.log(template3);



const renderCountApp = () => {
    const template3 = (
        <div>
            <h1>Count:{count}</h1>
            <button id={id} className="button" onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(template3, appRoot);
};

renderCountApp();