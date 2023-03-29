import React from 'react';
import { useState } from 'react';

import BottomRightHandle from "./CustomResizeHandle";
import GridLayout from "react-grid-layout";
import styled from "styled-components";
import "../../../node_modules/react-resizable/css/styles.css";
import "../../../node_modules/react-grid-layout/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import LineChartComponent from './LineChart';
import BarChartComponent from './BarChart';
import AreaChartComponent from './AreaCharts';
import ComposedChartComponent from './ComposedChart';

const ResponsiveGridLayout = WidthProvider(Responsive);



const GridItemWrapper = styled.div`
    background: #f5f5f5;
    
  `;

const GridItemContent = styled.div`
    padding: 8px;
    margin-top:20px
  `;

const Root = styled.div`
    padding: 16px;
  `;

const Charts = () => {

  const [items, setItems] = useState([
    { i: "January", x: 0, y: 0, w: 1, h: 1, chart: <LineChartComponent /> },
    { i: "Feburary", x: 1, y: 0, w: 1, h: 1, chart: <BarChartComponent /> },
    { i: "March", x: 2, y: 0, w: 1, h: 1, chart: <AreaChartComponent /> },
    { i: "April", x: 3, y: 0, w: 1, h: 1, chart: <ComposedChartComponent /> },

  ]);



  return (


    <Root>
      <ResponsiveGridLayout
        className="layout"

        layouts={{ lg: items }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 4, md: 4, sm: 3, xs: 2, xxs: 1 }}
        rowHeight={250}
        resizeHandles={["se"]}>

        {items.map((item) => {
          return (
            <div
              key={item.i}
              style={{ backgroundColor: "#f5f5f5" }}
              data-grid={{ x: item.x, y: item.y }}>

              <GridItemWrapper>
                <GridItemContent>
                  <div className="grid-item__title" style={{ paddingBottom: '20px' }}>
                    {item.i}
                  </div>
                  {item.chart}
                  <BottomRightHandle />
                </GridItemContent>

              </GridItemWrapper>

            </div>
          );
        })}


      </ResponsiveGridLayout>
    </Root>


  )
}

export default Charts
