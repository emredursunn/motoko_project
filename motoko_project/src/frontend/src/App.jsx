import { useState } from "react";
import { backend } from "declarations/backend";

function App() {
  const [greeting, setGreeting] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const greetingMessage = await backend.greet(name);
    setGreeting(greetingMessage);
  };

  return (
    <main>
      <img src="/logo2.svg" alt="logo" className="logo" />
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" placeholder="Your Name" />
        <button className="submit" type="submit">
          Say Hello!
        </button>
      </form>
      {greeting && <section id="greeting">{greeting}</section>}
    </main>
  );
}

export default App;
