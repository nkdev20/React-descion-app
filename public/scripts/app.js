'use strict';

console.log('File is running');

//JSX Javascript for XML
var app = {
    'title': 'React',
    'subtitle': 'Learn it usdemy',
    'options': []
};
var appRoot = document.getElementById('app');

var numbers = [55, 100, 101];
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    console.log(e.target.elements);
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        display();
    }
};

var onClickRemove = function onClickRemove() {
    app.options = [];
    display();
};

var onClickMakeDescion = function onClickMakeDescion() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
};

var display = function display() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'OPtions Exist' : 'Options not present'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onClickRemove },
            'Remove'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onClickMakeDescion },
            'Make a Descion?'
        ),
        numbers.map(function (number) {
            return React.createElement(
                'p',
                { key: number },
                'Number : ',
                number
            );
        }),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

display();
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location:',
            location
        );
    }
}

var user = {
    'name': 'Nikhil',
    'age': '15',
    'location': 'goa'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Aanonymous'
    ),
    user.age <= 18 && React.createElement(
        'p',
        null,
        'Age:',
        user.age
    ),
    getLocation(user.location)
);
