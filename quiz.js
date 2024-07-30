const quizData = [
    {
        title: "Why We Use &ltbr&gt Element",
        answer_1: "To Make Text Bold",                                    
        answer_2: "To Make Text Italic",
        answer_3: "To Add Breakline",
        answer_4: "To Create Horizontal Line",
        right_answer: "To Add Breakline"
    },
    {
        title: "How Can We Include External Page Inside Our HTML Page",
        answer_1: "By Using Include in HTML",
        answer_2: "By Using Load In HTML",
        answer_3: "By Using iFrame Tag",
        answer_4: "All Solutions Is Wrong",
        right_answer: "By Using iFrame Tag"
    },
    {
        title: "How Can We Make Element Text Bold",
        answer_1: "Putting It Inside &ltb&gt Tag",
        answer_2: "Putting It Inside &ltinside&gt Tag",
        answer_3: "Customizing It With Font-Weight Property In CSS",
        answer_4: "All Answers Is Right",
        right_answer: "All Answers Is Right"
    },
    {
        title: "In HTML Can We Use This Way To Add Attributes",
        answer_1: "&ltdiv class='class-name'&gt",
        answer_2: "&ltdiv class=class-name&gt",
        answer_3: "&ltdiv class=\"class-name\"&gt",
        answer_4: "All Is Right",
        right_answer: "All Is Right"
    }
  ];

  let question_nbr = quizData.length ;
  let NExtbtn = document.querySelector('.Next');
  let bonus = 0 ,index = 0 ;
  let the_right_answer ;
  getDataFromTheArr(index);
function getDataFromTheArr(index){
    let quizContainer = document.querySelector('.quiz');
   
    let main ='';
    main =`
        <h2><span class="qNbr">${index+1}. </span> ${quizData[index].title} </h2>
        <div class="answers">
            <button onclick="checker(this)" >${quizData[index].answer_1}</button>
            <button onclick="checker(this)" >${quizData[index].answer_2}</button>
            <button onclick="checker(this)" >${quizData[index].answer_3}</button>
            <button onclick="checker(this)" >${quizData[index].answer_4}</button>
        </div>
    
    `;
    the_right_answer = quizData[index].right_answer ;
    quizContainer.innerHTML = main ;

    // console.log(quizContainer);

}

function checker(elmnt){
    
    if (elmnt.innerHTML === the_right_answer) {
        elmnt.style.backgroundColor = 'green';
        bonus++;
        console.log( bonus);
    } else {
        elmnt.style.backgroundColor = 'red';
    }
    let buttons = elmnt.parentElement.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
        button.style.cursor = 'not-allowed' ;
       
        if (button.innerHTML === the_right_answer) {
            button.style.backgroundColor = 'green';
        }
    });
}

function nextquiz(){
    if (index < question_nbr - 1) {
        index++;
        getDataFromTheArr(index);
    } else {
        alert("Quiz completed! Your score is " + bonus + " out of " + question_nbr);
    }
    
}