// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./Components/Redux/Store";
import MyNavBar from "./Components/MyNavbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import MainSection from "./Components/MainSection";
import PlayerSection from "./Components/PlayerSection";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container>
          <Row>
            <MyNavBar />
            <MainSection />
            <PlayerSection />
          </Row>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
