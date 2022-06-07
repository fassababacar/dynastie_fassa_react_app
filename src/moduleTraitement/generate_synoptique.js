import * as go from 'gojs';
var nodeDataArray2 = [
	// Famille Khoudia
	{ key: "1", label: "Babacar FASSA", color: "orange", fig: "Actor" },
	{ key: "2", label: "Khoudia THIAM", color: "orange", fig: "Heart" },
	{ key: "3", label: "EUTOU KEUR Penda FASSA", color: "white", fig: "Ellipse", stroke: "#00ffff", isGroup: true, size: "2600 450" },
	{ key: "4", label: "EUTOU KEUR Mamadou FASSA", color: "white", fig: "Ellipse", stroke: "#4000ff", isGroup: true, size: "5200 450" },
	{ key: "5", label: "Fatsele FASSA", color: "white", fig: "Ellipse", stroke: "green" },
	{ key: "6", label: "EUTOU KEUR Saer FASSA", color: "white", fig: "Ellipse", stroke: "#ff00ff", isGroup: true, size: "2600 450" },
	{ key: "7", label: "EUTOU KEUR Yerim FASSA", color: "white", fig: "Ellipse", stroke: "#993300", isGroup: true, size: "1800 450" },
	{ key: "8", label: "EUTOU KEUR Abdou FASSA", color: "white", fig: "Ellipse", stroke: "#ff0040", isGroup: true, size: "540 450" },
	{ key: "9", label: "Oumar FASSA", color: "white", fig: "Ellipse", stroke: "green" },
	{ key: "10", label: "EUTOU KEUR Maniane FASSA", color: "white", fig: "Ellipse", stroke: "#9900ff", isGroup: true, size: "780 450" },
	{ key: "-1", label: "Amineta FASSA", color: "white", fig: "Ellipse", stroke: "green" },
	// Famille Penda
	{ key: "11", label: "Assane SOGUE", color: "#b3ffcc", fig: "Spade", stroke: "orange", group: "3" },
	{ key: "12", label: "Alioune MAR", color: "#99ffbb", fig: "Spade", stroke: "orange", group: "3" },
	{ key: "13", label: "Meud DIEYE", color: "#4dff88", fig: "Spade", stroke: "orange", group: "3" },
	{ key: "14", label: "Ali SOGUE", color: "#b3ffcc", fig: "FivePointedBurst", group: "3" },
	{ key: "15", label: "Yoni MAR", color: "#99ffbb", fig: "FivePointedBurst", group: "3" },
	{ key: "16", label: "Seyni MAR", color: "#99ffbb", fig: "FivePointedBurst", group: "3" },
	{ key: "17", label: "Khoudia MAR", color: "#99ffbb", fig: "FivePointedBurst", group: "3" },
	{ key: "18", label: "Mathiam MAR", color: "#99ffbb", fig: "FivePointedBurst", group: "3" },
	{ key: "19", label: "Zeinabou DIEYE", color: "#4dff88", fig: "FivePointedBurst", group: "3" },
	{ key: "20", label: "Sokhna DIEYE", color: "#4dff88", fig: "FivePointedBurst", group: "3" },
	{ key: "21", label: "Mamadou DIEYE", color: "#4dff88", fig: "FivePointedBurst", group: "3" },
	{ key: "22", label: "Fathiam DIEYE", color: "#4dff88", fig: "FivePointedBurst", group: "3" },
	{ key: "23", label: "Babacar DIEYE", color: "#4dff88", fig: "FivePointedBurst", group: "3" },
	// Famille Mamadou
	{ key: "24", label: "Marie FASSA", color: "#8cd9b3", fig: "Club", stroke: "orange", group: "4" },
	{ key: "25", label: "Astou MAR", color: "#53c68c", fig: "Club", stroke: "orange", group: "4" },
	{ key: "26", label: "Cheikh FASSA", color: "#8cd9b3", fig: "FivePointedBurst", group: "4" },
	{ key: "27", label: "Samba FASSA", color: "#8cd9b3", fig: "FivePointedBurst", group: "4" },
	{ key: "28", label: "Fatsele FASSA", color: "#8cd9b3", fig: "FivePointedBurst", group: "4" },
	{ key: "29", label: "Oumar FASSA", color: "#8cd9b3", fig: "FivePointedBurst", group: "4" },
	{ key: "30", label: "Penda FASSA", color: "#8cd9b3", fig: "FivePointedBurst", group: "4" },
	{ key: "31", label: "Mariema FASSA", color: "#8cd9b3", fig: "FivePointedBurst", group: "4" },
	{ key: "32", label: "Abderrahmane FASSA", color: "#8cd9b3", fig: "FivePointedBurst", group: "4" },
	{ key: "33", label: "Maodo FASSA", color: "#8cd9b3", fig: "FivePointedBurst", group: "4" },
	{ key: "34", label: "Amar FASSA", color: "#8cd9b3", fig: "FivePointedBurst", group: "4" },
	{ key: "35", label: "Cheikhan FASSA", color: "#8cd9b3", fig: "FivePointedBurst", group: "4" },
	{ key: "36", label: "Fama FASSA", color: "#8cd9b3", fig: "FivePointedBurst", group: "4" },
	{ key: "37", label: "Babacar FASSA", color: "#53c68c", fig: "FivePointedBurst", group: "4" },
	{ key: "38", label: "Khoudia FASSA", color: "#53c68c", fig: "FivePointedBurst", group: "4" },
	{ key: "39", label: "Marie FASSA", color: "#53c68c", fig: "FivePointedBurst", group: "4" },
	{ key: "40", label: "Amineta FASSA", color: "#53c68c", fig: "FivePointedBurst", group: "4" },
	{ key: "41", label: "Ndéye FASSA", color: "#53c68c", fig: "FivePointedBurst", group: "4" },
	{ key: "42", label: "Maniane FASSA", color: "#53c68c", fig: "FivePointedBurst", group: "4" },
	{ key: "43", label: "Fatouyama FASSA", color: "#53c68c", fig: "FivePointedBurst", group: "4" },
	{ key: "44", label: "Abdou FASSA", color: "#53c68c", fig: "FivePointedBurst", group: "4" },
	{ key: "45", label: "Aicha FASSA", color: "#53c68c", fig: "FivePointedBurst", group: "4" },
	// Famille Saer
	{ key: "46", label: "Dior DIEYE", color: "#b3cccc", fig: "Club", stroke: "orange", group: "6" },
	{ key: "47", label: "Coumba Nor DIASSE", color: "#5c8a8a", fig: "Club", stroke: "orange", group: "6" },
	{ key: "48", label: "Roghaya FASSA", color: "#b3cccc", fig: "FivePointedBurst", group: "6" },
	{ key: "49", label: "Alioune FASSA", color: "#b3cccc", fig: "FivePointedBurst", group: "6" },
	{ key: "50", label: "Amineta FASSA", color: "#b3cccc", fig: "FivePointedBurst", group: "6" },
	{ key: "51", label: "Awa FASSA", color: "#b3cccc", fig: "FivePointedBurst", group: "6" },
	{ key: "52", label: "Atta FASSA", color: "#b3cccc", fig: "FivePointedBurst", group: "6" },
	{ key: "53", label: "Babacar FASSA", color: "#b3cccc", fig: "FivePointedBurst", group: "6" },
	{ key: "54", label: "Dior FASSA", color: "#5c8a8a", fig: "FivePointedBurst", group: "6" },
	{ key: "55", label: "Mbenda FASSA", color: "#5c8a8a", fig: "FivePointedBurst", group: "6" },
	{ key: "56", label: "Magatte FASSA", color: "#5c8a8a", fig: "FivePointedBurst", group: "6" },
	{ key: "57", label: "Goumba FASSA", color: "#5c8a8a", fig: "FivePointedBurst", group: "6" },
	// Famille Yerime
	{ key: "58", label: "NDEYE DIOP", color: "#9fbfdf", fig: "Club", stroke: "orange", group: "7" },
	{ key: "59", label: "Oumy KALOGA", color: "#3973ac", fig: "Club", stroke: "orange", group: "7" },
	{ key: "60", label: "Cheikh FASSA", color: "#3973ac", fig: "FivePointedBurst", group: "7" },
	{ key: "61", label: "Babacar FASSA", color: "#3973ac", fig: "FivePointedBurst", group: "7" },
	{ key: "62", label: "Saer FASSA", color: "#3973ac", fig: "FivePointedBurst", group: "7" },
	{ key: "63", label: "Mame FASSA", color: "#3973ac", fig: "FivePointedBurst", group: "7" },
	{ key: "64", label: "Ndeye Anta FASSA", color: "#9fbfdf", fig: "FivePointedBurst", group: "7" },
	{ key: "65", label: "Mame Touti FASSA", color: "#9fbfdf", fig: "FivePointedBurst", group: "7" },
	{ key: "66", label: "Mouhamed FASSA", color: "#9fbfdf", fig: "FivePointedBurst", group: "7" },
	// Famille Abdou
	{ key: "67", label: "Hakima", color: "#4d4dff", fig: "Club", stroke: "orange", group: "8" },
	{ key: "68", label: "Yerim FASSA", color: "#4d4dff", fig: "FivePointedBurst", group: "8" },
	{ key: "69", label: "Hanane FASSA", color: "#4d4dff", fig: "FivePointedBurst", group: "8" },
	// Famille Maniane
	{ key: "70", label: "Rose SALL", color: "#8080ff", fig: "Club", stroke: "orange", group: "10" },
	{ key: "71", label: "Mamadou FASSA", color: "#8080ff", fig: "FivePointedBurst", group: "10" },
	{ key: "72", label: "Penda FASSA", color: "#8080ff", fig: "FivePointedBurst", group: "10" },
	{ key: "73", label: "Samba Lamsar FASSA", color: "#8080ff", fig: "FivePointedBurst", group: "10" },

];
var linkDataArray2 = [
	{ from: "1", to: "2", label: "Link1", color: "gray" },
	{ from: "2", to: "3", label: "Link1", color: "gray" },
	{ from: "2", to: "4", label: "Link1", color: "gray" },
	{ from: "2", to: "5", label: "Link1", color: "gray" },
	{ from: "2", to: "6", label: "Link1", color: "gray" },
	{ from: "2", to: "-1", label: "Link1", color: "gray" },
	{ from: "2", to: "7", label: "Link1", color: "gray" },
	{ from: "2", to: "8", label: "Link1", color: "gray" },
	{ from: "2", to: "9", label: "Link1", color: "gray" },
	{ from: "2", to: "10", label: "Link1", color: "gray" },
	// Famille Penda
	// { from: "3", to: "11", label: "Link1", color: "#00ffff" },
	// { from: "3", to: "12", label: "Link1", color: "#00ffff" },
	// { from: "3", to: "13", label: "Link1", color: "#00ffff" },
	{ from: "11", to: "14", label: "Link1", color: "#00ffff" },
	{ from: "12", to: "15", label: "Link1", color: "#00ffff" },
	{ from: "12", to: "16", label: "Link1", color: "#00ffff" },
	{ from: "12", to: "17", label: "Link1", color: "#00ffff" },
	{ from: "12", to: "18", label: "Link1", color: "#00ffff" },
	{ from: "13", to: "19", label: "Link1", color: "#00ffff" },
	{ from: "13", to: "20", label: "Link1", color: "#00ffff" },
	{ from: "13", to: "21", label: "Link1", color: "#00ffff" },
	{ from: "13", to: "22", label: "Link1", color: "#00ffff" },
	{ from: "13", to: "23", label: "Link1", color: "#00ffff" },
	// Famille Mamadou
	// { from: "4", to: "24", label: "Link1", color: "#4000ff" },
	// { from: "4", to: "25", label: "Link1", color: "#4000ff" },
	{ from: "24", to: "26", label: "Link1", color: "#4000ff" },
	{ from: "24", to: "27", label: "Link1", color: "#4000ff" },
	{ from: "24", to: "28", label: "Link1", color: "#4000ff" },
	{ from: "24", to: "29", label: "Link1", color: "#4000ff" },
	{ from: "24", to: "30", label: "Link1", color: "#4000ff" },
	{ from: "24", to: "31", label: "Link1", color: "#4000ff" },
	{ from: "24", to: "32", label: "Link1", color: "#4000ff" },
	{ from: "24", to: "33", label: "Link1", color: "#4000ff" },
	{ from: "24", to: "34", label: "Link1", color: "#4000ff" },
	{ from: "24", to: "35", label: "Link1", color: "#4000ff" },
	{ from: "24", to: "36", label: "Link1", color: "#4000ff" },
	{ from: "25", to: "37", label: "Link1", color: "#4000ff" },
	{ from: "25", to: "38", label: "Link1", color: "#4000ff" },
	{ from: "25", to: "39", label: "Link1", color: "#4000ff" },
	{ from: "25", to: "40", label: "Link1", color: "#4000ff" },
	{ from: "25", to: "41", label: "Link1", color: "#4000ff" },
	{ from: "25", to: "42", label: "Link1", color: "#4000ff" },
	{ from: "25", to: "43", label: "Link1", color: "#4000ff" },
	{ from: "25", to: "44", label: "Link1", color: "#4000ff" },
	{ from: "25", to: "45", label: "Link1", color: "#4000ff" },
	// Famille Saer
	// { from: "6", to: "46", label: "Link1", color: "#ff00ff" },
	// { from: "6", to: "47", label: "Link1", color: "#ff00ff" },
	{ from: "46", to: "48", label: "Link1", color: "#ff00ff" },
	{ from: "46", to: "49", label: "Link1", color: "#ff00ff" },
	{ from: "46", to: "50", label: "Link1", color: "#ff00ff" },
	{ from: "46", to: "51", label: "Link1", color: "#ff00ff" },
	{ from: "46", to: "52", label: "Link1", color: "#ff00ff" },
	{ from: "46", to: "53", label: "Link1", color: "#ff00ff" },
	{ from: "47", to: "54", label: "Link1", color: "#ff00ff" },
	{ from: "47", to: "55", label: "Link1", color: "#ff00ff" },
	{ from: "47", to: "56", label: "Link1", color: "#ff00ff" },
	{ from: "47", to: "57", label: "Link1", color: "#ff00ff" },
	// Famille Yerime
	// { from: "7", to: "58", label: "Link1", color: "#993300" },
	// { from: "7", to: "59", label: "Link1", color: "#993300" },
	{ from: "59", to: "60", label: "Link1", color: "#993300" },
	{ from: "59", to: "61", label: "Link1", color: "#993300" },
	{ from: "59", to: "62", label: "Link1", color: "#993300" },
	{ from: "59", to: "63", label: "Link1", color: "#993300" },
	{ from: "58", to: "64", label: "Link1", color: "#993300" },
	{ from: "58", to: "65", label: "Link1", color: "#993300" },
	{ from: "58", to: "66", label: "Link1", color: "#993300" },
	// Famille Abdou
	// { from: "8", to: "67", label: "Link1", color: "#ff0040" },
	{ from: "67", to: "68", label: "Link1", color: "#ff0040" },
	{ from: "67", to: "69", label: "Link1", color: "#ff0040" },
	// Famille Maniane
	// { from: "10", to: "70", label: "Link1", color: "#9900ff" },
	{ from: "70", to: "71", label: "Link1", color: "#9900ff" },
	{ from: "70", to: "72", label: "Link1", color: "#9900ff" },
	{ from: "70", to: "73", label: "Link1", color: "#9900ff" },



];
// fils_kh = ["3", "4", "5", "6", "7", "8", "9", "10"];
// beau_frere_kh = ["11", "12", "13"];
// belles_filles_kh = ["24", "25", "46", "47", "58", "59", "67", "70"];
// Function Create synoptique
// This converter is used by the Picture.
function findHeadShot(key) {
	// if (key < 0 || key > 73) return "mesAssets/img_avatar1.png"; // There are only 16 images on the server
	return "mesAssets/df" + key + ".png"
}

