const schedules = [
	{
		car: 'Avanza B1234ABC',
		bars: [
			{ label: 'Tejo', color: 'bg-blue-400', start: 0, end: 2 },
			{ label: 'Budiman', color: 'bg-red-400', start: 2, end: 3 },
		],
	},
	{
		car: 'Avanza B1234ABC',
		bars: [
			{ label: 'Chris', color: 'bg-indigo-500', start: 1, end: 4 },
			{ label: 'Diana', color: 'bg-pink-400', start: 4, end: 5 },
		],
	},
	{
		car: 'Avanza B1234ABC',
		bars: [
			{ label: 'Alex', color: 'bg-green-400', start: 2, end: 4 },
			{ label: 'PT. Pinjam Mobil', color: 'bg-purple-400', start: 4, end: 5 },
		],
	},
];

export default function Schedule() {
	return (
		<div>
			<div className="flex items-center justify-between mb-2">
				<h2 className="font-bold text-lg text-primary">Schedule</h2>
				<div className="flex gap-1">
					<button className="px-2 py-1 rounded text-xs font-medium bg-primary-light text-primary">Day</button>
					<button className="px-2 py-1 rounded text-xs font-medium bg-primary-light text-primary">Week</button>
					<button className="px-2 py-1 rounded text-xs font-medium bg-primary-light text-primary">Month</button>
				</div>
			</div>
			<div className="overflow-x-auto">
				<table className="w-full text-xs">
					<thead>
						<tr>
							<th className="text-left py-1 px-2">Cars</th>
							{[1,2,3,4,5].map(w => (
								<th key={w} className="text-center py-1 px-2">W{w}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{schedules.map((row, i) => (
							<tr key={i} className="h-8">
								<td className="font-medium px-2 py-1 whitespace-nowrap">{row.car}</td>
								{[0,1,2,3,4].map(w => (
									<td key={w} className="relative px-2 py-1">
										{row.bars.map((bar, j) => (
											bar.start === w ? (
												<div key={j} className={`absolute left-0 top-1/2 -translate-y-1/2 h-5 rounded ${bar.color} text-white px-2 text-xs flex items-center`} style={{ width: `${(bar.end-bar.start)*60}px` }}>
													{bar.label}
												</div>
											) : null
										))}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
