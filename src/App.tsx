import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";

import Loader from "./components/Loader";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { fetchData } from "../src/actions/dataResponseAction";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const ResponseTime = lazy(() => import("./pages/ResponseTime"));
const UserSatisfaction = lazy(() => import("./pages/UserSatisfaction"));
const UsageStatistics = lazy(() => import("./pages/UsageStatistics"));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
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
              path="/admin/UsageStatistics"
              element={<UsageStatistics />}
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
