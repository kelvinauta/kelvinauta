import React from "react";
import { Box, Button, Flex, Heading, ThemeProvider } from "theme-ui";
import Layout from "../components/layout";
import Seo from '../components/seo';
import theme from "../gatsby-plugin-theme-ui";
const Index = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
    <Layout>
      <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>My Portfolio</h1>
      <Box p={4} bg="highlight">
  <Flex
    sx={{
      alignItems: 'center',
    }}>
    <Heading>Components</Heading>
    <Button ml="auto">Beep</Button>
  </Flex>
</Box>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          alignItems: 'space-between',
          padding: 0
        }}
      >
        
      </ul>
    </Layout>
    </ThemeProvider>
  );
};

export default Index;

