import styled from "styled-components"
import image from '../../assets/SaveMoneyImage.png'
import { MdKeyboardArrowRight } from "react-icons/md"

const SaveMoney = ()=>{
    return(
        <Container>
            <Wrapper>
                
                <TextBox>
                    <h1>Save money as you spend it, seriously.</h1>
                    <p>You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.</p>
                    <a href="">See all our Savings
                        <span><MdKeyboardArrowRight size={25} /> </span>
                    </a>
                </TextBox>

                <ImageBox>
                    <img src={image} alt="" />
                </ImageBox>
            </Wrapper>
        </Container>
    )

}
export default SaveMoney

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
 width: 95%;
    /* background-color: saddlebrown; */
    /* padding: 20px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* gap: 80px; */
`
const ImageBox = styled.div`
max-width: 600px;
/* max-height: 530px; */
/* background-color: darkorchid; */
display: flex;
align-items: center;
justify-content: center;

img{
    width: 100%;
    height: 97%;
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
    font-size: 32px;
    color: #40196D;
    font-weight: 800;
    line-height: 1.3;
    max-width: 450px;
  }

p{
    max-width: 390px;
    font-size: 14px;
    font-weight: 500;
}

a{
    font-weight: 600;
}
`