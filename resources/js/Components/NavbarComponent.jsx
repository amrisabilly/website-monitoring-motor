import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';
import { FaMotorcycle } from 'react-icons/fa';

export default function NavbarComponent({ onToggleSidebar }) {
	return (
		<nav className="h-14 bg-white border-b flex items-center justify-between px-4 shadow-sm select-none">
			{/* Kiri */}
			<div className="flex items-center gap-4">
				<button
					className="p-2 rounded hover:bg-slate-100 text-primary focus:outline-none"
					onClick={onToggleSidebar}
				>
					<Bars3Icon className="w-6 h-6" />
				</button>
				<div className="flex items-center gap-1">
					<FaMotorcycle className="w-6 h-6 text-primary" />
					<span className="font-bold text-primary text-base">Rent Co.</span>
				</div>
			</div>
			{/* Kanan */}
			<div className="flex items-center gap-4">
				<button className="relative p-2 rounded hover:bg-slate-100 text-primary focus:outline-none">
					<BellIcon className="w-5 h-5" />
				</button>
				<div className="flex items-center gap-2">
					<img
						src="https://randomuser.me/api/portraits/men/32.jpg"
						alt="User Avatar"
						className="w-8 h-8 rounded-full border-2 border-primary object-cover"
					/>
					<div className="flex flex-col leading-tight">
						<span className="font-semibold text-primary text-sm">Diky</span>
						<span className="text-xs text-slate-400 -mt-1">Admin</span>
					</div>
				</div>
			</div>
		</nav>
	);
}
