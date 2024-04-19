import "./App.css";
import header from "./assets/Project.jpg";
import intro from "./assets/farm.png";
import footer from "./assets/logo.png"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={header} alt="img"></img>
        <div className="heading">
          <h1>Krishi Kaya</h1>
          <p className="SubHeading">~ Essence of Farming</p>
        </div>
      </header>
      <div className="main-body">
        <div className="intro">
             <div className="img_intro">
                 <img src={intro} alt="about"></img>
             </div>
             <div className="intro_cont">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magnam consectetur ipsam, ab aut optio inventore quam, quia porro voluptatum maiores suscipit, officia cumque totam et reprehenderit consequuntur tempore ipsum.
             </div>
        </div>
        <div className="movingtext">
          <div className="write">
            <span>Feature 1 Feature 2 </span>
          </div>
          <div className="write marquee2">
            <span>Feature 1 Feature 2 </span>
          </div>
        </div>
        <div className="features">
          <div className="f">
             <div className="f_img1"></div>
          </div>
          <div className="f fe">
          <div className="f_img2"></div>
          </div>
          <div className="f">
          <div className="f_img3"></div>
          </div>
          <div className="f fe">
          <div className="f_img4"></div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
      <div className="footer_content" alt="footer">
        <img src={footer} alt=""></img>
      </div>
    </div>
  );
}

export default App;
