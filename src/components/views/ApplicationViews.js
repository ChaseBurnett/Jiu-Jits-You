import { useNavigate } from "react-router-dom";
import { PhotoUpload } from "../photoStorage/PhotoUpload";
import { UserNav } from "../nav/NavBar";

export const ApplicationViews = () => {
  let navigate = useNavigate();

  // Move this to where ever you end up putting your logout button

  return (
    <>
      <UserNav />
      <h1>Jiu Jits YOU</h1>
      {/* move this component to where you want your PhotoUpload */}
      <PhotoUpload />
    </>
  );
};
