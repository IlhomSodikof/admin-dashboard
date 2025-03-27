import { Lock } from "lucide-react";
import SettingSection from "./SettingSection";
import { useState } from "react";

const Security = ({ apiData, title }) => {
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <SettingSection title={title} >

      <div className='mt-4 text-base-content'>
        <p class="text-base md:text-lg lg:text-[15px] font-medium text-base-content leading-relaxed break-words max-w-full">
          {apiData}
        </p>

      </div>
    </SettingSection>
  );
};
export default Security;
