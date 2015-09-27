function getMovieFeed() {


    var movie = $("input").val();                   // userinput med value
    var movieAPI = "http://www.omdbapi.com/?t=";    // URL
    var movieOptions = {                            // DATA - r: typ av data t: val av tag är movie
        r: "json",
        t: movie
    };

    function displayMovies(response) {              // CALLBACK FUNKTIONEN

       var parsing = response;         // Gör om vår response till en variabel:parsing
       console.log(parsing);                        // I konsolen ser vi hela objektet


        //*------ loop och skapar listan ----*
        var HTML = "<ul>";                          //Skapar en punkt-lista
        /*if(parsing.Poster === undefined){           //Vid sökning - error: om inte postern finns så ta bort den
            delete parsing.Poster;
            parsing.Error = alert("Oh no, something went wrong, please try again!"); //ERROR-MESSAGE
            delete parsing.Error;
        }
        else{                                       // Annars visa poster och gör om till en synlig bild
        HTML += "<img src="+ parsing.Poster+ " alt='movieposter' align=right>";// skapar en bild av .Poster adressen
        }
        */


        delete parsing.Poster;                      // Tar bort viss information som ej ska visas på sidan
        delete parsing.Type;
        delete parsing.Response;
        delete parsing.Metascore;


        for(var item in parsing){                   // För varje sak i objektet skapa en punkt i listan som även får en class
            HTML += "<li>" + "<span class='nyckelord'>" + item + "</span>" +": "+parsing[item]+ "</li>"

        }
        HTML += "</ul>";                            // Avslutar listan
        //*------ slut på loop och lista ----*


        $("#movies").html(HTML);                    //Lägger in allt som lagts till i variabeln HTML i vår index i diven movies


    }

    $.get(movieAPI, movieOptions, displayMovies);   //Kallar på det med .get med parametrar(URL, DATA, CALLBACK)

    $("input").val("");                             // Gör display tom


};

$(".fade").hide().fadeIn(2500);                     // Att element med class fade ska fade:a in på sidan






$("button").click(getMovieFeed);                   // Vid klick på button ska funktionen gå igång

$(document).keypress(function(event){             // Ett event då knapp 13(ENTER) trycks så laddas även då funktionen
    if(event.charCode === 13)
    {
        getMovieFeed();

    }



})