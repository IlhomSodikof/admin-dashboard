// import React, { useState } from "react";

// const UserCreatePage = () => {
//   const [formData, setFormData] = useState({
//     full_name: "",
//     phone_number: "",
//     region: "",
//     address: "",
//     type_disease: "",
//     face_condition: "",
//     medications_taken: "",
//     home_care_items: "",
//     photo: null,
//     total_payment_due: "",
//     appointments: [{ appointment_time: "" }],
//   });

//   // Function to handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "file" ? files[0] : value,
//     });
//   };

//   // Function to add a new appointment field
//   const handleAddAppointment = () => {
//     setFormData({
//       ...formData,
//       appointments: [...formData.appointments, { appointment_time: "" }],
//     });
//   };

//   // Function to remove an appointment field
//   const handleRemoveAppointment = (index) => {
//     const updatedAppointments = formData.appointments.filter(
//       (_, i) => i !== index
//     );
//     setFormData({ ...formData, appointments: updatedAppointments });
//   };

//   // Function to update appointment fields
//   const handleAppointmentChange = (index, value) => {
//     const updatedAppointments = formData.appointments.map((appointment, i) =>
//       i === index ? { appointment_time: value } : appointment
//     );
//     setFormData({ ...formData, appointments: updatedAppointments });
//   };

//   // Submit form function
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Client-side validation
//     if (
//       !formData.full_name.trim() ||
//       !formData.phone_number.trim() ||
//       !formData.region.trim() ||
//       !formData.type_disease.trim() ||
//       !formData.total_payment_due.trim()

//     ) {
//       alert("Barcha kerakli maydonlarni to'ldiring!");
//       return;
//     }

//     const isAppointmentsValid = formData.appointments.every(
//       (appointment) =>
//         appointment.appointment_time.trim() !== "" &&
//         !isNaN(Date.parse(appointment.appointment_time))
//     );

//     if (!isAppointmentsValid) {
//       alert("Appointments maydonidagi barcha sanalar to'g'ri formatda bo'lishi kerak!");
//       return;
//     }

//     const authToken = localStorage.getItem("authToken");

//     // Convert appointments to expected format
//     const formattedAppointments = formData.appointments.map((appointment) => ({
//       appointment_time: appointment.appointment_time,
//     }));

//     const dataToSend = {
//       ...formData,
//       appointments: formattedAppointments,
//     };

//     console.log("Yuborilayotgan ma'lumotlar:", dataToSend);

//     try {
//       const response = await fetch(
//         "http://dilshodakosmetolog.uz/monitoring/patients/create/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "X-CSRFTOKEN": authToken,
//           },
//           body: JSON.stringify(dataToSend),
//         }
//       );

//       // Check the response
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error("Xato:", errorData);
//         alert("Serverdan xato qaytdi. Malumotlaringizni tekshiring.");
//       } else {
//         const responseData = await response.json();
//         console.log("Muvaffaqiyatli javob:", responseData);
//         alert("Foydalanuvchi muvaffaqiyatli yaratildi!");
//       }
//     } catch (err) {
//       console.error("So'rov bajarilmadi:", err);
//       alert("Iltimos, internet ulanishingizni tekshiring.");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-2xl mx-auto p-4 bg-base-100 shadow-xl rounded-lg space-y-4"
//     >
//       {/* Full Name */}
//       <div>
//         <label htmlFor="full_name" className="label px-1 text-base-content font-medium">
//           Full Name
//         </label>
//         <input
//           type="text"
//           id="full_name"
//           name="full_name"
//           value={formData.full_name}
//           onChange={handleChange}
//           className="input input-bordered w-full"
//           placeholder="e.g., Asadbek Ismoilov"
//           required
//         />
//       </div>

