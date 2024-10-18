
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

import { Layout } from './components';

import {
    Home,
    AboutUs,
    ContactUs,
    IndustryExpertise,
    PartnersAndAffiliates,
    LegalServices,
    TaxServices,
    FinancialAdvisoryServices,
    OurPeople,

} from "./pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use Layout as the root component
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <AboutUs />, // Replace this with the actual "About" page
      },
      {
        path: '/services/legal',
        element: <LegalServices />, // Replace this with the actual "About" page
      },
      {
        path: '/services/tax',
        element: <TaxServices />, // Replace this with the actual "About" page
      },
      {
        path: '/services/financial-advisory',
        element: <FinancialAdvisoryServices />, // Replace this with the actual "About" page
      },
      {
        path: '/industry-expertise',
        element: <IndustryExpertise />, // Replace this with the actual "About" page
      },
      {
        path: '/our-people',
        element: <OurPeople />, // Replace this with the actual "About" page
      },
      {
        path: '/partners-and-affiliates',
        element: <PartnersAndAffiliates />, // Replace this with the actual "About" page
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
  
    ],
  },
]);
function App() {

  

  return (
    <RouterProvider router={router}>
      {/* RouterProvider wraps everything */}
    </RouterProvider>
  )
}

export default App
