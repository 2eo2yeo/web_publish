import './css/style.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Logo from './components/header/Logo.jsx';
import MenuList from './components/header/MenuList.jsx';
import ToggleButton from './components/header/ToggleButton.jsx';
import Home from './components/content/Home.jsx';
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


  const sectionList = [
    {
      "id": "about",
      "title": "About me",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus, temporibus perspiciatis repudiandae nostrum modi doloremque expedita non eius ipsum! Beatae porro adipisci omnis architecto dignissimos. Iusto ipsa inventore adipisci.",
      "children": [
        { "component": "Majors" },
        { "component": "Jobs" }
      ]
    },
    {
      "id": "skill",
      "title": "My Skills",
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis beatae, aliquid ratione commodi nam ex voluptate rem eveniet cupiditate optio natus? Cum, harum eum sint id quod nulla adipisci. Sunt?",
      "children": [
        {
          "component": "Skills",
          "children": [
            { "component": "Coding" },
            { "component": "Article", "props": { "type": "Tools" } },
            { "component": "Article", "props": { "type": "Etc" } }
          ]
        }
      ]
    },
    {
      "id": "work",
      "title": "My work",
      "description": "Projects",
      "children": [
        { "component": "Categories" },
        { "component": "Projects" }
      ]
    },
    {
      "id": "testimonial",
      "title": "Testimonial",
      "description": "See what they say about me",
      "children": [
        { "component": "Testimonials" }
      ]
    }
  ];

  const componentMap = {
    Majors,
    Jobs,
    Skills,
    Coding,
    Article,
    Categories,
    Projects,
    Testimonials
  };
//값만 넣어도 리턴형태는 {"Testimonials":Testimonials} 라는 키값쌍으로 attribute가 자동으로 생성됨!! 


  //자식 컴포넌트 렌더링 : 재귀함수 로직 -> 자식이 없을때까지 계속 호출하는 형식
  const renderComponent = (childObj) => {   //{ "component": "Testimonials" }라는 하나의 객체를 childObj 라는 이름으로 하나하나 받음
    const Component = componentMap[childObj.component]; // 이름이 일치하는(매번달라지는) 컴포넌트의 주소값을 가지고옴
    if (!Component) return null;   //일치하지 않으면  null을 리턴

    return (
      /* 여기의 Component 컴포넌트는 위에서 이름이 일치한 하나의 컴포넌트를 가져옴 예를들어 Testimonials를 가져온다면 컴포넌트 컴포넌트는 Testimonials 컴포넌트라는 말 */
                                                  /* childObj(ex. Testimonials)에 props가 있다면 그 곳의 객체(json) 값을 문자열로 바꿔서 가져온다.  */
                                                  /* json을 문자열로 만들어서 props를 넣어줌, 스프레드 연산자 이용해서 기존꺼에 계속 추가 + 해줌 */
      <Component key={childObj.component + JSON.stringify(childObj.props || {})} {...(childObj.props || {})}>
        {childObj.children && childObj.children.map((childObj) => renderComponent(childObj))}
        {/*Testimonials의 컴포넌트의 자식이 있다면 ~ map을 또 돌림 */}
      </Component>
    );
  };



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


        {sectionList && sectionList.map((section) => (
          <SectionWrap
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
          >
            {section.children.map((child) => renderComponent(child))}   
          {/* 여기의 children은 위 객체에있는 칠드런, 차일드는 객체의 컴포넌트 자식 하나하나, sectionList의 칠드런객체를 맵을 이용해서 돌리는 것임 */}
          </SectionWrap>
        ))}


        <Arrowup />
      </Content>
      <Footer>
        <Top
          title="Let's talk"
          description="jeon.developer.judy@gmail.com" />
        <ContactLinks />
        <Bottom />
      </Footer>
    </>
  );
}
