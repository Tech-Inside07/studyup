
// const submit=document.querySelector('#submitBtn');
const gmailSend=document.querySelector('.gmailSend');
const userName=document.getElementById('userText');
const userEmail=document.getElementById('userEmail');
const messageValue=document.querySelector('#userQuery');
const formContent=document.querySelector('#myform')
const submitBtn=document.querySelector('#submitBtn');

// submitBtn.addEventListener('click',(e)=>{
//     setTimeout(()=>{
//         e.preventDefault()
//     },2000)
// })

gmailSend.addEventListener('click',(e)=>{
    if (messageValue.value=="") {
        alert('Invalid Message Query')
    } else {
    alert('Request Submitted')
}

})