

$(document).ready(function () {
    var NextPage

    let url = 'https://rickandmortyapi.com/api/character'

    getData(url);

    console.log(url)

    $(document).on('scroll', ifiniteScroll);


    function ifiniteScroll(){
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { 
            getData(NextPage);
            console.log("bottom!");
        }
    }


    function getData(url) {
        $.ajax({
            url: url,
            type: 'GET',
            beforeSend: function () {
                //$("#resultado").html("ENVIANDO...");
            }
        })
            .done(function (data) {
                NextPage = data.info.next; 
                console.log(NextPage);

                var i;
                for (i = 0; i < data.results.length; i++) {
                    var personagem = data.results[i];
                    var html = ''
                    html += '<div class="col-md-3 ">'
                    html += '<a href="character.html?id=' + personagem.id  + '">';
                    html += '<div class="card shadow p-3 mb-5 rounded">'
                    html += '<img src="' + personagem.image + '" class="card-img-top">'
                    html += '<div class="card-body">'
                    html += '<h3 class="card-text nfont1">' + personagem.name + '</h3>'
                    html += '<p class="card-text ndfont1">' + personagem.species + '</p>'
                    html += '<p class="card-text ndfont1">' + personagem.gender + '</p>'
                    html += '</div>'
                    html += '</div>'
                    html += '</a>'
                    html += '</div>'

                    $('#conteudo .row').append(html)

                    console.log(personagem.image)
                }

                console.log(data)
            })
            .fail(function (jqXHR, textStatus, msg) {
                alert(msg);
            });
    }

});