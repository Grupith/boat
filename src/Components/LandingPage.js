import React from 'react'

export default function LandingPage() {
  return (
    <div className='LandingPage'>
        <div className='titleContainer'>
            <h1 className='title'>Lifeboat <span className='titleSpan'>Budget</span></h1>
            <h2 className='subTitle'>Track you're monthly bills</h2>
        </div>

        <h3 className='paragraphTitle'> Why lifeboat?</h3>
        <p className='paragraph'> Are you someone to use excel sheets to track your monthly bills?
           Well Lifeboat offers a clean UI to easily manage your finances.</p>
        <form className='nameForm'>
            <label for='name' className='nameLabel'>Enter your First Name</label>
            <input type='text' className='nameInput' />
            <button type='submit' className='submitNameButton'>Create Budget</button>
        </form>
    </div>
  )
}
