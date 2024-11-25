import React from "react";

const services = [
  {
    title: "Counseling Sessions",
    description:
      "Personalized counseling sessions to help individuals overcome addiction and lead a healthy life.",
    buttonText: "Call Now!",
    image:
      "https://media.istockphoto.com/id/1367174194/photo/trying-to-save-a-relationship.jpg?s=612x612&w=0&k=20&c=-QVn4zlMqSN_FCBRpcQtIfqvAZXdWG_DKqkkYv2jwKY=",
    phoneNumber: "+1234567890",
  },
  {
    title: "Detoxification Programs",
    description:
      "Safe and effective detox programs to cleanse the body of harmful substances.",
    buttonText: "Call Now!",
    image:
      "https://media.istockphoto.com/id/1173363240/photo/group-of-veterans-attend-meeting.jpg?s=612x612&w=0&k=20&c=VwpOMh5BvyrnyxyR3v90bqiApOip-4-vboYP03jza38=",
    phoneNumber: "+0987654321",
  },
  {
    title: "Rehabilitation Support",
    description:
      "Comprehensive rehabilitation to ensure long-term recovery and mental well-being.",
    buttonText: "Call Now!",
    image:
      "https://media.istockphoto.com/id/2155530354/photo/circle-discussion-during-counseling-meeting.jpg?s=612x612&w=0&k=20&c=Itby5ESFVCWS02ZKG1OxT9u6V12Gn_nmpDTsbMaddyQ=",
    phoneNumber: "+1122334455",
  },
  {
    title: "Counseling Sessions",
    description:
    "Personalized counseling sessions to help individuals overcome addiction and lead a healthy life.",
    buttonText: "Call Now!",
    phoneNumber: "+1122334455",
    image:
    "https://media.istockphoto.com/id/1358921826/photo/human-digestive-system.jpg?s=612x612&w=0&k=20&c=tkcI3RaKeQpW9kVgtKItj5MKWkgG9-0_GGv7ClBB74o=",
  },

  {
    title: "Counseling Sessions",
    description:
    "Personalized counseling sessions to help individuals overcome addiction and lead a healthy life.",
    buttonText: "Call Now!",
    phoneNumber: "+1122334455",
    image:
      "https://media.istockphoto.com/id/97873871/photo/mri-brain-scan-of-head-and-skull-with-hand-pointing.jpg?s=612x612&w=0&k=20&c=OZ4ESri1Ux3KAl0QUUNixJbeQo9Gb4DCV-HGzxg6dlI=",
  },

  {
    title: "Counseling Sessions",
    description:
    "Personalized counseling sessions to help individuals overcome addiction and lead a healthy life.",
    buttonText: "Call Now!",
    phoneNumber: "+1122334455",
    image:
    "https://media.istockphoto.com/id/2169942905/photo/smiling-female-doctor-consults-patient-online-holding-a-tablet-of-pills-while-prescribing.jpg?s=612x612&w=0&k=20&c=Y6FDbwH-BSNlbaB0CKC8eb9z24F6EDpabQvbkvO5rUE=",
  },
];

const ServiceCard = () => {
  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-3xl font-bold text-white-700 mb-8">
        A Journey to Complete Wellness at Dhara Nasha Mukti Kendra
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white-700 text-green-700 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="p-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-sm">{service.description}</p>
              <button
                className="mt-4 bg-white text-green-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-700"
                onClick={() => handleCall(service.phoneNumber)}   
              >
                {service.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
