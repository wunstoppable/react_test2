import * as d3 from 'd3'

var d3Chart = {};

d3Chart.create = function(el, props, data) {

    var width = props.width;
    var height = props.height;
    var dataset = data;

    var svg = d3.select(el).append('svg')
        .attr('class', 'd3')
        .attr('width', props.width)
        .attr('height', props.height);

    // svg.append('g')
    //     .attr('class', 'd3-points');

    //画布周边的空白
    var padding = {left:30, right: 30, top: 20, bottom: 20};

    //定义一个数组
    // var dataset = [10, 20, 30, 40, 33, 24, 12, 5];

    //x轴的比例尺
    var xScale = d3.scaleBand()
        .domain(d3.range(dataset.length))//这种要传入整个数组
        .range([0, width - padding.left - padding.right]);

    console.log(d3.range(dataset.length))

    //y轴的比例尺
    var yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([height - padding.top - padding.bottom, 0]);//意思是0刻度在右边，或者下面

    //定义x轴
    var xAxis = d3.axisBottom(xScale);
    //定义y轴
    var yAxis = d3.axisLeft(yScale);

    //矩形之间的空白
    var rectPadding = 4;

    //添加矩形元素
    var rects = svg.selectAll(".myRect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("class","myRect")
        .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
        .attr("x", function (d, i) {
            return xScale(i) + rectPadding/2;
        })
        .attr("width", xScale.bandwidth() - rectPadding)
        .attr("fill", "steelblue")
        //设置动态效果
        .attr("y",function(d){
            var min = yScale.domain()[0];
            console.log(yScale(min))
            return yScale(min);
        })
        .attr("height", function(d){
            return 0;
        })

        //时间监听应该放在这里，不能放在transition下面
        .on("mouseover", function (d, i) {
            d3.select(this)
                .attr("fill", "yellow");
        })
        .on("mouseout", function (d, i) {
            d3.select(this)
                .transition()
                .duration(500)
                .attr("fill", "steelblue");
        })

        //动画效果
        .transition()
        .delay(function(d,i){
            return i * 200;
        })
        .duration(2000)
        .ease(d3.easeBounce)

        .attr("y", function (d) {
            return yScale(d);
        })
        .attr("height", function (d) {
            return height - padding.top - padding.bottom - yScale(d);
        })


    //添加文字元素
    var texts = svg.selectAll('.myText')
        .data(dataset)
        .enter()
        .append("text")
        .attr("class", "myText")
        .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
        .attr("x", function (d, i) {
            return xScale(i) + rectPadding/2;
        })
        .attr("y", function (d) {
            return yScale(d);
        })
        .attr("dx", function () {
            return (xScale.bandwidth() - rectPadding)/2;
        })
        .attr("dy", function (d) {
            return 20;
        })
        .attr("fill", "white").attr("text-anchor", "middle")//css都可以在这里以attr方式设定
        .text(function (d) {
            return d;
        })
        .attr("y", function (d) {//加动态效果
            var min = yScale.domain()[0];
            return yScale(min)
        })
        .transition()
        .delay(function (d, i) {
            return i * 200;
        })
        .duration(2000)
        .ease(d3.easeBounce)
        .attr("y", function (d) {
            return yScale(d);
        })


    //添加X轴
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + padding.left + "," + (height - padding.bottom) + ")")
        .call(xAxis);

    //添加y轴
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
        .call(yAxis);

    // this.update(el, state);
};

// d3Chart.update = function(el, state) {
//     // Re-compute the scales, and render the data points
//     var scales = this._scales(el, state.domain);
//     this._drawPoints(el, scales, state.data);
// };

export default d3Chart;
