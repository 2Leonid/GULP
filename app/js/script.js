(function($) {
      $(function() {
        $.ajax({
          url: 'http://localhost:3000/goods',
          dataType: 'json',
          success: function(goods) {
            var $ul = $('<ul/>');
            goods.forEach(function(good) {
              var $li = $('<li/>').text(good.name);

              $li.append( $('<div/>').text('купить').attr({
                'class': 'give',
                href:"#",
                'data-id': good.id,
                'data-price': good.price,
                'data-name': good.name,
              }));

              $li.append( $('<div/>').text('Удалить товар').attr({'id':good.id,
                'class': 'delete'}));

              $ul.append( $li );
            });
            $('#goods').append( $ul );
          }
        });

        $('#goods').on('click', 'li > .give', function(event) {
          $.ajax({
            url: 'http://localhost:3000/cart',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
              id: $(this).attr('data-id'),
              price: $(this).attr('data-price'),
              name: $(this).attr('data-name'),
            }),
            success: function(data) {
              console.log('Ваш коментарий был отправлен');
            }
          });
        })

         $('#goods').on('click', 'li > .delete', function(event) {
          $.ajax({
            url: 'http://localhost:3000/cart/' + $(this).attr('id'),
            type: 'DELETE',
            contentType: 'application/json',
            })
          });
      });
    })(jQuery);