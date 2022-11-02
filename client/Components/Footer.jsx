import { Flex, Text, Button, Icon } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ogidilogo from "../public/asset/LOGO.png";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
const Footer = () => {
  return (
    <>
      <Flex
        w="100%"
        fontFamily="Satoshi"
        h={["1000px", "1100px", "400px", "400px", "400px"]}
        mt={["1rem", "2rem", "2rem", "4rem", "4rem"]}
        mb={"rem"}
        color="white"
        bgColor={"#02092A"}
        flexDir={["column", "column", "row"]}
        pt={10}
        px={["15px", "2rem", "2rem", "2rem", "5rem"]}
        justifyContent={["start", "start", "space-between"]}
        alignItems={["center", "center", "start"]}
        textAlign={["center", "center", "start"]}
        fontSize="16px"
      >
        <Flex
          flexDir={"column"}
          alignContent="center"
          justifyContent={"çenter"}
          textAlign={["center", "center", "start"]}
        >
          <Flex bgcolor={"blue"} mt={[-5]} ml={[5, 5, 0]}>
            <Image src={ogidilogo} alt="logo" />
          </Flex>
          <Text fontSize={"32px"} fontFamily="Satoshi">
            Ogidispearl{" "}
          </Text>
        </Flex>
        <Flex fontFamily="Satoshi" flexDir={"column"} gap={3} py={[10, 10, 0]}>
          <Link href="/services">Services</Link>
          <Link href="/services#manpower">Manpower Services</Link>
          <Link href="/services#eng">Engineering Services</Link>
          <Link href="/services#tank">Tank & Vessel cleaning </Link>
          <Flex justifyContent={"center"}>
            <Button
              bgColor={"white"}
              borderColor={"#3B3C7D"}
              border={"1px"}
              mt={["0.5rem"]}
              color={"#111376"}
              w={["150px", "170px", "170px", "180px", "170px"]}
              h={["41px", "45px", "50px", "56px", "56px"]}
              fontSize={["13", "14", "14", "15", "16"]}
              _hover="none"
              textStyle={"none"}
            >
              <Link href={"/services"}>See other services</Link>
            </Button>
          </Flex>
        </Flex>
        <Flex fontFamily="Satoshi" flexDir={"column"} gap={3} py={[5, 5, 0]}>
          <Link href="/about">About us</Link>
          <Link href="/about#offer">What we offer</Link>
          <Link href="/about#objective">Our objectives</Link>
          <Link href="/about#core">Our core value</Link>
          <Link href="/about#goal">Our operational goal</Link>
          <Link href="/about#choose">Why choose us</Link>
        </Flex>

        <Flex flexDir={"column"} gap={3} py={[9, 9, 0]}>
          <Link href={"/contact"}>Contact us</Link>
          <Link href={"mailto: abc@example.com"}>ogidispearl@gmail.com</Link>
          <Text>Follow us</Text>
          <Flex
            w={"10%"}
            gap={2}
            alignItems={["center", "center", "start"]}
            pl={["8", "-3rem", "0"]}
          >
            <a
              href={"https://web.facebook.com/login/?_rdc=1&_rdr"}
              target={"blank"}
            >
              <Icon as={MdFacebook} fontSize={"32px"} color={"white"} />
            </a>
            <a href={"https://twitter.com/login"} target={"blank"}>
              <Icon
                as={AiFillTwitterCircle}
                fontSize={"32px"}
                color={"white"}
              />
            </a>
            <a href={"https://www.linkedin.com/login"} target={"blank"}>
              <Icon as={AiFillLinkedin} fontSize={"32px"} color={"white"} />
            </a>
            <a href={"mailto: abc@example.com"} target={"blank"}>
              <Icon as={ImMail4} fontSize={"32px"} color={"white"} />
            </a>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
