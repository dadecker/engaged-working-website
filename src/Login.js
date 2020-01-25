import React, {Component} from 'react';

class Login extends Component
{
    render()
    {
        return(
                <div>
                    <div class="section section-dark">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-8 ml-auto mr-auto text-center">
                            <h2 class="title">Get In Touch With Us</h2>
                            <p class="description">Leave us your name and email address to schedule a demo, ask a question, or just get in touch with us</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div id="register-page" class="section section-image section-login" >
                    <div class="container">
                        <div class="row">
                        <div class="col-lg-4 col-md-6 mx-auto">
                            <div id="register-card" class="card card-register">
                            <h3 id="card-title" class="title mx-auto">Reach Us</h3>
                            <div class="social-line text-center">
                                <a href="App.js" class="btn btn-neutral btn-facebook btn-just-icon mt-0">
                                <i class="fa fa-facebook-square"></i>
                                </a>
                                <a href="App.js" class="btn btn-neutral btn-google btn-just-icon mt-0">
                                <i class="fa fa-google-plus"></i>
                                </a>
                                <a href="App.js" class="btn btn-neutral btn-twitter btn-just-icon mt-0">
                                <i class="fa fa-twitter"></i>
                                </a>
                            </div>
                            <form class="register-form">
                                <label>Email</label>
                                <div class="input-group form-group-no-border">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                    <i class="nc-icon nc-email-85"></i>
                                    </span>
                                </div>
                                <input type="email" class="form-control" placeholder="Email"/>
                                </div>
                                <label>Password</label>
                                <div class="input-group form-group-no-border">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                    <i class="nc-icon nc-key-25"></i>
                                    </span>
                                </div>
                                <input type="password" class="form-control" placeholder="Password"/>
                                </div>
                                <button class="btn btn-danger btn-block btn-round">Register</button>
                            </form>
                            <div class="forgot">
                                <a href="App.js" class="btn btn-link btn-danger">Forgot password?</a>
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
    
    export default Login;