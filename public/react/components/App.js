import React, { useState, useEffect } from 'react';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	return (
		<main className='Adjust'>
				<button className='Bt'>
					All data
				</button>

				<button className='Bt'>
					Delete data
				</button>

				<button className='Bt'>
					Add item
				</button>

				<button className='Bt'>
					Update item
				</button>
		</main>
	)
}

module.exports = {App}