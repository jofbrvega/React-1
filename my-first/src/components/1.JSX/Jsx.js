import React from 'react'

function Jsx() {
  return (
    <div>
		<div className='greeting'>Välkommen denna uppdateras i App.js</div>

		{ //När man vill använda sig av Javascript, så lindar man in funktionen i curlybrackets (precis som detta exempel)
			React.createElement(
				'div',
				{className: 'greeting'},
				'Detta ändras också i App.js, fast med React.createElement()'
			)
		}	
	</div>
  )
}

export default Jsx //Denna komponent importeras i App.js inom function App(). 