import { createTheme, ThemeProvider } from "@mui/material/styles";
// components
import Header from "./Header";
import Footer from "./Footer";
// mui font config
const theme = createTheme({
  typography: {
    fontFamily: ["Comfortaa", "M PLUS Rounded 1c", "Nunito"].join(","),
    fontSize: 15,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 800,
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;