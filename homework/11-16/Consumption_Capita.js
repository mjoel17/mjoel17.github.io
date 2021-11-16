d3.select("#Consumption_Capita")
  .on("mousemove", function() {

    var tooltip = d3.select("#tooltip")
      .style("display", "block")
      .style("top", d3.event.pageY + 20 + "px")
      .style("left", d3.event.pageX + 20 + "px");

    tooltip.select("#title").html("Puerto Rico´s Top Harvest");
    tooltip.select("#value").html("The data will be released soon.");

  })
  .on("mouseout", function() {
    d3.select("#tooltip")
      .style("display", "none");
  });