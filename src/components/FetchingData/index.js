import React, { useState } from "react";

function FetchingData() {
  const [quote, setQuote] = useState("");
  const [id, setId] = useState("");
  const [author, setAuthor] = useState("");

  function fetchData() {
    fetch(`https://dummyjson.com/quotes/random`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Quote", data);
        setId(data.id);
        setAuthor(data.author);
        setQuote(data.quote);
      });
  }

  //   async function fetchData() {
  //     const res = await fetch("https://dummyjson.com/quotes/1");
  //     const data = await res.json();
  //     if (data) {
  //       setQuote(data);
  //       console.log("Quote", data);
  //     }
  //   }

  return (
    <div>
      <h1>Fetching Data</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <h1>{id}</h1>
      <h1>{quote}</h1>
      <h1>{author}</h1>
    </div>
  );
}

export default FetchingData;
