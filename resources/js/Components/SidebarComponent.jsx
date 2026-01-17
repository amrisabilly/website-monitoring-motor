import { HomeIcon, CalendarIcon, DocumentTextIcon, TruckIcon, ChartBarIcon, UserIcon, ArchiveBoxIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function SidebarComponent({ open = true }) {
	return (
		<aside
			className={`bg-light min-h-screen flex flex-col shadow-lg text-primary font-poppins transition-all duration-200 z-30
				${open ? 'w-64' : 'w-0 overflow-hidden'}
			`}
			style={{ minWidth: open ? 256 : 0 }}
		>
			<nav className={`flex-1 p-4 ${open ? '' : 'hidden'}`}>
				<ul className="space-y-2">
					{/* Home */}
					<li>
						<a href="/dashboard" className="flex items-center py-2 px-4 rounded bg-primary text-white font-semibold text-lg gap-3">
							<HomeIcon className="w-6 h-6" />
							Home
						</a>
					</li>
				</ul>
				{/* Operational Group */}
				<div className="mt-6 mb-2 text-primary font-bold text-base">Operational</div>
				<ul className="space-y-2 mb-6">
					<li>
						<a href="#" className="flex items-center py-2 px-4 rounded hover:bg-primary-light gap-3">
							<CalendarIcon className="w-6 h-6" />
							<span className="text-primary">Schedule</span>
						</a>
					</li>
					<li>
						<a href="#" className="flex items-center py-2 px-4 rounded hover:bg-primary-light gap-3">
							<DocumentTextIcon className="w-6 h-6" />
							<span className="text-primary">Orders</span>
						</a>
					</li>
					<li>
						<a href="#" className="flex items-center py-2 px-4 rounded hover:bg-primary-light gap-3">
							<TruckIcon className="w-6 h-6" />
							<span className="text-primary">Cars</span>
						</a>
					</li>
					<li>
						<a href="#" className="flex items-center py-2 px-4 rounded hover:bg-primary-light gap-3">
							<ChartBarIcon className="w-6 h-6" />
							<span className="text-primary">Statistics</span>
						</a>
					</li>
				</ul>
				{/* Settings Group */}
				<div className="mb-2 text-primary font-bold text-base">Settings</div>
				<ul className="space-y-2">
					<li>
						<a href="#" className="flex items-center py-2 px-4 rounded hover:bg-primary-light gap-3">
							<UserIcon className="w-6 h-6" />
							<span className="text-primary">Users</span>
						</a>
					</li>
					<li>
						<a href="#" className="flex items-center py-2 px-4 rounded hover:bg-primary-light gap-3">
							<ArchiveBoxIcon className="w-6 h-6" />
							<span className="text-primary">Backup</span>
						</a>
					</li>
					<li>
						<a href="#" className="flex items-center py-2 px-4 rounded hover:bg-primary-light gap-3">
							<LockClosedIcon className="w-6 h-6" />
							<span className="text-primary">Privacy</span>
						</a>
					</li>
				</ul>
			</nav>
		</aside>
	);
}
