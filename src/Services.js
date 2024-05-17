import './Main.css';
import FirstScreen from './components/FirstScreen';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import ServicesBlock from './components/Blocks/ServicesBlock';

function Services() {
  return (<div>
    <Header />
    <main id="main" className="container">
      <section className="first-screen">
        <FirstScreen />
      </section>
      <section className="content">
        <ServicesBlock title="Услуги" />
      </section>
    </main>
    <Footer />
  </div>);
}

export default Services;
