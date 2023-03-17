"use client";

import { Box, Center, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Home from "../components/home";
import { cards, core } from "../components/database";
import { RevealList, RevealWrapper } from "next-reveal";

export default function Syllabus() {
  return (
    <>
      <Home
        title="Syllabus"
        src="https://mbaroi.in/blog/wp-content/uploads/2022/07/IMG-20220706-WA0005.jpg"
      />
      <Box pt={"10px"}>
        <Container maxW={1000}>
          {/* flexDirection={"column"} se heading or text alg alg line mai 
        ayn gy.
        */}
          <Center flexDirection={"column"}>
            <Heading size={"2xl"} mt="5px">
              Course Syllabus
            </Heading>
            <Text mt="10px" textAlign={"center"}>
              The first three quarters are shared by all specialties and are
              dedicated to studying Object-Oriented Programming and cutting-edge
              Full-Stack Web 2.0 development. It is going to be a
              fifteen-month-long hybrid program that includes both onsite and
              online classes and is divided into five quarters of 13 weeks each
            </Text>
          </Center>

          <Center flexDirection={"column"}>
            <Heading mt="5px">Common in All</Heading>
            <Text mt="10px" textAlign={"center"}>
              Every participant of the program will start by completing the
              following three core courses:
            </Text>
          </Center>
          <Center>
            <Flex mt={"15px"} gap="20px">
              {core.map((coree) => (
                <Box
                  key={coree.id}
                  textAlign={"center"}
                  p="30px"
                  boxShadow={"dark-lg"}
                  borderRadius="20px"
                  width={"270px"}
                >
                  <Heading>{coree.heading}</Heading>
                  <Text textAlign={"center"}>{coree.text}</Text>
                </Box>
              ))}
            </Flex>
          </Center>
        </Container>

        <Container
          maxW={1400}
          mt="30px"
          bgSize={"cover"}
          bgAttachment={"fixed"}
          bgImage={
            "https://static.vecteezy.com/system/resources/previews/004/968/002/original/cute-abstract-modern-background-free-vector.jpg"
          }
        >
          {cards.map((elm) => (
            <Box key={elm.id} mb={"40px"}>
              <RevealWrapper
                origin="left"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Center flexDir={"column"}>
                  <Heading mt="15px">{elm.heading1}</Heading>
                  <Text
                    fontWeight={"medium"}
                    mt="10px"
                    textAlign={"center"}
                    px="130px"
                  >
                    {elm.text1}
                  </Text>
                </Center>
              </RevealWrapper>
              <Center>
                <Flex mt={"15px"} gap="30px">
                  <Box
                    bgColor={"purple.300"}
                    textAlign={"center"}
                    p="30px"
                    boxShadow={"dark-lg"}
                    borderRadius="20px"
                    width={"270px"}
                  >
                    <Heading>{elm.heading2}</Heading>
                    <Text textAlign={"center"} fontWeight={"medium"}>
                      {elm.text2}
                    </Text>
                  </Box>
                  <Box
                    bgColor={"purple.300"}
                    textAlign={"center"}
                    p="30px"
                    boxShadow={"dark-lg"}
                    borderRadius="20px"
                    width={"270px"}
                  >
                    <Heading>{elm.heading3}</Heading>
                    <Text textAlign={"center"} fontWeight={"medium"}>
                      {elm.text3}
                    </Text>
                  </Box>
                </Flex>
              </Center>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
}
