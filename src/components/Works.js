import { Center, Image, Stack, Text, Wrap } from "@chakra-ui/react";

export default function Works() {
  return (
    <Stack>
      <Image src="/images/Works.svg" width="60%" />
      <Center paddingInline="1rem" gap="1rem">
        <Image src="/images/Frame 6 (1).png" width="50%" bgColor="#020C12" />
        <Image src="/images/Frame 7.png" width="50%" />
      </Center>
    </Stack>
  );
}
