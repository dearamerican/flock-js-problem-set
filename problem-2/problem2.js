/*
Problem #2

Please explain the difference between the following jQuery functions. What impact has or will this have on code you’ve written?
 
1. $(“.todo-item”).on(“click”, function(e){ console.log(e) });
 
2. $(document).on(“click”, “.todo-item”, function(e){ console.log(e) });
*/

The first does not pass the optional second argument to the .on() function and just passes in the "click" event and logs it in the callback. The second does pass the optional second argument, which is a selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
  (Ref jQuery docs: http://api.jquery.com/on/)