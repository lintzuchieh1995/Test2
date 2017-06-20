$('button').on('click', function(){
var w = $('#weight').val()
var h = $('#height').val()
w = Number(w)
h = Number(h) / 100
hh = h*h
bmi = w / hh
if(bmi>24){
$('#result').val(bmi);
  document.getElementById("alarm").textContent = "BMI太大囉!需要節制飲食，未來請多看我分享的營養食品知識!";
}
else if(bmi<18.5){
$('#result').val(bmi);
  document.getElementById("alarm").textContent = "BMI太小囉!請多吃一點營養飽足的食物!我會多多為你補充這方面的資訊的!";
}
else{
    $('#result').val(bmi);
    document.getElementById("alarm").textContent = "BMI嘟嘟好喔!請繼續關注我的部落格追蹤健康食品小知識!";
    
}

})