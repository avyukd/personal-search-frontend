import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Input,
  InputGroup,
  Button, HStack
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import {useState, useEffect} from 'react';

function App() {

  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <VStack>
          <HStack>
            <Input size="md" placeholder="Search" onChange={handleSearch} />
            <Button onSubmit={handleSubmit}>Submit</Button>
          </HStack>
          <HStack>
            <p>Results go here</p>
          </HStack>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
