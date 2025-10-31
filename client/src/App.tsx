import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
// @ts-ignore
import WhatsAppButton from "react-whatsapp-button";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <a
  href="https://wa.me/5551998766944"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M12 2C6.486 2 2 6.486 2 12a9.94 9.94 0 001.64 5.437L2 22l4.686-1.622A9.94 9.94 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm.003 18a7.93 7.93 0 01-4.07-1.104l-.293-.173-2.791.966.93-2.856-.189-.3A7.953 7.953 0 014.06 12C4.06 7.589 7.589 4.06 12 4.06c4.411 0 7.94 3.529 7.94 7.94 0 4.411-3.529 7.94-7.937 7.94zm4.568-5.589c-.247-.123-1.464-.724-1.691-.805-.227-.082-.392-.123-.557.123-.164.247-.639.805-.782.97-.143.164-.288.185-.535.062-.247-.123-1.042-.384-1.985-1.225-.733-.654-1.228-1.462-1.372-1.709-.143-.247-.015-.381.108-.504.111-.111.247-.288.37-.432.123-.144.164-.247.247-.412.082-.164.041-.308-.021-.432-.062-.123-.557-1.342-.763-1.836-.2-.481-.403-.416-.557-.424l-.474-.008c-.164 0-.431.062-.657.308-.226.247-.863.844-.863 2.058 0 1.214.884 2.388 1.007 2.554.123.164 1.742 2.659 4.219 3.727.59.255 1.051.407 1.41.52.592.188 1.13.162 1.557.099.475-.071 1.464-.598 1.671-1.175.206-.577.206-1.071.144-1.175-.062-.103-.226-.165-.474-.288z" />
  </svg>
</a>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />

          {/* ✅ Botão fixo do WhatsApp (sempre visível) */}
          <div
            style={{
              position: "fixed",
              bottom: "50px",
              right: "50px",
              zIndex: 1000,
            }}
          >
            <WhatsAppButton
              phoneNumber="5511999999999"
              message="Olá! Gostaria de saber mais sobre os serviços da Flypi 🚀"
            />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
