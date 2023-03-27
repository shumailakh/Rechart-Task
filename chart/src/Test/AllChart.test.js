import { render, fireEvent, screen } from "@testing-library/react";
import BarChartComponent from "../components/Charts/BarChart";
import ComposedChartComponent from "../components/Charts/ComposedChart";
import LineChartComponent from "../components/Charts/LineChart";
import AreaChartComponent from "../components/Charts/AreaCharts";

// jest.mock('recharts', () => {
//     const OriginalModule = jest.requireActual('recharts')
//     return {
//         ...OriginalModule,
//         ResponsiveContainer: ({ children }) => (
//             <OriginalModule.ResponsiveContainer width={800} height={800}>
//                 {children}
//             </OriginalModule.ResponsiveContainer>
//         ),
//     }
// })

const chartData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  
  ];
test("All Chart Components", () => {
    // render the component on virtual dom
    render(<BarChartComponent data={chartData}/>,<ComposedChartComponent  data={chartData}/>,<LineChartComponent  data={chartData}/>,<AreaChartComponent  data={chartData}/>);

});

