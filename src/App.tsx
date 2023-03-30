import "./App.css";
import { Brand, CTA, Navbar } from "./components";
import { Blog, Features, Footer, Header, WhatGPT3 } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
