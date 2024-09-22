
    function submitForm() {
        var name=document.getElementById('nameinput').value;
        if (name=="") {
        document.getElementById("errorMessage").innerText="Enter your name or the name of your team.";
        } else {
        localStorage.setItem('userName', name);
        window.location.href='introduction.html';
        }
    }

    $(document).ready(()=> {
        var name=localStorage.getItem('userName');
        document.getElementById('welcomeMessage').innerText = 'Hello, ' + name + '!';
    })

    function startGame (){
        let startTime = new Date();
        localStorage.setItem('currentTime', startTime); 
        window.location.href="questionOne.html";

    }
    $("#prev").click(() => location = "index.html");
   


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
        $("#prevOne").click(() => location.replace ("introduction.html"));
    });
 

    function goToQuestionTwo() {
        window.location.href="questionTwo.html";
    }

    document.addEventListener("DOMContentLoaded", ()=>{
        document.querySelector("#nextQuestion").addEventListener("click", goToQuestionTwo);
        $("#prevTwo").click(() => location.replace("questionOne.html"));
    });




    function goToQuestionThree () {
        var selectedOption = document.querySelector('input[name="answer"]:checked');
        if (selectedOption) {
            if (document.querySelector("#hanseatic").checked) {
                window.location.href="final.html";
            }else {
                document.getElementById("errorMessage").innerText="Your answer is wrong. Try Again.";}
        }else { 
            document.getElementById("errorMessage").innerText="Choose your answer.";
        }
    }

    document.addEventListener("DOMContentLoaded", ()=>{
        document.querySelector("#next").addEventListener("click", goToQuestionThree);
        $("#prevThree").click(() => location.replace("location.html"));
        
    });

    $(document).ready(()=> {
        var name=localStorage.getItem('userName'); 
        document.getElementById('congratulationMessage').innerText = 'Congratulation, ' + name + '!'; 
        let startTime = new Date(localStorage.getItem('currentTime'));
        let endTime = new Date();
        let timeSpent = Math.floor((endTime - startTime) / 1000);
        document.getElementById('timeSpentOne').innerText = 'Time Spent:' + timeSpent + ' seconds';
        localStorage.removeItem('currentTime');
        localStorage.removeItem('userName');
    });

   


  



    
    

    
    
    