import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { EducationSection } from './components/EducationSetion';
import { Header } from './components/Header';
import { MainSection } from './components/MainSection';
import { ProjectsSection } from './components/ProjectsSection';

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-7xl px-32 mx-auto">
        <MainSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
