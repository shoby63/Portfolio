import { Box, Stack, Typography,Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import gif from "../../public/Utils/Black White and Green Modern Technology Animated Logo.gif";
import homeMain from "../../public/Utils/home-main.svg";
import bg from '../../public/Utils/home-bg.jpg'
import '../../public/css/textAnimation.css'
import Text from './Text'
import {GitHub,Twitter,LinkedIn,Instagram} from '@mui/icons-material'
import avatar from '../../public/Utils/avatar.svg'
const styleTextColor = {
  '@keyframes waveAnimation': {
    '0%': {
      color: 'red', /* Start color */
    },
    '50%': {
      color: 'blue', /* Middle color */
    },
    '100%': {
      color: 'green', /* End color */
    },
  },
  waveTextAnimation: {
    animation: '$waveAnimation 2s infinite', /* Specify the animation name, duration, and repetition */
  },
};
const Section = () => {
  //   const classes = useStyles();
  const texts = [
    " FREELANCER",
    " MERN STACK DEVELOPER",
    " COMPETETIVE PROGRAMMER",
  ];
  const logos=[{"src":"https://github.com/shoby63",
                 logo:GitHub},{"src":"https://github.com/shoby63",
                 logo:Twitter},
                 {"src":"https://github.com/shoby63",
                 logo:LinkedIn}
                ,{"src":"https://github.com/shoby63",
                logo:Instagram}]
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < currentText.length) {
        setDisplayedText(
          (prevText) => prevText + currentText.charAt(currentIndex)
        );
        currentIndex++;
      } else {
        // Pause before starting the next text
        clearInterval(intervalId);
        setTimeout(() => {
          setDisplayedText("");
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000);
      }
    }, 100); // Adjust the interval for the speed of character display

    return () => clearInterval(intervalId);
  }, [currentTextIndex]);

  return (
    <Box
      sx={{
        height: "calc(100vh - 100px)",
        width: "100vw",
        margin: "20 0 20 0",
        overflowY:"auto",
      }}
    >
      <Stack direction={"row"} alignContent={"flex-start"}>
        <Box sx={{ background: "inherit", width: "50%", height: "100%" }}>
          <Stack
            sx={{ margin: "25% 0% 0% 15%", paddingRight: "10px" }}
            direction={"row"}
            alignItems={"center"}
          >
            <Typography variant="h4" color={"white"}>
              Hi There!
              <span
                role="img"
                aria-labelledby="wave"
                className={"classes.wavingEmoji"}
              >
                👋🏻
              </span>
              <br />
              I'M <strong style={{ color: "purple" }}> Shobhit Gupta</strong>
              <br />
              <br />
              <span className="animate-charcter">{displayedText}</span>
            </Typography>
          </Stack>
          <Typography
            variant="h3"
            color={"#addffe"}
            sx={{ margin: "25px 0% 0% 60px", paddingRight: "10px" }}
          ></Typography>
        </Box>
        <Box sx={{width: "50%", height: "100%" }}>
          <img
            src={homeMain}
            alt="about-bg"
            height={"inherit"}
            width={"(90%"}
          />
        </Box>
      </Stack>
      <Stack direction={"row"}>
      <Box sx={{height:"auto",width:"70%", paddingRight:'10px', display:"inline-block",alignItems:"center",paddingLeft:'80px' ,color:"white"}}>
        <h2> LET ME <span style={{color:"#7209b7",}}>INTRODUCE </span>MYSELF</h2>
     <Typography variant="h6">
I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
<br/>
I am fluent in classics like <span style={{color:"#7209b7",}}>C++, Javascript </span>and <span style={{color:"#7209b7",}}>Go</span>.
<br/>
My field of Interest's are building new <span style={{color:"#7209b7",}}> Web Technologies </span> and Products and also in areas related to Blockchain.
<br/>
Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like <span style={{color:"#7209b7",}}>React.js</span> and <span style={{color:"#7209b7",}}>Next.js</span>
</Typography>
      </Box>
      <Box sx={{height:"auto",width:"30%", paddingRight:'10px',paddingLeft:'10px'}}>
      <img style={{margin:"auto"}} src={avatar} height={"auto"} width={"auto"}></img>   
      </Box>
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Text />
        <h4 style={{color:"white"}}>Feel free to connect with me</h4>
        <Stack direction={"row"} alignItems={"center"} >
          {logos.map((el,idx)=>{
            return (<a href={el.src}><Avatar src={el.logo} m={1} /></a>);
          })}</Stack>
          <Avatar src={Twitter}/>
      </Stack>
        </Box>
  );
};

export default Section;
