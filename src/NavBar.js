import React, {Component} from 'react';

class NavBar extends Component
{
    render()
    {
        return(
            <div class="index-page sidebar-collapse">
                <nav class="navbar navbar-expand-lg fixed-top navbar-transparent " color-on-scroll="300">
                    <img class="img-responsive" id="paper-nav" />
                    <div class="container">
                    <div class="navbar-translate">
                    
                    <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-bar bar1"></span>
                        <span class="navbar-toggler-bar bar2"></span>
                        <span class="navbar-toggler-bar bar3"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse justify-content-end" id="navigation">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="#" target="_blank" class="nav-link"> Products </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" target="_blank" class="nav-link"> Plans </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" target="_blank" class="nav-link"> Contact Us </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" target="_blank" class="btn btn-outline-danger btn-round">Schedule A Demo</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

export default NavBar;