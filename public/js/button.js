const localStorageVal=localStorage.getItem('Authentication')
if (localStorageVal) {
    const submitBtn=document.getElementById('submitBtn');
    submitBtn.addEventListener('click',()=>{
        localStorage.setItem("Authentication",true)
    })
}