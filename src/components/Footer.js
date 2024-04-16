import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      width="100%"
      paddingBlock="2rem"
      alignItems="flex-end"
      gap="1rem"
      justifyContent="center"
    >
      <Text fontSize="4rem" maxWidth="250px" textAlign="right">
        HERB LUBALIN
      </Text>
      <Text>© 1970 HERB LUBALIN. ALL RIGHTS RESERVED. </Text>
    </Flex>
  );
}
