import React from 'react';
import ReactDOM from 'react-dom'
import Indecesion from './components/Indecesion';

ReactDOM.render(<Indecesion options={['pn','fse']}/>, document.getElementById('app'));

class OldSyntax {
    constructor(){
        this.name = 'Mike';
    }
}

const old  = new OldSyntax();
console.log(old);

//-----

class NewSyntax {
    name='ada';
}

const nset = new NewSyntax();
console.log(nset);
