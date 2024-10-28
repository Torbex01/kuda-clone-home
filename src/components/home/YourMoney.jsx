import styled from "styled-components"
import image from '../../assets/YourMoneyImage.png'

const YourMoney = ()=>{
    return(
        <Container>
            <Wrapper>
                <ImageBox>
                    <img src={image} alt="" />
                </ImageBox>
                <TextBox>
                    <h1>It’s your money, we just help you manage it.</h1>
                    <p>Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we'll make sure it's done better and free of charge. We take responsibility for that.</p>
                </TextBox>
            </Wrapper>
        </Container>
    )

}
export default YourMoney

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
    justify-content: space-between;
    /* gap: 80px; */

   
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
}
`