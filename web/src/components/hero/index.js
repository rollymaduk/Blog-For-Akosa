import React, {useEffect} from "react";
// JSX
import HeroSlider, { Slide, MenuNav, OverlayContainer } from "hero-slider";
import Wrapper from "./wrapper";
import Title from "./title";
import Subtitle from "./subtitle";

//images
import  image1 from './images/photo-of-people-standing-near-animal.jpg'
import  image2 from './images/photo-of-woman-holding-tray.jpg'
import image3 from './images/top-view-of-houses-and-building-roofs.jpg'
import image4 from './images/top-view-photo-of-men-playing-board-game.jpg'
const app = () => {
  const [rendered,setRendered]=useState(false)
  useEffect(()=>{
    if(!rendered){
      setRendered(true)
    }
  },[rendered])

  return (rendered?
    <HeroSlider
      slidingAnimation="top_to_bottom"
      orientation="vertical"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "#000"
      }}
      settings={{
        slidingDuration: 400,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 8000,
        height: "100vh"
      }}
    >
      <OverlayContainer>
        <Wrapper>
          <Title>Reflections</Title>
          <Subtitle>thoughts and perspectives</Subtitle>
        </Wrapper>
      </OverlayContainer>

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: "#6D9B98",
          backgroundImage: image4
        }}
      />

      <Slide
        background={{
          backgroundColor: "#8A8A8A",
          backgroundImage: image1
        }}
      />

      <Slide

        background={{
          backgroundColor: "#EA2329",
          backgroundImage: image2
        }}
      />

      <Slide

        background={{
          backgroundColor: "#2D7791",
          backgroundImage: image3
        }}
      />

      <MenuNav />
    </HeroSlider>:<></>
  );
};

export default app;
