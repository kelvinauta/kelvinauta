const theme = {
  
    colors: {
        text: "#121212",
        background: "#292929",
        primary: "#639",
        secondary: "#ff6347",
        white: "#fff",
    },
    links: {
        nav: {
          px: 2,
          py: 1,
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
        }
      },
    fonts: {
        base: "Poppins",
        secondary: "Poppins",
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
    },
    lineHeights: {
        normal: 1.5,
        medium: 1.4,
    },
    fontSizes: {
        xs: 12,
        sm: 16,
        md: 32,
        lg: 48,
        xl: 64,
    },
    letterSpacings: {
        normal: "0",
        wide: "0.25em",
    },
    space: [0, 8, 16, 32, 64],
    breakpoints: ["768px", "1025px"],
    buttons: {
        primary: {
            color: "white",
            bg: "primary",
            "&:hover": {
                color: "primary",
                bg: "white",
            },
        },
        secondary: {
            color: "text",
            bg: "secondary",
            "&:hover": {
                color: "secondary",
                bg: "text",
            },
        },
    }
}
export default theme