import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { LogoDiv } from "./Footer";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToken, addUser } from "../Redux/action";

export const MobileNavbar = ({ isOpen, onHandler }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navData = [
    {
      text: "Premium",
      link: "/",
    },
    {
      text: "Support",
      link: "/",
    },
    {
      text: "Download",
      link: "/",
    },
  ];

  return (
    <Container isOpen={isOpen}>
      <Cross onClick={onHandler}>X</Cross>
      <MobileNav>
        {user && (
          <Link to={"/account"}>
            <p>Account</p>
          </Link>
        )}
        {navData.map((nav, index) => (
          <Link to={nav?.link} key={index}>
            <p>{nav?.text}</p>
          </Link>
        ))}
        {user && (
          <p
            onClick={() => {
              dispatch(addToken(null));
              dispatch(addUser(null));
              localStorage.removeItem("user");
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            Logout
          </p>
        )}
      </MobileNav>
    </Container>
  );
};

const Container = styled.aside`
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  //   visibility: visible;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: ${(props) => (props.isOpen ? "100vw" : "0px")};
  z-index: 9999;
  transition: all 0.4s ease 0s;
  background: #000000e0;
  font-size: 7vw;
  font-weight: bold;
`;
const Cross = styled.button`
  background: transparent;
  border: transparent;
  color: white;
  width: 98vw;
  padding: 3vh 1vw;
  text-align: right;
  font-size: 5vw;
`;
const MobileNav = styled.nav`
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 30px;
  a {
    color: white;
    text-decoration: none;
  }
`;
