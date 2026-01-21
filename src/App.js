import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [intrest, setIntrest] = useState([]);
  const [color, setColor] = useState("");
  const [formData, setFormData] = useState(false);

  const formHandle = (event) => {
    event.preventDefault();
    if (name && address && gender && intrest && color) {
      setFormData(true);
    }

    // console.log(name);
    // console.log(address);
    // console.log(gender);
    // console.log(intrest);
    // console.log(color);
  };
  const intrestHandle = (event) => {
    let value = event.target.value;
    if (event.target.value) {
      setIntrest([...intrest, value]);
    } else {
      setIntrest(intrest.filter((intrest) => intrest !== value));
    }
  };

  return (
    <main className="App px-4 py-4">
      <h1>User Profile Form</h1>
      <form action="" onSubmit={formHandle}>
        <label htmlFor="userName">Name: </label>
        <input
          type="text"
          id="userName"
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor="userAddress">Address: </label>
        <br />
        <textarea
          name=""
          id="userAddress"
          onChange={(event) => setAddress(event.target.value)}
        ></textarea>
        <br />
        <br />
        <label htmlFor="userGender">Gender: </label>
        <br />
        <input
          type="radio"
          value="Female"
          name="userGender"
          onChange={(event) => setGender(event.target.value)}
        />
        Female
        <br />
        <input
          type="radio"
          value="Male"
          name="userGender"
          onChange={(event) => setGender(event.target.value)}
        />
        Male
        <br />
        <input
          type="radio"
          value="Other"
          name="userGender"
          onChange={(event) => setGender(event.target.value)}
        />
        Other
        <br />
        <br />
        <label htmlFor="userIntrest">Intrest: </label>
        <br />
        <input type="checkbox" value="Reading" onChange={intrestHandle} />
        Reading
        <br />
        <input type="checkbox" value="Singing" onChange={intrestHandle} />
        Singing
        <br />
        <input type="checkbox" value="Panting" onChange={intrestHandle} />
        Panting
        <br />
        <br />
        <label htmlFor="favColor">Favorite Color: </label>
        <select
          name=""
          id="favColor"
          onChange={(event) => setColor(event.target.value)}
        >
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Orange">Orange</option>
        </select>
        <br />
        <br />
        <button className="" type="submit">
          Submit
        </button>
      </form>

      {formData && (
        <div className="pt-4">
          <h2>Submitted Details</h2>
          <p>Name: {name}</p>
          <p>Address: {address}</p>
          <p>Gender: {gender}</p>
          <p>Intrest: {intrest.join(", ")}</p>
          <p>Favorite Color: {color}</p>
          <p></p>
        </div>
      )}
    </main>
  );
}