//       {/* Phone Number */}
//       <div>
//         <label htmlFor="phone_number" className="label px-1 text-base-content font-medium">
//           Phone Number
//         </label>
//         <input
//           type="tel"
//           id="phone_number"
//           name="phone_number"
//           value={formData.phone_number}
//           onChange={handleChange}
//           className="input input-bordered w-full"
//           placeholder="e.g., +998901234567"
//           required
//         />
//       </div>

//       {/* Region */}
//       <div>
//         <label htmlFor="region" className="label px-1 text-base-content font-medium">
//           Region
//         </label>
//         <input
//           type="number"
//           id="region"
//           name="region"
//           value={formData.region}
//           onChange={handleChange}
//           className="input input-bordered w-full"
//           placeholder="Enter region ID"
//           required
//         />
//       </div>

//       {/* Address */}
//       <div>
//         <label htmlFor="address" className="label px-1 text-base-content font-medium">
//           Address
//         </label>
//         <input
//           type="text"
//           id="address"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           className="input input-bordered w-full"
//           placeholder="e.g., Toshkent, Yunusobod tumani"
//           required
//         />
//       </div>

//       {/* Disease Type */}
//       <div>
//         <label htmlFor="type_disease" className="label px-1 text-base-content font-medium">
//           Type of Disease
//         </label>
//         <input
//           type="number"
//           id="type_disease"
//           name="type_disease"
//           value={formData.type_disease}
//           onChange={handleChange}
//           className="input input-bordered w-full"
//           placeholder="Enter disease ID"
//           required
//         />
//       </div>

//       {/* Face Condition */}
//       <div>
//         <label htmlFor="face_condition" className="label px-1 text-base-content font-medium">
//           Face Condition
//         </label>
//         <textarea
//           id="face_condition"
//           name="face_condition"
//           value={formData.face_condition}
//           onChange={handleChange}
//           className="textarea textarea-bordered w-full"
//           placeholder="Brief description"
//           required
//         ></textarea>
//       </div>

//       {/* Medications Taken */}
//       <div>
//         <label htmlFor="medications_taken" className="label px-1 text-base-content font-medium">
//           Medications Taken
//         </label>
//         <textarea
//           id="medications_taken"
//           name="medications_taken"
//           value={formData.medications_taken}
//           onChange={handleChange}
//           className="textarea textarea-bordered w-full"
//           placeholder="List of medications"
//           required
//         ></textarea>
//       </div>

//       {/* Home Care Items */}
//       <div>
//         <label htmlFor="home_care_items" className="label px-1 text-base-content font-medium">
//           Home Care Items
//         </label>
//         <textarea
//           id="home_care_items"
//           name="home_care_items"
//           value={formData.home_care_items}
//           onChange={handleChange}
//           className="textarea textarea-bordered w-full"
//           placeholder="e.g., Specific creams"
//           required
//         ></textarea>
//       </div>

//       {/* Photo */}
//       <div>
//         <label htmlFor="photo" className="label px-1 text-base-content font-medium">
//           Photo
//         </label>
//         <input
//           type="file"
//           id="photo"
//           name="photo"
//           onChange={handleChange}
//           className="file-input file-input-bordered w-full"
//         />
//       </div>
//       {/* Total Payment Due */}
//       <div>
//         <label htmlFor="total_payment_due" className="label px-1 text-base-content font-medium">
//           Total Payment Due
//         </label>
//         <input
//           type="number"
//           id="total_payment_due"
//           name="total_payment_due"
//           value={formData.total_payment_due}
//           onChange={handleChange}
//           className="input input-bordered w-full"
//           placeholder="e.g., 150000.00"
//           required
//         />
//       </div>

// {/* Appointments */}
// <div>
//   <label className="label px-1 text-base-content font-medium">Appointments</label>
//   {formData.appointments.map((appointment, index) => (
//     <div key={index} className="flex items-center gap-2 mb-2">
//       <input
//         type="datetime-local"
//         value={appointment.appointment_time}
//         onChange={(e) => handleAppointmentChange(index, e.target.value)}
//         className="input input-bordered flex-1"
//         required
//       />
//       <button
//         type="button"
//         onClick={() => handleRemoveAppointment(index)}
//         className="btn btn-error btn-sm"
//       >
//         Remove
//       </button>
//     </div>
//   ))}
//   <button
//     type="button"
//     onClick={handleAddAppointment}
//     className="btn btn-primary btn-sm"
//   >
//     Add Appointment
//   </button>
// </div>

