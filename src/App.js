import logo from './logo.svg';
import './App.css';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';


const data = [
  { name: 'Facebook', value: 1200000 },
  { name: 'Twitter', value: 300000 },
  { name: 'Instagram', value: 457000 },
  { name: 'Tiktok', value: 257000 },
];
const COLORS = ['#3b5998', '#1da1f2', '#c32aa3', '#010101'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const App = () => {

 

    return (
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip/>
          </PieChart>
    );
  };


export default App;
