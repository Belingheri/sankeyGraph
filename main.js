google.charts.load("current", { packages: ["sankey"] });
google.charts.setOnLoadCallback(drawChart);

const myData = {
  televisore: [
    ["televisore", "schermo", 2],
    ["televisore", "scocca superiore", 10],
    ["televisore", "scocca inferiore", 5],

    ["scocca inferiore", "ferro", 3],
    ["scocca inferiore", "alluminio", 2],

    ["schermo", "vetro", 1.5],
    ["schermo", "zinco", 0.5],

    ["scocca superiore", "zinco", 2],
    ["scocca superiore", "parziale inferiorie", 2],
    ["scocca superiore", "parziale superiore", 6],

    ["parziale inferiorie", "ferro", 1],
    ["parziale inferiorie", "alluminio", 1],

    ["parziale superiore", "alluminio", 5],
    ["parziale superiore", "ferro", 1],
  ],
  pippo: [
    ["pippo", "televisore", 17],
    ["pippo", "vetro", 5],

    ["televisore", "schermo", 2],
    ["televisore", "scocca superiore", 10],
    ["televisore", "scocca inferiore", 5],

    ["scocca inferiore", "ferro", 3],
    ["scocca inferiore", "alluminio", 2],

    ["schermo", "vetro", 1.5],
    ["schermo", "zinco", 0.5],

    ["scocca superiore", "zinco", 2],
    ["scocca superiore", "parziale inferiorie", 2],
    ["scocca superiore", "parziale superiore", 6],

    ["parziale inferiorie", "ferro", 1],
    ["parziale inferiorie", "alluminio", 1],

    ["parziale superiore", "alluminio", 5],
    ["parziale superiore", "ferro", 1],
  ],
  pluto: [
    ["pluto", "pippo", 19],
    ["pluto", "scocca superiore", 10],

    ["pippo", "televisore", 17],
    ["pippo", "vetro", 5],

    ["televisore", "schermo", 2],
    ["televisore", "scocca superiore", 10],
    ["televisore", "scocca inferiore", 5],

    ["scocca inferiore", "ferro", 3],
    ["scocca inferiore", "alluminio", 2],

    ["schermo", "vetro", 1.5],
    ["schermo", "zinco", 0.5],

    ["scocca superiore", "zinco", 2],
    ["scocca superiore", "parziale inferiorie", 2],
    ["scocca superiore", "parziale superiore", 6],

    ["parziale inferiorie", "ferro", 1],
    ["parziale inferiorie", "alluminio", 1],

    ["parziale superiore", "alluminio", 5],
    ["parziale superiore", "ferro", 1],
  ],
};

document.getElementById("distinta").onchange = drawChart;

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "DA");
  data.addColumn("string", "A");
  data.addColumn("number", "Kg");

  const idx = document.getElementById("distinta").value;

  document.getElementById("desc_distinta").textContent = idx;

  data.addRows(myData[idx]);

  var colors = [
    "#a6cee3",
    "#b2df8a",
    "#fb9a99",
    "#fdbf6f",
    "#cab2d6",
    "#ffff99",
    "#1f78b4",
    "#33a02c",
  ];

  var options = {
    sankey: {
      node: {
        label: {
          fontSize: 25,
        },
        nodePadding: 80,
        link: { color: { stroke: "black", strokeWidth: 1 } },
      },

      link: {
        colorMode: "target",
        /**
         * Sets a coloring mode for the links between nodes. Possible values:

    'source' - The color of the source node is used for the links to all target nodes.
    'target' - The color of the target node is used for the link to its source nodes.
    'gradient' - The link between a source and target node is colored as a gradient from the source node color to the target node color.
    'none' - the default option; link colors will be set to the default (or a color as specified by the sankey.link.color.fill and sankey.link.color.fillOpacity options).

         */
      },
    },
    height: 800,
  };

  // Instantiates and draws our chart, passing in some options.
  var chart = new google.visualization.Sankey(
    document.getElementById("sankey_basic")
  );
  chart.draw(data, options);
}
