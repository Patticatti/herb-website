import { Flex, Image, Stack, Text, Button } from "@chakra-ui/react";

export default function Logos() {
  return (
    <Flex
      paddingBlock="8rem"
      gap="1rem"
      height="900px"
      justifyContent="space-between"
    >
      <Image
        minHeight="100%"
        src="/images/Herb Lubalin.png"
        objectFit="cover"
        minWidth="40%"
      />
      <Stack height="100%" justifyContent="space-between">
        <Image src="/images/AboutMe.svg" />
        <Flex gap="2rem" paddingInline="1rem">
          <Text
            fontSize="1.8rem"
            fontFamily="Crimson Text"
            letterSpacing="0.01em"
            lineHeight="1.4em"
          >
            From my early days as an art director to my later years as a
            celebrated designer, I've remained committed to the relentless
            pursuit of pushing design norms. My work reflects the power of
            typography as an image.
          </Text>
          <Text
            fontSize="1.8rem"
            fontFamily="Crimson Text"
            letterSpacing="0.01em"
            lineHeight="1.4em"
          >
            I've dedicated my career to pushing the boundaries of typography and
            graphics design. I've embraced playful typography, bold
            compositions, and unconventional layouts to create innovative
            designs.
          </Text>
        </Flex>
        <a class="btnFillup liquidbg">READ MORE</a>
      </Stack>
    </Flex>
  );
}
