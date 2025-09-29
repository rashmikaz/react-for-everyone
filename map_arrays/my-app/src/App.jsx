import "./App.css";

// Array of country objects (data we want to display)
const countries = [
  { name: "Finland", city: "Helsinki" },
  { name: "Sweden", city: "Stockholm" },
  { name: "Denmark", city: "Copenhagen" },
  { name: "Norway", city: "Oslo" },
  { name: "Iceland", city: "Reykjavík" },
];

// Country component (shows a single country and its capital city)
// We use props destructuring to directly extract 'name' and 'city'
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      {/* Display the country name */}
      <h1>{name}</h1>
      {/* Display the capital city */}
      <small>{city}</small>
    </div>
  );
};

// Countries component (loops through the whole countries array)
// It maps over the array and creates a <Country /> component for each item
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    // 'key' is required by React to uniquely identify each item
    <Country key={country.name} country={country} />
  ));
  // Return all the country components inside a div
  return <div>{countryList}</div>;
};

// Main App component (the root of our React app)
function App() {
  return (
    <div className="app">
      <div>
        {/* Page title */}
        <h1>Countries List</h1>
        {/* Pass the countries data to the Countries component */}
        <Countries countries={countries} />
      </div>
    </div>
  );
}

// Export the App component so it can be rendered in index.js
export default App;
