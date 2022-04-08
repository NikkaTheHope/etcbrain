
const App = () => {
  const [item, setItem] = useState(1);
  return (
    <div className="App">
      <h1>Hey {item}</h1>
    </div>
  );
}

export default App;
