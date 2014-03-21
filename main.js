onload = function() {
  $("#loadFeed").click(function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function() {
      if(xhr.readyState == 4 && xhr.status == 200) {
        var xmlDoc = $.parseXML(xhr.responseText);
        console.log(xhr.responseText);
        
        $("#feedResultsList").html("");
        var items = $(xmlDoc).find("item").each(function() {
          var enclosure = $(this).find("enclosure");
          $("#feedResultsList").append(
            "<li>"
              + $(this).find("title").text() + "<br />"
              + "<audio controls>"
              + "<source src='" + enclosure.attr("url")
              + "' type='" + enclosure.attr("type") + "'>"
              + "</audio>"
            + "</li>"
          );
        });
      }
    }
    xhr.open("GET", $("#feedURL").val(), true);
    xhr.send();
  });
}
