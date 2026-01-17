const orders = [
	{
		id: '000012',
		car: 'Toyota Avanza 1.5 A/T',
		plate: 'B1234ABC',
		user: 'Chris',
		phone: '0812345678',
		date: '11 Jan 2021',
		status: 'In Use',
		avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
	},
	{
		id: '000010',
		car: 'Toyota Avanza 1.5 A/T',
		plate: 'B1234ABC',
		user: 'Chris',
		phone: '0812345678',
		date: '11 Jan 2021',
		status: 'In Use',
		avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
	},
];

export default function Order() {
	return (
		<div>
			<div className="flex items-center justify-between mb-2">
				<h2 className="font-bold text-lg text-primary">Orders</h2>
				<button className="text-xs text-primary font-medium">See All</button>
			</div>
			<div className="flex gap-2 mb-2">
				<button className="px-2 py-1 rounded text-xs font-medium bg-primary text-white">Ongoing</button>
				<button className="px-2 py-1 rounded text-xs font-medium bg-primary-light text-primary">Next 5 Days</button>
			</div>
			<div className="flex flex-col gap-2">
				{orders.map((o, i) => (
					<div key={i} className="bg-primary-light rounded-lg p-2 flex gap-2 items-center">
						<div className="flex flex-col flex-1">
							<span className="text-xs text-slate-500">{o.id}</span>
							<span className="font-semibold text-sm text-primary">{o.car}</span>
							<span className="text-xs text-slate-500">{o.plate}</span>
							<div className="flex items-center gap-2 mt-1">
								<img src={o.avatar} alt={o.user} className="w-6 h-6 rounded-full border border-primary object-cover" />
								<span className="text-xs text-primary font-medium">{o.user}</span>
								<span className="text-xs text-slate-500">{o.phone}</span>
								<span className="text-xs text-slate-500">{o.date}</span>
							</div>
						</div>
						<span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700 font-semibold">{o.status}</span>
					</div>
				))}
			</div>
		</div>
	);
}
