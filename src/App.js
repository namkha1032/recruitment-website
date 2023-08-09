// import libraries
import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom'
// import components
import MainLayout from './components/MainLayout/MainLayout';
// import pages
import Page_Company_Account from './pages/Page_Company_Account/Page_Company_Account';
import Page_Company_Account_Blacklist from './pages/Page_Company_Account_Blacklist/Page_Company_Account_Blacklist';
import Page_Company_Account_Create from './pages/Page_Company_Account_Create/Page_Company_Account_Create';
import Page_Company_Event from './pages/Page_Company_Event/Page_Company_Event';
import Page_Company_Event_Create from './pages/Page_Company_Event_Create/Page_Company_Event_Create';
import Page_Company_Event_Id from './pages/Page_Company_Event_Id/Page_Company_Event_Id';
import Page_Company_Event_Id_Update from './pages/Page_Company_Event_Id_Update/Page_Company_Event_Id_Update';
import Page_Company_Interview from './pages/Page_Company_Interview/Page_Company_Interview';
import Page_Company_Interview_Create from './pages/Page_Company_Interview_Create/Page_Company_Interview_Create';
import Page_Company_Interview_Id from './pages/Page_Company_Interview_Id/Page_Company_Interview_Id';
import Page_Company_Interview_Id_Start from './pages/Page_Company_Interview_Id_Start/Page_Company_Interview_Id_Start';
import Page_Company_Interview_Id_Update from './pages/Page_Company_Interview_Id_Update/Page_Company_Interview_Id_Update';
import Page_Company_Question from './pages/Page_Company_Question/Page_Company_Question';
import Page_Company_Recruitment from './pages/Page_Company_Recruitment/Page_Company_Recruitment';
import Page_Company_Recruitment_Create from './pages/Page_Company_Recruitment_Create/Page_Company_Recruitment_Create';
import Page_Company_Recruitment_Id from './pages/Page_Company_Recruitment_Id/Page_Company_Recruitment_Id';
import Page_Company_Recruitment_Id_Application_Id from './pages/Page_Company_Recruitment_Id_Application_Id/Page_Company_Recruitment_Id_Application_Id';
import Page_Company_Recruitment_Id_Update from './pages/Page_Company_Recruitment_Id_Update/Page_Company_Recruitment_Id_Update';

import Page_Event from './pages/Page_Event/Page_Event';
import Page_Event_Id from './pages/Page_Event_Id/Page_Event_Id';
import Page_Home from './pages/Page_Home/Page_Home';
import Page_Interview_Id from './pages/Page_Interview_Id/Page_Interview_Id';
import Page_Profile_CvCreate from './pages/Page_Profile_CvCreate/Page_Profile_CvCreate';
import Page_Profile_Id from './pages/Page_Profile_Id/Page_Profile_Id';
import Page_Profile_Id_Application from './pages/Page_Profile_Id_Application/Page_Profile_Id_Application';
import Page_Profile_Id_ChangePassword from './pages/Page_Profile_Id_ChangePassword/Page_Profile_Id_ChangePassword';
import Page_Profile_Id_Cv from './pages/Page_Profile_Id_Cv/Page_Profile_Id_Cv';
import Page_Profile_Id_Cv_Id from './pages/Page_Profile_Id_Cv_Id/Page_Profile_Id_Cv_Id';
import Page_Profile_Id_Cv_Id_Update from './pages/Page_Profile_Id_Cv_Id_Update/Page_Profile_Id_Cv_Id_Update';
import Page_Profile_Id_Event from './pages/Page_Profile_Id_Event/Page_Profile_Id_Event';
import Page_Profile_Id_Interview from './pages/Page_Profile_Id_Interview/Page_Profile_Id_Interview';
import Page_Recruitment from './pages/Page_Recruitment/Page_Recruitment';
import Page_Recruitment_Id from './pages/Page_Recruitment_Id/Page_Recruitment_Id';
import Page_Recruitment_Id_Application_Id from './pages/Page_Recruitment_Id_Application_Id/Page_Recruitment_Id_Application_Id';
import Page_Company_Recruitment_Id_Report from './pages/Page_Company_Recruitment_Id_Report/Page_Company_Recruitment_Id_Report';

import XPage_Login from './pages/XPage_Login/XPage_Login';
import XPage_Register from './pages/XPage_Register/XPage_Register';
import XPage_Recovery from './pages/XPage_Recovery/XPage_Recovery';


