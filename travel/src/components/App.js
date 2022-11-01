import Header from "./Header";
import MediaCard from "./MediaCard";
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <section className="flex wrap card">
          <MediaCard />
        </section>
      </div>
    </>
  );
}

export default App;
