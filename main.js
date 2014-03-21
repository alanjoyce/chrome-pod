onload = function() {
  $('#loadFeed').click(function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function() {
      if(xhr.readyState == 4 && xhr.status == 200) {
        var xmlDoc = $.parseXML(xhr.responseText);
        console.log(xhr.responseText);
        
        $('#feedResultsList').html('');
        var items = $(xmlDoc).find('item');
        for(var i = 0; i < items.length && i < 5; i++) {
          var title = $(items[i]).find('title');
          var enclosure = $(items[i]).find('enclosure');
          $('#feedResultsList').append(
            '<li>'
              + title.text() + '<br />'
              + '<audio controls class="podcastPlayer">'
              + '<source src="' + enclosure.attr('url')
              + '" type="' + enclosure.attr('type') + '">'
              + '</audio>'
            + '</li>'
          );
        };
      }
    }
    xhr.open('GET', $('#feedURL').val(), true);
    xhr.send();
  });
}
