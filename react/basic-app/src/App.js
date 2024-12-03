import './App.css';
import Avatar from './components/Avatar.jsx';
import AvatarImage from './components/AvatarImage.jsx';
import AvatarImageList from './components/AvatarImageList.jsx';
import AvatarList from './components/AvatarList.jsx';

export default function App() {

  const imgList = [
    {"img" : "/images/people1.webp"},
    {"img" : "/images/people2.webp"},
    {"img" : "/images/people3.webp"}
    
  ];

  const avatarList = [
    {"img" : "/images/people1.webp", "name" : "smith"},
    {"img" : "/images/people2.webp", "name" : "james"},
    {"img" : "/images/people3.webp", "name" : "kelly"}

  ];


  // 배열 객체 만들때에는 return 위에서 정의해야함
{/* 컴포넌트를 사용할때는 태그형식으로 넣기 컴포넌트의 데이터는 사용하는 곳에서 넘긴다*/}
  return (
    <div className='App'>
      <div className='App-container'>
        <Avatar img="/images/people1.webp" name="smith" />
        <Avatar img="/images/people2.webp" name="james" />
        <Avatar img="/images/people3.webp" name="kelly" />
      </div>
      <div className='App-container'>
        <AvatarImage img="/images/people1.webp" /> 
        <AvatarImage img="/images/people2.webp" />
        <AvatarImage img="/images/people3.webp" />
      </div>
      <div className='App-container'>
        <AvatarImageList list = {imgList} />
      </div>
      <div className='App-container'>
        <AvatarList list = {avatarList} />
      </div>
    </div>
  );
}

