import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import "./App.scss";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<NavBar />
			<Carta titulo='hola' contenido='lorem' />
		</div>
	);
}

function NavBar() {
	return (
		<header>
			<nav className='nav-bar'>
				<span className='nav-bar__mensaje'>icon.png</span>
			</nav>
		</header>
	);
}

function Inicio() {
	return (
		<section className='inicio'>
			<span className='inicio__titulo'>Bryan Page</span>
		</section>
	);
}

function Carta({
	titulo = "titulo",
	contenido = "contenido",
	fecha = new Date(),
}: {
	titulo?: string | undefined;
	contenido?: string | undefined;
	fecha?: Date | undefined;
}): JSX.Element {
	return (
		<article className='carta'>
			<h2 className='carta__titulo'>{titulo}</h2>
			<span className='carta__fecha'>{fecha.toDateString()}</span>
			<p className='carta__contenido'>{contenido}</p>
		</article>
	);
}

export default App;
