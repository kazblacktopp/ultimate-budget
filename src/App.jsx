import { useState } from 'react';
import SideBar from './components/SideBar';

const MENU_ITEMS = ['Income', 'Expenses', 'Budget', 'Savings'];

export default function App() {
	const [selectedPage, setSelectedPage] = useState(null);

	function handleMenuItemSelection(menuSelection) {
		setSelectedPage(menuSelection);
	}

	let content = (
		<h2 className="mt-4 text-center font-display text-2xl">
			{selectedPage}
		</h2>
	);

	if (!selectedPage) {
		content = (
			<h2 className="mt-4 text-center font-display text-2xl">
				Welcome to Ultimate Budget
			</h2>
		);
	}

	return (
		<div className="flex h-screen w-screen">
			<SideBar
				menuItems={MENU_ITEMS}
				onMenuSelection={handleMenuItemSelection}
				selection={selectedPage}
			/>
			<main className="w-4/5">{content}</main>
		</div>
	);
}

