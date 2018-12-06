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
        "reponse1": "Toyotomi Hideyoshi",
        "reponse2": "Oda Nobunaga",
        "reponse3": "Tokugawa Ieyasu"
    },
    {
        "question": "Quel célèbre samouraï a participé à la bataille de Sekigahara ?",
        "reponse1": "Miyamoto Musashi",
        "reponse2": "Oda Nobunaga",
        "reponse3": "Uesugi Kenshin"
    },
];

//nombre de question total
var nbrQuestionRestante = quiz.length;

//nombre de bonnes réponses données par l'utilisateur
var nbrBonnesReponses = 0;

//boucle qui parcourt le tableau d'objet
for (var i = 0; i < quiz.length; i++) {

    console.log(quiz[i].question);
    console.log(quiz[i]);
}

//tableau contenant les bonnes réponses
var bonneRep = [quiz[0].reponse1, quiz[1].reponse3, quiz[2].reponse1];
console.log("Bonne Réponse : " + bonneRep);

//boucle qui parcourt le tableau des réponses
for (var j = 0; j < bonneRep.length; j++){
    console.log('index : ' + j);
}

var clique = [];

var a = 0;

//première question et ses réponses
$('#question').html(quiz[a].question);
$('#reponse1').html("1 : " + quiz[a].reponse1);
$('#reponse2').html("2 : " + quiz[a].reponse2);
$('#reponse3').html("3 : " + quiz[a].reponse3);

//récupére ce que l'utilisateur clique
$('#reponses').click(function () {

    //chaque fois que l'utilisateur répond à une question, nbrQuestionRestante diminue de 1
    nbrQuestionRestante--;
    console.log("Question Restante : " + nbrQuestionRestante);
    fin();

    //récupére la valeur du clic
    var valeur = $('#reponses').val();
    var valeur1 = $('#reponse1').val();
    var valeur2 = $('#reponse2').val();
    var valeur3 = $('#reponse3').val();

    //change la question et les réponses quand on clique sur une réponse, bonne ou mauvaise
    a++;
    $('#question').html(quiz[a].question);
    $('#reponse1').html("1 : " + quiz[a].reponse1);
    $('#reponse2').html("2 : " + quiz[a].reponse2);
    $('#reponse3').html("3 : " + quiz[a].reponse3);

    //ajoute la valeur récupérer par le clique de l'utilisateur et l'envoie dans le tableau clique
    clique.push(valeur1);
    clique.push(valeur2);
    clique.push(valeur3);

    //compare le tableau clique avec les entrées du tableau des bonnes réponses
    if(clique[0] === bonneRep[j]){
        nbrBonnesReponses++;
    }
    console.log("Nombre de bonne réponse : " + nbrBonnesReponses);
});

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
    $('#rejouer').click(function () {
    window.location.reload();
});
    $('#resultat').show();
    $('#quiz').hide();
    $('#bonnesReponses').html(nbrBonnesReponses);
    $('#total').html(quiz.length);
    $('#temps').html(minutes + " minute(s) et " + secondes + " secondes");

    var q = 0;
    var r = 0;
    for (var u = 0; u < quiz.length; u++){
        var divs = document.createElement('div');
        document.getElementById('questionsReponses').appendChild(divs);
        divs.innerHTML = "Q : " + quiz[q++].question + " R : " + bonneRep[r++];
    }


}

//function de fin de jeu
function fin() {
    //quand l'utilisateur a répondu à toutes les questions, la page résultat apparait
    if (nbrQuestionRestante === 0){
        resultat();
    }
}