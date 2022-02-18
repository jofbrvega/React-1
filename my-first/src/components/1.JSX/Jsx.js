import React from 'react'

function Jsx() {
  return (
    <div>
		<div className='greeting'>Välkommen denna uppdateras i App.js</div>
		{
			React.createElement(
				'div',
				{className: 'greeting'},
				'Detta ändras också i App.js, fast med React.createElement()'
			)
		}	
	</div>
  )
}

export default Jsx