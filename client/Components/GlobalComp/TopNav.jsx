import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { TbMessageDots } from "react-icons/tb";
import { ImMail4 } from "react-icons/im";
import Link from "next/link";
const TopNav = () => {
  return (
    <Flex
      fontFamily="Satoshi"
      bgColor={"#ECEBEB"}
      flexDir="row"
      alignItems={"center"}
      justifyContent="space-between"
      w={["375px", "1440px"]}
      h={["45px", "30px", "56px"]}
      // mx={"auto"}
      px={["15px", "2rem", "5rem"]}
    >
      <Flex
        w={["100%", "100%", "90%", "90%", "90%"]}
        gap={10}
        justifyContent={[
          "space-between",
          "space-between",
          "start",
          "start",
          "start",
        ]}
      >
        <Flex fontFamily="Satoshi" alignItems={"center"} gap={1} fontSize={"13px"}>
          <Link href={"/contact"}>
            <Icon as={TbMessageDots} fontSize={"lg"} />
          </Link>
          <Text display={["none", " none", "none", "flex", "flex"]}>
            <a href="mailto: abc@example.com"> ogidispearlltd@info.com</a>
          </Text>
        </Flex>
        <Flex fontFamily="Satoshi" alignItems={"center"} gap={1} fontSize={"13px"} justify="centerr">
          <a href="tel:+2348034011039">
            <Link href={"/contact"}>
              <Icon as={FiPhoneCall} fontSize={"sm"} />
            </Link>
          </a>
          <Text display={["none", " none", "none", "flex", "flex"]}>
            <a href="tel:+2348034011039">+2348034011039</a>
          </Text>
        </Flex>
        <Flex fontFamily="Satoshi" alignItems={"center"} gap={1} fontSize={"13px"}>
          <Link href={"/contact"}>
            <Icon as={FiMapPin} fontSize={"sm"} />
          </Link>
          <Text display={["none", " none", "none", "flex", "flex"]}>
            Plot 202 PTI Road, Sunny Eru Motors Complex Effurun, Delta State.
          </Text>
        </Flex>
      </Flex>

      <HStack
        w={"10%"}
        justify={"center"}
        display={["none", " none", "flex", "flex", "flex"]}
      >
        <a href={"www.facebook.com"} target={"blank"}>
          <Icon as={MdFacebook} fontSize={"22px"} color={"#3B3C7D"} />
        </a>
        <a href={"www.facebook.com"} target={"blank"}>
          <Icon as={AiFillTwitterCircle} fontSize={"22px"} color={"#3B3C7D"} />
        </a>
        <a href={"www.facebook.com"} target={"blank"}>
          <Icon as={AiFillLinkedin} fontSize={"22px"} color={"#3B3C7D"} />
        </a>
        <a href={"www.facebook.com"} target={"blank"}>
          <Icon as={ImMail4} fontSize={"22px"} color={"#3B3C7D"} />
        </a>
      </HStack>
    </Flex>
  );
};

export default TopNav;
