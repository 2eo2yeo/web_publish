import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Logo from'./components/header/Logo.jsx';
import MenuList from'./components/header/MenuList.jsx';
import ToggleButton from'./components/header/ToggleButton.jsx';
import './css/style.css';

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <MenuList />
        <ToggleButton />
      </Header>
      <Content>
      </Content>
      <Footer>
      </Footer>
    </>
  );
}
