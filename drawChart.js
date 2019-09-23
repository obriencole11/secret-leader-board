
// https://google,developers.appspot.com/chart/interactive/docs/spreadsheets#gid
google.load('visualization', '1', {packages: ['corechart', 'line']});
google.setOnLoadCallback(drawChart);

function drawChart() {
  // Add your sheets url and range below
  var spreadsheetUrl = "https://docs.google.com/spreadsheets/d/1sGyaeQyiKjowMiF6X0-SFkXIGujlXoygh02XffEpwg8/edit?usp=sharing";
  var query = new google.visualization.Query(spreadsheetUrl);
  query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
  var dataTable = response.getDataTable();
  // https://developers.google.com/chart/interactive/docs/reference?hl=en#methods
  // getValue(rowIndex, columnIndex)
  var i;
  for (i = 0; i < 100; i++) { 
    document.getElementById("test").innerHTML += dataTable.getValue(i, 0) + "<br>";
  }
}