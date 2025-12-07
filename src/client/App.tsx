// メインアプリケーションコンポーネント
import { Box, Heading, Text } from '@chakra-ui/react';

function App() {
  return (
    <Box p={8}>
      <Heading size="2xl" mb={4}>
        Summarize
      </Heading>
      <Text fontSize="lg">
        英語学習支援アプリケーションへようこそ！
      </Text>
    </Box>
  );
}

export default App;
