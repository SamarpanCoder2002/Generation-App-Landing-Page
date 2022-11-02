import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsSection from "./components/about/about_us";
import LandingPage from "./components/app";
import ContactUsSection from "./components/contact/contact_us";
import PrivacyPolicy from "./components/privacy/privacy_policy";
import RefundScreen from "./components/refund/refund";
import { NotFoundScreen } from "./not_found";

const RoutesEntryPoint = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUsSection />} />
        <Route path="/contact-us" element={<ContactUsSection />} />

        <Route path="/refund" element={<RefundScreen />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route
          path="*"
          element={
            <NotFoundScreen
              title={"404 Error"}
              subtitle={"This page is not available."}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default RoutesEntryPoint;
