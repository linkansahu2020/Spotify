import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { devices } from "../styles/devices";

export default function LandingPage() {
  const user = useSelector((state) => state.user);
  console.log("user:", user);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <PinkContainer>
        <TextContainer>
          <SmallText>SPOTIFY PREMIUM</SmallText>
          <BigContent>Get 3 months of Premium for free</BigContent>
          <MediumText>
            Enjoy ad-free music listening, offline playback, and more. Cancel
            anytime.
          </MediumText>
          <Button color="white" background="black">
            GET 3 MONTHS FREE
          </Button>
          <br />
          <br />
          <AltraSmallText>
            Individual plan only. ₹119/month after.{" "}
            <u>Terms and conditions apply</u>. Open only to users who haven't
            already tried Premium. Offer ends 12 May 2022.
          </AltraSmallText>
        </TextContainer>
        <ImageDiv>
          <img
            src="https://i.scdn.co/image/ab678e040000ed3a2d7754efa51ae9dbeb79a9eb"
            width="100%"
            alt=""
          />
        </ImageDiv>
      </PinkContainer>
      <BlueContainer>
        <TextContainer>
          <SmallText>SPOTIFY FREE</SmallText>
          <BigContent>Listening is everything</BigContent>
          <MediumText>
            Millions of songs and podcasts. No credit card needed.
          </MediumText>
          <Button
            color="#2941ab"
            background="#1cd860"
            onClick={() => (user ? navigate("/home") : null)}
          >
            {user ? "OPEN AUDIO PLAYER" : "GET SPOTIFY FREE"}
          </Button>
        </TextContainer>
      </BlueContainer>
      <Footer />
    </div>
  );
}
const PinkContainer = styled.div`
  text-align: left;
  display: flex;
  padding: 10vh 20vw;
  justify-content: space-between;
  background: #983399;
  color: white;
  @media (max-width: 1024px) {
    padding: 5vh 3vw;
    display: block;
  }
  @media (max-width: 760px) {
    text-align: center;
  }
`;
const BlueContainer = styled.div`
  text-align: left;
  display: flex;
  padding: 10vh 20vw;
  justify-content: space-between;
  background: #2941ab;
  color: #1cd860;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-image: url(${"https://content-tooling.spotifycdn.com/images/b236bf87-bfd5-4bcb-b51a-77881073039c_lie_circles.svg"});
  background-position: right center;
  @media (max-width: 1024px) {
    padding: 5vh 3vw;
    display: block;
    background-size: auto 100%;
    background-image: url(${"https://content-tooling.spotifycdn.com/images/1d2242b4-f071-4244-a276-3bcdc58e77cf_lie_circles-tablet.svg"});
    background-position: center center;
    background-size: auto 181%;
    background-repeat: no-repeat;
    text-align: center;
  }
`;
const TextContainer = styled.div``;
const ImageDiv = styled.div`
  width: 27vw;
  margin: auto 0px;
  @media (max-width: 1024px) {
    width: 45vw;
    margin: auto;
  }
  ${devices.sm} {
    width: 75vw;
  }
`;
const BigContent = styled.p`
  font-size: 40px;
  font-weight: bold;
  @media (max-width: 1024px) {
    font-size: 35px;
  }
  ${devices.sm} {
    font-size: 30px;
  }
`;
export const SmallText = styled.p`
  font-size: 12px;
  @media (max-width: 1024px) {
    font-size: 18px;
    text-align: center;
  }
  ${devices.sm} {
    font-size: 20px;
    text-align: center;
  }
`;
export const MediumText = styled.p`
  font-size: 20px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 760px) {
    font-size: 17px;
  }
`;
const AltraSmallText = styled.p`
  font-size: 10px;
  @media (max-width: 1024px) {
  }
  ${devices.md} {
    font-size: 12px;
  }
  ${devices.xs} {
    font-size: 10px;
  }
`;
const Button = styled.button`
  margin-left: 0.3vw;
  border: 1px solid transparent;
  border-radius: 5vw;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  padding: 15px 25px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    margin-left: 0vw;
    padding: 1.5vh 2.3vw;
  }
`;
