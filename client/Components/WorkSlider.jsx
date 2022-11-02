import { Flex, Text, Button } from "@chakra-ui/react";

// import work from  '../public/asset/workImg1.png'

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Autoplay } from "swiper";
import styles from "../styles/Home.module.css";
// Import Swiper styles
import "swiper/css";
import Link from "next/link";

const WorkSlider = () => {
  Swipercore.use([Autoplay]);

  return (
    <>
      <Flex
      id="works"
      fontFamily="Satoshi"
        w="100%"
        h="650px"
        mt={["-3rem", "-2rem", "1rem", "3rem", "6rem"]}
        color="#3B3C7D"
        flexDir={"column"}
        px={["15px", "2rem", "2rem", "2rem", "5rem"]}
      >
        <Text
          fontWeight={"semibold"}
          fontSize={["24px", "28px", "33px", "36px", "42px"]}
          mb={["6rem", "5rem", "6rem"]}
          mt={["6rem", "6rem", "6rem"]}
          textAlign="center"
        >
          Some of Our Works
        </Text>

        <Flex
          h={"59.52px"}
          alignItems="center"
          justify={"center"}
          mt={["4rem", "6rem", "7rem"]}
        //   justifyContent={"space-around"}
        >
          <Swiper
            className={styles.swiper}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
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
                spaceBetween: -50,
              },
              650: {
                slidesPerView: 2,
                spaceBetween: 120,
              },
              750: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: -30,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 230,
              },
              1020: {
                slidesPerView: 3,
                spaceBetween: 150,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 150,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <Flex gap={10}>
              <SwiperSlide>
                <Flex
                  w={["285px", "300px", "300px", "300px", "300px"]}
                  h={["279px", "300px", "330px"]}
                  borderRadius="10px"
                  justifyContent={"end"}
                  flexDir="column"
                  backgroundImage="url('/asset/workImg1.png')"
                >
                  <Text
                    w={["285px", "300px", "300px"]}
                    h={["74px", "71px", "71px"]}
                    color={"white"}
                    bgColor={"#3B3C7D"}
                    borderBottomRadius={"10px"}
                    fontSize="17px"
                    pt={3}
                    px={5}
                    textAlign={"center"}
                    fontFamily="Satoshi"
                  >
                    Pipeline laying project at Ibeshe, Lagos
                  </Text>
                </Flex>
              </SwiperSlide>
              <SwiperSlide>
                <Flex
                  w={["285px", "300px", "300px"]}
                  h={["279px", "300px", "330px"]}
                  borderRadius="10px"
                  justifyContent={"end"}
                  flexDir="column"
                  backgroundImage="url('/asset/workImg2.png')"
                >
                  <Text
                    w={["285px", "300px", "300px"]}
                    h={["74px", "71px", "71px"]}
                    color={"white"}
                    bgColor={"#3B3C7D"}
                    borderBottomRadius={"10px"}
                    fontSize="17px"
                    pt={3}
                    px={5}
                    textAlign={"center"}
                    fontFamily="Satoshi"
                  >
                    Road dualization project work ongoing at Maroro, Warri{" "}
                  </Text>
                </Flex>
              </SwiperSlide>
              <SwiperSlide>
                <Flex
                  w={["285px", "300px", "300px"]}
                  h={["279px", "300px", "330px"]}
                  borderRadius="10px"
                  justifyContent={"end"}
                  flexDir="column"
                  backgroundImage="url('/asset/workImg3.png')"
                >
                  <Text
                    w={["285px", "300px", "300px"]}
                    h={["74px", "71px", "71px"]}
                    color={"white"}
                    bgColor={"#3B3C7D"}
                    borderBottomRadius={"10px"}
                    fontSize="17px"
                    pt={3}
                    px={5}
                    textAlign={"center"}
                    fontFamily="Satoshi"
                  >
                    Road dualization project work ongoing at Maroro, Warri{" "}
                  </Text>
                </Flex>
              </SwiperSlide>
              <SwiperSlide>
                <Flex
                  w={["285px", "300px", "300px"]}
                  h={["279px", "300px", "330px"]}
                  borderRadius="10px"
                  justifyContent={"end"}
                  flexDir="column"
                  backgroundImage="url('/asset/workImg4.png')"
                >
                  <Text
                    w={["285px", "300px", "300px"]}
                    h={["64px", "71px", "71px"]}
                    color={"white"}
                    bgColor={"#3B3C7D"}
                    borderBottomRadius={"10px"}
                    fontSize="17px"
                    pt={3}
                    px={5}
                    textAlign={"center"}
                  >
                    Workers on site
                  </Text>
                </Flex>
              </SwiperSlide>
              <SwiperSlide>
                <Flex
                  w={["285px", "300px", "300px"]}
                  h={["279px", "300px", "330px"]}
                  borderRadius="10px"
                  justifyContent={"end"}
                  flexDir="column"
                  backgroundImage="url('/asset/workImg5.png')"
                >
                  <Text
                    w={["285px", "300px", "300px"]}
                    h={["74px", "71px", "71px"]}
                    color={"white"}
                    bgColor={"#3B3C7D"}
                    borderBottomRadius={"10px"}
                    fontSize="17px"
                    pt={3}
                    px={5}
                    textAlign={"center"}
                    fontFamily="Satoshi"
                  >
                    Pipeline laying project at Ibeshe, Lagos{" "}
                  </Text>
                </Flex>
              </SwiperSlide>
              <SwiperSlide>
                <Flex
                  w={["285px", "300px", "300px"]}
                  h={["279px", "300px", "330px"]}
                  borderRadius="10px"
                  justifyContent={"end"}
                  flexDir="column"
                  backgroundImage="url('/asset/workImg6.png')"
                >
                  <Text
                    w={["285px", "300px", "300px"]}
                    h={["74px", "71px", "71px"]}
                    color={"white"}
                    bgColor={"#3B3C7D"}
                    borderBottomRadius={"10px"}
                    fontSize="17px"
                    pt={3}
                    px={5}
                    textAlign={"center"}
                    fontFamily="Satoshi"
                  >
                    Pipeline laying project at Ibeshe, Lagos
                  </Text>
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
            mt={["9rem", "10rem", "11rem", "12rem", "12rem"]}
            fontSize={["12", "14", "16", "18", "20"]}
            w={["191px", "200px", "220px", "250px", "279px"]}
            h={["41px", "45px", "50px", "56px", "56px"]}
            color={"#111376"}
          >
            <Link href={'/services'}>See other services</Link>
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default WorkSlider;
