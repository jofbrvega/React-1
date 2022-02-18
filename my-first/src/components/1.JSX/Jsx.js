import React from 'react'

const element = <h1>Hello this is an Javascript element</h1>

let Jsx = () => {
  return (
    <div>
		<div>
		{ /* Display plain text */}
		{'Hello Johanna Vega'}

			  { /* Display an element through a variable. Det är som att vi skriver ut <h1>Hello this is an Javascript element</h1> här */}
			  {element}
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

