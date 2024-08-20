import './style.css'


const Galery = ({images=[
    'https://i.pinimg.com/236x/36/51/83/365183f4312af39d63ed5826265d383b.jpg',
    // 'https://i.pinimg.com/236x/90/0e/fa/900efa4902d0dc5c886d5d84c798e908.jpg',
    'https://i.pinimg.com/236x/de/1d/e7/de1de749efbb8f3db121c5f7ff105cdb.jpg',
    // 'https://i.pinimg.com/236x/97/c1/3a/97c13af8e4375077c8dc35fc3dc2911d.jpg',
    'https://i.pinimg.com/236x/38/65/21/386521c5e15570a435fddcd124ff61a7.jpg',
    'https://i.pinimg.com/236x/7d/d3/b9/7dd3b9fd06e8dd60fd0174ac2b92c133.jpg'
]})=>{

    return(
        <>
            <div class='container'>
                <div class="imageWrapper">
                    <div class="imageContainer">


                        {
                            images.map((item, idx)=>(
                                <div key={idx} class="imageItem" style={{backgroundImage : `url(${item})`}}>
                                    <div class="textContainer">
                                        <div class="imgRow">
                                            <div>
                                                <h3 class="title">Lorem ipsum</h3>
                                            </div>
                        
                                            <div>
                                                <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima quis odio ut doloremque. Repellendus quibusdam ut officia id molestias rerum veritatis reprehenderit doloremque est, laudantium non voluptatum aliquid omnis.</p>
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )

}

export default Galery