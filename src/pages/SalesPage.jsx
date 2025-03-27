import { motion } from "framer-motion";
import Header from "../components/common/Header";
import UserCreatePage from "../components/settings/UserCreatePage";
import Bredcamp from "../components/common/Bredcamp";


const SalesPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Sales Dashboard' />


      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <Bredcamp title={"Mijoz qo'shish"} />
        <motion.div
          className=' mb-8 bg-base-100'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <UserCreatePage />
        </motion.div>
      </main>
    </div>
  );
};
export default SalesPage;
