import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const ResponseTime = lazy(() => import("./pages/ResponseTime"));
const UserSatisfaction = lazy(() => import("./pages/UserSatisfaction"));
const UsageStatistics = lazy(() => import("./pages/UsageStatistics"));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <Link to="/admin/dashboard">
                  <button>Visit Dashboard</button>
                </Link>
              }
            />

            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/ResponseTime" element={<ResponseTime />} />
            <Route
              path="/admin/UserSatisfaction"
              element={<UserSatisfaction />}
            />
            <Route
              path="/admin/chart/UsageStatistics"
              element={<UsageStatistics />}
            />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
