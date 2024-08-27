import { useState } from 'react'
import heroImage from '../../assets/crash.jpg'
import mario from '../../assets/mario.jpg'
import halo from '../../assets/halo.jpg'
import sonic from '../../assets/sonic.jpeg'
// import ps from '../../assets/ps.png'
// import nintendo from '../../assets/nintendo.png'
// import microsoft from '../../assets/microsoft.png'
// import sega from '../../assets/sega.png'
import { Container, Image, PlatContainer } from './heroStyles'




const Hero = () => {
    const [img, setImg] = useState(mario)
    const images = [heroImage,mario,halo,sonic]
    // const rand =Math.floor(Math.random() * images.length);

    const handleClick =(e)=>{
        const htmlContent = document.querySelector('#tt')
        console.log(e.target.innerHTML);
        for (var i = 0; i < htmlContent.childNodes.length; i++) {
           
            //   console.log(htmlContent.childNodes[i].innerHTML);
        
            
              switch (e.target.innerHTML) {
                case "Sony":
                    setImg(images[0])
              
                    break;
                case "Nintendo":
                    setImg(images[1])
           
                    break;
                case "Microsoft":
                    setImg(images[2])
                    break;
                case "Sega":
                    setImg(images[3])
                    break;
                default:
                    break;
            }
        }
    }

    const hover = (e) =>{
        e.target.classList.add('test')
    }
    const leave = (e) =>{
        e.target.classList.remove('test')
    }

  return (
  <Container>
    <div>
        <Image src={img} />
       </div>
        <PlatContainer onMouseOver={handleClick} id='tt'>
        <div className='plat' onMouseOver={hover} onMouseLeave={leave} >
            Sony
        </div>
        <div className='plat' onMouseOver={hover} onMouseLeave={leave}>
            {/* <Logos  src={nintendo} /> */}
            Nintendo
        </div>
        <div className='plat' onMouseOver={hover} onMouseLeave={leave}>
            {/* <Logos src={microsoft} /> */}
            Microsoft
        </div>
        <div className='plat' onMouseOver={hover} onMouseLeave={leave}>
            {/* <Logos src={sega} /> */}
            Sega
        </div>
        </PlatContainer>
       
      
    </Container>
  )
}

export default Hero