var topics = ['', 'Financial', 'Household', 'Social', 'Work', 'Other'];

var items = {
 'toDo' : [
  { 'name': 'Pay credit card bill',
    'topic': 'Financial',
    'dueDate': '6/12/17',
    'completed': false 
  },
  { 'name': 'Laundry',
    'topic': 'Household',
    'dueDate': '6/06/17',
    'completed': false
  },
  { 'name': 'Dinner with Sacha',
    'topic': 'Social',
    'dueDate': '6/11/17',
    'completed': false
  },
  { 'name': 'Complete Admin Dash feature',
    'topic': 'Work',
    'dueDate': '6/08/17',
    'completed': false
  },
  { 'name': 'Pack for Hawaii trip',
    'topic': 'Other',
    'dueDate': '6/09/17',
    'completed': false
  },
 ]
};

var inHTML = {
  dynamicTable: "<thead><th>Name</th><th>Topic</th><th>Due Date</th><th>Completed?</th></thead>",
  newToDoTopic: ""
}

$.each(items.toDo, function(index, item) {
    var newItem = "<tr>"
      + "<td>"+ item.name + "</td>"
      + "<td>" + item.topic + "</td>"
      + "<td>" + item.dueDate + "</td>"
      + "<td><div class=\"form-check\"><input type=\"checkbox\"/></div></td>"
      + "</tr>";
    inHTML.dynamicTable += newItem;  
});

$.each(topics, function(index, topic) {
    var option = "<option>"+ topic + "</option>";
    inHTML.newToDoTopic += option;  
});

$("table#dynamicTable").html(inHTML.dynamicTable);
$("select#newToDoTopic").html(inHTML.newToDoTopic);