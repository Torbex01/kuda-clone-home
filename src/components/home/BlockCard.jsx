import styled from "styled-components"
import image from '../../assets/BlockCardImage.png'
import { MdKeyboardArrowRight } from "react-icons/md"

const BlockCard = ()=>{
    return(
        <Container>
            <Wrapper>
                <ImageBox>
                    <img src={image} alt="" />
                </ImageBox>
                <TextBox>
                    <h1>Turn off access, turn on safety.</h1>
                    <p>Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try.</p>
                    <a href="">Learn more about Cards
                        <span><MdKeyboardArrowRight size={25} /> </span>
                    </a>
                </TextBox>
            </Wrapper>
        </Container>
    )

}
export default BlockCard

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