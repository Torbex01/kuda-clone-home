
import styled from "styled-components"
const Review = () => {
    return(
        <Container>
           <Wrapper>
           <h1>Don’t just take our word for it</h1>
           </Wrapper>
        </Container>
    )
}
export default Review

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

        h1{
            font-size: 33px;
             color: #40196D;
             font-weight: 800;
            line-height: 1.3;
        }
        `