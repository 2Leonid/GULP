window.onload = function() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://pokeapi.co/api/v2/pokemon/?limit=151', true);

        xhr.timeout = 15000;
        xhr.ontimeout=function(){
          console.log('время вышло');
        }

        xhr.send();

        xhr.onreadystatechange = function() {
          if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
              var list = JSON.parse(xhr.responseText).results;
              var ul = document.createElement('ol');
              for(var i = 0; i < list.length; i++){
                var li = document.createElement('li');
                var img = document.createElement('img');
                var a = document.createElement('a');
                a.href = 'http://htmlbook.ru/html/a';
                li.textContent = list[i].name;
                img.src = 'sprites/' + (i+1) +'.png';
                ul.appendChild(a);
                a.appendChild(li);
                li.appendChild(img);
              }
            document.getElementById('result').appendChild(ul);
            
            
            }
          }
        } 
      }