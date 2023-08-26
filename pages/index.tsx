import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Stack, Flex, Container, Center } from '@mantine/core';

export default function HomePage() {
  return (
    <Container fluid h={'100vh'}>
      <Center>
        <Stack align="center" justify="center" p={10} style={{ flex: 1 }}>
          Home
        </Stack>
      </Center>
    </Container>
  );
}
