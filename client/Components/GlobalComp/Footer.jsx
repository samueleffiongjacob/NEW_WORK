import { Flex, Link, Text, Button, Icon } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import ogidilogo from "../../public/asset/LOGO.png";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
const Footer = ({ top }) => {
  return (
    <>
      <Flex
        pos={'absolute'}
        fontFamily="Satoshi"
        top={top}
        w={["375px", "1440px"]}
        h={["1000px", "400px"]}
        // mt={["1rem", "4rem"]}
        // mb={"rem"}
        color="white"
        bgColor={"#02092A"}
        flexDir={["column", "row"]}
        pt={10}
        px={["15px", "2rem", "5rem"]}
        justifyContent={["start", "space-between"]}
        alignItems={["center", "start"]}
        textAlign={["center", "start"]}
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
          <Text fontSize={"32px"}>Ogidispearl </Text>
        </Flex>
        <Flex fontFamily="Satoshi" flexDir={"column"} gap={3} py={[10, 10, 0]}>
          <Link href="services">Services</Link>
          <Link href="services/#manpower">Manpower Services</Link>
          <Link href="services/#eng">Engineering Services</Link>
          <Link href="services/#tank">Tank & Vessel cleaning </Link>
          <Flex justifyContent={"center"}>
            <Button
              bgColor={"white"}
              borderColor={"#3B3C7D"}
              border={"1px"}
              mt={["0.5rem"]}
              //   fontSize={["20"]}
              //   w={["200px"]}
              //   h={["56px"]}
              color={"#111376"}
              w={["150px", "170px"]}
              h={["41px", "56px"]}
              fontSize={["13", "16"]}
            >
              See other services
            </Button>
          </Flex>
        </Flex>
        <Flex fontFamily="Satoshi" flexDir={"column"} gap={3} py={[5, 5, 0]}>
          <Link href="about">About us</Link>
          <Link href="about/#offer">What we offer</Link>
          <Link href="about/#objective">Our objectives</Link>
          <Link href="about/#core">Our core value</Link>
          <Link href="about/#goal">Our operational goal</Link>
          <Link href="about/#choose" >Why choose us</Link>
        </Flex>

        <Flex flexDir={"column"} gap={3} py={[9, 9, 0]} >
          <Link>Contact us</Link>
          <Link>ogidispearl@gmail.com</Link>
          <Link>Follow us</Link>
          <Flex
            w={"10%"}
            gap={2}
            alignItems={["center", "center", "start"]}
            pl={["8", "-3rem", "0"]}
          >
            <a href={"www.facebook.com"}>
              <Icon as={MdFacebook} fontSize={"32px"} color={"white"} />
            </a>
            <a href={"www.facebook.com"}>
              <Icon
                as={AiFillTwitterCircle}
                fontSize={"32px"}
                color={"white"}
              />
            </a>
            <a href={"www.facebook.com"}>
              <Icon as={AiFillLinkedin} fontSize={"32px"} color={"white"} />
            </a>
            <a href={"www.facebook.com"}>
              <Icon as={ImMail4} fontSize={"32px"} color={"white"} />
            </a>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
