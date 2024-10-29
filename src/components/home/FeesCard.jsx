import styled from "styled-components"
import image from '../../assets/FeesCardImage.png'
import { MdKeyboardArrowRight } from "react-icons/md"

const FeesCard = ()=>{
    return(
        <Container>
            <Wrapper>
                <ImageBox>
                    <img src={image} alt="" />
                </ImageBox>
                <TextBox>
                    <h1>Fees as clear as glass.</h1>
                    <p>We’re serious about free banking, and we will never, ever charge you for anything without your consent.</p>
                    <a href="">See all our fees
                        <span><MdKeyboardArrowRight size={25} /> </span>
                    </a>
                </TextBox>
            </Wrapper>
        </Container>
    )

}
export default FeesCard

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

@media (max-width: 1100px){
        display: flex;
        flex-direction: column-reverse;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
 width: 95%;
    /* background-color: saddlebrown; */
    /* padding: 20px; */
    display: flex;
    flex-wrap: wrap;
    flex-direction: center;
    justify-content: center;
    gap: 80px;

   
`
const ImageBox = styled.div`
max-width: 650px;
max-height: 540px;
/* background-color: darkorchid; */
display: flex;
align-items: center;
justify-content: center;

img{
    width: 100%;
    height: 90%;
    object-fit: contain;
}
`
const TextBox = styled.div`
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
    /* max-width: 250px; */
  }

p{
    max-width: 390px;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
}

a{
    font-weight: 600;
    display: flex;
}
`