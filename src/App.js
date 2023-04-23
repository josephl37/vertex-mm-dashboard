import Header from "./components/header";
import TopDashboard from "./components/top-dashboard";

function App() {
  return (
    <div className="mt-10 lg:w-5/6 sm:w-full lg:mx-auto">
      <Header/>
      <div>
        <TopDashboard />
      </div>
    </div>
  );
}

export default App;
