import React from 'react'
import {Box, Container,Heading} from "@chakra-ui/react"

export default function Home(hello:any) {
  return (
    // image k attatchment fix krne k liye bgAttachment. mtlb image apni jgha se hile gey ni jb hm page updown kren gy
    <Box bgImage={hello.src} py="200px" bgSize="cover" bgAttachment="fixed" >
        <Container maxW={1100}>
            <Heading color="red" size="2xl">{hello.title}</Heading>

        </Container>
    </Box>

    )
}
