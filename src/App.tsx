import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import Dashboard from './pages/Dashboard/Dashboard';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import ProtectedRoute from './routes/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import NavigationBar from './layout/Navbar';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavigationBar />
            <Home />
          </>
        }
      />
      <Route path="/login" element={<Login />} />

      {/* Protected Route */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route
          path="/dashboard"
          element={
            <DefaultLayout>
              <PageTitle title="Dashboard | Cinta Qur'an Foundation" />
              <Dashboard />
            </DefaultLayout>
          }
        />
      </Route>
      {/* Protected Route */}
    </Routes>
  );
}

export default App;
