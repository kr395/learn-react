import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NewApp from './NewApp'
import Hooks from './Hooks'
import Picker from './ColorPicker/Picker.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <App /> */}
    {/* <NewApp/> */}
    {/* <Hooks/> */}
    <Picker/>
	</React.StrictMode>
)