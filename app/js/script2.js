var id = 0;
  var $ul = $('<ul/>');
     (function($) {
      $(function() {
        $('#button').on('click', function() {
          var text = $('#input').val();
          $('#input').val('');
          String(text);
          if (!text){
            alert('введите текст');
          } else {
            $.ajax({
              url: 'http://localhost:3000/comments',
              type: 'POST',
              contentType: 'application/json',
              data: JSON.stringify({
                'content': text,
                'id_user' : '123',
                'value': 'обрабатывается'
              }),
              success: function(data) {
                console.log('Ваш коментарий был отправлен');
                $.ajax({
                  url: 'http://localhost:3000/comments/' + $(data).attr('id'),
                  type: 'PATCH',
                  contentType: 'application/json',
                  data: JSON.stringify({value:'обработан'}),
                  success: function(){
                    console.log('ваш коментарий обработан');
                     location.reload();
                  }
                })
              }
            })
          }
        });

          $.ajax({
            url: 'http://localhost:3000/comments',
            dataType: 'json',
            type: 'GET',
            success: function(comments){
              for (var i = id; i < comments.length; i++){
                var $li = $('<li/>').text(comments[i].content);
                $li.append($('<a/>').text(' удалить коментарий').attr({
                  'id': comments[i].id,
                  href: '#',
                  'class': 'delete'
                }))
                $ul.append( $li );
              }
            id = comments.length;
            $('#com').append( $ul ); 
            }
          })

        $('#com').on('click', 'li > .delete', function(event){
          $.ajax({
            url: 'http://localhost:3000/comments/' + $(this).attr('id'),
            type: 'DELETE',
            contentType: 'application/json',
            success: function(){
              location.reload();
             }
          })
        })
      });
    })(jQuery);