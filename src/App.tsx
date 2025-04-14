import Header from "./components/header";
import HowToAccordion from "./components/HowToAccordion";
import { HeroUIProvider } from "@heroui/react";

function App() {
  return (
    <>
      <HeroUIProvider>
        <div className="flex flex-col min-h-screen p-6 bg-blue-50">
          <div className="bg-white rounded-2xl mx-auto w-11/12">
            <Header />
            <HowToAccordion />
          </div>
        </div>
      </HeroUIProvider>
    </>
  );
}

export default App;
