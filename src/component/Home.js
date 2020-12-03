import React from 'react'
import shoes from './shoes.png'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect'
import useWebAnimations  from "@wellyshen/use-web-animations";

function Home() {
   



    const  { ref,   } = useWebAnimations({
       
        keyframes: {
            transform: ["translateX( 100px )"], // Move by 500px
            background: ["red", "blue", "green"], // Go through three colors
          },
          timing: {
            delay: 500, // Start with a 500ms delay
            duration: 1000, // Run for 1000ms
            iterations: 2, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
          },
        }
        );
   
    return (
        <div >

           
            <div >
            <div className="name">
        <Typewriter
                  options={{
                    strings: ["welcome to shoes store"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "h1",
                    cursorClassName: "Typewriter__cursor"
                  }}
                />
                
        </div>
                
                <div className="paragraph">

                <p>
                     
                     Consectetur cum sed, mi arcu posuere auctor. Elit dignissim egestas laoreet
                    praesent ornare tellus ut fringilla convallis mattis proin.
                    Placerat cum vel nam duis. Suspendisse urna suspendisse odio
                    urna rutrum nunc varius euismod! Ornare, amet luctus eget nisl
                    consequat hac! Fermentum varius, erat tincidunt dolor inceptos
                    himenaeos leo vulputate. Facilisi sociis dictumst semper
                    fermentum vitae elit ligula maecenas suspendisse ultricies.
                    Ut sollicitudin luctus magnis metus felis mi fames enim integer
                    porta cras ligula. Vulputate pretium.
</p>
            </div >
            <div >
                <Link to="/Product" className="home">
           
                <img className="img"  src={shoes} id="abc" alt=""/>
                </Link>
                </div>
            </div>


            <Link to="/Product" >
            <button className="bt"  ref={ref}>shope now</button>
            </Link>
        </div>

    )
}

export default Home;
