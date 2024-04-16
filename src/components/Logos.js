import { Flex, Image } from "@chakra-ui/react";

export default function Logos() {
  return (
    <Flex
      bgColor="#F6F4F0"
      width="100%"
      padding="2rem"
      justifyContent="center"
      alignItems="center"
    >
      <Image width="100%" src="/images/Logos.svg" />
    </Flex>
  );
}
