var questions = [
    {
        question:"Html Stands For _______________________",
        options: ["Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language"
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question:"Css Stands For _______________________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language"
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question:"Js Stands For _______________________",
        options: [
            "Java Style",
            "Java Script",
            "Script",
            "Script Src"
        ],
        correctAns: "Java Script",
    },
    {
        question:"Dom Stands For _______________________",
        options: [
            "Document Object Model",
            "html",
            "Css",
            "Java"
        ],
        correctAns: "Document Object Model",
    },
    {
        question:"Ram Stands For _______________________",
        options: [
            "Read Only Memory",
            "Dom",
            "Random Acccess Memory",
            "For Pc"
        ],
        correctAns: "Random Acccess Memory",
    },
    {
        question:"Rom Stands For _______________________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory"
        ],
        correctAns: "Read Only Memory",
    },
];
var main1 = document.getElementById('main');
var showquestionnum = document.getElementById('show-question-number');
var totalQuestion = document.getElementById('Total-Qustion');
var ShowQuestion = document.getElementById('Show-Question');
var mainoption = document.getElementById('main-option');
var disa = document.getElementById('dis')
var percentage = document.getElementById('per');

var index = 0;
var result = 0;

function ShowQue() {
    ShowQuestion.innerHTML = questions[index].question;
    totalQuestion.innerHTML = questions.length;
    showquestionnum.innerHTML = index + 1;
    var allop = questions[index].options;
    for(var i = 0; i < questions[index].options.length; i++){
        mainoption.innerHTML += `
        <div class="row">
            <div class="col-md-12 d-flex justify-content-center">
                <button onclick="checkop('${allop[i]}','${questions[index].correctAns}')" class="rounded-pill btn btn-secondary p-3 ps-4 pe-1 w-75 mt-0 m-2 fs-5 fw-bold">${questions[index].options[i]}</button>
            </div>
        </div>
        `
    }
}

ShowQue();

function checkop(opt, corr) {
    mainoption.innerHTML = "";
    if (opt === corr) {
        result++;
    }   
    index++;
    if(index === questions.length){
        main1.style.display = "none";
        disa.style.display = "block";
        var per = (result / questions.length) * 100;
        percentage.innerHTML = `Your Percentage is ${per.toFixed(2)} %`;
           }
    else {
        ShowQue();
    }   
}
function str() {
    main1.style.display = "block";
    disa.style.display = "none";
    index = 0;
    result = 0;
    ShowQue()   
}