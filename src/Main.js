import './Main.css';
import AboutUsBlock from './components/Blocks/AboutUsBlock';
import FirstScreen from './components/FirstScreen';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import PhotographerBlock from './components/Blocks/PhotographerBlock';
import ServicesBlock from './components/Blocks/ServicesBlock';

function Main() {
  return (<div>
    <Header />
    <main id="main" className="container">
      <section className="first-screen">
        <FirstScreen />
      </section>
      <section className="content">
        <AboutUsBlock title="Vivid Frames" />
        <PhotographerBlock title="Фотографы" />
        <ServicesBlock limit={3} title="Услуги" />
      </section>
      <a href="https://mrqz.me/6654542413078b0026ef08b0" className="help-us">Помогите нам стать лучше</a>
    </main>
    <Footer />
  </div>);
}

export default Main;
