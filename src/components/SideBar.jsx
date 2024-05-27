export default function SideBar({ menuItems, onMenuSelection, selection }) {
	let menuItemHoverStyles = 'hover:font-medium hover:text-slate-800';

	return (
		<div className="flex h-full basis-1/5 flex-col justify-between rounded-e-3xl bg-blue-300 text-center font-display">
			<h1
				className="mb-auto mt-6 cursor-pointer px-4 text-2xl font-medium text-slate-700 hover:text-slate-800"
				onClick={() => onMenuSelection(null)}
			>
				Ultimate Budget
			</h1>
			<ul className="my-auto flex flex-col gap-6 text-xl text-slate-600">
				{menuItems.map((item, index) => {
					return (
						<li
							key={index}
							className={`cursor-pointer ${
								selection === item
									? 'font-medium text-slate-800'
									: menuItemHoverStyles
							}`}
							onClick={() => onMenuSelection(item)}
						>
							{item}
						</li>
					);
				})}
			</ul>
			<div
				className={`mb-8 mt-auto cursor-pointer text-slate-600 ${menuItemHoverStyles}`}
			>
				Log Out
			</div>
		</div>
	);
}
