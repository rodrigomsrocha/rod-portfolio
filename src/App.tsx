import { AboutSection } from './components/AboutSection';
import { Header } from './components/Header';
import { MainSection } from './components/MainSection';

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-7xl px-32 mx-auto">
        <MainSection />
        <AboutSection />
      </div>
    </div>
  );
}

export default App;
