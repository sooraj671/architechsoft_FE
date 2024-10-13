import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Header/Navbar";
import Loader from "./Components/Loader/Loader";
import UserPanelNavbar from "./UserPanel/Components/Navbar/UserPanelNavbar";
import Sidebar from "./UserPanel/Components/Sidebar/Sidebar";

const WhoWeHelp = lazy(() => import("./Pages/WhoWeHelp/WhoWeHelp"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Regulations = lazy(() => import("./Pages/Regulations/Regulations"));
const RevenueCycle = lazy(() => import("./Pages/RevenueCycle/RevenueCycle"));
const Booking = lazy(() => import("./Pages/Booking/Booking"));
const Pricing = lazy(() => import("./Pages/Pricing/Pricing"));
const FamilyRoom = lazy(() => import("./Pages/FamilyRoom/FamilyRoom"));
const BookADemo = lazy(() => import("./Pages/BookADemo/BookADemo"));
const Blog = lazy(() => import("./Pages/Blog/Blog"));
const ContentLibrary = lazy(() =>
  import("./Pages/ContentLibrary/ContentLibrary")
);
const CustomerStories = lazy(() =>
  import("./Pages/CustomerStories/CustomerStories")
);

// user panel pages

// schedule
const Schedule = lazy(() => import("./UserPanel/Pages/Schedule/Schedule"));
// clients
const ClientList = lazy(() =>
  import("./UserPanel/Pages/Clients/ClientList/ClientList")
);
const AddClient = lazy(() =>
  import("./UserPanel/Pages/Clients/AddClient/AddCLient")
);
const ReferralSources = lazy(() =>
  import("./UserPanel/Pages/Clients/ReferralSources/ReferralSources")
);
// caregivers
const CaregiversList = lazy(() =>
  import("./UserPanel/Pages/Caregivers/CaregiversList/CaregiversList")
);
const AddCaregiver = lazy(() =>
  import("./UserPanel/Pages/Caregivers/AddCaregiver/AddCaregiver")
);
const Applications = lazy(() =>
  import("./UserPanel/Pages/Caregivers/Applications/Applications")
);
const ApplicationsCreate = lazy(() =>
  import("./UserPanel/Pages/Caregivers/Applications/ApplicationsCreate")
);
const CaregiverReferralSources = lazy(() =>
  import("./UserPanel/Pages/Caregivers/ReferralSources/ReferralSources")
);
// prospects
const PotentialClientList = lazy(() =>
  import(
    "./UserPanel/Pages/PotentialClients/PotentialClientList/PotentialClientList"
  )
);
const AddPotentialClient = lazy(() =>
  import(
    "./UserPanel/Pages/PotentialClients/AddPotentialClient/AddPotentialClient"
  )
);

// carematch

const MatchingService = lazy(() =>
  import("./UserPanel/Pages/MatchingService/MatchingService")
);

const App = () => {
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes("/business") && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/who-we-help" element={<WhoWeHelp />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/regulations" element={<Regulations />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/revenue-cycle" element={<RevenueCycle />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/family-room" element={<FamilyRoom />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/book-a-demo" element={<BookADemo />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/content-library" element={<ContentLibrary />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/customer-stories" element={<CustomerStories />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>

      {/* user panel pages , need to look again on these */}
      {location.pathname.includes("/business") && <UserPanelNavbar />}
      {location.pathname.includes("/business") && (
        <div className="flex">
          <Sidebar />
          {/* schedule  */}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/business/schedule" element={<Schedule />} />
            </Routes>
          </Suspense>
          {/* clients  */}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/business/clients" element={<ClientList />} />
            </Routes>
          </Suspense>

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/business/clients/create" element={<AddClient />} />
            </Routes>
          </Suspense>

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/business/referral-sources/type-clients"
                element={<ReferralSources />}
              />
            </Routes>
          </Suspense>

          {/* caregiver pages  */}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/business/caregivers" element={<CaregiversList />} />
            </Routes>
          </Suspense>

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/business/caregivers/create"
                element={<AddCaregiver />}
              />
            </Routes>
          </Suspense>

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/business/caregivers/applications"
                element={<Applications />}
              />
            </Routes>
          </Suspense>

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/business/caregivers/applications/create"
                element={<ApplicationsCreate />}
              />
            </Routes>
          </Suspense>
          {/* prospect pages  */}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/business/potential-clients"
                element={<PotentialClientList />}
              />
            </Routes>
          </Suspense>

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/business/potential-clients/create"
                element={<AddPotentialClient />}
              />
            </Routes>
          </Suspense>

          {/* careMatch  */}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/business/matching-service"
                element={<MatchingService />}
              />
            </Routes>
          </Suspense>
        </div>
      )}
    </>
  );
};

export default App;
