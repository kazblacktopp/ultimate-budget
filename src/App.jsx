import { useState } from 'react';
import SideBar from './components/SideBar';

export default function App() {
	const [selectedPage, setSelectedPage] = useState(undefined);

	function handleMenuItemSelection(menuSelection) {
		setSelectedPage(menuSelection);
	}

	let content = (
		<h2 className="mt-4 text-center font-display text-2xl">
			{selectedPage}
		</h2>
	);

	if (selectedPage === undefined) {
		content = (
			<h2 className="mt-4 text-center font-display text-2xl">
				Welcome to Ultimate Budget
			</h2>
		);
	}

	return (
		<div className="flex h-screen w-screen">
			<SideBar
				onMenuSelection={handleMenuItemSelection}
				selection={selectedPage}
			/>
			<main className="w-4/5">{content}</main>
		</div>
	);
}

