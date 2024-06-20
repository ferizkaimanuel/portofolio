import { Button } from "@chakra-ui/button"
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Circle, Stack, Flex, Box, Text, Divider } from "@chakra-ui/layout";
// import { GoArrowDown } from "react-icons/go"
import Foto from "../source/fotoFix.jpeg"
import CurriculumVitae from "../source/cv.pdf"
import { useMediaQuery } from "@chakra-ui/media-query";
import { GoArrowDown } from "react-icons/go";

const Header = () => {

    const { colorMode } = useColorMode()
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

    return (
        <Stack>
          {isNotSmallerScreen && (
           <Circle 
            position="absolute"
            bg="blue.100"
            opacity="0.1"
            borderWidth="150px"
            // h="300px"
            alignSelf="flex-end"
           />
          )}
        
          <Flex 
            direction={isNotSmallerScreen ? "row" : "column"}
            spacing="200px"
            p={isNotSmallerScreen ? "32" : 0}
            alignSelf="flex-start"
          >
            <Box mt={isNotSmallerScreen ? 0 : 16} alignSelf="flex-start" mr={5}>
                <Text fontSize="2xl" fontWeight="semibold">Hi, i'm a Web Developer</Text>
                <Text fontSize="6xl" fontWeight="semibold">Ferizka Imanuel Tubongkasi</Text>
                <Divider></Divider>
                <Flex>
                    <Text mr="5em" as="b" marginTop={2}>Date of Birth :</Text>
                    <Text marginTop={2}>July 07, 1994</Text>           
                </Flex>
                <Flex>
                    <Text mr="7.3em" as="b" marginTop={2}>Address :</Text>
                    <Text marginTop={2}>Jl. Pagu Jaten No. 14, Pasar Minggu, Jakarta Selatan</Text>       
                </Flex>
                <Flex>
                    <Text mr="8.5em" as="b" marginTop={2}>Email :</Text>
                    <Text as="u" marginTop={2}><a href="mailto:ferizkaimanuel@gmail.com">ferizkaimanuel@gmail.com</a></Text>           
                </Flex>
                <Flex>
                    <Text mr="8em" as="b" marginTop={2}>Phone :</Text>
                    <Text as="u" marginTop={2}><a href="https://wa.me/+6289620555486">+6289620555486</a></Text>           
                </Flex>
                <Button 
                  mt={5} 
                  rightIcon={<GoArrowDown />} 
                  size="lg" height="50px" 
                  width="550px"
                  colorScheme="orange"
                  >
                    Download CV
                </Button>               
            </Box>
            <Image 
              alignSelf="center"
              src={Foto}
              borderRadius="full"
              boxSize="300px"
              backgroundColor="transparent"
              boxShadow="lg"
              zIndex={1}
            />
          </Flex>
        </Stack>
    )
}

export default Header;