import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import ConnectedAccounts from "../components/settings/ConnectedAccounts";
import DangerZone from "../components/settings/DangerZone";
import Notifications from "../components/settings/Notifications";
import Profile from "../components/settings/Profile";
import Security from "../components/settings/Security";
import { useEffect, useState } from "react";
import { endpoints } from "../components/config/endpoints";
import { motion } from "framer-motion";
import { DataService } from "../components/config/DataService";

const SettingsPage = () => {
  const route = useParams()

  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    const response = await DataService.get(endpoints.patientByid(route?.id));
    console.log(response, "havolalar");
    setApiData(response);
    // dataFn(response)
    // console.log(response?.results);

  };
  useEffect(() => {
    fetchData();


  }, []);
  //


  return (
    <div className='flex-1 overflow-auto relative z-10 '>
      <Header title='Settings' />
      <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
        <Profile apiData={apiData} />
        {/* <Notifications /> */}
        <Security apiData={apiData?.face_condition} title={"Yuz holati"} />
        <Security apiData={apiData?.home_care_items} title={"Uy uchun muolaja"} />
        <Security apiData={apiData?.medications_taken} title={"Qo'llanilgan preparatlar"} />
        {/* <Security apiData={apiData?.appointments} title={"Qabul vaqtlari"} /> */}
        {/* <motion.div
          className='bg-base-100 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6  mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex items-center justify-end mb-4'>
            {Icon && <Icon className='text-indigo-400 mr-4' size='24' />}
            <h2 className='text-xl font-semibold text-base-content'>{title}</h2>
          </div>
          <div className='mt-4 text-base-content'>
            <p class="text-base md:text-lg lg:text-xl font-medium text-base-content leading-relaxed break-words max-w-full">
              {apiData?.appointments?.map((item, index) => {
                return (
                  <div key={index} className="flex justify-between items-center">
                    <p className="text-sm md:text-base lg:text-lg font-medium text-base-content leading-relaxed break-words max-w-full">{item?.doctor?.name}</p>
                    <p className="text-sm md:text-base lg:text-lg font-medium text-base-content leading-relaxed break-words max-w-full">{item?.date}</p>
                  </div>
                )
              })}
            </p>

          </div>
        </motion.div> */}

        {/* <ConnectedAccounts /> */}
        <DangerZone />
      </main>
    </div>
  );
};
export default SettingsPage;
