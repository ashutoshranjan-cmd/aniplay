import React from 'react'
import logo from '../assets/logo.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="section1">
        <img src={logo} alt="" />
        </div>
        <div className="section2">
            <h1>About</h1>
            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, natus totam debitis sequi quasi earum repellat quaerat fugiat at ipsa perferendis quod odio voluptas ad. Saepe assumenda tempore sequi neque, aut, illo doloremque iste </h6>
        </div>
        <div className="section3">
            <h1>Contact</h1>
            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto pariatur a at eius hic voluptate veniam praesentium </h6>
        </div>
        <div className="section4">
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
        </div>
        <div className="section5">
            <hr />
            <div className="line">
                <h6>copyrighted &copy; ani play 2024</h6>
                <h6>privacy policy</h6>
                <h6>Terms & condition </h6>
            </div>
        </div>

      
    </div>
  )
}

export default Footer
