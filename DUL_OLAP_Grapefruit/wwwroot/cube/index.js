
//
// initialize pivot engine
const  panel = new wijmo.olap.PivotPanel("#pivotPanel");
const grid = new wijmo.olap.PivotGrid("#pivotGrid");
const engine = new wijmo.olap.PivotEngine();
engine.itemsSource = "http://localhost:11111/api/dataengine/cube";
engine.rowFields.push(new wijmo.olap.CubePivotField(engine, "[Customer].[Country]", "Country"));
engine.columnFields.push(new wijmo.olap.CubePivotField(engine, "[Customer].[Occupation]", "Occupation"));
engine.valueFields.push(new wijmo.olap.CubePivotField(engine, "[Measures].[Customer Count]", "Customer Count"));
panel.engine = engine;
grid.itemsSource = panel;

/*
var ng = new wijmo.olap.PivotEngine({
    itemsSource: "http://localhost:11111/api/dataengine/cube"
});

var pivotChart = new wijmo.olap.PivotChart('#pivotChart', {
    itemsSource: ng,
    showTitle: true,
    showLegend: 'Auto'
});*/