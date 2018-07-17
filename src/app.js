console.log('File is running');

//JSX Javascript for XML
const app = {
    'title' : 'React',
    'subtitle' : 'Learn it usdemy',
    'options': []
}
const appRoot = document.getElementById('app');

const numbers = [55, 100, 101];
const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        display();
    }
};

const onClickRemove = () => {
    app.options=[];
    display();
}

const onClickMakeDescion = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
}

const display = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'OPtions Exist' : 'Options not present' }</p>
            <p>{app.options.length}</p>
            <button onClick = {onClickRemove}>Remove</button>
            <button disabled = {app.options.length === 0} onClick = {onClickMakeDescion}>Make a Descion?</button>
            {
                numbers.map((number) => {
                    return <p key={number}>Number : {number}</p>;
                })
            }
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name ="option"/>
                <button>Add Option</button>
                
            </form>
        </div>
    ); 
    ReactDOM.render(template, appRoot);
}

display();
function getLocation(location) {
    if (location) {
        return <p>Location:{location}</p>;        
    } 
}

const user = {
    'name' : 'Nikhil',
    'age' :'15',
    'location': 'goa'
};

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Aanonymous'}</h1>
        {user.age <= 18 && <p>Age:{user.age}</p>}
        {getLocation(user.location)}
    </div>
);
