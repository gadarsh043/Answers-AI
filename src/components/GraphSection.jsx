import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import './scss/GraphSection.scss';

const data = [
  { month: 'Apr', value: 23000, percentage: 4.6 },
  { month: 'May', value: 50000, percentage: 4.6 },
  { month: 'Jun', value: 42000, percentage: 4.6 },
  { month: 'Jul', value: 89600, percentage: 4.6, isNow: true },
  { month: 'Aug', value: 65000, percentage: 4.6 },
  { month: 'Sep', value: 35000, percentage: 4.6 },
  { month: 'Oct', value: 60000, percentage: 4.6 }
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <div className="tooltip-header">
          <span className="tooltip-value">${(data.value / 1000).toFixed(1)}k</span>
          <span className="tooltip-icon">ℹ️</span>
        </div>
        <div className="tooltip-percentage">
          {data.percentage}% above target
        </div>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

const CustomDot = (props) => {
  const { cx, cy, payload } = props;
  
  if (payload.isNow) {
    return (
      <>
        <circle cx={cx} cy={cy} r={6} fill="#a3e635" stroke="#1a1a1a" strokeWidth={2} />
        <text x={cx} y={cy + 25} textAnchor="middle" fill="#a3e635" fontSize={12} fontWeight="500">
          Now
        </text>
        <line x1={cx} y1={cy + 15} x2={cx} y2={300} stroke="#a3e635" strokeWidth={1} strokeDasharray="2,2" />
      </>
    );
  }
  
  return <circle cx={cx} cy={cy} r={3} fill="#a3e635" />;
};

CustomDot.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  payload: PropTypes.object,
};

function GraphSection() {
  return (
    <div className="graph-container">
      <div className="graph-header">
        <div className="graph-controls">
          <select className="graph-select">
            <option>Unsatisfied Demand %</option>
          </select>
        </div>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              tickFormatter={(value) => `$${value/1000}K`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="linear"
              dataKey="value" 
              stroke="#a3e635" 
              strokeWidth={2}
              dot={<CustomDot />}
              activeDot={{ r: 6, fill: '#a3e635' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default GraphSection; 