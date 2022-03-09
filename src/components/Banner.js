import React from 'react'
import { YogaData } from '../Data/YogaData';



function Banner() {

    const Images = [
        {url:"assets/data/1.webp",caption:"this is a yoga",class:"active"},
        {url:"assets/data/yoga.jpg",caption:"this is a yoga",class:""},

    ]
  return (
    <> 
       

       <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active "></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1" class="bg-dark"></li>
    {/* <li data-target="#carouselExampleCaptions" data-slide-to="2"></li> */}
  </ol>
  <div className="carousel-inner">
    
    {YogaData.Banner.map((item,index)=>{
      return(<>

<div className={`carousel-item ${item.class}`} data-interval="8000" key={index}>
      <img src={item.url} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2>{item.title}</h2>
        <p className='h4'>{item.caption}</p>
        {item.class == "" ? <button type="button" className="btn btn-outline-light">Buy Now</button> : <></>}

      </div>
    </div>
   
      </>)
    })}
    {/* <div className="carousel-item" data-interval="8000">
      <img src="assets/images/banner.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
  </div> */}
  </div> 
 
</div>

      </>
  )
}

export default Banner