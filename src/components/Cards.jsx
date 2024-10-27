import { GoContainer } from "react-icons/go"
import styled from "styled-components"

const Cards = (props) => {
    return(
        <Container>
            <ImageBox>
                <h2>{props.icon}</h2>
            </ImageBox>

            <TextBox>
                <h5>{props.detail}</h5>
            </TextBox>
        </Container>
    )
}
export default Cards

const Container = styled.div`
    max-width: 310px;
    height: 100px;
    color: #40196D;
    /* background-color: brown; */
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding: 10px;
    border-radius: 5px;
`

const ImageBox = styled.div`
   
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #e3e9ee;
    line-height: 0;
    
`
const TextBox = styled.div``