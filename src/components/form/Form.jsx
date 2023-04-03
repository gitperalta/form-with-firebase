import items from "../../assets/items";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addResponse } from "../../assets/firestore/firestoreConection";

export default function Form() {
  const navigate = useNavigate();

  const [
    fullName,
    email,
    birthDate,
    countryOfOrigin,
    termsAndConditions,
    button,
  ] = items;

  const [error, setError] = useState({
    fullName: false,
    email: false,
    birthDate: false,
    countryOfOrigin: false,
    termsAndConditions: false,
  });

  const [input, setInput] = useState({
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "",
    terms_and_conditions: false,
  });

  const validate = (e) => {
    if (e.target.name === "birth_date" && e.target.value === "") {
      setError({
        ...error,
        birthDate: true,
      });
    } else if (e.target.name === "") {
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "terms_and_conditions") {
      setInput({ ...input, terms_and_conditions: !input.terms_and_conditions });
    } else {
      setInput({ ...input, [e.target.name]: e.target.value });
    }
    console.log(input);
    return validate(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    await addResponse("res", input);
    return navigate("/response");
  };

  return (
    <form
      className="box"
      onChange={(e) => handleChange(e)}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="field">
        <label className="label">{fullName.label}</label>
        <div className="control">
          <input className="input" type={fullName.type} name={fullName.name} />
        </div>
      </div>
      <div className="field">
        <label className="label">{email.label}</label>
        <div className="control">
          <input
            // className="input is-success"
            className="input"
            type={email.type}
            name={email.name}
          />
        </div>
        {!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g.test(
          input.email
        ) ? (
          <p className="help is-danger">This email is invalid</p>
        ) : (
          <p className="help is-success">This username is available</p>
        )}
      </div>
      <div className="field">
        <label className="label">{birthDate.label}</label>
        <div className="control">
          <input
            // className="input is-danger"
            className="input"
            type={birthDate.type}
            name={birthDate.name}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">{countryOfOrigin.label}</label>
        <div className="control">
          <div className="select">
            <select name={countryOfOrigin.name}>
              <option>Select dropdown</option>
              {countryOfOrigin.options.map((country) => (
                <option key={country.value}>{country.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input name="terms_and_conditions" type="checkbox" />
            {" " + termsAndConditions.label}
          </label>
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <input
            disabled={!input.terms_and_conditions}
            type={button.type}
            className="button is-link"
            value={button.label}
          />
        </div>
      </div>
    </form>
  );
}
