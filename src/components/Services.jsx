import React from "react";

const services = [
  {
    title: "Counseling Sessions",
    description:
      "Personalized counseling sessions to help individuals overcome addiction and lead a healthy life.",
    buttonText: "Call Now!",
    image:
      "https://t4.ftcdn.net/jpg/07/68/24/23/240_F_768242398_zTQDRNYEgwK3lNHVxWpbu5Dn8OYev9vx.jpg",
    phoneNumber: "+1234567890",
  },
  {
    title: "Detoxification Programs",
    description:
      "Safe and effective detox programs to cleanse the body of harmful substances.",
    buttonText: "Call Now!",
    image:
      "https://t4.ftcdn.net/jpg/09/89/49/69/240_F_989496986_YXf8JFEXymWdbsFvPvhkmyL4fIkeUhgk.jpg",
    phoneNumber: "+0987654321",
  },
  {
    title: "Rehabilitation Support",
    description:
      "Comprehensive rehabilitation to ensure long-term recovery and mental well-being.",
    buttonText: "Call Now!",
    image:
      "https://t4.ftcdn.net/jpg/08/83/70/29/240_F_883702967_ADnz4xZ6cugBxb4zKxyJ3gKRApXXyFEH.jpg",
    phoneNumber: "+1122334455",
  },

  {
    title: "Rehabilitation Support",
    description:
      "Comprehensive rehabilitation to ensure long-term recovery and mental well-being.",
    buttonText: "Call Now!",
    image:
      "https://t3.ftcdn.net/jpg/10/77/71/68/240_F_1077716815_tPyzGvnKespc0K8isWHRYJoIKeQOlw5L.jpg",
    phoneNumber: "+1122334455",
  },
  {
    title: "Rehabilitation Support",
    description:
      "Comprehensive rehabilitation to ensure long-term recovery and mental well-being.",
    buttonText: "Call Now!",
    image:
      "https://t3.ftcdn.net/jpg/10/20/70/68/240_F_1020706875_Pcrn2wnSFT8M9EzkNPIojJP5r0eel3bV.jpg",
    phoneNumber: "+1122334455",
  },
  {
    title: "Rehabilitation Support",
    description:
      "Comprehensive rehabilitation to ensure long-term recovery and mental well-being.",
    buttonText: "Call Now!",
    image:
    "https://t4.ftcdn.net/jpg/09/23/59/63/240_F_923596310_zybOuqSkHg9FBKZ72zDZkmAf810fKCeq.jpg",
    phoneNumber: "+1122334455",
  },
];

const Services = () => {
  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section className="bg-gray-100 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
          A Journey to Complete Wellness at Dhara Nasha Mukti Kendra
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  className="w-full bg-green-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                  onClick={() => handleCall(service.phoneNumber)}
                >
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


























//   return (
//     <div className="bg-gray-100 py-10">
//       <h2 className="text-center text-3xl font-bold text-white-700 mb-8">
//         A Journey to Complete Wellness at Dhara Nasha Mukti Kendra
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white-700 text-green-700 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
//           >
//             <div className="p-4">
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-40 object-cover rounded-t-lg"
//               />
//               <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
//               <p className="mt-2 text-sm">{service.description}</p>
//               <button
//                 className="mt-4 bg-white text-green-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-700"
//                 onClick={() => handleCall(service.phoneNumber)}   
//               >
//                 {service.buttonText}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;




 