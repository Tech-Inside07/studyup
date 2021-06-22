const submitBtn=document.getElementById('submitBtn');
submitBtn.addEventListener('click',()=>{
    localStorage.setItem('Authentication','True');
})

setInterval(()=>{
    let storageVal=localStorage.getItem('Authentication');
    const alertZone=document.querySelector('.alert-zone');
    if (storageVal=='True') {
        alertZone.innerHTML=`<div class="alert alert-success" role="alert">
        Request Submit Successfully !!!!
      </div>
      `
      localStorage.setItem('Authentication','False')
    }
    else{
        alertZone.innerHTML='';
    }
},1000)