
import { FaApple } from "react-icons/fa";
import playstore from '../../assets/playstoreLogo.png'
import heroImage from '../../assets/kudaHero.png'
import styled from "styled-components"
const Hero = ()=>{
    return(
      <Container>
        <Wrapper>
          <TextBox>
            <h1>The money app for Africans.</h1>
            <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
            <HeroBtns>
              <button>
                <h1> <FaApple color="white" size={30} /> </h1>
                <h3> <span>Download on the </span> <br />
                      App Store
                 </h3>
              </button>
              <button>
              <img src={playstore}  alt="icon" />
                <h3> <span>GET IT ON</span> <br />
                     Google Play
                 </h3>
              </button>
            </HeroBtns>
          </TextBox>
          <ImageBox>
            <img src={heroImage} alt="" />
          </ImageBox>
        </Wrapper>
      </Container>
    )
  }
  export default Hero
  
  const Container = styled.div`
    /* background-color: orange; */
    max-width: 1280px;
    min-height: calc(100vh - 65px);
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  `
  const Wrapper = styled.div`
    width: 85%;
    /* background-color: saddlebrown; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 60px;
    @media (max-width: 900px) {
   justify-content: center;
   align-items: center;
   text-align: center;
   
}
    
  `
  const TextBox = styled.div`
  max-width: 400px;
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* @media (max-width: 800px) {
    max-width: 100%;
   align-items: center;
   text-align: center;
} */

  h1{
    font-size: 37px;
    color: #40196D;
    font-weight: 800;
    line-height: 1.2;
    max-width: 320px;
  }

  p{
    font-size: 16px;
    font-weight: 500;
    max-width: 320px;
  }
  
  button{
    width: 130px;
    height: 42px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    border: none;
    outline: none;
    border-radius: 8px;
    cursor: pointer;
   }

    h3{
      width: 90%;
      font-size: 12px;
      /* background-color: blue; */
      height: 35px;
      margin: 0;
      padding: 0;
      text-align: left;
    }
    img{
      margin-top: 3px;
      width: 23px;
      height: 55%;
    }

    span{
      font-size: 8px;
      font-weight: 300;
    }
    
  
  `
  const ImageBox = styled.div`

  /* background-color: blue; */
  max-width: 500px;
  display: flex;
  justify-content: center;
  img{
    max-width: 98%;
    height: 100%;
  }
 
  @media (max-width: 900px) {
   img{
    width: 100%;
   }
    }
  
  `
  const HeroBtns = styled.div`
  display: flex;
  
  gap: 10px;
  @media (max-width: 900px) {
    justify-content: center;
   }
  /* background-color: seagreen; */
  `