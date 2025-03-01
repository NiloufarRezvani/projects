
import './App.css';
import LayOut from './components/LayOut';
import Header from './components/header/header';
import Navbar from './components/header/Navbar';
import Title from './components/Title';
import InputBox from './components/InputBox';
import MiddleContainer from './components/MiddleContainer';
import Interduction from './components/cardcomponent/Interduction';
import PopularCard from './components/PopualrCards/PopularCard';
import CommentCards from './components/commentCard/CommentCards'
import Help from './components/help';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <LayOut>
      <Header>
        <Navbar>

        </Navbar>
      </Header>
      
      <Title></Title>
      <div className='main-container'>
      <InputBox></InputBox>
      </div>
      <div className='main-container'>
      <MiddleContainer></MiddleContainer>
      </div>
      <Interduction></Interduction>
      <PopularCard></PopularCard>
      <CommentCards></CommentCards>
      <Help></Help>
      <Footer></Footer>
      
      
     
      
    </LayOut>
    </>
  );
}

export default App;
