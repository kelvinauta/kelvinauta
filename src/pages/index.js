import { GatsbyImage } from "gatsby-plugin-image";
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
    
  <Flex
    sx={{
      alignItems: 'center',
    }}>
      <img src="https://i.ytimg.com/vi/8O20G2aX5W0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATrFDL22NTZ0ASDeAiFNottQlLyQ" />
  </Flex>

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

