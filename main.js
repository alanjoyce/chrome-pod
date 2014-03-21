onload = function() {
  $("#loadFeed").click(function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function() {
      if(xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
        $("#feedResults").html(xhr.responseText);
      }
    }
    xhr.open("GET", $("#feedURL").val(), true);
    xhr.send();
  });
}
