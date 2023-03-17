"use client";
import {
  Menu,
  MenuButton,
  IconButton,
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
import { HamburgerIcon } from "@chakra-ui/icons";
// import {Flex, Box, Container, SimpleGrid } from "@chakra-ui/react";
// import Image from "next/image";
import logo from "../../public/red-p-logo-text_dao_croped.png";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box boxShadow="lg">
      <Container maxW={1400}>
        <SimpleGrid
          templateColumns={{ lg: "repeat(3,1fr)", base: "repeat(2,1fr)" }}
        >
          <Box>
            <Image
              src={"/red-p-logo-text_dao_croped.png"}
              alt="panaverse-logo"
              width={100}
            ></Image>
          </Box>
          <Flex
            display={{ lg: "flex", base: "none" }}
            placeItems="center"
            mt={5}
            color="black"
            fontSize={16}
            fontWeight="semibold"
            gap={5}
          >
            <Link href="/">Home</Link>
            <Link href="/syllabus">Syllabus</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </Flex>
          <Box display={{ lg: "initial", base: "none" }}>
            <Button size="md" mt="10px" colorScheme="teal" float="right">
              Apply
            </Button>
            
          </Box>
          <Box pt="20px" display={{ lg: "none", base: "initial" }}>
            <Menu>
              <MenuButton
                float="right"
                as={IconButton}
                aria-label="options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>Syllabus</MenuItem>
                <MenuItem>Explore</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
