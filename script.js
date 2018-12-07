//montre la page quiz et cache la page resultat
$('#quiz').show();
$('#resultat').hide();

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
    {
        "question": "Pourquoi la bataille de Sekigahara porte t'elle ce nom ?",
        "reponse1": "C'est le nom de la montagne où a eu lieu la bataille",
        "reponse2": "C'est le nom de la plaine où a eu lieu la bataille",
        "reponse3": "C'est le nom de la région où a eu lieu la bataille"
    },
    {
        "question": "Quel période historique se termine avec la fin de la bataille ?",
        "reponse1": "Période Meiji",
        "reponse2": "Période Sengoku",
        "reponse3": "Période Heian"
    },
    {
        "question": "Combien d'heures la bataille de Sekigahara a-t-elle durée ?",
        "reponse1": "7 heures",
        "reponse2": "10 heures",
        "reponse3": "17 heures"
    },
    {
        "question": "Combien de samourai sont mort durant la bataille ?",
        "reponse1": "Environ 10 000",
        "reponse2": "Environ 20 000",
        "reponse3": "Environ 30 000"
    },
    {
        "question": "Quel période historique commence aprés la bataille de Sekigahara ?",
        "reponse1": "Période Meiji",
        "reponse2": "Période Sengoku",
        "reponse3": "Période Edo"
    },
    {
        "question": "Avant la bataille, quel château fut asiégé ?",
        "reponse1": "Le château d'Edo",
        "reponse2": "Le château d'Ogaki",
        "reponse3": "Le château de Sawayama"
    },
    {
        "question": "De combien de samourai étaient composés les armées de l'Ouest et de l'Est ?",
        "reponse1": "130 000 pour l'armée de l'Ouest et 80 000 pour celle de l'Est",
        "reponse2": "200 000 pour l'armée de l'Ouest et 180 000 pour celle de l'Est",
        "reponse3": "30 000 pour l'armée de l'Ouest et 65 000 pour celle de l'Est"
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
var bonneRep = [quiz[0].reponse1, quiz[1].reponse3, quiz[2].reponse1, quiz[3].reponse2, quiz[4].reponse2, quiz[5].reponse1, quiz[6].reponse3,
    quiz[7].reponse3, quiz[8].reponse2, quiz[9].reponse1];
console.log("Bonne Réponse : " + bonneRep);

//boucle qui parcourt le tableau des réponses
for (var j = 0; j < bonneRep.length; j++) {
    console.log('index : ' + j);
}

var clique = [];
//boucle qui parcourt le tableau clique
for (var c = 0; c < clique.length; c++) {
    console.log('index : ' + c);
}

var a = 0;

//première question et ses réponses
$('#question').html(quiz[a].question);
$('#reponse1').html(quiz[a].reponse1);
$('#reponse2').html(quiz[a].reponse2);
$('#reponse3').html(quiz[a].reponse3);

//récupére ce que l'utilisateur clique
$('.reponseUtilisateur').click(function () {

    //chaque fois que l'utilisateur répond à une question, nbrQuestionRestante diminue de 1
    nbrQuestionRestante--;
    console.log("Question Restante : " + nbrQuestionRestante);

    var reponse = this.innerHTML;


    fin();

    //récupére la valeur du clic
    /*
    var valeur = $('#reponses').val();
    var valeur1 = $('#reponse1').val();
    var valeur2 = $('#reponse2').val();
    var valeur3 = $('#reponse3').val();*/


    //ajoute la valeur récupérer par le clique de l'utilisateur et l'envoie dans le tableau clique
    /*
    clique.push(valeur1);
    clique.push(valeur2);
    clique.push(valeur3);*/

    //compare la réponse donné par l'utilisateur avec les entrées du tableau des bonnes réponses
    if (reponse === bonneRep[a]) {
        nbrBonnesReponses++;
        $('#bonnesReponses').html(nbrBonnesReponses);

        //condition qui change le commentaire par rapport au score de l'utilisateur
        if (nbrBonnesReponses === quiz.length) {
            $('#commentaire').text("Félicitation, c'est un sans faute !");
        }
        if (nbrBonnesReponses === quiz.length - 1) {
            $('#commentaire').text("Dommage, à un point près c'était le sans faute !")
        }
        if (nbrBonnesReponses === quiz.length - quiz.length / 2) {
            $('#commentaire').text("Vous avez répondu correctement à la moitié des questions.");
        }
        if (nbrBonnesReponses < quiz.length - quiz.length / 2) {
            $('#commentaire').text("Vous n'avez pas répondu correctement à la moitié des questions.");
        }
    }
    console.log("Nombre de bonne réponse : " + nbrBonnesReponses);

    //change la question et les réponses quand on clique sur une réponse, bonne ou mauvaise
    a++;
    $('#question').html(quiz[a].question);
    $('#reponse1').html(quiz[a].reponse1);
    $('#reponse2').html(quiz[a].reponse2);
    $('#reponse3').html(quiz[a].reponse3);
});

//chrono
var secondes = 0;
var minutes = 0;

function chrono() {
    setTimeout(chrono, 1000);
    secondes++;
    if (secondes === 60) {
        minutes++;
        secondes = 0;
    }
}

chrono();

//page résultat
function resultat() {
    $('#rejouer').click(function () {
        window.location.reload();
    });

    $('#resultat').show();
    $('#quiz').hide();
    $('#total').html(quiz.length);
    $('#temps').html(minutes + " minute(s) et " + secondes + " secondes");

    if (nbrBonnesReponses === 0) {
        $('#commentaire').text("Vous avez tout faux !");
    }

    var q = 0;
    var r = 0;
    for (var u = 0; u < quiz.length; u++) {
        var divs = document.createElement('div');
        document.getElementById('questionsReponses').appendChild(divs);
        divs.innerHTML = "Q : " + quiz[q++].question + " R : " + bonneRep[r++];
    }
}

//function de fin de jeu
function fin() {
    //quand l'utilisateur a répondu à toutes les questions, la page résultat apparait
    if (nbrQuestionRestante === 0) {
        resultat();
    }
}