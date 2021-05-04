// targeting olymiad insering area
const olymiadArea=document.getElementById('target');
const getInform=document.querySelector('.olymiad-inform');
const getQuestion=document.querySelector('.olymiad-question');
const getRegister=document.querySelector('.olymiad-register')
const details=document.querySelector('.details');
const previous=document.querySelector('.pyqs');
const zone=document.querySelector('.zone');
const register=document.querySelector('.registration');
const selectBtn=document.querySelector('.go')
const junior=document.querySelector('.junior')
const hauts=document.querySelector('.hauts')

const searcher=document.getElementById('searcherBar');
const searcherBtn=document.querySelector('.searcherBtn');
// adding Event listiener
getInform.addEventListener('click',()=>{
    zone.innerHTML="<u>Details</u>"
    details.style.display="block";
    previous.style.display="none";
    register.style.display="none"
})
getQuestion.addEventListener('click',()=>{
    zone.innerHTML="<u>PYQS</u>"
    details.style.display='none';
    previous.style.display="block"
    register.style.display="none";
})
getRegister.addEventListener('click',()=>{
    zone.innerHTML="<u>Registration</u>"
    details.style.display="none";
    previous.style.display="none"
    register.style.display="block"
})
selectBtn.addEventListener('click',()=>{
  let optionUsed = select.options[select.selectedIndex].text;
  if (optionUsed=='Junior') {
      junior.style.display="block";
      hauts.style.display="none";
  }
  else if(optionUsed=="Hauts"){
      junior.style.display="none"
      hauts.style.display="block"
  }
})