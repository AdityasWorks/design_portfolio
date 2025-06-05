import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import PlaySection from './components/PlaySection';
import InfoSection from './components/InfoSection';
import ResumeSection from './components/ResumeSection';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <Navbar />
        <main>
          <Hero />
          <section id="work" className="py-20">
            <WorkSection />
          </section>
          <section id="play" className="py-20 ">
            <PlaySection />
          </section>
          <section id="info" className="py-20">
            <InfoSection />
          </section>
          <section id="resume" className="py-20 ">
            <ResumeSection />
          </section>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;