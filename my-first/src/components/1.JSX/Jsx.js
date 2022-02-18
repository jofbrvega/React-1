import React from 'react'

/* Skapa ett objekt */
const user = {
	firstName: 'Johanna',
	lastName: 'Vega'
	}

let formatFullName = (user) => {
	return user.firstName + " " + user.lastName;
}


// Element sparad i variabel
const element1 =
	<h1>
		This is the first example: Hello {user.firstName + " " + user.lastName}
	</h1>;

const element2 = 
	<h1>
	This is the second example: Hello {formatFullName(user)}
	</h1>;

function getGreeting(user) {
	if (user) {
		return <h1> Hello, {formatFullName(user)} </h1>;
	}
	return <h1>Hello stranger</h1>;
} 

let Jsx = () => {
  return (
    <div>
		<div>
		{ /* Display plain text */}
		{'Hello Johanna Vega'}

			  { /* Display an element through a variable. Det är som att vi skriver ut <h1>Hello this is an Javascript element</h1> här */}
			  {element1}

			  {element2}

			  { /* Display an element through a function. Om vi tar bort user och behåller () då kommer "Hello stranger"*/}
			  {getGreeting(user)} 
		</div>
	</div>
  )
}

	/*{	<div className='greeting'>Välkommen denna uppdateras i App.js</div>

		{ //När man vill använda sig av Javascript, så lindar man in funktionen i curlybrackets (precis som detta exempel)
			React.createElement(
				'div',
				{className: 'greeting'},
				'Detta ändras också i App.js, fast med React.createElement()'
			)
		}	
	</div>} */

export default Jsx /* Denna komponent importeras i App.js inom function App() */

