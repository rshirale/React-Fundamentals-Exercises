// Importing the React logo image
import logo from "./logo192.png";
// Importing the CSS file for styling
import "./App.css";

// Defining the main App component as a functional component
const App = () => {
  // Declaring a constant variable 'name' with the value "React"
  const name = "React";

  // Declaring a constant object 'facts' containing information about React
  const facts = {
    releaseDate: "May 2013",
    language: "JavaScript",
    license: "MIT",
  };

  // Defining a function 'aboutReact' that takes 'facts' as an argument
  // and returns a formatted string about React
  const aboutReact = (facts) =>
    `Release date: ${facts.releaseDate}. Language: ${facts.language}. License: ${facts.license}.`;

  // The component's JSX structure to be rendered
  return (
    <div className="container">
      {/* Displaying the React logo image */}
      <img src={logo} alt="React logo" />
      {/* Displaying the 'name' variable in an h1 tag */}
      <h1>{name}</h1>
      {/* Displaying facts about React using a function */}
      <p>{aboutReact(facts)}</p>
    </div>
  );
};

// Exporting the App component as the default export
export default App;
