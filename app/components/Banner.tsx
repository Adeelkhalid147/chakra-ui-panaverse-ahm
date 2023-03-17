import React from "react";
import { Box, Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import png from "../../public/homelogo.webp";
import png2 from "../../public/homelogo2.webp";
import png3 from "../../public/homelogo3.webp";
import { RevealWrapper } from "next-reveal";

export default function Banner() {
  return (
    <>
      <Box bg="purple.600">
        {/*
        *** RevealWrapper se hm ak component pe animation apply krte hai
      ***origin="left" ka mtlb left side se ae ga data origin mean k kis trf se data slide ho k ae 
      ga left ya right ya top ya down.
      ***delay={200} mean kitne second delay ho ga
      ***duration={1000} kitne second animation chlti rhe gey
      ***distance="500px" kitne distance se hmra animation chl k ae ga
      ***reset={true} ka mtlb h k jitni dfa hm page pe neche se upr ayn gy animation run ho gey

       */}
        <RevealWrapper
          origin="left"
          delay={2000}
          duration={1000}
          distance="500px"
          reset={true}
        >
          <Container maxW={1300}>
            {/* ak line mai pic or text ko show krne k liye Flex ka use krna h */}
            {/* pt mean pading top upr se neche tk space dena. */}
            {/* px mean pading x-xes */}
            {/* pt base mean mobile view lg mean large view */}
            <Flex
              pt={{ lg: "100px", base: "40px" }}
              pb={{ lg: "0px", base: "1px" }}
              px={{ lg: "40px", base: "5px" }}
              display={{ lg: "flex", base: "grid" }}
            >
              {/* flex box dono ak line mai hai likn width ni de hoe us k liye flexbasis use kren gy
            flexBasis mai hm hr box ko % k hisab se size dete hai maslan teen box hai on mai se ak box
            ka size 40% rkhte hai dosre ka 25% or 3rd box ka size 35% rkhte hai. or ye teeno box ak line
            mai hn gy. flax se ak line mai hte or flexbasis se ak line mai mojod sb box ka size rkhte.  
            */}
              <Box flexBasis="50%" px="40px">
                <Heading size="2xl" color="black">
                  Prepare yourself for the Next Genration of Internet with
                  Panaverse
                </Heading>
                <Text pt="10px">
                  One Year Panaverse DAO Earn as you Learn Program.
                  Consolidating Web 3.0 Metaverse, Artifical Intelligence (Al),
                  Cloud Edge, and Ambient Computing/ IoT Technologies
                </Text>
                <Flex>
                <Button mt="10px" size="lg" colorScheme="teal">
                  More Info
                </Button>
                <Text color={"purple.400"} m={"20px"}>Created by Adeel Khalid</Text>
                </Flex>
              </Box>
              <Box
                mt={{ lg: "-80px", base: "0" }}
                flexBasis={{ lg: "50%", base: "0%" }}
              >
                <Image src={png} alt="Panaverse" width="500" height="200" />
              </Box>
            </Flex>
          </Container>
        </RevealWrapper>
      </Box>

      <Box>
        <Container maxW={1300}>
          <Flex
            gap={{ lg: "100px", base: "10px" }}
            display={{ lg: "flex", base: "grid" }}
          >
            <Box pt={{ lg: "10px", base: "20px" }} px="50px" flexBasis="50%">
              {/* as mai ak chez left se ae gey or ak animation right se */}
              <RevealWrapper
                origin="left"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Image
                  src={png2}
                  alt="Panaverse2"
                  height="200"
                  width="400"
                ></Image>
              </RevealWrapper>
            </Box>

            <Box
              flexBasis="50%"
              pt={{ lg: "30px", base: "30px" }}
              px={{ lg: "0", base: "30px" }}
              pb={{ lg: "0px", base: "20px" }}
            >
              <RevealWrapper
                origin="right"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Heading size="2xl">Program Of Studies</Heading>
                <Text pt="20px" pr="30px">
                  This curriculum is intended for beginners who want to learn
                  software development from the ground up. It is going to be a
                  fifteen-month-long hybrid program that includes both onsite
                  and online classes and is divided into five quarters of 13
                  weeks each. The emphasis will be on hands-on learning by
                  educating students to produce projects.
                </Text>
                <Button
                  mt={{ lg: "20px", base: "20px" }}
                  size="lg"
                  colorScheme="teal"
                >
                  Read More
                </Button>
              </RevealWrapper>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box>
        <Container maxW={1300}>
          <Flex gap="100px" display="flex">
            <Box
              flexBasis="60%"
              pt={{ lg: "30px", base: "30px" }}
              px={{ lg: "10px", base: "30px" }}
              pb={{ lg: "40px", base: "20px" }}
            >
              <RevealWrapper
                origin="left"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Heading size={"2xl"}>What Is Panaverse DAO? </Heading>
                <Text pb="20px" pt="10px" pr="20px">
                  Panaverse DAO is a community of Web 3 and Metaverse
                  developers, designers, trainers, startup founders and service
                  providers. Panaverse DAO is struggling to produce professional
                  metaverse developers from Pakistan for the upcoming Era of
                  Internet.
                </Text>
                <Button
                  mt={{ lg: "20px", base: "20px" }}
                  size="lg"
                  colorScheme="teal"
                >
                  Read More
                </Button>
              </RevealWrapper>
            </Box>

            <Box flexBasis="40%" px="40px" pt={{ lg: "10px", base: "20px" }}>
              <RevealWrapper
                origin="right"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Image
                  src={png3}
                  alt="Panaverse"
                  height="200"
                  width="400"
                ></Image>
              </RevealWrapper>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
