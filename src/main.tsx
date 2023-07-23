import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/dashbord/Dashboard.tsx';
import Team from './pages/team/Team.tsx';
import Contacts from './pages/contacts/Contacts.tsx';
import Invoices from './pages/invoices/Invoices.tsx';
import Form from './pages/form/Form.tsx';
import FAQ from './pages/faq/FAQ.tsx';
import Calendar from './pages/calendar/Calendar.tsx';
import BarChart from './pages/barChart/BarChart.tsx';
import PieChart from './pages/pieChart/PieChart.tsx';
import LineChart from './pages/lineChart/LineChart.tsx';
import Geography from './pages/geography/Geography.tsx';
import NotFound from './pages/notFound/NotFound.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />

      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
