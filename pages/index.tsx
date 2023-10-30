import Head from "next/head";
import {
  Box,
  Divider,
  Stack,
  Grid,
  Heading,
  Text,
  Container,
  Link,
  Button,
  Flex,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Product, Dependency, WalletSection } from "../components";
import { dependencies, products } from "../config";
import Form from "../components/react/Form/Form";
import { useChain } from "@cosmos-kit/react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container fixed>
      {/* // maxW="5xl" py={10} */}
      <Head>
        <title>Create Cosmos App</title>
        <meta name="description" content="Generated by create cosmos app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack direction="row" justifyContent={"space-between"}>
        <>&nbsp;</>
        {/* <Button variant="outline" px={0} onClick={toggleColorMode}>
          <Icon
            as={colorMode === "light" ? BsFillMoonStarsFill : BsFillSunFill}
          />
        </Button> */}
        <Box>
          <w3m-account-button />
        </Box>
      </Stack>

      {/* <WalletSection /> */}
      <Form />
    </Container>
  );
}
