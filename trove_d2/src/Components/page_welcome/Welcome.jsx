import React from 'react';
import './Welcome.css';
import t1 from './t1.jpg';
import t2 from './t2.jpg';
import t3 from './t3.jpg';
import t4 from './t4.jpg';
import t5 from './t5.jpg';
import t6 from './t6.jpg';
import t7 from './t7.jpg';
import t8 from './t8.jpg';
import t9 from './t9.jpg';
import t10 from './t10.jpg';
import t11 from './t11.jpg';

class Welcome extends React.Component{
    render(){
        const { onLoginClick, onSignupClick } = this.props;
        return(
            <div>
            <div id="welcome_title">
<div>
<button id="login_button" onClick={onLoginClick}>LOGIN</button>
        <button id="signup_button" onClick={onSignupClick}>SIGN UP</button></div>
        <div>             
            <div>
                <div>
               <h1 id="title_trove">
                    TROVE 
                </h1>
                </div>
                </div>
                <div>
                <h1 id="title_today">
                    Today
                </h1>
                </div>
                <div>
                <h1 id="title_watch">
                    Watch
                </h1>
                </div>
                <div>
                <h1 id="title_explore">
                    Explore
                </h1>
                </div>
                    <br></br>
                <div id="welcome_quote">
                    <h2 id="welcome_trove"><p>Welcome to TROVE !
                        Your Gateway to Endless Entertainment Discoveries ! <br/>Dive into a world where every click unlocks a new realm of movies, TV shows, music, and more</p></h2>
                </div>
                </div>

                <div>
                <body>
                    <marquee behavior="scroll" direction="left" scrollamount="10">
                        <img src={t1} alt='logo'/>
                        <img src={t2} alt='logo'/>
                        <img src={t3} alt='logo'/>
                        <img src={t4} alt='logo'/>
                        <img src={t5} alt='logo'/>
                        <img src={t6} alt='logo'/>
                        <img src={t7} alt='logo'/>
                        <img src={t8} alt='logo'/>
                        <img src={t9} alt='logo'/>
                        <img src={t10} alt='logo'/>
                        <img src={t11} alt='logo'/>
                    </marquee>
                </body>
                </div>



            </div>
            </div>
        );
    }
}
export default Welcome;