import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { styled } from "styled-components";

function App() {
  return (
    <div className="App">
      <Header />
      <S.FlexBox>
        <Sidebar />
        <Outlet />
      </S.FlexBox>
    </div>
  );
}

export default App;

const FlexBox = styled.div`
  display: flex;
`;

const S = {
  FlexBox,
}