import MissingPage from './components/MissingPage/MissingPage';
import Unauthorized from './components/Unauthorized/Unauthorized';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route element={<ProtectedRoute allowed={["admin"]} />}>
              <Route path="/company/account" element={<Page_Company_Account />} />
              <Route path="/company/account/blacklist" element={<Page_Company_Account_Blacklist />} />
              <Route path="/company/account/create" element={<Page_Company_Account_Create />} />
            </Route>

            <Route element={<ProtectedRoute allowed={["admin", "recruiter"]} />}>
              <Route path="/company/event" element={<Page_Company_Event />} />
              <Route path="/company/event/:eventid" element={<Page_Company_Event_Id />} />
            </Route>

            <Route element={<ProtectedRoute allowed={["recruiter"]} />}>
              <Route path="/company/event/create" element={<Page_Company_Event_Create />} />
              <Route path="/company/event/:eventid/update" element={<Page_Company_Event_Id_Update />} />
            </Route>

            <Route element={<ProtectedRoute allowed={["admin", "recruiter", "interviewer"]} />}>
              <Route path="/company/interview" element={<Page_Company_Interview />} />
            </Route>

            <Route element={<ProtectedRoute allowed={["admin", "recruiter"]} />}>
              <Route path="/company/interview/create" element={<Page_Company_Interview_Create />} />
            </Route>

            <Route element={<ProtectedRoute allowed={["admin", "recruiter", "interviewer"]} />}>
              <Route path="/company/interview/:interviewid" element={<Page_Company_Interview_Id />} />
            </Route>

            <Route element={<ProtectedRoute allowed={["interviewer", "admin"]} />}>
              <Route path="/company/question" element={<Page_Company_Question />} />
            </Route>

            <Route element={<ProtectedRoute allowed={["admin", "recruiter"]} />}>
              <Route path="/company/interview/:interviewid/update" element={<Page_Company_Interview_Id_Update />} />

              <Route path="/company/recruitment" element={<Page_Company_Recruitment />} />

              <Route path="/company/recruitment/create" element={<Page_Company_Recruitment_Create />} />

              <Route path="/company/recruitment/:recruitmentid" element={<Page_Company_Recruitment_Id />} />

              <Route path="/company/recruitment/:recruitmentid/application/:applicationid" element={<Page_Company_Recruitment_Id_Application_Id />} />

              <Route path="/company/recruitment/:recruitmentid/update" element={<Page_Company_Recruitment_Id_Update />} />

              <Route path="/company/recruitment/:recruitmentid/report" element={<Page_Company_Recruitment_Id_Report />} />
            </Route>

            <Route element={<ProtectedRoute allowed={["admin", "interviewer"]} />}>
              <Route path="/company/interview/:interviewid/start" element={<Page_Company_Interview_Id_Start />} />
            </Route>

            <Route path="/event" element={<Page_Event />} />
            <Route path="/event/:eventid" element={<Page_Event_Id />} />
            <Route path="/home" element={<Page_Home />} />

            <Route element={<ProtectedRoute allowed={["candidate"]} />}>
              <Route path="/interview/:interviewid" element={<Page_Interview_Id />} />
            </Route>

            <Route element={<ProtectedRoute allowed={["candidate"]} />}>
              <Route path="/profile/cv-create" element={<Page_Profile_CvCreate />} />
              <Route path="/profile/:profileid/cv" element={<Page_Profile_Id_Cv />} />
              <Route path="/profile/:profileid/cv/:cvid" element={<Page_Profile_Id_Cv_Id />} />
              <Route path="/profile/:profileid/cv/:cvid/update" element={<Page_Profile_Id_Cv_Id_Update />} />

              <Route path="/profile/:profileid/interview" element={<Page_Profile_Id_Interview />} />
              <Route path="/profile/:profileid/event" element={<Page_Profile_Id_Event />} />
              <Route path="/profile/:profileid/application" element={<Page_Profile_Id_Application />} />
            </Route>

            <Route element={<ProtectedRoute allowed={["admin", "recruiter", "interviewer", "candidate"]} />}>
              <Route path="/profile/:profileid" element={<Page_Profile_Id />} />
              <Route path="/profile/:profileid/changepassword" element={<Page_Profile_Id_ChangePassword />} />
            </Route>

            <Route path="/recruitment" element={<Page_Recruitment />} />
            <Route path="/recruitment/:recruitmentid" element={<Page_Recruitment_Id />} />

            <Route element={<ProtectedRoute allowed={["admin", "recruiter", "interviewer", "candidate"]} />}>
              <Route path="/recruitment/:recruitmentid/application/:applicationid" element={<Page_Recruitment_Id_Application_Id />} />
            </Route>



            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<MissingPage />} />
          </Route>

          <Route path="/login" element={<XPage_Login />} />
          <Route path="/recovery" element={<XPage_Recovery />} />
          <Route path="/register" element={<XPage_Register />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
