var quizQuestions = {
  "start" : {
    "h1" : "Does your office already provide free sanitary products for women?",
    "question" : "Do people have free access to sanitatry products in your office when they need them? Are these products paid for by your company in a similar way to how the toilet paper is paid for?",
    "yes" : "conclusion_1",
    "no" : "question_1"
  },
  "question_1" : {
    "h1" : "What's your job?",
    "question" : "Are you responsible for the facilities at your company, do you have any control over spending on employee welfare issues, are you in a position to institute free sanitary products for women at your company?",
    "yes" : "conclusion_2",
    "no" : "question_2"
  },
  "question_2" : {
    "h1" : "Are the toilets in your place shared?",
    "question" : "Do men and women share the toilets",
    "yes" : "conclusion_3",
    "no" : "conclusion_4"
  },
  "conclusion_1" : {
    "location" : "tell-us-about-your-office-toilets"
  },
  "conclusion_2" : {
    "location" : "provide-free-tampons"
  },
  "conclusion_3" : {
    "location" : "set-up-a-tampon-club"
  },
  "conclusion_4" : {
    "location" : "promote-tampon-club"
  },
};

$(document).ready(function(){
  loadQuestion("start");
});

function loadQuestion(questionID) {
  $('#answer1').unbind();
  $('#answer2').unbind();

  if (typeof(quizQuestions[questionID]['location']) !==  'undefined'){
    location.assign(quizQuestions[questionID]['location']);
  } else {
    $('#question').text(quizQuestions[questionID]["h1"]);
    $('#subtext').text(quizQuestions[questionID]["question"]);
    $('#answer1').click(function(){loadQuestion(quizQuestions[questionID]["yes"])});
    $('#answer2').click(function(){loadQuestion(quizQuestions[questionID]["no"])});
  }
}