function generateSynoptique(nodeDataArray, linkDataArray, varMyDiagramDiv) {
	var olddiag = go.Diagram.fromDiv("myDiagramDiv");
  	if (olddiag) olddiag.div = null;
	var $ = go.GraphObject.make;  // for conciseness in defining templates
	var diagram = // Creation du template du diagram
		$(go.Diagram, varMyDiagramDiv,
			{
				allowCopy: false,
				"draggingTool.dragsTree": true,
				"commandHandler.deletesTree": true,
				initialDocumentSpot: go.Spot.TopCenter,//TopCenter TopLeft
				initialViewportSpot: go.Spot.TopCenter,
				layout:
					$(go.TreeLayout,
						{
							angle: 90, // Transposer le diagram de maniere veritical 90 ou 0 veritical
							arrangement: go.TreeLayout.ArrangementHorizontal,//ArrangementVertical
							layerSpacing: 100,
							nodeSpacing: 10,
							isRealtime: false
						}
					),
				"undoManager.isEnabled": true
			});

	diagram.nodeTemplate = // the default node template
		$(go.Node, "Vertical",
			{ isTreeExpanded: true },  // by default collapse
			$(go.Panel, "Auto",
				$(go.Shape, // "Rectangle",
					{ strokeWidth: 3, width: 250, height: 100, margin: 0.5 },
					// new go.Binding("figure", "fig"), // Type de figure
					new go.Binding("fill", "color"), // Color remplissage
					new go.Binding("stroke", "stroke"), // Color Border
				),

				$(go.Panel, "Horizontal",
					$(go.Picture,
						{
							name: "Picture",
							desiredSize: new go.Size(70, 70),
							// margin: 1.5,
						},
						new go.Binding("source", "key", findHeadShot)
					),
					$(go.Panel, "Vertical",
						$(go.TextBlock,
							{
								stretch: go.GraphObject.Horizontal,
								font: "bold 10pt Arial, sans-serif",
								margin: new go.Margin(0, 0, 0, 20),
								stroke: "black"
							},
							new go.Binding("text", "label")
						)
					)
				),

				// $(go.Panel, "Vertical",
				// 	$(go.TextBlock,
				// 		{
				// 			stretch: go.GraphObject.Horizontal,
				// 			font: "bold 10pt Arial, sans-serif"
				// 		},
				// 		new go.Binding("text", "label")
				// 	)
				// )
			),
			$(go.Panel,  // this is underneath the "BODY"
				{ height: 20 },  // always this height, even if the TreeExpanderButton is not visible
				$("TreeExpanderButton")
			)
		);

	diagram.linkTemplate = // Creation du Template des Links
		$(
			go.Link, { routing: go.Link.Orthogonal, selectable: true },// routing: go.Link.Orthogonal routing: go.Link.Normal
			$(go.Shape,
				{ strokeWidth: 3, toArrow: "Standard" }, // OpenTriangle, Standard
				new go.Binding("stroke", "color")
			),
			$(go.TextBlock, go.Link.OrientAlong,
				{
					background: "transparent",
					// textAlign: "center",
					visible: true,  // unless the binding sets it to true for a non-empty string
					width: 200,
					segmentOrientation: go.Link.OrientAlong,//go.Link.OrientUpright
					font: "bold 10pt Arial, sans-serif",
					segmentIndex: -1,
					segmentOffset: new go.Point(NaN, NaN),
				},
				// new go.Binding("text", "label"),
			)
		);

	diagram.groupTemplate = // Creation du Template de group
		$(go.Group, "Auto",
			{ // define the group's internal layout
				layout: $(go.TreeLayout,
					{
						angle: 90, arrangement: go.TreeLayout.ArrangementHorizontal,
						layerSpacing: 100,
						nodeSpacing: 1,
						isRealtime: false
					},
				),
				margin: new go.Margin(10, 10, 10, 10)
			},

			$(go.Panel, "Auto",
				$(go.Shape, "RoundedRectangle",  // surrounds the Placeholder
					{
						parameter1: 14,
						// fill: "rgba(128,128,128,0.33)",
						// width: 5000, height: 400,
						strokeWidth: 4,
					},
					new go.Binding("desiredSize", "size", go.Size.parse),
					new go.Binding("fill", "color"), // Color remplissage
					new go.Binding("stroke", "stroke"), // Color Border
				),
				$(go.Panel, "Horizontal",
					{
						alignment: go.Spot.BottomCenter,
						// margin: new go.Margin(10, 10, 10, 10),
					},

					$(go.Picture,
						{
							name: "Picture",
							desiredSize: new go.Size(70, 70),
							// margin: 1.5,
						},
						new go.Binding("source", "key", findHeadShot)
					),
					$(go.Panel, "Vertical",
						$(go.TextBlock,
							{
								// alignment: go.Spot.TopCenter,
								font: "Bold 16pt Sans-Serif",
								stroke: "black",
								margin: new go.Margin(0, 0, 0, 20),
							},
							new go.Binding("text", "label")
						)
					)
				),
			),

		);

	diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
	// Overview
	// var myOverview =
	// 	$(go.Overview, varMyOverviewDiv,  // the HTML DIV element for the Overview
	// 		{ observed: diagram, contentAlignment: go.Spot.Center });   // tell it which Diagram to show and pan

	// // Function pour Zoom
	// document.getElementById(varZoomFit).addEventListener('click', function () {
	// 	diagram.commandHandler.zoomToFit();
	// })

	// // Function pour Zoom
	// document.getElementById(varCenterZoom).addEventListener('click', function () {
	// 	diagram.scale = 1;
	// 	diagram.commandHandler.scrollToPart(diagram.findNodeForKey(1));
	// });

	// var button = document.getElementById('idMakeImage');
	// button.addEventListener('click', function () {
	// 	// var elmnt = document.getElementById("idDivImage");
	// 	// var varHeight = elmnt.clientHeight;
	// 	// var varWidth = elmnt.clientWidth;
	// 	// generateImages(diagram, varWidth + 1000, 2000);
	// 	createMakeImage(diagram);
	// }, false);
	return diagram;
}

// Function recherche
function searchDiagram(mySearch, varDiagram) {
	varDiagram.startTransaction("highlight search");
	if (mySearch) {
		// search four different data properties for the string, any of which may match for success
		// create a case insensitive RegExp from what the user typed
		var regex = new RegExp(mySearch, "i");
		var results = varDiagram.findNodesByExample({ label: regex }, { key: regex });
		varDiagram.highlightCollection(results);
		// try to center the diagram at the first node that was found
		if (results.count > 0) varDiagram.centerRect(results.first().actualBounds);
	} else {  // empty string only clears highlighteds collection
		varDiagram.clearHighlighteds();
	}
	varDiagram.commitTransaction("highlight search");
}



export { nodeDataArray2, linkDataArray2, generateSynoptique, searchDiagram };