import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/aboutUs";
import Home from "./pages/home";
import WorkForUs from "./pages/workForUs";
import Footer from "./widgets/Footer";
import CourseDetailPage from "./pages/courseDetailPage";
import Publications from "./pages/publications";
import ReachUs from "./pages/ReachUs";
import OurPolicy from "./pages/OurPolicies";
import OurManagement from "./pages/managementAboutUs";
import RGCDentalGroup from "./pages/RGCDentalGroup";
import OurHistory from "./pages/ourHistory";
import CommunityServices from "./pages/communityServices";
import SatelliteServices from "./pages/satelliteServices";
import VillageAdoptions from "./pages/villageAdoptions";
import DownloadCentre from "./pages/downloadCentre";
import InformationalPack from "./pages/informationalPack";
import ResearchAndGrants from "./pages/researchAndGrants";
import Scholarship from "./pages/scholarship";
import OnlineClasses from "./pages/onlineClasses";
import OnlineApplications from "./pages/onlineApplications";
import AlumniServices from "./pages/alumniServices";
import DentalHospital from "./pages/dentalHospital";
import ChairmanDesk from "./pages/chairmanDesk";
import Management from "./pages/management";
import NewsAndEventsDetail from "./pages/newsAndEventsDetail";
import NewsAndEvents from "./pages/newsAndEvents";
import MedicalCollege from "./pages/medicalCollege";
import RGCInstituteOfTechnology from "./pages/RGCInstituteOfTechnology";
import RGCSanjayGandhi from "./pages/RGCSanjayGandhi";
import RGCKamalaCollege from "./pages/RGCKamalaCollege";
import Gallery from "./pages/gallery";
import AcademicsAndResearch from "./pages/academicsAndResearch";
import RGCCommerceAndAdministration from "./pages/RGCCommerceAndAdministration";
import CampusLife from "./pages/campusLife";
import HealthCare from "./pages/healthCare";
import OurCourses from "./pages/ourCourses";
import MandatoryDisclosures from "./pages/mandatoryDisclosures";
import ScrollToTop from "./widgets/ScrollToTop";
import NavBar from "./widgets/NavBar";
import NationalDentalRegister from "./pages/NationalDentalRegister";
import OurJournal from "./pages/ourJournal";
import ExternalPublications from "./pages/externalPublications";
import NoticeBoard from "./pages/noticeBoard";
function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/work-for-us" element={<WorkForUs />} />
        <Route path="/course-details" element={<CourseDetailPage />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/reach-us" element={<ReachUs />} />
        <Route path="/our-policy" element={<OurPolicy />} />
        <Route path="/our-management" element={<OurManagement />} />
        <Route path="/rgc-dental-group" element={<RGCDentalGroup />} />
        <Route
          path="/rgc-institute-of-technology"
          element={<RGCInstituteOfTechnology />}
        />
        <Route
          path="/rgc-sanjay-gandhi-college"
          element={<RGCSanjayGandhi />}
        />
        <Route path="/rgc-kamala-college" element={<RGCKamalaCollege />} />
        <Route path="/our-history" element={<OurHistory />} />
        <Route path="/community-services" element={<CommunityServices />} />
        <Route path="/satellite-services" element={<SatelliteServices />} />
        <Route path="/village-adoptions" element={<VillageAdoptions />} />
        <Route path="/download-centre" element={<DownloadCentre />} />
        <Route path="/mandatory-disclosures" element={<MandatoryDisclosures />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/informational-pack" element={<InformationalPack />} />
        <Route path="/research-and-grants" element={<ResearchAndGrants />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/online-classes" element={<OnlineClasses />} />
        <Route path="/online-applications" element={<OnlineApplications />} />
        <Route path="/alumni-services" element={<AlumniServices />} />
        <Route path="/dental-hospital" element={<DentalHospital />} />
        <Route path="/chairman-desk" element={<ChairmanDesk />} />
        <Route path="/management" element={<Management />} />
        <Route
          path="/news-and-events-detail"
          element={<NewsAndEventsDetail />}
        />
        <Route path="/news-and-events" element={<NewsAndEvents />} />
        <Route path="/medical-college" element={<MedicalCollege />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route
          path="/academics-and-research"
          element={<AcademicsAndResearch />}
        />
        <Route
          path="/rgc-commerce"
          element={<RGCCommerceAndAdministration />}
        />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/health-care" element={<HealthCare />} />
        <Route path="/our-courses" element={<OurCourses />} />
        <Route
          path="/national-dental-register"
          element={<NationalDentalRegister />}
        />
        <Route path="/our-journal" element={<OurJournal />} />
        <Route
          path="/external-publications"
          element={<ExternalPublications />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
