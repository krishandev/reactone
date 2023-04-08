import React from 'react'
import '../styles/footer.scss'

const Footer = () => {
  return <footer>
    <div>
        <h1>AdsRole</h1>
        <p>@All Right Reserved</p>
    </div>

    <div>
        <h5>Follow Us</h5>
        <div>
            <a href="https://www.facebook.com/AdsRole" target={"_blank"}>Facebook</a>
            <a href="https://twitter.com/AdsRole" target={"_blank"}>Twiiter</a>
            <a href="https://www.linkedin.com/company/adsrole/" target={"_blank"}>LinkedIn</a>
        </div>
    </div>
  </footer>
}

export default Footer