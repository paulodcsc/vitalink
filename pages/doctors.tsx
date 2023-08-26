import { Stack, Flex, Container } from '@mantine/core';

export default function Doctors() {
  return (
    <Container fluid>
      <Flex>
        <Stack align="center" justify="center" p={10} style={{ flex: 1 }}>
          Doctors
        </Stack>
      </Flex>
    </Container>
  );
}
