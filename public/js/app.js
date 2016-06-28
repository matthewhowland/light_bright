
$(document).ready(function(){
  var container = $('.container');
  var numOfRows = 10;
  var numOfCols = 10;

  initGrid();
  function initGrid(){
    for(var i = 0; i< numOfRows; i += 1){
      var row = $('<div></div>');
      row.addClass('row');
      for(var j = 0; j < numOfCols; j += 1){
        var cell = $('<div></div>');
        cell.addClass ('cell border');
        row.append(cell);
      }
      container.append(row);
    }
  }






});
