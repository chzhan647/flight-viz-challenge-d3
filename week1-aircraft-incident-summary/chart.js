//Reference to Newline.co D3 courses 
async function drawLineChart() {
// 1. Create chart parameters 
let dimensions = {
    width: window.innerWidth * 0.9,
    height: 200,
    margin: {
      top: 15,
      right: 15,
      bottom: 40,
      left: 60,
    },
  }
  dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
  dimensions.boundedHeight = dimensions.height - dimensions.margin.top  - dimensions.margin.bottom
// 2. Access data and parse information 

  try {
    const data = await d3.csv("../data/year_count.csv")
    console.log(data)

    const x = d => dataParser(d.UTC_YEAR)
    const y = d => d.count 
    const dateParser = d3.timeParse("%Y")

  } catch (error) {
    console.error("An error occurred while loading the CSV file:", error);
  }



//3. Set ranges 
const yScale = d3.scaleLinear()
.domain(d3.extent(dataset, y))
.range([dimensions.boundedHeight, 0])

const xScale = d3.scaleTime()
.domain(d3.extent(dataset, x))
.range([0, dimensions.boundedWidth])

// 4. Create SVG canvas with HTML element
const wrapper = d3.select("#wrapper")
  .append("svg")
    .attr("width", dimensions.width) //update the attribute of the element change the svg size 
    .attr("height",dimensions.height)


const bounds = wrapper.appeand("g") //group element for svg in a group 
  .style("transform",`translate(${
    dimensions.margins.left
  }px, ${
    dimensions,margins.top
  }px)`)


// Draw data elements 
const line = bounds.append("path")
  .attr("d")

}

drawLineChart()


