import React from "react";
import { Box, Flex, HStack, Image, Link, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";

export const Box1 = ({ id, top, src, text, title }) => (
  <Box
    id={id}
    position={'absolute'}
    w={['none', 'none', '730px', '966px']}
    height={{
      base: '57.47px',
      sm: '284.7px'
    }}
    top={top}
  >
    <Image src={src} alt='HeaderImg'
      width={['none', 'none', '288px', '371px']}
      height={['none', 'none', '216.39px', '284.66px']}
      position={'absolute'}
      left={{
        base: '116px',
        sm: '5px'
      }}
      top={['none', 'none', '10px', '0px']}
    />
    <VStack
      pos={'absolute'}
      alignItems="flex-start"
      right={'0px'}
      width={['none', 'none', '350px', '500px']}
    >
      <Text
        mb='18px'
        width={['none', 'none', '350px', '500px']}
        fontFamily={'Satoshi'}
        fontWeight={'500'}
        fontSize={'32px'}
        lineHeight={'43.2px'}
        color={'#01036C'}
      >{title}</Text>

      <Text
        width={['none', 'none', '350px', '471px']}
        fontFamily={'Satoshi'}
        fontWeight={'500'}
        fontSize={'20px'}
        lineHeight={'23px'}
        color={'#373636'}
      >{text}</Text>
    </VStack>
  </Box>
)
export const Box2 = ({ id, top, src, text, title }) => (
  <Box
    id={id}
    position={'absolute'}
    width={['none', 'none', '730px', '966px']}
    height={{
      base: '57.47px',
      sm: '284.7px'
    }}
    top={top}
  >
    <Image src={src} alt='HeaderImg'
      width={['none', 'none', '288px', '371px']}
      height={['none', 'none', '216.39px', '284.66px']}
      position={'absolute'}
      right={['none', 'none', '30px', '70px']}
      top={['none', 'none', '10px', '0px']}
    />
    <VStack
      pos={'absolute'}
      alignItems="flex-start"
      left={'0px'}
      width={['none', 'none', '350px', '500px']}
    >
      <Text
        mb='18px'
        width={['none', 'none', '350px', '500px']}
        fontFamily={'Satoshi'}
        fontWeight={'500'}
        fontSize={'32px'}
        lineHeight={'43.2px'}
        color={'#01036C'}
      >{title}</Text>

      <Text
        width={['none', 'none', '350px', '471px']}
        fontFamily={'Satoshi'}
        fontWeight={'500'}
        fontSize={'20px'}
        lineHeight={'23px'}
        color={'#373636'}
      >{text}</Text>
    </VStack>
  </Box>
)

export const BoxMobile = ({ src, text, title }) => (
  <Box
    width={'286px'}
  >
    <Image src={src} alt='HeaderImg'
      width={'282px'}
      height={'216.39px'}
      mb='25px'
    />

    <Text
      mb='25px'
      width={'283px'}
      fontFamily={'Satoshi'}
      fontWeight={'700'}
      fontSize={'18px'}
      lineHeight={'24.3px'}
      color={'#01036C'}
    >{title}</Text>

    <Text
      mb='54px'
      width={'283px'}
      fontFamily={'Satoshi'}
      fontWeight={'500'}
      fontSize={'16px'}
      lineHeight={'18.75px'}
      color={'#373636'}
    >{text}</Text>
  </Box>
)

export const AboutBox = ({ id, top, ht, left, src, text, title, titletop, texttop, imgh, imgt, imgw, linecolor, linetop }) => (
  <Box
    id={id}
    position={'absolute'}
    width={["287px", "287px", "287px", "400px", "536px"]}
    height={ht ? ht : ["287px", "287px", "287px", "330px", "347px"]}
    top={top}
    left={left}
    background={'#F8F8F8'}
    borderRadius={{
      base: '10px',
      md: '16px'
    }}
  >
    <Image src={src} alt='aboutImg'
      position={'absolute'}
      width={imgw}
      height={imgh}
      top={imgt}
      left={["25px", "25px", "25px", "50px", "87px"]}
    />

    <Text
      position={'absolute'}
      left={["25px", "25px", "25px", "50px", "87px"]}
      top={titletop}
      width={["210px", "210px", "210px", "270px", "294px"]}
      height={["32px", "32px", "32px", "46px", "48px"]}
      fontFamily={'Satoshi'}
      fontWeight={["500", "500", "500", "650", "700"]}
      fontSize={["24px", "24px", "24px", "26px", "28px"]}
      lineHeight={["32.4px", "32.4px", "32.4px", "36px", "37.8px"]}
      color={'#3B3C7D'}
    >{title}</Text>

    <Text
      position={'absolute'}
      left={["25px", "25px", "25px", "50px", "87px"]}
      top={texttop}
      width={["250px", "250px", "250px", "300px", "340px"]}
      fontFamily={'Satoshi'}
      fontSize={{
        base: '16px',
        sm: '16px'
      }}
      lineHeight={["18.75px", "18.75px", "18.75px", "20px", "21.6px"]}
      color={'#3B3C7D'}
    >{text}</Text>
    <Image src="/images/line.png" alt='HeaderLine'
      width={["111.28px", "111.28px", "111.28px", "99px", "104.64px"]}
      height={["3.17px", "3.17px", "3.17px", "2.7px", "2.7px"]}
      position={'absolute'}
      left={["25px", "25px", "25px", "50px", "89px"]}
      background={linecolor}
      top={linetop}
    />
  </Box>
)
export const AboutBox2 = ({ text, title }) => (
  <Flex
    alignContent='center'
    mx='auto'
    justifyContent={'center'}
    justifyItems='center'
  >
    <Text
      position={'absolute'}
      top={{
        base: '50px',
        sm: '21px'
      }}
      width={["175px", "175px", "340px", "340px", "340px"]}
      height={{
        base: '32px',
        sm: '65px'
      }}
      fontFamily={'Satoshi'}
      fontWeight={'700'}
      fontSize={{
        base: '24px',
        sm: '48px'
      }}
      lineHeight={{
        base: '32.4px',
        sm: '64.8px'
      }}
      color={'#3B3C7D'}
    >{title}</Text>

    <Text
      position={'absolute'}
      top={{
        base: '112px',
        sm: '120px'
      }}
      width={["245px", "245px", "600px", "900px", "1225px"]}
      height={{
        base: '143px',
        sm: '74px'
      }}
      fontFamily={'Satoshi'}
      fontWeight={'500'}
      fontSize={{
        base: '16px',
        sm: '24px'
      }}
      textAlign={'center'}
      lineHeight={{
        base: '18.75px',
        sm: '28.13px'
      }}
      color={'#111376'}
    >{text}</Text>
  </Flex>
)
export const AboutBox3 = ({ text, left, top, w }) => (
  <Box
    position={['none', 'none', 'absolute', 'absolute', 'absolute']}
    display={"flex"}
    alignItems={"center"}
    justifyContent={'center'}
  >
    <Text
      position={'absolute'}
      left={left}
      top={top}
      width={w ? w : ["259px", "259px", "290px", "285px", "285px"]}
      height={{
        base: '41px',
        sm: '41px'
      }}
      fontFamily={'Satoshi'}
      fontWeight={'500'}
      fontSize={{
        base: '15px',
        sm: '20px'
      }}
      lineHeight={{
        base: '20.25px',
        sm: '27px'
      }}
      textAlign={['center', 'unset']}
      textDecorationLine={'underline'}
      color={'#3B3C7D'}
    >{text}</Text>
  </Box >
)
export const RedLine = ({ left, activeNav, Nav }) => (
  <Box
    display={activeNav === Nav ? 'yes' : 'none'}
    position={['none', 'none', 'absolute', 'absolute', 'absolute']}
    content=" "
    w={["none", "none", "160px", "160px", "160px"]}
    h={["none", "none", "25px", "25px", "25px"]}
    mt={["none", "none", "12px", "12px", "12px"]}
    top='-28px'
    left={left}
    bottom='5px'
    backgroundColor='red'
  >
  </Box >
)