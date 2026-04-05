function calculateResult(){

    let n=document.getElementById("subjects").value;

    let i;
    let total=0;
    for(i=0;i<n;i++){
        let x=parseFloat(prompt("enter the marks of subject"(i+1)));
        total+=x;
    }
    let average=total/n;
    let grade;
    if(average>90){
        grade='A+';
    }
    else if(average>=80){
        grade='B+';

    }
    else if(average>=70){
        grade='C+';
    }
    else if(average>=60){
        grade='D+'
    }
    else if(average>=50){
        grade='E+'
    }
    else{
        grade='F+'
        

    }

    let result;
    if(average>=40){
        result="PASS";
    }
    else{
        result="FAIL"
    }
    document.getElementById("result").innerHTML="Total Marks"+total+"<br/>"+"Average marks: "


    let result=document.getElementById("result").innerHTML="Total Marks"+total+"<br/>"+"Average MARKS"+average+"<br/>"

}
