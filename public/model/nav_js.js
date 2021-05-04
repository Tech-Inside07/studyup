// grabbing the parent Element
const navbar=document.getElementById('navbar')

// making nav 
const nav=` <nav class="navbar navbar-expand-lg navbar-dark bg-dark" data-aos="fade-right" data-aos-duration="900">
<div class="container-fluid">
  <img src="img/logo.png" alt="" srcset="">
  <a class="navbar-brand" href="#">Study<span>up</span></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
      <li class="nav-item">
        <a class="nav-a" aria-current="page" href="/">Home</a>
      </li>     
        <li class="nav-item">
          <a class="nav-a about" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-a" href="/contact">Contact</a>
        </li>

    </ul>
  </div>
</div>
</nav>`

// inserting navbar
navbar.innerHTML=nav;

