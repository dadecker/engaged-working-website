import React, {Component} from 'react';

class Footer extends Component
{
    render()
    {
        return(
                <div>
                     <footer class="footer footer-black  footer-white ">
                    <div class="container">
                        <div class="row">
                        <nav class="footer-nav">
                            <ul>
                            <li>
                                <a href="#" target="_blank">Engaged Software</a>
                            </li>
                            
                            <li>
                                <a href="#" target="_blank">Licenses</a>
                            </li>
                            </ul>
                        </nav>
                        <div class="credits ml-auto">
                            <span class="copyright">
                            ©
                            <script>
                                document.write(new Date().getFullYear())
                            </script> All Rights Reserved
                            </span>
                        </div>
                        </div>
                    </div>
                    </footer>
                </div>
            );
        }
    }
    
export default Footer;