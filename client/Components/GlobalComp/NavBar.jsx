import Image from "next/image";
import Link from "next/link";
import ogidilogo from "../../public/asset/ogidilogo.svg";
import { Box, color, Flex, Hide, Show, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex>
      <Flex
      fontFamily="Satoshi"
        justify={"space-between"}
        alignItems="center"
        flexDir={"row"}
        w={["375px", '1440px']}
        // mx={"auto"}
        px={"5rem"}
        pt={"1rem"}
        display={["none", "none", "none", "flex", "flex"]}
      >
        <Flex alignItems={"center"} justifyContent="center">
          <Flex w={"76px"} h={"76px"}>
            <Image src={ogidilogo} alt="logo" />
          </Flex>
          <Text fontFamily="Satoshi" fontSize={"18"} fontWeight={"bold"} color={"#3B3C7D"}>
            OgidisPearl Project Limited
          </Text>
        </Flex>

        <Flex
          alignItems={"center"}
          fontFamily="Satoshi"
          py={2}
          gap={16}
          color={"#3B3C7D"}
          fontSize={"18px"}
          fontWeight={"semibold"}
        >
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/services">
            <a>Services</a>
          </Link>
          <Link href="/about">
            <a>About Us</a>
          </Link>
          <Link href="/contact" scroll={false}>
            <a>Contact Us</a>
          </Link>
        </Flex>
      </Flex>

      <Text></Text>
    </Flex>
  );
};

export default NavBar;
