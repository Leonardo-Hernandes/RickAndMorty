

$(document).ready(function () {

    const queryString = window.location.search;

     const urlParams = new URLSearchParams(queryString);

     var id = urlParams.get('id');
    

     let url = 'https://rickandmortyapi.com/api/character/' + id;



    getData(url);


    function getData(url) {

         $.ajax({
             url: url,
            type: 'GET',
             beforeSend: function () {
                 //$("#resultado").html("ENVIANDO...");
             }
         })
             .done(function (data) {


                     var personagem = data;
                     var html = ''
                     html += '<div class="card shadow p-3 mb-5 rounded">'
                     html += '<img src="' + personagem.image + '" class="card-img-top">'
                     html += '<div class="card-body">'
                     html += '<h3 class="card-text nfont">' + personagem.name +'</h3>'
                     html += '<p class="card-text ndfont">status: ' + personagem.status + '</p>'
                     html += '<p class="card-text ndfont">species: ' + personagem.species + '</p>'
                     html += '<p class="card-text ndfont">gender: ' + personagem.gender + '</p>'
                     html += '<p class="card-text ndfont">origin: ' + personagem.origin.name + '</p>'
                     html += '</div>'
                     html += '</div>'

                     $('#perfil').append(html)

                     getEpisodes(personagem.episode)

             })
             .fail(function (jqXHR, textStatus, msg) {
                 alert(msg);
             });
    }
    

    function getEpisodes(episodes){

                    // var personagem = data;
                    //  var html = ''
                    //  html += '<div class="col-md-3">'
                    //  html += '<div class="card"></div>'
                    //  html += '<img src="' + personagem.image + '" class="card-img-top">'
                    //  html += '<div class="card-body">'
                    //  html += '<h3 class="card-text nfont">' + personagem.name +'</h3>'
                    //  html += '<p class="card-text ndfont">status: ' + personagem.status + '</p>'
                    //  html += '<p class="card-text ndfont">species: ' + personagem.species + '</p>'
                    //  html += '<p class="card-text ndfont">gender: ' + personagem.gender + '</p>'
                    //  html += '<p class="card-text ndfont">origin: ' + personagem.origin.name + '</p>'
                    //  html += '</div>'
                    //  html += '</div>'
                    //  html += '</div>

        for(let episodeUrl of episodes){
            getEpisodeData(episodeUrl);          
        }
   }

   
   /**
    * Pega os dados do episodio
    * @param {} url 
    */
   function getEpisodeData(episodeUrl){
        $.ajax({
           url: episodeUrl,
           type: 'GET',
        })
            .done(function (episodedata) {
                
                console.log(episodedata)
                
                var html = ''
                html += '<div class="col-md-4 shadow mb-5 rounded">'
                html += '<div class="card">'
                html += '<div class="card-body">'
                html += '<p class="card-text ndfont">Name: ' + episodedata.name + '</p>'
                html += '<p class="card-text ndfont">Air Date: ' + episodedata.air_date + '</p>'
                html += '<p class="card-text ndfont">Episode: ' + episodedata.episode + '</p>'
                html += '<p class="card-text ndfont">Created: ' + episodedata.created + '</p>'
                html += '</div>'
                html += '</div>'

                $('#episodios .row').append(html)

            })
            .fail(function (jqXHR, textStatus, msg) {
                alert(msg);
            });
   }



});