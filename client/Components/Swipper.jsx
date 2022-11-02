import React from "react";
import { BsDot } from "react-icons/bs";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Swipercore, { Autoplay } from "swiper";
import styles from "../styles/Home.module.css";
// Import Swiper styles
import "swiper/css";
import { Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
const Swipper = () => {
  const [activeNav, setActiveNav] = useState("");
  Swipercore.use([Autoplay]);
  return (
    <>
      <Flex
        h={"59.52px"}
        fontFamily="Satoshi"
        alignItems="center"
        justify={"center"}
        mt={["2rem", "2.5rem", "3rem"]}
        justifyContent={"space-around"}
      >
        <Swiper
          className={styles.swiper}
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
              spaceBetween: 35,
            },
            650: {
              slidesPerView: 3,
            },
            750: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 4,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <Flex gap={10} fontFamily="Satoshi">
            <SwiperSlide>
              <Flex
                alignItems="center"
                justifyItems={"start"}
                cursor={"pointer"}
                mt="5"
                onClick={() => setActiveNav("#contruction")}
                className={activeNav === "#contruction" ? styles.active : ""}
                ml={["5px", "2rem", "5px", "20px", "4rem"]}
                w={["160px", "200px", "270px"]}
              >
                <Icon as={BsDot} fontSize={"4xl"} />
                <Link href="#works">
                  <Text
                    fontSize={["16px", "18px", "20px"]}
                    whiteSpace="nowrap"
                    textAlign={"center"}
                    cursor={"pointer"}
                  >
                    Construction
                  </Text>
                </Link>
              </Flex>
            </SwiperSlide>

            <SwiperSlide
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ? styles.active : ""}
            >
              <Flex
                alignItems="center"
                justifyItems={"start"}
                cursor="pointer"
                mt="5"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? styles.active : ""}
                ml={["-15px", "1.8rem", "-1rem", "-3rem", "0rem"]}
                w={["160px", "250px", "270px"]}
              >
                <Icon as={BsDot} fontSize={"4xl"} />
                <Link href="/about">
                  <Text
                    fontSize={["16px", "18px", "20px"]}
                    whiteSpace="nowrap"
                    textAlign={"center"}
                    cursor={"pointer"}
                  >
                    Marine Support
                  </Text>
                </Link>
              </Flex>
            </SwiperSlide>

            <SwiperSlide
              onClick={() => setActiveNav("#services")}
              className={activeNav === "#services" ? styles.active : ""}
            >
              <Flex
                alignItems="center"
                justifyItems={"start"}
                ml={["15px", "3rem", "-1.9rem", "0rem", "2rem"]}
                mt="5"
                w={["150px", "240px", "270px"]}
              >
                <Icon
                  as={BsDot}
                  fontSize={"4xl"}
                  ml={["15px", "0rem", "1rem", "0rem", "2rem"]}
                />
                <Link href="/services">
                  <Text
                    fontSize={["16px", "18px", "20px"]}
                    whiteSpace="nowrap"
                    textAlign={"center"}
                    cursor={"pointer"}
                  >
                    Pipe Laying
                  </Text>
                </Link>
              </Flex>
            </SwiperSlide>

            <SwiperSlide
              onClick={() => setActiveNav("#us")}
              className={activeNav === "#us" ? styles.active : ""}
            >
              <Flex
                alignItems="center"
                justifyItems={"start"}
                textAlign={""}
                ml={["-20px", "1rem", "-2rem", "0rem", "0rem"]}
                mt="5"
                w={["320px", "200px", "270px"]}
              >
                <Icon as={BsDot} fontSize={"4xl"} />
                <Link href="/contact">
                  <Text
                    fontSize={["16px", "18px", "20px"]}
                    whiteSpace="nowrap"
                    textAlign={"center"}
                    cursor={"pointer"}
                  >
                    Contract Support
                  </Text>
                </Link>
              </Flex>
            </SwiperSlide>
          </Flex>
        </Swiper>
      </Flex>
    </>
  );
};

export default Swipper;
