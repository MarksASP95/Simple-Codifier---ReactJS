import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class Codifier extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "",
            codifiedText: '',
            list: {
                a: "ni",
                b: "ne",
                c: "lp",
                d: "da",
                e: "be",
                f: "eb",
                g: "lo",
                h: "rm",
                i: "pl",
                j: "te",
                k: "ma",
                l: "ra",
                m: "tu",
                n: "no",
                ñ: "mu",
                o: "rd",
                p: "er",
                q: "zo",
                r: "to",
                s: "es",
                t: "gu",
                u: "ed",
                v: "ti",
                w: "do",
                x: "st",
                y: "tr",
                z: "ro",
                " ": " ",
                ",": "#",
                ".": "$"
            },
            length: null
        }

        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event){
        var myText = event.target.value;
        this.setState(
            {
                codifiedText: this.codifyText(myText),
                text: myText,
                length: this.state.text.length + 1
            }
        );

    }

    codifyText(text){
        text = text.toLowerCase();
        const list = this.state.list;
        var newText = '';
        
        for(let i = 0; i < text.length; i++)
        {
            newText = newText + list[text.charAt(i)];
        }

        return newText;
    }

    render(){
        return(
            <div id = "container">
                <h3>Type the text for its conversion</h3>
                <textarea onChange = {(e) => this.handleChange(e)} cols="30" rows="10"></textarea>
                <div id = "codifiedTextContainer">
                    <h2>Result:</h2>
                    <p>{this.state.codifiedText}</p>
                </div>
            </div>
        );
    }

}


ReactDOM.render(<Codifier />, document.getElementById('root'));

