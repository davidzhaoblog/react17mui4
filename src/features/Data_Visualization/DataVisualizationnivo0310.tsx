import { blockHeatmapChartScale, getBlockHeatmapChartTestData, getSankeyChartTestData, getTwoDimensionLinearChartTestData, heatmapChartTestData, SankeyChartTestLinkDataType, SankeyChartTestNodeDataType } from "./DataVisualizationTestData";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import _ from "lodash";

// 1. Line Chart
import { ResponsiveLine } from "@nivo/line";

// 2. Block Heatmap
import { ResponsiveHeatMap } from "@nivo/heatmap";

// 3. Heatmap
// nivo is not providing Heatmap

// 4. Sankey
import { ResponsiveSankey, Data as SankeyData } from "@nivo/sankey";

export default function DataVisualizationnivo0310() {
  const height = 350;
  const width = 300;
  // 1. Line Chart
  const lineChartTestData = getTwoDimensionLinearChartTestData("Line Chart", 10);
  const lineChartTestDataTransformed = [
    {
      id: lineChartTestData.id,
      data: lineChartTestData.data.map(item => { return { x: item.year, y: item.amount } })
    }];

  const commonProperties = {
    width: width,
    height: height,
    margin: { top: 50, right: 50, bottom: 50, left: 50 },
    animate: true,
    labelTextColor: "Red"
  };

  const renderLineChart = () => {
    return (
      <ResponsiveLine
        margin={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }}
        {...commonProperties}
        data={lineChartTestDataTransformed}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", stacked: false, min: 0 }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 7,
          tickRotation: 0,
          legend: "year",
          legendOffset: 40,
          legendPosition: "middle",
          format: value => value
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 7,
          tickRotation: 0,
          legend: "amount",
          legendOffset: -40,
          legendPosition: "middle",
          format: value => value
        }}
      />
    )
  }

  // 2. Block Heatmap
  const blockHeatmapChartTestData = getBlockHeatmapChartTestData("Block Heatmap", 1000);
  const salesColors = ['hsl(148, 70%, 50%)', 'hsl(282, 70%, 50%)', 'hsl(253, 70%, 50%)'];
  //const salesColors = ['#BAE7FF', '#1890FF', '#0050B3'];
  const solesColorInterval = 334; // max is 1000, split into 3 colors
  const blockHeatmapChartTestDataGroupedResult = _.chain(blockHeatmapChartTestData.data)
    .groupBy((item) => {
      return blockHeatmapChartScale.name.values[item.name];
    })
    .map((value, key) => ({ name: key, items: value })).value();

  const blockHeatmapChartTestDataTransformed = blockHeatmapChartTestDataGroupedResult.map((item, index) => {
    let dictDaySales = item.items
      .map(item => ({ day: blockHeatmapChartScale.day.values[item.day], sales: item.sales }))
      .reduce((result, curr, index, array) => ({ ...result,  [curr.day]: curr.sales, [curr.day + "Color"]: salesColors[Math.floor(curr.sales / solesColorInterval)] }), {});
    // let dict = { ...dictDaySales };
    dictDaySales['name'] = item.name;
    return dictDaySales;
  }
  );
  //console.log(blockHeatmapChartTestDataTransformed);

  const renderBlockHeatmapChart = () => (
    <ResponsiveHeatMap
      data={blockHeatmapChartTestDataTransformed}
      keys={blockHeatmapChartScale.day.values}
      indexBy="name"
      {...commonProperties}
    />
  );

  // 3. Heatmap: nivo is not providing Heatmap
  const renderHeatMap = () => {
    return (
      <Typography>nivo is not providing Heatmap</Typography>
    );
  }

  // 4. Sankey
  const commonPropertiesSankey = {
    width: width * 2,
    height: height,
    margin: { top: 50, right: 50, bottom: 50, left: 50 },
    animate: true,
    labelTextColor: "Red"
  };

  const getSankeyDataView = (input: { nodes: SankeyChartTestNodeDataType[], links: SankeyChartTestLinkDataType[] }): SankeyData => {
    if (!input)
      return null;
    const nodes = input.nodes.map(node => { return { id: node.name } });
    const links = input.links.map(item => { return { source: input.nodes[item.source].name, target: input.nodes[item.target].name, value: item.value }; });
    return {
      data: {
        nodes,
        links
      }
    };
  };
  const sankeyChartTestData = getSankeyChartTestData("Sankey", 10);

  const renderSankey = () => {
    const dataView = getSankeyDataView(sankeyChartTestData);
    return (
      dataView && (
        <ResponsiveSankey
          data={dataView.data}
          margin={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }}
          align="start"
          sort="ascending"
          colors={"#B0B0B0"}
          isInteractive={true}
          nodeOpacity={1}
          nodeThickness={18}
          nodeInnerPadding={3}
          nodeSpacing={5}
          nodeBorderWidth={0}
          nodeBorderColor="inherit:darker(0.8)"
          linkOpacity={0.5}
          linkHoverOthersOpacity={0.1}
          enableLinkGradient={false}
          nodeTooltip={node => <span>Custom tooltip for node: {node.id}</span>}
          linkTooltip={node => (
            <span>
              Custom tooltip for link: {node.source.label} to{" "}
              {node.target.label}
            </span>
          )}
          labelPosition="inside"
          labelOrientation="horizontal"
          labelPadding={0}
          labelTextColor="inherit:darker(1)"
          animate={true}
          motionStiffness={140}
          motionDamping={13}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              translateX: 130,
              itemWidth: 100,
              itemHeight: 14,
              itemDirection: "right-to-left",
              itemsSpacing: 2,
              itemTextColor: "#999999",
              symbolSize: 14,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#999999"
                  }
                }
              ]
            }
          ]}
          {...commonPropertiesSankey}
        />
      )
    );
  }

  return (
    <Accordion style={{ height: "500px" }}>
      <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-basic1.15..2">
        <Typography>Basic 1.15.2. Data Visualization: nivo^0.31.0</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ height: "400px" }}>
        <>{lineChartTestData.id}
          {renderLineChart()}
        </>
        <>{blockHeatmapChartTestData.id}
          {renderBlockHeatmapChart()}
        </>
        <>{heatmapChartTestData.id}
          {renderHeatMap()}
        </>
        <>{sankeyChartTestData.id}
          {renderSankey()}
        </>
      </AccordionDetails>
    </Accordion>
  );
};
