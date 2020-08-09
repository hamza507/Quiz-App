function getanswer(){
  var total=5;
  var score=0;

  var q1=document.forms['Quiz']['q1'].value;
  var q2=document.forms['Quiz']['q2'].value;
  var q3=document.forms['Quiz']['q3'].value;
  var q4=document.forms['Quiz']['q4'].value;
  var q5=document.forms['Quiz']['q5'].value;


  for(i=1; i<=total; i++) {
    if(eval('q'+i) == '' || eval('q'+i) == null) {
        alert("Please select option for question no:"+i);
        return false;
    }
}

var answers = ["b","b","a","d","c"];
for(i=1;i<=total;i++) {
    if(eval('q'+i) == answers[i-1]) {
        score++;
    }
}

var results = document.getElementById("results");
alert('You scored '+score+' out of '+total);

return false;

}