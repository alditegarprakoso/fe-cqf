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
        <Route
          path="/calendar"
          element={
            <DefaultLayout>
              <PageTitle title="Calendar | Cinta Qur'an Foundation" />
              <Calendar />
            </DefaultLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <DefaultLayout>
              <PageTitle title="Profile | Cinta Qur'an Foundation" />
              <Profile />
            </DefaultLayout>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <DefaultLayout>
              <PageTitle title="Form Elements | Cinta Qur'an Foundation" />
              <FormElements />
            </DefaultLayout>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <DefaultLayout>
              <PageTitle title="Form Layout | Cinta Qur'an Foundation" />
              <FormLayout />
            </DefaultLayout>
          }
        />
        <Route
          path="/tables"
          element={
            <DefaultLayout>
              <PageTitle title="Tables | Cinta Qur'an Foundation" />
              <Tables />
            </DefaultLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <DefaultLayout>
              <PageTitle title="Settings | Cinta Qur'an Foundation" />
              <Settings />
            </DefaultLayout>
          }
        />
        <Route
          path="/chart"
          element={
            <DefaultLayout>
              <PageTitle title="Basic Chart | Cinta Qur'an Foundation" />
              <Chart />
            </DefaultLayout>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <DefaultLayout>
              <PageTitle title="Alerts | Cinta Qur'an Foundation" />
              <Alerts />
            </DefaultLayout>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <DefaultLayout>
              <PageTitle title="Buttons | Cinta Qur'an Foundation" />
              <Buttons />
            </DefaultLayout>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <DefaultLayout>
              <PageTitle title="Signin | Cinta Qur'an Foundation" />
              <SignIn />
            </DefaultLayout>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <DefaultLayout>
              <PageTitle title="Signup | Cinta Qur'an Foundation" />
              <SignUp />
            </DefaultLayout>
          }
        />
      </Route>
      {/* Protected Route */}
    </Routes>
  );
}

export default App;
