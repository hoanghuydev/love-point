import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { privateRoutes, publicRoutes } from "./routes";
import { DefaultLayout } from "~/components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page404 from "./components/Page404";
import NoFooterLayout from "./components/Layout/NoFooterLayout";

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
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => RouteRender(route, index))}
        {JSON.parse(localStorage.getItem("isLoggedIn")) &&
          privateRoutes.map((route, index) => RouteRender(route, index))}
        <Route
          path="/*"
          element={
            <NoFooterLayout>
              <Page404 />
            </NoFooterLayout>
          }
        />
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
  );
}

export default App;
