import avatar1 from "../public/asset/avatar1.png";
import avatar2 from "../public/asset/avatar2.png";
import avatar3 from "../public/asset/avatar3.png";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
// import work from  '../public/asset/workImg1.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Autoplay } from "swiper";
import styles from "../styles/Home.module.css";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

const ClientSlider = () => {
  Swipercore.use([Autoplay]);

  return (
    <>
      <Flex
        w="100%"
        fontFamily="Satoshi"
        h={["400px", "420px", "500px", "500px", "500px"]}
        mt={["-3rem", "-0.4rem", "3rem", "5rem", "6rem"]}
        mb={"2rem"}
        color="#3B3C7D"
        bgColor={"#FBFBFB"}
        flexDir={"column"}
        px={["15px", "2rem", "2rem", "2rem", "5rem"]}
      >
        <Text
          fontWeight={"semibold"}
          fontSize={["24px", "28px", "33px", "36px", "42px"]}
          mb={["6rem", "6rem", "6rem"]}
          mt={["2rem", "3rem", "2rem"]}
          textAlign="center"
        >
          What clients say about us
        </Text>

        <Flex
          h={"59.52px"}
          alignItems="center"
          justify={"center"}
          mt={["2rem", "2rem", "7rem"]}
        >
          <Swiper
            className={styles.ClientSlider}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            // autoplay={{
            //   delay: 3000,
            // }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              360: {
                slidesPerView: 1,
                spaceBetween: -70,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: -120,
              },
              650: {
                slidesPerView: 2,
                spaceBetween: -10,
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
                spaceBetween: 150,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Flex fontFamily="Satoshi" w={"278px"} h={"250px"} flexDir="column">
                <Flex ml={"5rem"} my="1rem">
                  <Image src={avatar1} alt='ogadispearlImg' />
                </Flex>
                <Text fontFamily="Satoshi" textAlign={"center"}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex w={"278px"} h={"250px"} flexDir="column">
                <Flex ml={"5.5rem"} my="1rem">
                  <Image src={avatar2} />
                </Flex>
                <Text fontFamily="Satoshi" textAlign={"center"}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex w={"278px"} h={"250px"} flexDir="column">
                <Flex ml={"6rem"} my="1rem">
                  <Image src={avatar3} alt='ogadispearlImg' />
                </Flex>
                <Text fontFamily="Satoshi" textAlign={"center"}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Flex>
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Flex>
    </>
  );
};

export default ClientSlider;
