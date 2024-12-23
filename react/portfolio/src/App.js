import './css/style.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Logo from './components/header/Logo.jsx';
import MenuList from './components/header/MenuList.jsx';
import ToggleButton from './components/header/ToggleButton.jsx';
import Home from './components/content/Home.jsx';
// import About from './components/content/About.jsx';
import SectionWrap from './components/content/SectionWrap.jsx';
import Majors from './components/content/Majors.jsx';
import Jobs from './components/content/Jobs.jsx';
import Skills from './components/content/Skills.jsx';
import Coding from './components/content/Coding.jsx';
import Article from './components/content/Article.jsx';
import Categories from './components/content/Categories.jsx';
import Projects from './components/content/Projects.jsx';
import Testimonials from './components/content/Testimonials.jsx';
import Arrowup from './components/content/Arrowup.jsx';
import ContactLinks from './components/footer/ContactLinks.jsx';
import Top from './components/footer/Top.jsx';
import Bottom from './components/footer/Bottom.jsx';

export default function App() {
  return (
    <>
      <Header>
        <Logo
          img="images/favicon.ico"
          name="2eo" />
        <MenuList />
        <ToggleButton />
      </Header>
      <Content>
        <Home
          img="images/favicon.ico"
          name="2eo"
        />
        <SectionWrap
          id='about'
          title='About me'
          description='description!'>
          <Majors />
          <Jobs />
        </SectionWrap>
        <SectionWrap
          id='skill'
          title='My skills'
          description='skills!'>
          <Skills>
            <Coding />
            <Article type="Tools" />
            <Article type="Etc" />
          </Skills>
        </SectionWrap>
        <SectionWrap
          id='work'
          title='My Work'
          description='Projects!'>
          <Categories />
          <Projects />
        </SectionWrap>
        <SectionWrap
          id='testimonial'
          title='Testimonial'
          description='Testimonial!'>
          <Testimonials />
        </SectionWrap>
        <Arrowup />
      </Content>
      <Footer>
        <Top
          title="Let's talk"
          description="jeon.developer.judy@gmail.com" />
        <ContactLinks/>
        <Bottom/>
      </Footer>
    </>
  );
}
