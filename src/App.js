import "./App.css";
import Card from "./components/Card/Card.js";
import NewChat from "./components/NewChat";
import dog from "./assets/dog.jpeg";
import messages from "./messagesData";
import CustomButton from "./components/CustomButton";
import SimpleComponent from "./components/SimpleComponent";
import Counter from "./components/Counter";
import EmailState from "./components/EmailState";
import FetchingData from "./components/FetchingData";
import NewCard from "./components/NewCard";
import ModuleStyleComponent from "./components/ModuleStyle";
import LocalStorageComponent from "./components/LocalStorage";

function App() {
  function onClick1() {
    alert("1");
  }

  function onClick2() {
    alert("2");
  }

  return (
    <>
     <LocalStorageComponent />
     {/*  <NewCard />
      <ModuleStyleComponent />
  <NewChat /> */}
       <FetchingData />
      {/* <EmailState /> */}
      {/* <Counter /> */}
      {/* <SimpleComponent text="This is text" /> */}
      {/* <CustomButton myText={"Click Me"} onClickFnc={onClick1} myClass={"btn"} />
      <CustomButton
        myText={"Click Me 2"}
        onClickFnc={onClick2}
        myClass={"outlined-btn"}
      /> */}

      {/* {messages.map((item) => {
        return (
          <NewChat name={item.sender} time={item.time} text={item.message} />
        );
      })} */}

      {/* {messages.map((item) => (
        <NewChat name={item.sender} time={item.time} text={item.message} />
      ))} */}

      {/* {messages.map((item) => {})} you need to write return  */}
      {/* {messages.map((item) => ())} no need to write return  */}

      {/* <Card
        name={"Shri Ram"}
        desc={"Shri Ram is a student at Acciojob in 2023 in F3"}
      />
      <Card
        name={"Avi Vashishta"}  
        desc={"Avi is a student at Acciojob in 2023 in F3"}
      />
      <Card
        name={"Rodriguez"}
        desc={"Rodriguez is a student at Acciojob in 2023 in F3"}
      /> */}
      {/* <button class="ui button">Click Me</button> */}
      {/* <img
        width="400"
        src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRPMKnq00NF_T7RusUNeLrSazRZM0S5O8_AOcw2iBTmYTxd3Q7uXf0sW41odpAKqSblKDMUMHGb8nZRo9g"
      />
      <img width="400" src={dog} /> */}
    </>
  );
}

export default App;
