import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
      <NavBar />
      <Inicio />
		</div>
	);
}

function NavBar() {
	return (
		<header>
			<nav className='NavBar'>
				<span>icon.png</span>
			</nav>
		</header>
	);
}

function Inicio() {
	return (
		<section className='Inicio'>
			<span>Bryan Page</span>
		</section>
	);
}

export default App;
