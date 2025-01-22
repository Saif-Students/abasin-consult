import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import { Layout, PersonalProfile, SinglePartner } from './components';

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
import ServicesLandingPage from './pages/Services/ServicesLandingPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // Root layout
        children: [
            { path: '/', element: <AboutUs /> },
            { path: '/services', element: <ServicesLandingPage /> },
            { path: '/services/legal', element: <LegalServices /> },
            { path: '/services/tax', element: <TaxServices /> },
            { path: '/services/financial-advisory', element: <FinancialAdvisoryServices /> },
            { path: '/industry-expertise', element: <IndustryExpertise /> },
            { path: '/our-people', element: <OurPeople /> },
            { path: '/profile/:id', element: <PersonalProfile /> }, // Updated route path
            { path: '/partners-and-affiliates', element: <PartnersAndAffiliates /> },
            { path: '/partners-and-affiliates/:id', element: <SinglePartner /> },
            { path: '/contact', element: <ContactUs /> },
            { path: '*', element: <div>Page Not Found</div> }, // Fallback route
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router}>
            {/* RouterProvider wraps everything */}
        </RouterProvider>
    );
}

export default App;
