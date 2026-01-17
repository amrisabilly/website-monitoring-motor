
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, CartesianGrid, ReferenceLine, Dot } from 'recharts';

const stats = [
	{
		label: 'Customer',
		value: 20,
		percent: 8,
		color: '#00BFFF',
		data: [
			{ name: 'S', value: 10 },
			{ name: 'M', value: 20 },
			{ name: 'T', value: 30 },
			{ name: 'W', value: 32 },
			{ name: 'T', value: 32 },
			{ name: 'F', value: 42 },
			{ name: 'S', value: 45 },
		],
		yDomain: [10, 50],
	},
	{
		label: 'Orders',
		value: 27,
		percent: 8,
		color: '#FF6384',
		data: [
			{ name: 'S', value: 12 },
			{ name: 'M', value: 18 },
			{ name: 'T', value: 25 },
			{ name: 'W', value: 27 },
			{ name: 'T', value: 29 },
			{ name: 'F', value: 35 },
			{ name: 'S', value: 38 },
		],
		yDomain: [10, 50],
	},
	{
		label: 'Income',
		value: '$2000',
		percent: 8,
		color: '#8e44ad',
		data: [
			{ name: 'S', value: 200 },
			{ name: 'M', value: 400 },
			{ name: 'T', value: 800 },
			{ name: 'W', value: 1200 },
			{ name: 'T', value: 1500 },
			{ name: 'F', value: 1800 },
			{ name: 'S', value: 2000 },
		],
		yDomain: [200, 2100],
	},
	{
		label: 'Expenses',
		value: '$425',
		percent: 8,
		color: '#27ae60',
		data: [
			{ name: 'S', value: 50 },
			{ name: 'M', value: 100 },
			{ name: 'T', value: 200 },
			{ name: 'W', value: 250 },
			{ name: 'T', value: 300 },
			{ name: 'F', value: 400 },
			{ name: 'S', value: 425 },
		],
		yDomain: [0, 500],
	},
];

export default function Statistic() {
	return (
		<div>
			<div className="flex items-center justify-between mb-2">
				<h2 className="font-bold text-lg text-primary">Statistics</h2>
				<button className="flex items-center gap-1 px-2 py-1 border rounded text-xs text-primary border-primary bg-primary-light font-medium">
					Post 7 days
					<svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke="#0053AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
				</button>
			</div>
			<div className="grid grid-cols-2 gap-2">
				{stats.map((s, i) => (
					<div key={i} className="bg-primary-light rounded-lg p-3 flex flex-col gap-1 min-h-[150px]">
						<div className="flex items-center justify-between mb-1">
							<span className="text-xs font-bold text-slate-700">{s.label}</span>
							<span className="text-xs text-green-600 font-bold">↑ {s.percent}%</span>
						</div>
						<div className="font-bold text-2xl text-slate-900 mb-1">{s.value}</div>
						<div style={{ width: '100%', height: 70 }}>
							<ResponsiveContainer width="100%" height={70}>
								<AreaChart data={s.data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
									<CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
									<XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#bbb' }} dy={8} />
									<YAxis domain={s.yDomain} axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#bbb' }} width={20} dx={-5} />
									<defs>
										<linearGradient id={`color${i}`} x1="0" y1="0" x2="0" y2="1">
											<stop offset="5%" stopColor={s.color} stopOpacity={0.15}/>
											<stop offset="95%" stopColor={s.color} stopOpacity={0}/>
										</linearGradient>
									</defs>
									{/* Garis putus-putus vertikal di tengah */}
									<ReferenceLine x="W" stroke="#bbb" strokeDasharray="4 2" />
									{/* Area dan garis utama */}
									<Area type="monotone" dataKey="value" stroke={s.color} fill={`url(#color${i})`} strokeWidth={2} dot={false} />
									{/* Titik besar di W */}
									<Area
										dataKey="value"
										stroke="none"
										fill="none"
										dot={({ cx, cy, payload }) =>
											payload.name === 'W' ? (
												<circle cx={cx} cy={cy} r={6} fill="#fff" stroke={s.color} strokeWidth={3} />
											) : null
										}
									/>
								</AreaChart>
							</ResponsiveContainer>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
