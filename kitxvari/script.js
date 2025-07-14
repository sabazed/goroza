const quizQuestions = [
    {
        "question": "Ra aris gorozas sayvareli sachmeli (gamodzaxebit mniam-mniam)",
        "answers": ["Big makis meniu", "Shaurma", "Xinkali", "Ufro didi shaurma"],
        "correct": 0
    },
    {
        "question": "Ra uyvars gorozas rom aketos tavisufal dros",
        "answers": ["Itamashos apex legendsi randomebtan",
                    "Shevides csgoshi da itamashos marto dust2",
                    "Ijdes kompiutertan da scrollos telefonshi twitteri",
                    "Gadaibrunos kochi da gausivdes yovel mexute nabijis gadadgmaze"],
        "correct": 3
    },
    {
        "question": "Gorozias sayvareli serialia",
        "answers": ["Ucnauri sagnebi", "Avadmyofi eris istoria", "Otxshabati da Euphoria (zendaia dedofali)", "Tydeba cudad"],
        "correct": 2
    },
    {
        "question": "Ra aris nikas yvelaze didi tramva?",
        "answers": ["Robenas arseboba (dzalian cudi adamiani)", 
                    "Tavshi sabargulis karis moxvedra (2jer) (meore ar axsovs)", 
                    "Mteli bavshvobis mogonebebis afxazetshi datoveba da gaqceva", 
                    "Shankeram rodesac igi AWMze da 4Xze gacvala"],
        "correct": 1
    },
];

let questionText;
let answersDiv;
let questionNumber = 0;
let correctGuesses = 0;

window.onload = () => {
    questionText = document.getElementById("question");
    answersDiv = document.getElementById("answers");
    document.getElementById("result").style.display = "none";
    for (let element of document.getElementsByClassName("all-questions-num")) {
        element.innerText = quizQuestions.length;
    };
    populate();
}

const populate = () => {
    document.getElementById("curr-question-num").innerText = questionNumber + 1;
    questionText.innerText = quizQuestions[questionNumber].question;
    for (let i = 0; i < answersDiv.childElementCount; i++) {
        let div = answersDiv.children[i];
        div.lastElementChild.innerText = quizQuestions[questionNumber].answers[i];
        div.firstElementChild.checked = false;
    }
}

const submit = () => {
    if (document.getElementById("body").style.display == "none") {
        document.getElementById("body").style.display = "";
        document.getElementById("remaining").style.display = "";
        document.getElementById("result").style.display = "none";
        document.getElementById("footer").innerText = "Submit";
        questionNumber = 0;
        correctGuesses = 0;
        populate();
        return;
    }
    if (!document.querySelector('input[name="answer"]:checked')) {
        alert("You mush choose an option");
        return;
    }
    if (quizQuestions[questionNumber].correct == document.querySelector('input[name="answer"]:checked').value) {
        correctGuesses++;
    }
    if (questionNumber == quizQuestions.length - 1) {
        document.getElementById("body").style.display = "none";
        document.getElementById("remaining").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("correct-guesses-num").innerText = correctGuesses;
        document.getElementById("footer").innerText = "Reload";
        return;
    }
    questionNumber++;
    populate();
    return;

}
