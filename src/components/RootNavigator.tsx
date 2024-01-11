import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Dashboard from "../pages/Dashboard";
import Leaves from "../pages/Leaves";
import AttendenceRequest from "../pages/AttendenceRequest";
import AllAttendences from "../pages/AllAttendences";
import AttendenceLayout from "../pages/AttendenceLayout";
import SignUp from "../pages/Signup";
import SignupWorkday from "../pages/SignupWorkday";


const SignUpLayout = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{flex: 1}}>
                <SignUp />
            </div>
            <div style={{flex: 1,  display: 'flex', justifyContent: "center"}}>
                <SignupWorkday />
            </div>
        </div>
    )
}


export const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<SignUpLayout />} />
        <Route element={<RootLayout />}>
          <Route index path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path='forgotpassword' element={<ForgotPassword />} /> */}
          {/* <Route path='create-password/:token' element={<ResetPassword />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/leaves" element={<Leaves />} />
          <Route path="/attendances" element={<AttendenceLayout />} />
          <Route path="/attendances/all-attendances" element={<AllAttendences />} />
          <Route path="/attendances/attendance-request" element={<AttendenceRequest />} />
          
        </Route>
  
        {/* <Route path="/dashboard" element={<ProtectedLayout />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route> */}
      </>
    )
  );


const RootNavigator = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default RootNavigator






  