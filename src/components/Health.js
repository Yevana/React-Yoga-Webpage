import React from 'react'

function Health() {
  return (
    <>
     <div className='container main'>
    <h4 className='Headtitle'>Explore Yoga</h4>

<div id="carouselExampleIndicators" className="carousel slide subMain" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active bg-dark"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="bg-dark"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="bg-dark"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
     
<div className="card mb-3 CarouselCard">

<div className="row no-gutters">


<div className="col-md-8">
    <div className="card-body">
      <h5 className="card-title Cardtitle">Blood Testing</h5>
      <p className="card-text CardText">You can access your health and comfort at your home.</p>
      <p className="card-text CardText2"><small className="text-muted">HURRY UP Book Appointment for your Blood Test</small></p>
    </div>
  </div>

  <div className="col-md-4">
  <img src="assets/images/Testtub.jpg" className="CaroselImg" alt="..."/>

  </div>
  
</div>
</div>
    </div>


    <div className="carousel-item container">
        <div className="card mb-3 CarouselCard">

<div className="row no-gutters ">


<div className="col-md-8">
    <div className="card-body">
      <h5 className="card-title Cardtitle">BAMS Doctor</h5>
      <p className="card-text CardText">You can talk with our Best BAMS Doctor at your home.</p>
      <p className="card-text CardText2"><small className="text-muted">HURRY UP Book Appointment to talk with our BAMS Doctors</small></p>
    </div>
  </div>

  <div className="col-md-4">
  <img src="assets/images/Doctor.jfif" className="CaroselImg" alt="..."/>

  </div>
  
</div>
</div>
    </div>
    <div className="carousel-item">
    <div className="card mb-3 CarouselCard">

<div className="row no-gutters">


<div className="col-md-8">
    <div className="card-body">
      <h5 className="card-title Cardtitle">Products & Supplements </h5>
      <p className="card-text CardText">You can have helats products and there supplement at your home.</p>
      <p className="card-text CardText2"><small className="text-muted">HURRY UP Order your Product</small></p>
    </div>
  </div>

  <div className="col-md-4">
  <img src="assets/images/unnamed.png" className="CaroselImg" alt="..."/>


  </div>
  
</div>
</div>

    </div>
  </div>
  
</div>
    </div>
    
    
    </>
  )
}

export default Health

