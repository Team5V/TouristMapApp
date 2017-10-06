$(document).ready(function(e) {
    $.getJSON( 'routes.json' , function (data) {
        jsonObj = data;
        console.log(jsonObj.routes['0'].name);
    });
});

////Function for filling table
// $(function() {
//    let people = [];
//    $.getJSON('people.json', function(data) {
//        $.each(data.person, function(i, f) {
//           let tblRow = "<tr>" + "<td>" + f.firstName + "</td>" +
//            "<td>" + f.lastName + "</td>" + "<td>" + f.job + "</td>" + "<td>" + f.roll + "</td>" + "</tr>"
//            $(tblRow).appendTo("#userdata tbody");
//      });
//    });
// });
