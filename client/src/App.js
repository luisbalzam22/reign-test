import './scss/App.scss';
import Posts from './components/Posts';

function App() {
	return (
		<div className='App'>
			<header className='app-header'>
				<h1>HN Feed</h1>
				<p>We &lt;3 hacker news!</p>
			</header>
			<Posts />
		</div>
	);
}

export default App;
