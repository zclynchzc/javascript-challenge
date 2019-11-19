var tableData = data;

var button = d3.select('#filter-btn');

button.on('click', function() {
    var inputElement = d3.select('#datetime');
    var inputDate = inputElement.property('value');
    
    d3.select('#ufo-table>tbody').html('');

    tableData.filter(sighting => sighting.datetime == inputDate).forEach(sighting => {
        var row = d3.select('#ufo-table>tbody').append('tr');
        row.append('td').text(sighting.datetime);
        row.append('td').text(sighting.city);
        row.append('td').text(sighting.state);
        row.append('td').text(sighting.country);
        row.append('td').text(sighting.shape);
        row.append('td').text(sighting.durationMinutes);
        row.append('td').text(sighting.comments);
    })
});
