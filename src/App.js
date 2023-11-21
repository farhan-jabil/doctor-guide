import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import Home from "./pages/Home";
import Container from "./components/layout/Container/Container";

function App() {
  const customStyles = {
    backgroundColor: '#FF8B42',
    color: '#FFFFFF',
    borderRadius: '27px',
    padding: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <>
      <ScrollToTop smooth style={customStyles} component={<i className="fa-solid fa-chevron-up"></i>}/>
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
