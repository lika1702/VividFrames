import './Main.css';
import PortfolioBlock from './components/Blocks/PortfolioBlock';
import FirstScreen from './components/FirstScreen';
import Footer from './components/Footer';
import Header from './components/Header/Header';

function Portfolio() {
  return (<div>
    <Header />
    <main id="main" className="container">
      <section className="first-screen">
        <FirstScreen />
      </section>
      <section className="content">
        <PortfolioBlock title="Портфолио"/>
      </section>
    </main>
    <Footer />
  </div>);
}

export default Portfolio;
