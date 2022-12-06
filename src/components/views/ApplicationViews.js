import { useNavigate } from "react-router-dom";
import { MainPage } from "../main/MainPage";


export const ApplicationViews = () => {
  let navigate = useNavigate();

  // Move this to where ever you end up putting your logout button

  return (
    <>
    <MainPage />
    
    </>
  );
};
