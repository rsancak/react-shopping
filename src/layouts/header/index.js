import './style.scss'
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
$(document).ready(function(){
    $('.navbar-nav a[href="'+window.location.pathname+'"]').parent().addClass("active");
});
function Header() {
    return (
        <header className="header_section">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="/">
                    <span>
                        GONZO
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className=""></span>
                </button>

                <div className="collapse navbar-collapse innerpage_navbar" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/shop">
                                Shop
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about-us">
                                About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact-us">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;