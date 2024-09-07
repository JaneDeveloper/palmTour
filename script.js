
    function submitForm() {
        var name=document.getElementById('nameinput').value;
        if (name=="") {
        document.getElementById("errorMessage").innerText="Enter your name or the name of your team.";
        } else {
        localStorage.setItem('userName', name);
        window.location.href='introduction.html';
        }
    }
    window.onload=function() {
        var name=localStorage.getItem('userName');
        document.getElementById('welcomeMessage').innerText = 'Hello, ' + name + '!';
       
    }
    function startGame (){
        window.location.href="questionOne.html";
    }
    function checkForm() {
        var answer=document.getElementById('answerInput').value;
        if (answer==""){
            document.getElementById("errorMessage").innerText="Enter your answer.";
        }else if (answer=="shell" || answer=="Shell") {
            window.location.href="location.html";
        }else{
            document.getElementById("errorMessage").innerText="Your answer is wrong. Try Again.";
        }
    }

    document.addEventListener("DOMContentLoaded", ()=>{
        document.querySelector("#next").addEventListener("click", checkForm);
    });

    function goToQuestionTwo() {
        window.location.href="questionTwo.html";
    }

    document.addEventListener("DOMContentLoaded", ()=>{
        document.querySelector("#nextQuestion").addEventListener("click", goToQuestionTwo);
    });




    function goToQuestionThree () {
        var selectedOption = document.querySelector('input[name="answer"]:checked');
        if (selectedOption) {
            if (document.querySelector("#hanseatic").checked) {
                var name = localStorage.getItem('userName');
                document.getElementById('congratulationMessage').innerText = 'Congratulations, ' + name + '!';
                window.location.href="final.html";
            }else {
                document.getElementById("errorMessage").innerText="Your answer is wrong. Try Again.";}
        }else { 
            document.getElementById("errorMessage").innerText="Choose your answer.";


        }
    }


    document.addEventListener("DOMContentLoaded", ()=>{
        document.querySelector("#next").addEventListener("click", goToQuestionThree);
        
    });
  



    
    

    
    
    