// {/* Submit Button */}
// <button type="submit" className="btn btn-success w-full">
//   Submit
// </button>
//     </form>
//   );
// };

// export default UserCreatePage;


import { CameraIcon, Trash2 } from "lucide-react";

import { useState } from "react";
import { toast, Toaster } from "sonner";

const UserCreatePage = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    region: "",
    address: "",
    type_disease: "",
    face_condition: "",
    medications_taken: "",
    home_care_items: "",
    total_payment_due: "",
    photo: null,
    appointments: [{ appointment_time: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleAppointmentChange = (index, value) => {
    const updatedAppointments = [...formData.appointments];
    updatedAppointments[index].appointment_time = value;
    setFormData((prev) => ({ ...prev, appointments: updatedAppointments }));
  };

  const addAppointment = () => {
    setFormData((prev) => ({
      ...prev,
      appointments: [...prev.appointments, { appointment_time: "" }],
    }));
  };

  const removeAppointment = (index) => {
    const updatedAppointments = formData.appointments.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, appointments: updatedAppointments }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");

    if (!token) {
      alert("Token topilmadi. Iltimos, tizimga kiring!");
      return;
    }

    // JSON obyekt shakliga o'tkazamiz
    const data = new FormData();
    data.append("full_name", formData.full_name);
    data.append("phone_number", formData.phone_number);
    data.append("region", formData.region);
    data.append("address", formData.address);
    data.append("type_disease", formData.type_disease);
    data.append("face_condition", formData.face_condition);
    data.append("medications_taken", formData.medications_taken);
    data.append("home_care_items", formData.home_care_items);
    data.append("total_payment_due", formData.total_payment_due);

    if (formData.photo) {
      data.append("photo", formData.photo);
    }

    // appointments massivini JSON string formatida qo‘shish
    data.append("appointments", JSON.stringify(formData.appointments));

    try {
      const response = await fetch("http://dilshodakosmetolog.uz/monitoring/patients/create/", {
        method: "POST",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQzMTkyMzkwLCJpYXQiOjE3NDMxMDU5OTAsImp0aSI6ImU5ODBjODkzY2Q3NTQ0YWNhMTNjYjg4MTFkNjA1ZGU3IiwidXNlcl9pZCI6MX0.eHhj-KwGcJCg0VGRsFKdprLJ_uXf5FsfmnmJbTed9UE`,
          "Content-Type": "application/json",
          Accept: "application/json",

        },
        body: JSON.stringify(data),
      });


      if (!response.ok) {
        console.log("bu data token", data, "va ", formData);

        throw new Error("Yuborishda xatolik yuz berdi");
      }

      const result = await response.json();
      toast.success("Ma'lumot muvaffaqiyatli yuborildi!");
      console.log(result);
      console.log("bu malumot emish due ", formData.total_payment_due);
      console.log("bu malumot emish ", formData);


    } catch (error) {
      console.error("Xatolik:", error);
      toast.error("Yuborishda xatolik yuz berdi");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mx-auto  space-y-4 border rounded-lg shadow">
      <div className="lg:p-7 lg:pb-3">

        <div className="flex gap-5 "> {/* bu glavniy kichkina */}


          <div className=" w-full ">

            <div className="flex gap-5">

              <div className=" ">
                {/* Photo */}
                <div className="mt-6 w-28 h-28 border border-gray-400 rounded-md relative flex justify-center items-center">
                  <CameraIcon className="w-8 h-8 text-gray-400" />
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    onChange={handleChange}
                    className="file-input file-input-bordered w-full absolute z-10 h-full opacity-0"
                  />
                </div>
                {/* <label htmlFor="photo" className="label px-1  w-full flex justify-center text-base-content font-medium">
                  Photo
                </label> */}
              </div>{/*fotka*/}

              <div className="w-full">
                <div className="">
                  <label htmlFor="full_name" className="label px-1 text-base-content font-medium">
                    Ism Familya
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="e.g., Asadbek Ismoilov"
                    required
                  />
                </div>
                {/* Phone Number */}
                <div className="mt-3">
                  <label htmlFor="phone_number" className="label px-1 text-base-content font-medium">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="e.g., +998901234567"
                    required
                  />
                </div>
              </div>
              <Toaster position="top-right" />

            </div>







            {/* Disease Type */}
            <div className="mt-3">
              <label htmlFor="type_disease" className="label px-1 text-base-content font-medium">
                Type of Disease
              </label>
              <input
                type="number"
                id="type_disease"
                name="type_disease"
                value={formData.type_disease}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Enter disease ID"
                required
              />
            </div>

            {/* Face Condition */}
            <div className="mt-3">
              <label htmlFor="face_condition" className="label px-1 text-base-content font-medium">
                Yuz Holati
              </label>
              <textarea
                id="face_condition"
                name="face_condition"
                value={formData.face_condition}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                placeholder="Brief description"
                required
              ></textarea>
            </div>

            {/* Medications Taken */}
            <div className="mt-3">
              <label htmlFor="medications_taken" className="label px-1 text-base-content font-medium">
                Medications Taken
              </label>
              <textarea
                id="medications_taken"
                name="medications_taken"
                value={formData.medications_taken}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                placeholder="List of medications"
                required
              ></textarea>
            </div>






          </div>




          <div className="w-full">
            {/* Region */}
            <div >
              <label htmlFor="region" className="label px-1 text-base-content font-medium">
                Viloyat
              </label>
              <input
                type="number"
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Enter region ID"
                required
              />
            </div>

            {/* Address */}
            <div className="mt-3">
              <label htmlFor="address" className="label px-1 text-base-content font-medium">
                Manzil
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="e.g., Toshkent, Yunusobod tumani"
                required
              />
            </div>
            {/* Total Payment Due */}
            <div className="mt-3">
              <label htmlFor="total_payment_due" className="label px-1 text-base-content font-medium">
                To'lov Summasi
              </label>
              <input
                type="number"
                id="total_payment_due"
                name="total_payment_due"
                value={formData.total_payment_due}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="e.g., 150000.00"
                required
              />
            </div>
            {/* Home Care Items */}
            <div className="mt-3">
              <label htmlFor="home_care_items" className="label px-1 text-base-content font-medium">
                Home Care Items
              </label>
              <textarea
                id="home_care_items"
                name="home_care_items"
                value={formData.home_care_items}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                placeholder="e.g., Specific creams"
                required
              ></textarea>
            </div>
            <label className="label px-1 text-base-content font-medium mt-3">Ko'rik Vaqti</label>
            {formData.appointments.map((appointment, index) => (
              <div key={index} className="flex items-center gap-2 mb-2 ">
                <input
                  type="datetime-local"
                  value={appointment.appointment_time}
                  onChange={(e) => handleAppointmentChange(index, e.target.value)}
                  className="input input-bordered flex-1"
                  required
                />
                <button
                  type="button"
                  onClick={() => removeAppointment(index)}
                  className="btn bg-[crimson]"
                >
                  <Trash2 size={20} className="text-white" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addAppointment}
              className="btn bg-green-500 text-white btn-sm"
            >
              Add Appointment
            </button>
          </div>

        </div>



        {/* ////////////////////////////////////////////////////////////////////////// */}





        {/* Submit Button */}
        <button type="submit" className="btn my-7 py-5 bg-[orange] text-white w-full">
          Submit
        </button>
      </div>
    </form >
  );
};

export default UserCreatePage;
