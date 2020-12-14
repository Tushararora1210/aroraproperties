import Header from "./header";
import Imagesection from "./Homeimage";
import Whatsappcontact from "./whatsappcontact";
import Card from "./card";
import founderimg from "./static/founder.jpg";
import Footer from "./footer";
import "./style.css";

function App() {

  return (
    <div className="App">
      <Header/>
      <Imagesection/>
  <Card name="YASHPAL ARORA" designation="CEO and FOUNDER at Aroraproperties" image={founderimg} description="Yashpal Arora is the name amongst those who has an experience of more than 17 years in real estate market and he has a a very big list of satisifed and happy customers in his profession.His dream is to provide a living stay to every person in india." />
      <Footer/>
      <Whatsappcontact/>

            {/* This is a comment */}
      
     </div>
  );
}

export default App;
