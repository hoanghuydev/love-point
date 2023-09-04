import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { privateRoutes, publicRoutes } from "./routes";
import { DefaultLayout } from "~/components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const RouteRender = (route, index) => {
    const Layout = route.layout || DefaultLayout;
    const Page = route.component;
    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Layout>
            <Page />
          </Layout>
        }
      />
    );
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => RouteRender(route, index))}
          {JSON.parse(localStorage.getItem("isLoggedIn")) &&
            privateRoutes.map((route, index) => RouteRender(route, index))}
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Router>
  );
}

export default App;
