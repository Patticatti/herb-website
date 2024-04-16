import "../App.css";
import { Box, Text, Image, Stack, Flex } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Stack padding="1rem">
      <Box
        position="absolute"
        top="-160px"
        right="0"
        width="90%"
        height="80vh"
        backgroundColor="#CB0809"
        borderRadius="1000px 0 0 1000px"
      />
      <Text fontSize="3.2rem" maxWidth="500px" zIndex="2">
        THE BETTER PEOPLE COMMUNICATE, THE GREATER WILL BE THE NEED FOR BETTER
      </Text>
      <Image
        src="/images/TYPOGRAPHY EXPRESSIVE TYPOGRAPHY.svg"
        alignSelf="flex-end"
        zIndex="2"
      />
      <Flex alignItems="flex-end" gap="1rem">
        <Text fontSize="4rem" maxWidth="250px">
          HERB LUBALIN
        </Text>
        <Text
          fontFamily="AvanteGardeBookOb"
          letterSpacing="0.01em"
          lineHeight="1.2em"
        >
          AMERICAN GRAPHIC DESIGNER COLLABORATED WITH RALPH GINZBURG ON THREE OF
          GINZBURG'S MAGAZINES: EROS, FACT, AND AVANT GARDE. DESIGNED THE
          TYPEFACE, ITC AVANT GARDE, FOR THE LAST OF THESE.
        </Text>
      </Flex>
    </Stack>
  );
}
