import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Joyce C.</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="uil uil-instagram"></i>
                </a>

                <a href="https://www.facebook.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="uil uil-facebook"></i>
                </a>

                <a href="https://twitter.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="uil uil-twitter"></i>
                </a>
            </div>

            <span className="footer__copy">
                &copy; joycehwchan
            </span>
        </div>
    </footer>
  )
}

export default Footer