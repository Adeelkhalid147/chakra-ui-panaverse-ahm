"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Home from "../components/home";
import Instructor from "../components/instructor";
import { RevealList, RevealWrapper } from "next-reveal";
// import Image from 'next/image'

export default function About() {
  return (
    <>
      <Home
        title="About"
        src="https://www.xrtoday.com/wp-content/uploads/2022/01/metaverse-meaning.jpg"
      />
      <Box>
        <Container maxW={1400}>
          {/* my se margen top or margen botton dono mil jte hai */}
          <Flex
            my="50px"
            gap="30px"
            px={{ lg: "50px", base: "20px" }}
            display={{ lg: "flex", base: "grid" }}
          >
            <Box flexBasis="50%">
              <RevealWrapper
                origin="left"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Image
                  mx="auto"
                  src="/president.webp"
                  alt="President"
                  height="500"
                  width="400"
                ></Image>
              </RevealWrapper>
            </Box>
            <Box flexBasis="50%">
              {/*
              ***RevealList se alg alg animation apply hti h text or heading wgra pe
              alg alg animation dn gy k atni duration k bd nxt line ya heading pe
              animation apply ho
              ***interval k property zaror deni hti hai 
              
              */}
              <RevealList
                interval={60}
                origin="right"
                delay={300}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Heading size="2xl">Dr. Arif Alvi</Heading>
                <Text mt="15px">
                  Dr. Arif Alvi was sworn in as the 13th President of Islamic
                  Republic of Pakistan on 9th September 2018.{" "}
                </Text>
                <Text mt="5px">
                  Dr. Arif Alvi was born in 1949 and completed his early
                  education in Karachi. He did his Bachelor of Dental Surgery
                  (BDS) from De’ Montmorency College of Dentistry, Lahore where
                  he was declared the “Best Graduate”. He completed his Masters
                  of Science in the field of Prosthodontics from University of
                  Michigan (1975) and in Orthodontics from University of
                  Pacific, San Francisco (1982). He was awarded fellowship
                  ‘Diplomatic American Board of Orthodontists (1995)’.
                </Text>
                <Text mt="5px">
                  President Dr. Arif Alvi has been a renowned professional and
                  has held many important positions in the field of Dentistry.
                  He remained Dean of Orthodontics, College of Physicians and
                  Surgeons of Pakistan, President, Pakistan Dental Association
                  (1997-2001), Pakistan Association of Orthodontists (2005),
                  Asia Pacific Dental Federation (2006-07) and Councilor of the
                  World Dental Federation (2007-2013). Through his sheer hard
                  work in the World Dental Federation, he was able to get the
                  declaration of 20th March as World Oral Health Day. He is also
                  an author of a book, theses, and many articles.
                </Text>
                <Button colorScheme="teal" mt="15px" size="md">
                  More Info
                </Button>
              </RevealList>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box>
        <Container maxW={1400}>
          {/* my se margen top or margen botton dono mil jte hai */}
          <Flex
            my="50px"
            gap="30px"
            px={{ lg: "50px", base: "20px" }}
            display={{ lg: "flex", base: "grid" }}
          >
            <Box flexBasis="50%">
              <RevealList
                interval={60}
                origin="left"
                delay={300}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Heading size="2xl">Panaverse DAO</Heading>
                <Text mt="15px">
                  Panaverse DAO is a community of Web 3 and Metaverse
                  developers, designers, trainers, startup founders and service
                  providers. Panaverse DAO is struggling to produce professional
                  metaverse developers from Pakistan for the upcoming Era of
                  Internet
                </Text>
                <Text mt="5px">
                  President Dr. Arif Alvi has been a renowned professional and
                  has held many important positions in the field of Dentistry.
                  He remained Dean of Orthodontics, College of Physicians and
                  Surgeons of Pakistan, President, Pakistan Dental Association
                  (1997-2001), Pakistan Association of Orthodontists (2005),
                  Asia Pacific Dental Federation (2006-07) and Councilor of the
                  World Dental Federation (2007-2013). Through his sheer hard
                  work in the World Dental Federation, he was able to get the
                  declaration of 20th March as World Oral Health Day. He is also
                  an author of a book, theses, and many articles.
                </Text>
                <Button colorScheme="teal" mt="15px" size="md">
                  More Info
                </Button>
              </RevealList>
            </Box>
            <Box flexBasis="50%" m="auto">
              <RevealWrapper
                origin="right"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Image
                  mb={{ lg: "20px", base: "10px" }}
                  mx="auto"
                  src="/red-p-logo(1).png"
                  alt="Panaverse Dao"
                  height={{ lg: "400", base: "200" }}
                  width={{ lg: "400", base: "200" }}
                ></Image>
              </RevealWrapper>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box>
        <Container maxW={1400}>
          {/* my se margen top or margen botton dono mil jte hai */}
          <Flex
            my="50px"
            gap="30px"
            px={{ lg: "50px", base: "20px" }}
            display={{ lg: "flex", base: "grid" }}
          >
            <Box m="auto" flexBasis="50%">
              <RevealWrapper
                origin="left"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Image
                  mx="auto"
                  src="/Zia.webp"
                  alt="President"
                  height="400"
                  width="300"
                ></Image>
              </RevealWrapper>
            </Box>
            <Box flexBasis="50%">
              <RevealList
                interval={60}
                origin="right"
                delay={300}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Heading size="2xl">Zia Khan</Heading>
                <Text mt="15px">
                  CEO of Panacloud, the world’s first Integrated API Ownership
                  Economy, Crowdfunding, and Development Platform. Volunteer COO
                  of PIAIC, an initiative by the President of Pakistan for AI
                  and computing mass education. Mentor and software developer
                  with 20+ years of expertise in cloud and serverless computing,
                  software design, project management, and API and App
                  development. Expert in concept, business modeling & strategy
                  development for startups, specializing in DeFi and token
                  economics. Mentored and trained hundreds of thousands of
                  developers. Triple masters degrees in business administration,
                  engineering, and finance from Arizona State University. Master
                  in Economics from KU. Certified Public Accountant and
                  Certified Management Accountant in USA.
                </Text>
                <Text mt="5px">
                  Extensive experience in software architecture, design,
                  development, implementation, and integration. Worked as a
                  developer in Silicon Valley for 7 years. Hands-on work
                  including thousands of hours of development work logged
                  recently resulting in multiple successful projects for cutting
                  edge startups like Panacloud, OpenPD, Datasplash, FreshAir
                  Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc..
                </Text>
                <Button colorScheme="teal" mt="15px" size="md">
                  More Info
                </Button>
              </RevealList>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Instructor />
    </>
  );
}