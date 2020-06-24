function initiaizer () {
    var initials = prompt("What are your initials?")
    localStorage.setItem('name',initials)


}





function createQuestions () { 

    var output= [];
    questions.forEach(
        (currentQuestion, questionNumber)=> {
            var answers = []; 

        for(letter in currentQuestion.answers){
            answers.push(
               `<label>
               <input type= "radio" name= "question${questionNumber}" value= ${letter}>
               ${letter} : ${currentQuestion.answers[letter]}
               </label> </br></br>` 
            );
        }


        output.push(
            `<div class= "slide"> <div class= "question"> ${currentQuestion.question} </div> </br>
            <div class= "answers"> ${answers.join('')} </div> </div>`
        
        
        );
        }
    );

    
    quiz.innerHTML = output.join('');

    



}




function timer () {
    startButton.parentNode.removeChild(startButton)

    

    var interval = setInterval(function(){
        document.getElementById('timer').innerHTML=count;
       if(count>0) {count--} ;
        if (count===0) {
            clearInterval(interval);
            document.getElementById('timer').innerHTML = "Done";
        if (count===0) {
            displayAnswers()
        }
      
        };


        
    
    
    },1000);

    return interval

  
    
    
    
};





function displayAnswers () {

    var answerContainers = quiz.querySelectorAll('.answers')

    var numberCorrect= 0;

    questions.forEach ( (currentQuestion, questionNumber) => {

        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userSelection = (answerContainer.querySelector(selector) || {}).value;

        if(userSelection === currentQuestion.correctanswer) {
            numberCorrect++;

            answerContainers[questionNumber].style.color='yellow'

        }

        else{

            answerContainers[questionNumber].style.color= 'red'

        }

        console.log(`${numberCorrect} out of ${questions.length}`);

        {results.innerHTML = `${numberCorrect} out of ${questions.length}`};

        localStorage.setItem("score",`${numberCorrect}`)

       

        
        count=0

       

        

    

   
     
            

        

        
        
    });

    

    

    
    


   





};











function showSlide (n) {

   
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add('active-slide');
    currentSlide = n;

    if(currentSlide === 0) {
        lastButton.style.display = 'none';
    }
    else {
        lastButton.style.display= 'inline-block';

    }

    if (currentSlide === slides.length-1) {
        nextButton.style.display = 'none';
        submit.style.display = 'inline-block';

    }
    else{
        nextButton.style.display = 'inline-block'
        submit.style.display = 'none'
    }

    return
    

}




function showNextSlide () {
showSlide (currentSlide + 1);
}

function showPreviousSlide () {
    showSlide (currentSlide-1);
}


















var quiz= document.getElementById("quiz") 
var submit= document.getElementById("submit")
var results= document.getElementById("results")
var count= 20









  






const questions = [
    {
        question: "What does HTML stand for?",
        answers: {
            a: "Help tomorrow or later",
            b: "Hypertext Mark Up Language",
            c: "Home Technical and Mechanical Leverage "
        },
        correctanswer: "b",
   },


   {
       question: "What function is used to recognize events occuring on a webpage or application?",
       answers: {
           a: "Add event listener",
           b: "Event recognizer",
           c: "Express",
       },
       correctanswer: "a",
    },


    {
        question: "What is a framework created to make Javascript easier to use?",
        answers: {
            a: "Bootstrap",
            b: "JQuery",
            c: "Handlebars",
        },
        correctanswer: "b",

    },

    {
        question: "What is a framework used to make styling your page more simple?",
        answers: {
            a: "Axios",
            b: "Bootstrap",
            c: "React",
        },
        correctanswer: "b"


    },



]



createQuestions();




var lastButton = document.getElementById("last");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
var startButton = document.getElementById("start")
let currentSlide = 0;










//slides.document.style.display = "none"





submit.addEventListener('click', ()=>{

displayAnswers();
initiaizer();

});
lastButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
startButton.addEventListener('click', ()=>{
    //showQuiz();
    //showButtons();
    showSlide(currentSlide);
    timer();



})





//startButton.addEventListener('click',showSlide(currentSlide))


