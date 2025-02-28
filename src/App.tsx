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
import ProgramPage from './pages/Program/ProgramPage';
import FormProgam from './pages/Program/FormProgram';
import KajianPage from './pages/Kajian/KajianPage';
import CategoryKajian from './pages/Kajian/Category/CategoryKajian';
import FormCategoryKajian from './pages/Kajian/Category/FormCategoryKajian';
import FormKajian from './pages/Kajian/FormKajian';
import GroupPage from './pages/Group/GroupPage';
import FormGroup from './pages/Group/FormGroup';
import UsersPage from './pages/Users/UsersPage';
import FormUsers from './pages/Users/FormUsers';

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
      <Route
        path="/login"
        element={
          <>
            <NavigationBar />
            <Login />
          </>
        }
      />

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
          path="/dashboard/donation/edit/:donationId"
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
          path="/dashboard/donation/category/edit/:categoryId"
          element={
            <DefaultLayout>
              <PageTitle title="Edit Donatur | Cinta Qur'an Foundation" />
              <FormCategoryDonation isEdit={true} />
            </DefaultLayout>
          }
        />
        {/* Category Donation */}

        {/* Program */}
        <Route
          path="/dashboard/program"
          element={
            <DefaultLayout>
              <PageTitle title="Daftar Program | Cinta Qur'an Foundation" />
              <ProgramPage />
            </DefaultLayout>
          }
        />

        <Route
          path="/dashboard/program/add"
          element={
            <DefaultLayout>
              <PageTitle title="Tambah Program | Cinta Qur'an Foundation" />
              <FormProgam />
            </DefaultLayout>
          }
        />

        <Route
          path="/dashboard/program/edit/:programId"
          element={
            <DefaultLayout>
              <PageTitle title="Edit Program | Cinta Qur'an Foundation" />
              <FormProgam isEdit={true} />
            </DefaultLayout>
          }
        />
        {/* Program */}

        {/* Kajian */}
        <Route
          path="/dashboard/kajian"
          element={
            <DefaultLayout>
              <PageTitle title="Daftar Kajian | Cinta Qur'an Foundation" />
              <KajianPage />
            </DefaultLayout>
          }
        />

        <Route
          path="/dashboard/kajian/add"
          element={
            <DefaultLayout>
              <PageTitle title="Tambah Kajian | Cinta Qur'an Foundation" />
              <FormKajian />
            </DefaultLayout>
          }
        />

        <Route
          path="/dashboard/kajian/edit/:id"
          element={
            <DefaultLayout>
              <PageTitle title="Edit Kajian | Cinta Qur'an Foundation" />
              <FormKajian isEdit={true} />
            </DefaultLayout>
          }
        />
        {/* Kajian */}

        {/* Category Kajian */}
        <Route
          path="/dashboard/kajian/category"
          element={
            <DefaultLayout>
              <PageTitle title="Daftar Kategori Kajian | Cinta Qur'an Foundation" />
              <CategoryKajian />
            </DefaultLayout>
          }
        />

        <Route
          path="/dashboard/kajian/category/add"
          element={
            <DefaultLayout>
              <PageTitle title="Tambah Kategori Kajian | Cinta Qur'an Foundation" />
              <FormCategoryKajian />
            </DefaultLayout>
          }
        />

        <Route
          path="/dashboard/kajian/category/edit/:id"
          element={
            <DefaultLayout>
              <PageTitle title="Edit Kategori Kajian | Cinta Qur'an Foundation" />
              <FormCategoryKajian isEdit={true} />
            </DefaultLayout>
          }
        />
        {/* Category Kajian */}

        {/* Group */}
        <Route
          path="/dashboard/group"
          element={
            <DefaultLayout>
              <PageTitle title="Daftar Group | Cinta Qur'an Foundation" />
              <GroupPage />
            </DefaultLayout>
          }
        />

        <Route
          path="/dashboard/group/add"
          element={
            <DefaultLayout>
              <PageTitle title="Tambah Group | Cinta Qur'an Foundation" />
              <FormGroup />
            </DefaultLayout>
          }
        />

        <Route
          path="/dashboard/group/edit/:groupId"
          element={
            <DefaultLayout>
              <PageTitle title="Edit Group | Cinta Qur'an Foundation" />
              <FormGroup isEdit={true} />
            </DefaultLayout>
          }
        />
        {/* Group */}

        {/* Users */}
        <Route
          path="/dashboard/users"
          element={
            <DefaultLayout>
              <PageTitle title="Daftar Pengguna | Cinta Qur'an Foundation" />
              <UsersPage />
            </DefaultLayout>
          }
        />

        <Route
          path="/dashboard/users/add"
          element={
            <DefaultLayout>
              <PageTitle title="Tambah Pengguna | Cinta Qur'an Foundation" />
              <FormUsers />
            </DefaultLayout>
          }
        />

        <Route
          path="/dashboard/users/edit/:userId"
          element={
            <DefaultLayout>
              <PageTitle title="Edit Pengguna | Cinta Qur'an Foundation" />
              <FormUsers isEdit={true} />
            </DefaultLayout>
          }
        />
        {/* Users */}
      </Route>
      {/* Protected Route */}
    </Routes>
  );
}

export default App;
