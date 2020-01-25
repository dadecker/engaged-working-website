import React, {Component} from 'react';

class PaperLandingMain extends Component
{
    render()
    {
        return(
            <div>
            <div id="main-landing" class="page-header section-dark">
            <div class="filter"></div>
            <div class="content-center">
            <div class="container">
            <div class="title-brand">
            <h1 class="presentation-title">Engaged Software</h1>        
            </div>
            <h2 class="presentation-subtitle text-center">Keep Customers For Life</h2>
            </div>
            </div>  
            </div>
            <div class="section section-dark">
            <div class="container">
            <div class="row example-page">
            <div class="col-md-6 text-center">
            <a href="App.js" target="_blank">
            <img id="sideBySide1"  alt="Rounded Image" class="img-rounded img-responsive" />
            <a href="App.js" class="btn btn-outline-neutral btn-round" target="_blank">Our Products</a>
            </a>
            </div>
            <div class="col-md-6 text-center">
            <a href="App.js" target="_blank">
            <img id="sideBySide2" alt="Rounded Image" class="img-rounded img-responsive" />
            <a href="App.js" class="btn btn-outline-neutral btn-round" target="_blank">Our Plans</a>
            </a>
            </div>
            </div>
            </div>
            </div>
            </div>
            );
        }
    }
    
    export default PaperLandingMain;