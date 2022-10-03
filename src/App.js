import Hero from './hero';
import Content from './content';
import Contact from './contact';
import Footer from './footer';
import {signInWithGoogle} from './firebase';

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="content">
        <Content />
        <Contact />
        <Footer />
      </div>
    </div>
    
  );
}

export default App;
