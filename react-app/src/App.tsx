import ListGroup from "./components/ListGroup";

function App() {
  const items = ["paris", "new york", "san", "india", "US"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
