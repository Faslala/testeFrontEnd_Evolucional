// var degrees = document.getElementById('btn1')
// var classes = document.getElementById('btn2')
// var option = document.createElement('option')

// data_degrees = getJSON('degrees.json')
// function load_degrees() {

// }

// function load_classes() {

// }
// function load_students() {

// }
// function load_degrees() {
//     $.ajax({
//         url: 'degrees.json',
//         dataType: 'json',
//         type: 'get',
//         success: function(data) {
//             $(data.degress).each(function(index, value) {
      
//             })
//             console.log(data)
//         }
//     })
// }

// function load_classes() {
//     $.ajax({
//         url: 'classes.json',
//         dataType: 'json',
//         type: 'get',
//         success: function(data) {
//             $(data.degress).each(function(index, value) {
      
//             })
//             console.log(data)
//         }
//     })
// }

// function load_degrees () {
//     $(document).ready(function() {
//         $.getJSON('degress.json', function(data) {
//             degrees_data = '';
//             $.each(data, function(key, value) {
//                 degree_data += '<option>' + value.name+ '</option>';
//             })
//             // $('#btn1').append(degrees_data);
    
//         })
//     })

// }


function CreateJSONArray() {
    var total_rows = 300;
    var arr = []
    for (var i = 0; i < total_rows; i++) {
        arr.push({
            'id': i +1,
            'first_name': chance.first(),
            'degreeID': chance.integer({ min: 1, max: 13 }),
            'classID': chance.integer({ min: 1, max: 6 })
        })
    };
    return arr;
}


document.getElementById('btn-3').onclick = function(event) {
    event.preventDefault();
    var data = CreateJSONArray()
    var tbl = js.CreateTable(data)
    console.log(data)

 }

 var myDropdown = document.getElementById('myDropdown')
 myDropdown.addEventListener('show.bs.dropdown', function () {
   // do something...
 })

//  document.getElementById('createtable').onclick = function(event) {

//  }

// $(document).on('click', '.CreateMyTable', function(event) {
//     event.preventDefault();
//     var data = CreateJSONArray();
//     var tbl = js.CreateTable(data, ['ID', 'NAME', 'DEGREE-ID', 'CLASS-ID']);

//     $('.MyTable').html(tbl);
// });






