
import { useState } from 'react';
import NavbarComponent from '../Components/NavbarComponent';
import SidebarComponent from '../Components/SidebarComponent';

export default function MainLayout({ children }) {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	const handleToggleSidebar = () => setSidebarOpen((v) => !v);

	// Sidebar width (px)
	const sidebarWidth = sidebarOpen ? 256 : 0;
	const navbarHeight = 52; // 14 * 4 (rem to px)

	return (
		<div className="bg-slate-100">
			{/* Navbar fixed di atas */}
			<div
				className="fixed top-0 left-0 right-0 z-40"
				style={{ height: navbarHeight }}
			>
				<NavbarComponent onToggleSidebar={handleToggleSidebar} />
			</div>
			{/* Sidebar fixed di kiri */}
			<div
				className="fixed top-0 left-0 z-30 h-screen transition-all duration-200"
				style={{ width: sidebarWidth, marginTop: navbarHeight }}
			>
				<SidebarComponent open={sidebarOpen} />
			</div>
			<main
				className="overflow-auto"
				style={{
					marginLeft: sidebarWidth,
					marginTop: navbarHeight,
					transition: 'margin 0.2s',
					height: `calc(100vh - ${navbarHeight}px)`
				}}
			>
				{children}
			</main>
		</div>
	);
}
