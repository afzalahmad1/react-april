import "./Chat.css";

function Chat() {
  function showAlert() {
    alert("Hi");
  }

  var name = "Avi";
  var flag = true;

  return (
    <div>
      <h1
        style={{
          color: flag ? "red" : "yellow",
          backgroundColor: "black",
          padding: "1rem",
        }}
      >
        {name}
      </h1>
      {flag ? (
        <>
          <h1>{name}</h1>
          <h2>Name is found</h2>
        </>
      ) : (
        <p>No Name</p>
      )}

      <button
        onClick={() => showAlert}
        onMouseDown={(e) => {
          console.log("Event", e);
        }}
      >
        Click Me
      </button>
      <br />
      <input onChange={(e) => console.log(e.target.value)} />
    </div>
  );
}

export default Chat;
