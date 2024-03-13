import './Footer.css'

export const Footer = () => {
    console.log("Footer")
    return (
        <footer className='footer section-50vh'>
            <div className="footer__content">
                <div className="footer__logo">
                    <img src="/images/logoWhite.png" alt="Logo YeiiMaccDev" loading="lazy" width="250" height="250" />
                </div>
                <div className="footer__menu">
                    <hr className="footer__divider" />
                    <a className="footer__link" href="#ofertas">
                        <i className="fa-solid fa-percent"></i>
                        Ofertas
                    </a>
                    <a className="footer__link" href="#productos">
                        <i className="fa-solid fa-laptop"></i>
                        Productos
                    </a>
                    <a className="footer__link" href="#nosotros">
                        <i className="fa-solid fa-users"></i>
                        Nosotros
                    </a>
                    <a className="footer__link" href="login.html">
                        <i className="fa-solid fa-right-to-bracket"></i>
                        Login
                    </a>
                </div>
                <div className="footer__networks">
                    <hr className="footer__divider" />
                    <a href="#" className="footer__link footer__networks-facebook">
                        <i className="fa-brands fa-facebook"></i>
                        Facebook
                    </a>
                    <a href="#" className="footer__link footer__networks-whatsapp">
                        <i className="fa-brands fa-whatsapp"></i>
                        Whatsapp
                    </a>

                    <a href="#" className="footer__link footer__networks-instagram">
                        <i className="fa-brands fa-instagram"></i>
                        Instagram
                    </a>

                    <a href="#" className="footer__link footer__networks-twitter">
                        <i className="fa-brands fa-twitter"></i>
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    )
}
