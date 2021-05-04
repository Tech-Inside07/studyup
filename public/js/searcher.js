
// targeting the Element
const searcher=document.getElementById('searcherBar');
const searcherBtn=document.querySelector('.searcherBtn');
const card=document.querySelectorAll('.card');
const hide=document.querySelector('.hide');
const main=document.querySelector('.cardContainer');
const hidePara=document.querySelector('.hidepara')
blockCount=0;
const cardModifier=()=>{
    card.forEach(element=>{
        let data=element.getAttribute('data-value');
        let data2=element.getAttribute('data-value2');
        let data3=element.getAttribute('data-value3');
        if (data.toLowerCase()==searcher.value.toLowerCase() ||data2.toLowerCase()==searcher.value.toLowerCase()) {
            element.style.display="block";
            element.style.display="flex";
            element.removeAttribute('data-aos')
        } else {
            element.style.display='none';
        }
       
        
    })
}

searcherBtn.addEventListener('click',()=>{
    cardModifier()
})
setInterval(()=>{
    if (searcher.value=="") {
        card.forEach((element)=>{
            element.style.display="block";
            element.style.display="flex";
            element.setAttribute('data-aos','fade-right');
        })
    }
    card.forEach(element=>{
        let elemVal=window.getComputedStyle(element);
    if (elemVal.display=="flex") {
        blockCount++
    }
})
if (blockCount!=0) {
    hide.style.display='none';
    hidePara.style.position="absolute";
    hidePara.style.marginTop="4rem"
    hidePara.style.marginLeft="-5rem"
    blockCount=0;
}
else{
    hide.style.display='block'
}
},1000);
