
import "./index.css"
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Hero from "./components/Hero";
import Content from "./components/Content";
import data from "./data";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  const card = data.map((item) => {
    return (
      <Content
        key={item.id}
        img={item.img}
        info={item.info}
        price={item.price}
      />
    )
  })
  return (
    <div className="app">
      <Navbar />
      <Hero  />
      <Body />

      <div className="content-list">
        <div className="our-sale">Our Sale</div>
        <div className="card-container">{card}</div>
      </div>
      <Contact  />
      <Footer />
    </div>
  );
}

export default App;
