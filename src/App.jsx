import Router from "./router/Router";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-100 dark:bg-slate-900 h-screen overflow-hidden relative flex items-start justify-between">
      <Navbar />
      <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
        <Header />
        <Router />
      </div>
    </div>
  );
}

export default App;
