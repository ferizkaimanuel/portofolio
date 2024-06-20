import { Flex, Heading, Spacer, VStack } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  FaSun,
  FaMoon,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa"
import Header from "./components/header";

const App = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark"

  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Ferizka Imanuel Tubongkasi
        </Heading>
        <Spacer />
        <IconButton
          aria-label="linkedIn"
          ml={2}
          icon={<FaLinkedin/>} isRound= {true} onClick={() => window.open("https://www.linkedin.com/in/ferizka-imanuel-b7b3a5233/")}
        />
        <IconButton
          aria-label="github"
          ml={2}
          icon={<FaGithub/>} isRound= {true} onClick={() => window.open("https://github.com/ferizkaimanuel")}
       />
       <IconButton
          aria-label="dark mode"
          ml={8}
          icon={isDark ? <FaSun/> : <FaMoon/>} isRound= {true} onClick={toggleColorMode}
       />
      </Flex>
      <Header />
    </VStack>
  )
}

export default App;
