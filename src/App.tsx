import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';
import { ChatWidget } from '@/components/chatbot/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {/* AI Chatbot */}
      <ChatWidget />
    </div>
  );
}

export default App;
