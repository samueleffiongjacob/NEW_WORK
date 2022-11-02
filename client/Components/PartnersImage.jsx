import React from "react";
import Image from "next/image";
import { Flex, Text } from "@chakra-ui/react";
import partnersImages1 from "../public/asset/partnersImages1.png";
import partnersImages2 from "../public/asset/partnersImages2.png";
import partnersImages3 from "../public/asset/partnersImages3.png";
import partnersImages4 from "../public/asset/partnersImages4.png";
import partnersImages5 from "../public/asset/partnersImages5.png";
import partnersImages6 from "../public/asset/partnersImages6.png";
import partnersImages7 from "../public/asset/partnersImages7.png";
import partnersImages8 from "../public/asset/partnersImages8.png";
import partnersImages9 from "../public/asset/partnersImages9.png";
import partnersImages10 from "../public/asset/partnersImages10.png";

const PartnersImage = () => {
  return (
    <>
      <Flex
        w="100%"
        fontFamily="Satoshi"
        h={["400px", "420px", "500px", "500px", "500px"]}
        mt={["4rem", "2rem", "2rem", "4rem", "3rem"]}
        mb={["4rem", "4rem", "4rem", "4rem", "6rem",]}
        color="#3B3C7D"
        flexDir={"column"}
        px={["15px", "2rem", "2rem", "2rem", "5rem"]}
        justifyContent="center"
        alignItems="center"
      >
        <Text
          fontWeight={"semibold"}
          fontSize={["24px", "28px", "33px", "36px", "42px"]}
          mb={["1rem", "1rem", "2rem"]}
          mt={["0rem", "3rem", "1rem"]}
          textAlign="center"
        >
          Our Partners
        </Text>
        <Flex py={6} justifyContent="space-around" w={['100%', '100%', '90%', '96%', '80%',]}>
          <Flex w='90px' h='90px'>
            <Image src={partnersImages1} alt='ogadispearlImg' />
          </Flex>
          <Flex w='90px' h='90px'>
            <Image src={partnersImages2} alt='ogadispearlImg' />
          </Flex>
          <Flex w='90px' h='90px'>
            <Image src={partnersImages3} alt='ogadispearlImg' />
          </Flex>
          <Flex w='90px' h='90px'>
            <Image src={partnersImages4} alt='ogadispearlImg' />
          </Flex>
        </Flex>
        <Flex py={6} justifyContent="space-around" w={['100%', '100%', '90%', '96%', '80%',]}>
          <Flex w='90px' h='90px'>
            <Image src={partnersImages10} alt='ogadispearlImg' />
          </Flex>
          <Flex w='90px' h='90px'>
            <Image src={partnersImages6} alt='ogadispearlImg' />
          </Flex>
          <Flex w='90px' h='90px'>
            <Image src={partnersImages7} alt='ogadispearlImg' />
          </Flex>
        </Flex>
        <Flex py={6} justifyContent="space-around" w={['100%', '100%', '90%', '96%', '80%',]}>
          <Flex w='90px' h='90px'>
            <Image src={partnersImages8} alt='ogadispearlImg' />
          </Flex>
          <Flex w='90px' h='90px'>
            <Image src={partnersImages9} alt='ogadispearlImg' />
          </Flex>
          <Flex w='90px' h='90px'>
            <Image src={partnersImages5} alt='ogadispearlImg' />
          </Flex>
          <Flex w='90px' h='90px'>
            <Image src={partnersImages10} alt='ogadispearlImg' />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default PartnersImage;
