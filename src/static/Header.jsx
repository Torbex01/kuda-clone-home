import styled from "styled-components"
import { MdArrowDropDown } from "react-icons/md";
import KudaLogo from '../assets/kuda.png'
import NigImg from '../assets/nigeria.png'
import { IoReorderTwoOutline } from "react-icons/io5";
const Header = ()=>{
    return(
      <div>
        <Container>
          <LeftHead>
            <img src={KudaLogo} alt="logo" />
           
             <Navigation>
               <nav> <span>Personal</span>
                  <MdArrowDropDown size= {20} />
               </nav>

               <nav> <span>Business</span>
                  <MdArrowDropDown size= {20} />
               </nav>

               <nav> <span>Company</span>
                  <MdArrowDropDown size= {20} />
               </nav>

               <nav> <span>Help</span>
                  <MdArrowDropDown size= {20} />
               </nav>
            </Navigation>

          </LeftHead>

          <RightHead>
              <SignIn>Sign In</SignIn>
              <Join>Join Kuda</Join>
              <NigLogo><img src={NigImg} alt="" /></NigLogo>

              <SideBar>
                 <IoReorderTwoOutline/>
               </SideBar>

          </RightHead>

        </Container>
      </div>
    )
  }
  export default Header

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 65px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  `
  
  const LeftHead = styled.div`
  display: flex;
  align-items: center;
    img{
      width: 90px;
      margin: 0 80px 0 50px;
    }
  `
  const Navigation = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;

    nav{
      display: flex;
      align-items: center;
      color: #40196D;
      font-weight: 520;
      font-size: 13px;
    }

    @media (max-width: 990px) {
    display: none;
    }
  `
  const RightHead = styled.div`
  display: flex;
  align-items: center;
  `

  const SignIn = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 600;
    color: #40196D;
    @media (max-width: 990px) {
      display: none;
    }
  `
  const Join = styled.button`
    width: 120px;
    background-color: #40196D;
    height: 40px;
    margin: 0px 30px;
    border: none;
    outline: none;
    border-radius: 10px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 990px) {
      display: none;
    }
  `
  const NigLogo = styled.button`
  border: none;
  outline: none;
  width: 37px;
  height: 35px;
  background-color:  #a4e3c6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  img{
    width: 25px;
  }
  `
  const SideBar = styled.div`
  font-size: 40px;
  /* background-color: green; */
  display: none;
  margin: 12px 30px 0 -40px;
  
  @media (max-width: 990px) {
      display: block;
    }
  `
  