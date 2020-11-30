import React from 'react'
import shoes from './shoes.png'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div >

           
            <div >
                <h1 className="name">welcome to shoes store</h1>
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
           
                <img className="img" src={shoes}  alt=""/>
                </Link>
                </div>
            </div>


            <Link to="/Product" >
            <button className="bt">shope now</button>
            </Link>
        </div>

    )
}

export default Home;
