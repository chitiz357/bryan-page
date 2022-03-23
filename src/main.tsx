import React from 'react'
import ReactDOM from 'react-dom'
import { Footer, NavBar } from './components';
import './style.scss';
import { Home } from './pages';

function App() {

	return (
		<div className='App'>
				<NavBar />
			<div className='container'>
        <Home />
        <Footer />
			</div>
		</div>
	);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
