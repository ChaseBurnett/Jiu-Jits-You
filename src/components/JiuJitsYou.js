import { Route, Routes } from "react-router-dom";
import { Authorized } from "./views/Authorized";
import { ApplicationViews } from "./views/ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { NewSessionForm } from "./sessionForm/NewSessionForm";
import { MainPage } from "./main/MainPage";
import { EditPost } from "./sessionForm/EditPost";

export const JiuJitsYou = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logSession" element={<NewSessionForm />} />
      <Route path="/mainPage" element={<MainPage />} />
      <Route path="/sessionForm/:postsId/edit" element={<EditPost />} />

      <Route
        path="*"
        element={
          <Authorized>
            <>
              <ApplicationViews />
            </>
          </Authorized>
        }
      />
    </Routes>
  );
};
