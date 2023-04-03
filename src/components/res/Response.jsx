import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { getResponse } from "../../assets/firestore/firestoreConection";

export default function () {
  const [response, setResponse] = useState([]);
  console.log(response);

  useEffect(() => {
    getResponse("res").then((res) => {
      setResponse(res);
    });
  }, []);

  return (
    <>
      <div className="box">
        {response.length > 0 &&
          response.map((doc, index) => (
            <div key={index} className="box">
              <p>{doc.email}</p>
              <p>{doc.full_name}</p>
              <p>{doc.birth_date}</p>
              <p>{doc.country_of_origin}</p>
            </div>
          ))}
      </div>
    </>
  );
}
