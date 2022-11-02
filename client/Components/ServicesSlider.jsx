import { Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import group01 from "../public/asset/Group01.png";
import group02 from "../public/asset/Group02.png";
import group03 from "../public/asset/Group03.png";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Autoplay } from "swiper";
import styles from "../styles/Home.module.css";
// Import Swiper styles
import "swiper/css";
import Link from "next/link";

const ServicesSlider = () => {
  return (
    <>
      <Flex
        id="contact"
        fontFamily="Satoshi"
        w="100%"
        h="650px"
        mt={["-5rem", "-5rem", "-5rem", "-12rem", "-10rem"]}
        color="#3B3C7D"
        flexDir={"column"}
        px={["15px", "2rem", "2rem", "2rem", "5rem"]}
      >
        <Text
          fontWeight={"semibold"}
          fontSize={["24px", "28px", "33px", "36px", "42px"]}
          my={"6rem"}
          textAlign="center"
        >
          Our Services
        </Text>

        <Flex
          h={"59.52px"}
          alignItems="center"
          justify={"center"}
          mt={["6rem", "6rem", "7rem"]}
          //   justifyContent={"space-around"}
        >
          <Swiper
            className={styles.swiper}
            spaceBetween={50}
            slidesPerView={4}
            //   loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              360: {
                slidesPerView: 1,
                spaceBetween: -50,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: -80,
              },
              650: {
                slidesPerView: 2,
                spaceBetween: 120,
              },
              750: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 200,
              },
              1020: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <Flex>
              <SwiperSlide>
                <Flex
                  w="283px"
                  bgColor={"#F8F8F8"}
                  borderRadius="15px"
                  borderColor={"#3B3C7D"}
                  border={"1px"}
                >
                  <Flex flexDir={"column"} gap="2" p={5}>
                    <Flex justifyContent={"space-between"}>
                      <Image src={group01} alt="ConstructionImage " />
                      <Text fontWeight={"semibold"}>01</Text>
                    </Flex>
                    <Text
                      fontFamily="Satoshi"
                      fontWeight={"semibold"}
                      fontSize="18px"
                    >
                      Construction
                    </Text>
                    <Text fontSize="14px" fontFamily="Satoshi">
                      OgidisPearl Limiteed is a leading construction company in
                      Nigeria Specialising in Oil and Gas sectors and Government
                      functionaries our core competencies include a vast range
                      of engineering and construction capabilities that cater to
                      the diverse needs of its projects
                    </Text>
                    <Text
                      pos={"relative"}
                      left="8rem"
                      top={2}
                      bottom={0}
                      w="7rem"
                      h="3px"
                      my={3}
                      bgColor={"#3B3C7D"}
                    ></Text>
                  </Flex>
                </Flex>
              </SwiperSlide>
              <SwiperSlide>
                <Flex
                  w="283px"
                  bgColor={"#F8F8F8"}
                  borderRadius="15px"
                  borderColor={"#3B3C7D"}
                  border={"1px"}
                >
                  <Flex flexDir={"column"} gap="2" p={5}>
                    <Flex justifyContent={"space-between"}>
                      <Image src={group02} alt="ConstructionImage " />
                      <Text fontWeight={"semibold"}>02</Text>
                    </Flex>
                    <Text
                      fontWeight={"semibold"}
                      fontFamily="Satoshi"
                      fontSize="18px"
                    >
                      Marine support services
                    </Text>
                    <Text fontSize="14px" fontFamily="Satoshi">
                      OgidisPearl Limiteed is a leading construction company in
                      Nigeria Specialising in Oil and Gas sectors and Government
                      functionaries our core competencies include a vast range
                      of engineering and construction capabilities that cater to
                      the diverse needs of its projects
                    </Text>
                    <Text
                      pos={"relative"}
                      left="8rem"
                      top={2}
                      bottom={0}
                      w="7rem"
                      h="3px"
                      my={3}
                      bgColor={"#3B3C7D"}
                    ></Text>
                  </Flex>
                </Flex>
              </SwiperSlide>
              <SwiperSlide>
                <Flex
                  w="283px"
                  bgColor={"#F8F8F8"}
                  borderRadius="15px"
                  borderColor={"#3B3C7D"}
                  border={"1px"}
                >
                  <Flex flexDir={"column"} gap="2" p={5}>
                    <Flex justifyContent={"space-between"}>
                      <Image src={group03} alt="ConstructionImage " />
                      <Text fontWeight={"semibold"}>03</Text>
                    </Flex>
                    <Text
                      fontWeight={"semibold"}
                      fontSize="18px"
                      fontFamily="Satoshi"
                    >
                      Pipe laying
                    </Text>
                    <Text fontSize="14px" fontFamily="Satoshi">
                      OgidisPearl Limiteed is a leading construction company in
                      Nigeria Specialising in Oil and Gas sectors and Government
                      functionaries our core competencies include a vast range
                      of engineering and construction capabilities that cater to
                      the diverse needs of its projects
                    </Text>
                    <Text
                      pos={"relative"}
                      left="8rem"
                      top={2}
                      bottom={0}
                      w="7rem"
                      h="3px"
                      my={3}
                      bgColor={"#3B3C7D"}
                    ></Text>
                  </Flex>
                </Flex>
              </SwiperSlide>
              <SwiperSlide>
                <Flex
                  w="283px"
                  bgColor={"#F8F8F8"}
                  borderRadius="15px"
                  justify={"center"}
                  backgroundImage="url('/asset/backroun.png')"
                  h="338px"
                >
                  <Button
                    bgColor={"white"}
                    borderColor={"#3B3C7D"}
                    border={"1px"}
                    mt={"9rem"}
                    fontSize={"16px"}
                    w={["200px"]}
                    h={"50px"}
                    color={"#111376"}
                  >
                    <Link href={"/services"}>Read More</Link>
                  </Button>
                </Flex>
              </SwiperSlide>
            </Flex>
          </Swiper>
        </Flex>
        <Flex justifyContent={"center"}>
          <Button
            bgColor={"white"}
            borderColor={"#3B3C7D"}
            border={"1px"}
            mt={["12rem", "14rem", "14rem", "14rem", "14rem"]}
            fontSize={["12", "14", "16", "18", "20"]}
            w={["191px", "200px", "220px", "250px", "279px"]}
            h={["41px", "45px", "50px", "56px", "56px"]}
            color={"#111376"}
          >
            <Link href={"/services"}>See other services</Link>
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default ServicesSlider;
