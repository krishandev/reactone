import React from 'react'
import '../styles/contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type='text' placeholder='Enter Name' required/>
                </div>

                <div>
                    <label>Email</label>
                    <input type='email' placeholder='Enter Email' required/>
                </div>

                <div>
                    <label>Message</label>
                    <input type='text' placeholder='Tell Us About Your Query' required/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </main>

    </div>
  )
}

export default Contact