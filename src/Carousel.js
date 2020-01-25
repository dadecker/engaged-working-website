import React, {Component} from 'react';

class Carousel extends Component
{
    render()
    {
        return(
            <div class="main">
                <div class="section pt-o" id="carousel">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 ml-auto mr-auto">
                                <div class="card page-carousel">
                                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner" role="listbox">
                                        <div class="carousel-item active">
                                            <img id="car_1" class="d-block img-fluid"  alt="First slide"/>
                                            <div class="carousel-caption d-none d-md-block">
                                            <p>Login Screen</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img id="car_2" class="d-block img-fluid" alt="Second slide"/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <p>Management Console</p>
                                    </div>
                                    </div>
                                        <div class="carousel-item">
                                            <img id="car_3" class="d-block img-fluid"  alt="Third slide"/>
                                            <div class="carousel-caption d-none d-md-block">
                                             <p>Message Creation</p>
                                            </div>
                                        </div>
                                        </div>
                                            <a class="left carousel-control carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span class="fa fa-angle-left"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                            <a class="right carousel-control carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span class="fa fa-angle-right"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
            );
        
    }
}  
export default Carousel;