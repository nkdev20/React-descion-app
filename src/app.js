import React from 'react';
import ReactDOM from 'react-dom'
import Indecesion from './components/Indecesion';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(<Indecesion options={['pn','fse']}/>, document.getElementById('app'));

// class OldSyntax {
//     constructor(){
//         this.name = 'Mike';
//     }

//     getGreeting(){
//         return `Hi ${this.name}`;
//     }
// }

// const old  = new OldSyntax();
// const getGreeting = old.getGreeting;
// console.log(getGreeting());

//-----

// class NewSyntax {
//     name='ada';

//     getGreeting = () => {
//         return `Hi ${this.name}`;
//     }
// }

// const nset = new NewSyntax();
// const test = nset.getGreeting;
// console.log(test());
