import { FaTelegram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";


export default function ContactPage(){

  return(
    <div>
      <section id="contact" className="py-16">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-gray-800">
          <h2 className="text-2xl font-bold text-black mb-4">Get in Touch With Me</h2>
          <div className="flex gap-4">
            <a 
              href="https://t.me/ttadesse627" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <FaTelegram size={24} />
            </a>
            <a 
              href="mailto:ttadesse627@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <FiMail size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}