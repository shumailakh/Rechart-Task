import React from 'react'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { data } from '../../Data/EmpolyeeData';
// const data = [
//     {
//       name: '18-24',
//       uv: 31.47,
//       pv: 2400,
//       fill: '#8884d8',
//     },
//     {
//       name: '25-29',
//       uv: 26.69,
//       pv: 4567,
//       fill: '#83a6ed',
//     },
//     {
//       name: '30-34',
//       uv: 15.69,
//       pv: 1398,
//       fill: '#8dd1e1',
//     },
//     {
//       name: '35-39',
//       uv: 8.22,
//       pv: 9800,
//       fill: '#82ca9d',
//     },
//     {
//       name: '40-49',
//       uv: 8.63,
//       pv: 3908,
//       fill: '#a4de6c',
//     },

//   ];

const ScatterChartComponent = () => {
    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
      };
  return (
    <ResponsiveContainer width="100%" aspect={2}>
    <ComposedChart
      layout="vertical"
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" scale="band" />
      <Tooltip />
      <Legend />
      <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
  </ResponsiveContainer>
  )
}

export default ScatterChartComponent