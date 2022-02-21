React from scratch.
       a. Öppna en mapp i VS. Högerklicka för att öppna terminal
       b. Skriv in: 
                npx create-react-app (namn på fil)
                cd (namn på fil)
                npm start 

Att skriva i första HTML-filen när man öppnat en ny react-fil.
        a.   Detta ska ligga över JS scripten:
        <scriptsrc="https://unpkg.com/react@17/umd/react.development.js"crossorigin></script> 
        <scriptsrc="https://unpkg.com/react-dom@17/umd/react-dom.development.js"crossorigin></script>
        b.  <scriptsrc="(filnamn.js)"></script>


När servern har slutat fungera.
	a. cd (filnamnet) t.ex. cd my-first
	b. npm run start

När man vill stänga ned react, finns två alternativ.
        a. killall node (i terminalen)
        b. CTRL + C (i terminalen)

React Router DOM 6
Är ett tillägg 
För att köra igång och installera den kör då (i terminalen):
        npm install react-router-dom
        npm start 



Props: det finns två typer av props. 
a. Props in function (använd helst denna över classcomponent)
        function App() {
        return (
        <div className="App">
        <HelloFunctionComponent name="Johanna"/>
        </div>
        );
        }

a1.     import React from 'react'
        function HelloFunctionComponent(props) {
        return (
        <div>Hello {props.name} from FunctionComponent</div>
        )
        }

b. Props in class (man har dock försökt att arbeta bort detta)
        function App() { // Detta är en förälder komponent
        return (
        <div className="App">
        <HelloClassComponent name="Jane Doe">
        <div>This is a text sent through props.children</div> //Detta är en child component.
        </HelloClassComponent>   
        </div>
        );
        }

b1. 
        import React, { Component } from 'react'

        export class HelloClassComponent extends Component {
        render() {
        return (
        <div>Hello {this.props.name} from ClassComponent
        {this.props.children}
        </div>
    )
   }
} export default HelloClassComponent

Varför använder vi oss av props? 
        a. Ett exempel är som SCSS. Man använder sig av props, för att enkelt använda det på olika platser. 
        Vi återanvänder den, istället för att upprepa den på olika ställen genom att kalla på komponenten. / Reusable codes




