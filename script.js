//tableau d'objet contenant les questions et les réponses
var quiz = [
    {
        "question": "En quelle année a eu lieu la bataille de Sekigahara ?",
        "reponse1": "1600",
        "reponse2": "1560",
        "reponse3": "1810"
    },
    {
        "question": "Qui a remporté la bataille de Sekigahara ?",
        "reponse1": "Tokugawa Ieyasu",
        "reponse2": "Oda Nobunaga",
        "reponse3": "Toyotomi Hideyoshi"
    },
    {
        "question": "Quel célébre samouraï a participé à la bataille de Sekigahara ?",
        "reponse1": "Miyamoto Musashi",
        "reponse2": "Oda Nobunaga",
        "reponse3": "Uesugi Kenshin"
    }];

//nombre de question que l'utilisateur a répondu
var questionRepondu = 0;

//nombre de bonnes réponses données par l'utilisateur
var nbrBonnesReponses = 0;

//récupére la valeur du clic
var valeur = $('#reponses').val();
var valeur1 = $('#reponse1').val();
var valeur2 = $('#reponse2').val();
var valeur3 = $('#reponse3').val();

//boucle qui parcourt le tableau d'objet
for (var i = 0; i < quiz.length; i++) {

    //tableau contenant les questions
    var quest = [quiz[i].question];

    //tableau contenant les réponses du tableau d'objet
    var rep = [quiz[i].reponse1, quiz[i].reponse2, quiz[i].reponse3];

    //random pour mélanger les réponses
    var alea = Math.round(Math.random() * 2);

    console.log(quiz[i].question);
    console.log(rep);
    console.log(quiz[i]);

    //variable contenant les bonnes réponses, toujours la réponses index 0
    var bonneRep = rep[0];
    console.log("Bonne Réponse : " + bonneRep);

    //première question et ses réponses
    $('#question').html(quiz[i].question);
    $('#reponse1').html("1 : " + rep[alea]);
    $('#reponse2').html("2 : " + rep[alea +1]);
    $('#reponse3').html("3 : " + rep[alea -1]);

    //change la question et les réponses quand on clique sur une réponse, bonne ou mauvaise
    $('#reponses').click(function () {

        $('#question').html(quiz[i--].question);
        $('#reponse1').html("1 : " + rep[i]);
        $('#reponse2').html("2 : " + rep[i + 1]);
        $('#reponse3').html("3 : " + rep[i -1]);

        questionRepondu++;
        fin();
    })
}

//chrono
var secondes = 0;
var minutes = 0;
function chrono() {
    setTimeout(chrono, 1000);
    secondes++;
    if(secondes === 60){
        minutes++;
        secondes = 0;
    }
}
chrono();
$('#quiz').show();
$('#resultat').hide();

//page résultat
function resultat(){
    $('#resultat').show();
    $('#quiz').hide();
    $('#bonnesReponses').html(nbrBonnesReponses);
    $('#temps').html(minutes + " minute(s) et " + secondes + " secondes");
    $('#rejouer').click(function () {
        window.location.reload();
    })
}

//fonction fin : quand l'utilisateur a répondu à toutes les questions, la page résultat apparait
function fin(){
    if (questionRepondu === 3){
        resultat();
    }
}

$('#essai').click(function () {
    nbrBonnesReponses++;
    questionRepondu++;
    fin();

});