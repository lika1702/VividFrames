import './Main.css';
import ContactsBlock from './components/Blocks/ContactsBlock';
import FirstScreen from './components/FirstScreen';
import Footer from './components/Footer';
import Header from './components/Header/Header';

function Contacts() {
    return (<div>
        <Header />
        <main id="main" className="container">
            <section className="first-screen">
                <FirstScreen />
            </section>
            <section className="content">
                <ContactsBlock title="Контакты" />
            </section>
        </main>
        <Footer />
    </div>);
}

export default Contacts;
