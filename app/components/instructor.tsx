import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { data } from "../components/database";
import { RevealList,RevealWrapper } from "next-reveal";


export default function Instructors() {
  return (
    <Box>
      <Container maxW={1400}>
        <Center>
          <Heading>Our Instructor</Heading>
        </Center>
        <RevealWrapper
          origin="left"
          delay={200}
          duration={1000}
          distance="500px"
          reset={true}
        >
        <Flex flexDir="row">
          {data.map((ins: any) => (
            <Box key={ins.id}>
              <Center>
                <Image
                  mt="10px"
                  borderRadius="full"
                  width={100}
                  height={100}
                  src={ins.src}
                  alt="khan"
                />
              </Center>
              <Heading textAlign="center" size="md">
                {ins.heading}{" "}
              </Heading>
              <Text textAlign="center" fontSize="sm" px="50px">
                {" "}
                {ins.text}{" "}
              </Text>
            </Box>
          ))}
        </Flex>
          </RevealWrapper>
      </Container>
    </Box>
  );
}
