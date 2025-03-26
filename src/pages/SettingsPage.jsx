import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import ConnectedAccounts from "../components/settings/ConnectedAccounts";
import DangerZone from "../components/settings/DangerZone";
import Notifications from "../components/settings/Notifications";
import Profile from "../components/settings/Profile";
import Security from "../components/settings/Security";
import { useEffect, useState } from "react";
// import { endpoints } from "../components/config/endpoints";
import { motion } from "framer-motion";
// import { DataService } from "../components/config/DataService";

const SettingsPage = () => {
  const route = useParams()

  // const [apiData, setApiData] = useState([]);
  // const fetchData = async () => {
  //   const response = await DataService.get(endpoints.patientByid(route?.id));
  //   console.log(response, "havolalar");
  //   setApiData(response);
  //   // console.log(response?.results);

  // };
  // useEffect(() => {
  //   fetchData();


  // }, []);
  // //


  return (
    <div className='flex-1 overflow-auto relative z-10 '>
      <Header title='Settings' />
      <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
        {/* <Profile apiData={apiData} />

        <Security apiData={apiData?.face_condition} title={"Yuz holati"} />
        <Security apiData={apiData?.home_care_items} title={"Uy uchun muolaja"} />
        <Security apiData={apiData?.medications_taken} title={"Qo'llanilgan preparatlar"} /> */}
        {/* <Notifications /> */}

        {/* <ConnectedAccounts /> */}
        <DangerZone />
      </main>
    </div>
  );
};
export default SettingsPage;
