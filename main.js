onload = function() {
  $('#loadFeed').click(function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function() {
      if(xhr.readyState == 4 && xhr.status == 200) {
        var xmlDoc = $.parseXML(xhr.responseText);
        console.log(xhr.responseText);
        
        $('#podcastName').html($(($(xmlDoc).find('title'))[0]).text())
        
        $('#feedResultsList').html('');
        var items = $(xmlDoc).find('item');
        for(var i = 0; i < items.length; i++) {
          var title = $(items[i]).find('title');
          $('#feedResultsList').append(
            '<li class="feedResult" id="feedResult' + i + '">'
            + title.text() + '<br />'
            + '<div class="playArea" num="' + i + '">'
            + '<button class="playButton" id="play' + i + '">Play</button>'
            + '</span></li>'
          );
          $('#play' + i).click(function() {
            var enclosure = $(items[$(this).parent().attr('num')]).find('enclosure');
            var playerSpan = $(this).parent();
            console.log(enclosure.attr('url'));
            $(playerSpan).html('');
            $(playerSpan).append(
              '<audio controls class="podcastPlayer">'
              + '<source src="' + enclosure.attr('url')
              + '" type="' + enclosure.attr('type') + '">'
              + '</audio>'
            );
          });
        };
      }
    }
    xhr.open('GET', $('#feedURL').val(), true);
    xhr.send();
  });
}
