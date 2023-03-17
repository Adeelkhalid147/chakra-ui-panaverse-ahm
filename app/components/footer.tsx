"use client";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Grid,
  Image,
  Flex,
  Box,
  Text,
  Container,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import png from "../../public/red-p-logo-text_dao_croped.png";
// import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <Box bg="black">
      <Container maxW={1300}>
        <SimpleGrid
          textAlign={{ lg: "start", base: "center" }}
          spacing="30px"
          py="60px"
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(4,1fr)" }}
        >
          <Box>
            <Heading pb="20px" color="white">
              About Us
            </Heading>
            <Image
              m={{ base: "auto", lg: "0" }}
              src={"/red-p-logo-text_dao_croped.png"}
              alt="panaverse"
              width={100}
            ></Image>
            <Text pt="40px" pr={{ lg: "40px", base: "0" }} color="gray">
              The future of the web is 3.0, Metaverse, and edge computing
              Panaverse DAO is a movement to spread these technologies globally.
            </Text>
          </Box>
          <Box>
            <Heading color="white">Useful Links</Heading>
            <Grid pt="15px" color="gray">
              <Link href="/">Home</Link>
              <Link href="/">Syllabus</Link>
              <Link href="/">Explore</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
            </Grid>
          </Box>
          <Box>
            <Heading color="white">Follow Us</Heading>
            <Grid pt="15px" color="gray">
              <Link href="/">Facebook</Link>
              <Link href="/">Linkedin</Link>
              <Link href="/">Twitter</Link>
              <Link href="/">Youtube</Link>
              <Link href="/">Github</Link>
            </Grid>
          </Box>
          <Box>
            <Heading color="white">Contact Us</Heading>
            <Grid pt="40px" color="gray">
              <Link href="/">00000</Link>
              <Link href="/">PIAIC</Link>
              <Link href="/">Pakistan</Link>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
