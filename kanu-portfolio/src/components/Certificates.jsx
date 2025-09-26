import React, { useState } from "react";
import Certificate1 from "../assets/Certificate1.png";
import Certificate2 from "../assets/Certificate2.png";
import Certificate3 from "../assets/Certificate3.png";
import Certificate4 from "../assets/Certificate4.png";
import Certificate5 from "../assets/Certificate5.png";
import { RiFullscreenFill } from "react-icons/ri";

const Certificates = () => {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (img) => setPopupImage(img);
  const closePopup = () => setPopupImage(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5" id="certificates">
        {[Certificate1, Certificate2, Certificate3, Certificate4, Certificate5].map((img, index) => (
          <div key={index} className="relative border-8 border-sky-950/70 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer" onClick={() => openPopup(img)}>
            <img src={img} alt={`Certificate ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 text-white">
              <RiFullscreenFill className="text-4xl"/>
              <span className="text-white text-lg font-semibold px-4 py-2 rounded-lg">View Certificate</span>
            </div>
          </div>
        ))}
      </div>

      {popupImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full px-5">
            <img src={popupImage} alt="Certificate" className="w-full rounded-lg shadow-lg" />
            <button onClick={closePopup} className="absolute top-5 right-10 text-white text-2xl font-bold bg-black/80 px-3 py-1 rounded-full cursor-pointer">✕</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;