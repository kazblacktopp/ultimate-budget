import SideBar from './components/SideBar';

export default function App() {
	return (
		<div className="flex w-screen h-screen">
			<SideBar />
			<main>
				<h2>Main Window</h2>
			</main>
		</div>
	);
}

