import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";
import "./my.css";

function App() {
  console.log(puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((puppy) => puppy.id === featPupId);
  console.log(`Featured puppy: ${featuredPup}`);

  return (
    <>
      <div id="main">
        <div>
          {puppies.map((puppy) => {
            return (
              <p
                onClick={() => {
                  setFeatPupId(puppy.id);
                }}
                key={puppy.id}
              >
                {puppy.name}
              </p>
            );
          })}
        </div>
        <div>
          {featPupId && (
            <div>
              <h2>{featuredPup.name}</h2>
              <ul>
                <li>Age: {featuredPup.age}</li>
                <li>Email: {featuredPup.email}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
