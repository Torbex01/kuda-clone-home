import styled from "styled-components"
import image from '../../assets/phoneCardImage.jpg'
import {MdKeyboardArrowRight } from "react-icons/md"



const PhoneCard = ()=> {
    return(

        <Container>
            <Wrapper>
                <TextSide>
                    <h1>Your phone + <br /> our app + <br /> a debit card = <br /> a simpler life.</h1>
                    <p>We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.
                    </p>

                    <a href="">Open An Account in Minutes
                        <span><MdKeyboardArrowRight size={25} /> </span>
                    </a>
                </TextSide>

                <ImageSide>
                    <img src={image} alt="" />
                </ImageSide>
            </Wrapper>
        </Container>
    )
}  
export default PhoneCard

const Container = styled.div`
    /* background-color: blue; */
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
 width: 88%;
    /* background-color: saddlebrown; */
    /* padding: 20px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* gap: 70px; */

    @media (max-width: 900px) {
   justify-content: center;
   align-items: center;
   text-align: center;
    }
`   
const TextSide = styled.div`
max-width: 500px ;
display: flex;
flex-direction: column;
justify-content: center;
/* background-color: aqua; */

@media (max-width: 1100px) {
   justify-content: center;
   align-items: center;
   text-align: center;
}

h1{
    @media (max-width: 900px){
        font-size: 28px;
    }
    font-size: 33px;
    color: #40196D;
    font-weight: 800;
    line-height: 1.3;
    max-width: 250px;
  }

p{
    max-width: 390px;
    font-size: 14px;
    font-weight: 500;
}

a{
    /* background-color: green; */
    font-weight: 600;
   

    span{
        /* background-color: orange; */
     
    }
}
`

const ImageSide = styled.div`
max-width: 500px;
/* background-color: darkorchid; */
display: flex;
align-items: center;
justify-content: center;

img{
    width: 95%;
}
`
