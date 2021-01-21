import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main-div">
      <div className="wrapper">
        <header>
          <h1>Join our community</h1>
          <h2>30 day, hassle-free money back guarantee</h2>
          <h3>Gain access to our full library of tutorials along with expert code reviews.</h3>
          <h3>Perfect for any developerswho are serious about honing their skills.</h3>        
        </header>
        <section className="first-section">
          <div className="subscript">
            <h4>Monthly subscription</h4>
            <span className="price">$29</span>
            <span>per month</span>
            <p>Full access for less than 1$  a day</p>
            <button>Sign Up</button>
          </div>
          <div className="whyus">
            <h4>Why us</h4>
            <p>Tutorials by industry experts</p>
            <p>Peer & expert code review</p>
            <p>Coding expercises</p>
            <p>Access to our GitHub repos</p>
            <p>Community forum</p>
            <p>Flashcard decks</p>
            <p>New videos every week</p>
          </div>
        </section>
      </div> 
    </div>
  );
}

export default App;
