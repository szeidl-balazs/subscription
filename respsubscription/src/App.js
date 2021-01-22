
import './App.css';

function App() {
  function formStart() {
    const signUpForm = document.querySelector('.form-hide');
    signUpForm.style.visibility = 'visible';
  }

  function submitStart(e) {
    e.preventDefault();
    let inputs = document.querySelectorAll('input');
    let inputValues = '';
    for (const input of inputs) {
      inputValues += `
      ${input.getAttribute('id')}: ${input.value}
      `;
    }
    console.log(inputValues);
  }

  return (
    <div className="main-div">
      <div className="wrapper">
        <header>
          <h2>Join our community</h2>
          <h4 className="h4-header">30 day, hassle-free money back guarantee</h4>
          <h5>Gain access to our full library of tutorials along with expert code reviews.</h5>
          <h5>Perfect for any developers who are serious about honing their skills.</h5>        
        </header>
        <section className="first-section">
          <div className="subscript">
            <h4 className="h4-section">Monthly subscription</h4>
            <span className="price">$29 </span>
            <span>per month</span>
            <p>Full access for less than 1$  a day</p>
            <button id="signUp" className="tooltip" onClick={formStart}>Sign Up<span className="tooltiptext">Sign up now!</span></button>
          </div>
          <div className="whyus">
            <h4 className="h4-section">Why us</h4>
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
    <form className="form-hide">
      <input id="name" type="text" placeholder="name"/>
      <input id="date" type="date" placeholder="birthdate"/>
      <input id="address" type="text" placeholder="billing address"/>
      <button className="submit" onClick={submitStart}>submit</button>
    </form>
    </div>
  );

}


export default App;
