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
import ScatterChartComponent from './ScatterChart';
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
        { i: "Student A", x: 0, y: 0, w: 1, h: 1,chart:<LineChartComponent /> },
        { i: "Student B", x: 1, y: 0, w: 1, h: 1,chart:<BarChartComponent /> },
        { i: "Student C", x: 2, y: 0, w: 1, h: 1,chart:<AreaChartComponent /> },
        { i: "Student D", x: 3, y: 0, w: 1, h: 1,chart:<ComposedChartComponent /> },
        // { i: "Student E", x: 4, y: 0, w: 1, h: 1,chart:<ScatterChartComponent /> }
      ]);
 
     
    // const handleLayoutChange = (layout, layouts) => {
    //     localStorage.setItem("grid-layout", JSON.stringify(layouts));
    // };
    return (
        // <Container className='padding'>
        //     <Grid container spacing={2}>
        //     <Grid item xs={12} md={6}>
        //         <CardComponent className='card mt-5'>
        //             <CardHeader title="Enter Login Details" />

        //             <CardContent></CardContent>
        //         </CardComponent>
        //     </Grid>
        //     <Grid item xs={12} md={6}>
        //         <CardComponent className='card mt-5'>
        //             <CardHeader title="Enter Login Details" />

        //             <CardContent></CardContent>
        //         </CardComponent>
        //     </Grid>
        //     <Grid item xs={12} md={6}>
        //         <CardComponent className='card mt-5'>
        //             <CardHeader title="Enter Login Details" />

        //             <CardContent></CardContent>
        //         </CardComponent>
        //     </Grid>
        //     <Grid item xs={12} md={6}>
        //         <CardComponent className='card mt-5'>
        //             <CardHeader title="Enter Login Details" />

        //             <CardContent></CardContent>
        //         </CardComponent>
        //     </Grid>
        //     </Grid>

        // </Container>

        <Root>
            <ResponsiveGridLayout
            className="layout"
   
                layouts={{ lg: items }}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 4, md: 4, sm: 3, xs: 2, xxs: 1 }}
                rowHeight={250}
                // width={1000}
                // isDragable={true}
                resizeHandles={["se"]}



                
                // onLayoutChange={handleLayoutChange}
            >

{items.map((item) => {
        return (
          <div
            key={item.i}
            style={{ backgroundColor: "#f5f5f5" }}
            data-grid={{ x: item.x, y: item.y }}

          >

 <GridItemWrapper>
                    <GridItemContent>
                        <div className="grid-item__title" style={{paddingBottom:'20px'}}>
                        {item.i}
                        </div>
                        {item.chart}
                        <BottomRightHandle />
                    </GridItemContent>

                </GridItemWrapper>


             {/* <div className="grid-item__title">
             
                        </div> */}
            
          
         
         
            {/* <LineChartComponent /> */}
            {/* <BottomRightHandle /> */}
          </div>
        );
      })}



                {/* <GridItemWrapper key="blue-eyes-dragon">
                    <GridItemContent>
                        <div className="grid-item__title">
                           Student A
                        </div>
                        <LineChartComponent />
                        <BottomRightHandle />
                    </GridItemContent>

                </GridItemWrapper>
                <GridItemWrapper key="dark-magician">
                    <GridItemContent>Dark Magician</GridItemContent>
                    <BottomRightHandle />
                </GridItemWrapper>
                <GridItemWrapper key="kuriboh">
                    <GridItemContent>Kuriboh</GridItemContent>
                    <BottomRightHandle />
                </GridItemWrapper>
                <GridItemWrapper key="spell-caster">
                    <GridItemContent>Spell Caster</GridItemContent>
                    <BottomRightHandle />
                </GridItemWrapper>
                <GridItemWrapper key="summoned-skull">
                    <GridItemContent>Summoned Skull</GridItemContent>
                    <BottomRightHandle />
                </GridItemWrapper> */}
            </ResponsiveGridLayout>
        </Root>


    )
}

export default Charts





// import React from "react";
// import ReactDOM from "react-dom";
// import RGL, { WidthProvider } from "react-grid-layout";

// import "./Charts.css";

// const ReactGridLayout = WidthProvider(RGL);

// let idCounter = 0;

// const getId = () => {
//   idCounter++;

//   return idCounter.toString();
// };

// export class Charts extends React.PureComponent {
//   static defaultProps = {
//     isDraggable: true,
//     isResizable: true,
//     items: 5,
//     rowHeight: 30,
//     preventCollision: false,
//     cols: 12
//   };

//   state = {
//     layout: [
//       { x: 0, y: 0, w: 3, h: 3, i: getId() },
//       { x: 0, y: 1, w: 3, h: 3, i: getId() },
//       { x: 0, y: 0, w: 3, h: 3, i: getId() },
//       { x: 0, y: 1, w: 3, h: 3, i: getId() }
//     ]
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <button onClick={this.addNewItem}>Add item</button>
//         <ReactGridLayout
//           {...this.props}
//           onLayoutChange={layout => this.setState({ layout })}
//         >
//           {this.state.layout.map(item => (
//             <div key={item.i} data-grid={item}>
//               <span>shumaila</span>
//             </div>
//           ))}
//         </ReactGridLayout>
//       </React.Fragment>
//     );
//   }

//   addNewItem = () => {
//     const { layout } = this.state;
//     const newItem = { x: 0, y: 0, w: 3, h: 3, i: getId() };

//     if (layout.some(item => item.x === 0 && item.y === 0)) {
//       this.setState({
//         layout: layout
//           .map(item => {
//             if (item.x === 0) {
//               return { y: item.y++, ...item };
//             }

//             return item;
//           })
//           .concat([newItem])
//       });
//     } else {
//       this.setState({ layout: layout.concat([newItem]) });
//     }
//   };
// }

// export default Charts

// if (require.main === module) {
//   require("../test-hook.jsx")(module.exports);
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Charts />, rootElement);
