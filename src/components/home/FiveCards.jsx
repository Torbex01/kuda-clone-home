
import { BiSolidPieChart } from "react-icons/bi";
import { AiFillCreditCard } from "react-icons/ai"
import { PiNetworkFill, PiPiggyBankFill } from "react-icons/pi";
import Cards from "../Cards"
import styled from "styled-components"
import { IoIosSend } from "react-icons/io";
const FiveCards = () => {
    return(
        <Container>
           <Wrapper>
                <Cards
                icon= {<AiFillCreditCard/> }
                detail="Order a Kuda card on the app with pickup and delivery options." />

                <Cards
                icon= {<BiSolidPieChart/> }
                detail="Enjoy cashless payment options online and offline." />

                <Cards
                icon= {<PiNetworkFill/> }
                detail="Pay your essential bills and buy gift cards easily." />

               <LastTwo>
                <Cards
                    icon= {<IoIosSend/> }
                    detail="Get 25 free transfers to Nigerian banks every month" /> 

                    <Cards
                    icon= {<PiPiggyBankFill/> }
                    detail="Save money automatically any time you spend" />
               </LastTwo>
           </Wrapper> 
        </Container>
    )
}
export default FiveCards

const Container = styled.div`
    /* background-color: greenyellow; */
    max-width: 1280px;
    min-height: calc(100vh - 65px);
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
width: 90%;
/* background-color: pink; */
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 35px;
padding: 20px;
`
const LastTwo = styled.div`
width: 100%;
/* background-color: pink; */
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 35px;
`