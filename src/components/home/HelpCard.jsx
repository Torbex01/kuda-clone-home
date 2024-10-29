import styled from "styled-components"
import image from '../../assets/HelpCardImage.png'
import { MdKeyboardArrowRight } from "react-icons/md"

const HelpCard = ()=>{
    return(
        <Container>
            <Wrapper>
                
                <TextBox>
                    <h1>We’re always happy to help you.</h1>
                    <p>You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy.</p>
                    <a href="">Get Help
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
export default HelpCard

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
 width: 90%;
    /* background-color: saddlebrown; */
    /* padding: 20px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 80px;
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
    display: flex;
}
`