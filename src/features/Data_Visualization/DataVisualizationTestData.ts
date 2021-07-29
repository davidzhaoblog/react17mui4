// 1. Line Chart
export interface TwoDimensionLinearChartTestDataType {
    year: number,
    amount: number
}

export const getTwoDimensionLinearChartTestData = (name: string, max = 10) => {
    const data = {
        id: name,
        data: [] as TwoDimensionLinearChartTestDataType[]
    };
    for (let x = 0; x < 10; x++) {
        data.data[x] = { year: 2010 + x, amount: Math.random() * 100 };
    }
    // console.log(data);
    return data;
};

// 2. Block Heatmap
export interface BlockHeatmapChartTestDataType {
    name: number,
    day: number,
    sales: number
}

export const getBlockHeatmapChartTestData = (name: string, max = 1) => {
    const data = {
        id: name,
        data: [] as BlockHeatmapChartTestDataType[]
    };
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 7; y++) {
            data.data[x * 7 + y] = { name: x, day: y, sales: Math.floor(Math.random() * max) };
        }
    }
    // console.log(data);
    return data;
};

// 3. Heatmap
export interface HeatmapChartTestDataType {
    x: number,
    y: number,
    amount: number
}

export const getHeatmapChartTestData = (name: string, maxx = 1000, maxy = 1000, max = 1) => {
    const data = {
        id: name,
        data: [] as HeatmapChartTestDataType[]
    };
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            data.data[x * 10 + y] = { x: Math.random() * maxx, y: Math.random() * maxy, amount: Math.floor(Math.random() * max) };
        }
    }
    // console.log(data);
    return data;
};

// 4. Sankey
export interface SankeyChartTestNodeDataType {
    name: string
}

export interface SankeyChartTestLinkDataType {
    source: number,
    target: number,
    value: number
}

export const getSankeyChartTestData = (name: string, max = 1) => {
    const data = {
        id: name,
        nodes: [{ name: 'Brazil' }, { name: 'Portugal' }, { name: 'France' }, { name: 'Spain' }, { name: 'England' }, { name: 'Canada' }, { name: 'Mexico' }, { name: 'USA' }, { name: 'Angola' }, { name: 'Morocco' }, { name: 'South Africa' }, { name: 'Mali' }, { name: 'China' },{ name: 'India' },{ name: 'Japan' },{ name: 'German' },{ name: 'Great Britain' },{ name: 'France' },{ name: 'Egypt' },] as SankeyChartTestNodeDataType[],
        links: [] as SankeyChartTestLinkDataType[]
    };

    let linkIndex = 0;
    for (let x = 0; x < 3; x++) {
        for (let y = 3; y < 8; y++) {
            data.links[linkIndex++] = { source: x, target: y, value: Math.floor(Math.random() * max) };
        }
    }
    for (let x = 3; x < 8; x++) {
        for (let y = 8; y < 11; y++) {
            data.links[linkIndex++] = { source: x, target: y, value: Math.floor(Math.random() * max) };
        }
    }
    for (let x = 8; x < 11; x++) {
        for (let y = 11; y < 19; y++) {
            data.links[linkIndex++] = { source: x, target: y, value: Math.floor(Math.random() * max) };
        }
    }
    console.log(data);
    return data;
};


export const lineChartTestData = getTwoDimensionLinearChartTestData("Line Chart", 10);
export const blockHeatmapChartTestData =  getBlockHeatmapChartTestData("Block Heatmap", 1000);
export const heatmapChartTestData =  getHeatmapChartTestData("Heatmap", 1000, 1000, 1000);
export const sankeyChartTestData = getSankeyChartTestData("Sankey", 10);
