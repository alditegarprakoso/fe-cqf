import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Dashboard from './pages/Dashboard/Dashboard';
import DefaultLayout from './layout/DefaultLayout';
import ProtectedRoute from './routes/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import NavigationBar from './layout/Navbar';
import Donation from './pages/Donatioin/Donation';
import FormDonation from './pages/Donatioin/FormDonation';
import Donatur from './pages/Donatur/Donatur';
import FormDonatur from './pages/Donatur/FormDonatur';
import CategoryDonation from './pages/Donatioin/Category/CategoryDonation';
import FormCategoryDonation from './pages/Donatioin/Category/FormCategoryDonation';

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
        {/* Donation Route */}
        <Route
          path="/dashboard/donation"
          element={
            <DefaultLayout>
              <PageTitle title="Daftar Donasi | Cinta Qur'an Foundation" />
              <Donation />
            </DefaultLayout>
          }
        />
        <Route
          path="/dashboard/donation/add"
          element={
            <DefaultLayout>
              <PageTitle title="Buat Donasi Baru | Cinta Qur'an Foundation" />
              <FormDonation />
            </DefaultLayout>
          }
        />
        <Route
          path="/dashboard/donation/edit/:id"
          element={
            <DefaultLayout>
              <PageTitle title="Edit Donasi | Cinta Qur'an Foundation" />
              <FormDonation isEdit={true} />
            </DefaultLayout>
          }
        />
        {/* Donation Route */}

        {/* Donatur Route */}
        <Route
          path="/dashboard/donation/list"
          element={
            <DefaultLayout>
              <PageTitle title="Daftar Donatur | Cinta Qur'an Foundation" />
              <Donatur />
            </DefaultLayout>
          }
        />

        <Route
          path="/dashboard/donation/list/add"
          element={
            <DefaultLayout>
              <PageTitle title="Tambah Donatur | Cinta Qur'an Foundation" />
              <FormDonatur />
            </DefaultLayout>
          }
        />

        <Route
          path="/dashboard/donation/list/edit/:id"
          element={
            <DefaultLayout>
              <PageTitle title="Edit Donatur | Cinta Qur'an Foundation" />
              <FormDonatur isEdit={true} />
            </DefaultLayout>
          }
        />
        {/* Donatur Route */}

        {/* Category Donation */}
        <Route
          path="/dashboard/donation/category"
          element={
            <DefaultLayout>
              <PageTitle title="Daftar Kategori Donasi | Cinta Qur'an Foundation" />
              <CategoryDonation />
            </DefaultLayout>
          }
        />

        <Route
          path="/dashboard/donation/category/add"
          element={
            <DefaultLayout>
              <PageTitle title="Tambah Kategori Donasi | Cinta Qur'an Foundation" />
              <FormCategoryDonation />
            </DefaultLayout>
          }
        />

        <Route
          path="/dashboard/donation/category/edit/:id"
          element={
            <DefaultLayout>
              <PageTitle title="Edit Donatur | Cinta Qur'an Foundation" />
              <FormCategoryDonation isEdit={true} />
            </DefaultLayout>
          }
        />
        {/* Category Donation */}
      </Route>
      {/* Protected Route */}
    </Routes>
  );
}

export default App;
