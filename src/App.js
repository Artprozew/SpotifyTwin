import './App.css';
import "./styles/reset.css"
import "./styles/vars.css"
import Header from './Header/Header';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <div className="main-container">
        <Header></Header>
        <Sidebar></Sidebar>
        <main>
          <Main></Main>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
