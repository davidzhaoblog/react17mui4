import { Chart } from "bizcharts";
import DataSet from "@antv/data-set";
import { blockHeatmapChartTestData, heatmapChartTestData, lineChartTestData, sankeyChartTestData, SankeyChartTestLinkDataType, SankeyChartTestNodeDataType } from "./DataVisualizationTestData";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

// 1. Line Chart
import { LineAdvance } from "bizcharts";

// 2. Block Heatmap
import {
  Tooltip,
  Axis,
  Interaction,
  Polygon
} from 'bizcharts';

// 3. Heatmap
import {
  Legend,
  Heatmap
} from 'bizcharts';

// 4. Sankey
import {
  Geom,
  View,
} from "bizcharts";

export default function DataVisualizationBizCharts4111() {
  const height = 350;
  const width = 300;
  // 1. Line Chart
  const renderLineChart = () => (
    <Chart
      height={height}
      width={width}
      data={lineChartTestData.data}
    >
      <LineAdvance position="year*amount" />
    </Chart>
  )

  // 2. Block Heatmap
  const blockHeatmapChartScale = {
    name: {
      type: 'cat',
      values: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura'],
    },
    day: {
      type: 'cat',
      values: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    sales: {
      nice: true,
    }
  };
  const renderBlockHeatmapChart = () => {
    return (
      <Chart
        scale={blockHeatmapChartScale}
        height={height}
        width={width}
        data={blockHeatmapChartTestData.data}
        pure
        title={{
          visible: true,
          text: blockHeatmapChartTestData.id,
        }}
      >
        <Axis
          name={'name'}
          tickLine={null}
          grid={{
            alignTick: false,
            line: {
              style: {
                lineWidth: 1,
                lineDash: null,
                stroke: '#f0f0f0',
              },
            },
          }}
        />
        <Axis
          name={'day'}
          title={null}
          grid={{
            alignTick: false,
            line: {
              style: {
                lineWidth: 1,
                lineDash: null,
                stroke: '#f0f0f0',
              },
            },
          }}
        />
        <Tooltip shared showMarkers={false} />
        <Polygon
          position={'name*day'}
          color={['sales', '#BAE7FF-#1890FF-#0050B3']}
          label={['sales', {
            offset: -2,
            style: {
              fill: '#fff',
              shadowBlur: 2,
              shadowColor: 'rgba(0, 0, 0, .45)',
            },
          }]}
          style={{
            lineWidth: 1,
            stroke: '#fff',
          }}
        >
        </Polygon>
        <Interaction type={'element-active'} />
      </Chart>
    );
  }

  // 3. Heatmap
  const renderHeatMap = () => {
    return (
      heatmapChartTestData.data.length ? <Chart
        height={height}
        width={width}
        padding={[10, 40, 40, 40]}
        data={heatmapChartTestData.data}
        scale={{
          tmp: { nice: true }
        }}
        title={{
          visible: true,
          text: heatmapChartTestData.id,
        }}
      >
        <Tooltip
          showTitle={false}
        />
        <Axis visible={false} />
        <Legend offsetX={10} />
        <Heatmap position={'x*y'} color={['amount', '#F51D27-#EA541C-#DF8C12-#CFC838-#BAFFA8-#80FF73-#12CCCC-#1890FF-#3EF2C2']} />
      </Chart> : null
    );
  }

  // 4. Sankey
  const getSankeyDataView = (data: { nodes: SankeyChartTestNodeDataType[], links: SankeyChartTestLinkDataType[] }) => {
    const ds = new DataSet();
    const dv = ds.createView().source(data, {
      type: "graph",
      edges: (d) => d.links,
    });
    dv.transform({
      type: "diagram.sankey",
    });
    //console.log("dataView", dv);
    return dv;
  };
  const scale = {
    x: {
      sync: true,
    },
    y: {
      sync: true,
    },
  };
  const dataView = getSankeyDataView(sankeyChartTestData);

  const renderSankey = () => {
    console.log(dataView);
    return (
      dataView && (
        <Chart
          height={height}
          width={width * 2}
          data={[1]}
          scale={scale}
          padding={[40, 80]}
          title={{
            visible: true,
            text: sankeyChartTestData.id,
          }}
        >
          <Tooltip showTitle={false} />
          <Axis name="x" visible={false} />
          <Axis name="y" visible={false} />
          <View padding={0} data={dataView.edges}>
            <Geom
              type="edge"
              position="x*y"
              shape="arc"
              color="#bbb"
              opacity={0.6}
            />
          </View>
          <View padding={0} data={dataView.nodes}>
            <Geom
              type="polygon"
              position="x*y"
              style={{
                stroke: "#ccc",
              }}
              label={["name", {
                style: { fill: '#666' }
              }]}
            >
            </Geom>
          </View>
        </Chart>
      )
    );
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-basic1.15..1">
        <Typography>Basic 1.15.1. Data Visualization: BizCharts^4.1.11</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <>Line Chart
          {renderLineChart()}
        </>
        <>Block Heatmap
          {renderBlockHeatmapChart()}
        </>
        <>Heatmap
          {renderHeatMap()}
        </>
        <>Sankey
          {renderSankey()}
        </>
      </AccordionDetails>
      <AccordionDetails>
        <>Line Chart
          {renderLineChart()}
        </>
        <>Block Heatmap
          {renderBlockHeatmapChart()}
        </>
        <>Heatmap
          {renderHeatMap()}
        </>
        <>Sankey
          {renderSankey()}
        </>
      </AccordionDetails>
    </Accordion>
  );
};
