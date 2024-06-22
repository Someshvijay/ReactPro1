import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["paris", "new york", "san", "india", "US"];
  const handleOnClick = (item: string) => {
    console.log(item);
  };
  const [AlertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleOnClick} />
      {AlertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello World <span>Good Morning</span>
        </Alert>
      )}
      <Button
        color="secondary"
        onClickButton={() => {
          console.log("Clicked");
          setAlertVisibility(true);
        }}
      >
        This is my new Button
      </Button>
    </div>
  );
}

export default App;
