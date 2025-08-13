import React from 'react'
import { RxPerson } from "react-icons/rx";
import { MdMailOutline } from "react-icons/md";
import { BiMessage } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ccbc912d-a0aa-4448-8bc1-e7e6349e3b10");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='pt-10' id='contact'>
        <div className='text-center'>
            <p className='text-5xl font-bold gradient-text-fallback'>Contact Me</p>
            <p className='font-medium text-gray-400 py-1'>Got a question? Send me a message, and I'll get back to you soon.</p>
        </div>
        <div className='flex justify-between pt-10 px-6'>
            <div className='p-10 rounded-2xl bg-gradient-to-b from-sky-400/10 to-sky-700/10 backdrop-blur-md'>
                <div className='text-center'>
                    <p className='text-4xl font-bold gradient-text-heading'>- Connect With Me -</p>
                </div>
                <div className='border border-gray-400/50 rounded-lg p-5 mt-10 group bg-gray-500/10  hover:bg-gradient-to-r hover:from-blue-700/10 hover:to-sky-300/10 hover:bg-opacity-20'>
                    <a href="https://www.linkedin.com/in/kanujan-subakaran-156339292/" className='flex justify-between items-center' target='_blank'>
                      <div className='flex'>
                        <div className='bg-[#0a66c251] p-3 text-3xl rounded-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-115'>
                            <SlSocialLinkedin className='text-[#0A66C2]'/>
                        </div>
                        <div className='px-3'>
                            <p className='text-xl font-semibold text-white'>Let's Connect</p>
                            <p className=' text-gray-400'>on LinkedIn</p>
                        </div>
                      </div>
                      <BsBoxArrowUpRight className='text-white text-xl opacity-0 translate-x-2 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0'/>
                    </a>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                <div className='border border-gray-400/50 rounded-2xl p-5 mt-5 group bg-gray-500/10  hover:bg-gradient-to-r hover:from-purple-400/10 hover:via-red-400/10 hover:to-yellow-700/30 hover:bg-opacity-20'>
                    <a href="https://www.instagram.com/kanujan_sk?igsh=a2xoMWhjMHJrbm5v&utm_source=qr" className='flex justify-between items-center' target='_blank'>
                      <div className='flex'>
                        <div className='bg-[#c20a3b51] p-3 text-3xl rounded-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-115'>
                            <FaInstagram className='text-[#ab0947]'/>
                        </div>
                        <div className='px-3'>
                            <p className='text-lg font-medium text-white'>Instagram</p>
                            <p className=' text-gray-400'>kanujan_sk</p>
                        </div>
                      </div>
                      <BsBoxArrowUpRight className='text-white text-xl opacity-0 translate-x-2 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0'/>
                    </a>
                </div>
                <div className='border border-gray-400/50 rounded-2xl p-5 mt-5 group bg-gray-500/10  hover:bg-gradient-to-r hover:from-blue-800/30 hover:to-sky-400/10 hover:bg-opacity-20'>
                    <a href="https://www.facebook.com/share/1UaGcUQyhQ/?mibextid=wwXIfr" className='flex justify-between items-center' target='_blank'>
                      <div className='flex'>
                        <div className='bg-[#0000ff7f] p-3 text-3xl rounded-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-115'>
                            <FaFacebookF className='text-white'/>
                        </div>
                        <div className='px-3'>
                            <p className='text-lg font-medium text-white'>Facebook</p>
                            <p className=' text-gray-400'>@Kanujan SK</p>
                        </div>
                      </div>
                      <BsBoxArrowUpRight className='text-white text-xl opacity-0 translate-x-2 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0'/>
                    </a>
                </div>
                <div className='border border-gray-400/50 rounded-2xl p-5 group bg-gray-500/10  hover:bg-gradient-to-r hover:from-black/20 hover:via-teal-400/20 hover:to-red-400/20 hover:bg-opacity-20'>
                    <a href="https://www.tiktok.com/@kanujan_sk?_t=ZS-8ypoEBy4jq4&_r=1" className='flex justify-between items-center' target='_blank'>
                      <div className='flex'>
                        <div className='bg-black/50 p-3 text-3xl rounded-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-115'>
                            <RiTiktokLine className='text-white'/>
                        </div>
                        <div className='px-3'>
                            <p className='text-lg font-medium text-white'>Tiktok</p>
                            <p className=' text-gray-400'>@kanujan_sk</p>
                        </div>
                      </div>
                      <BsBoxArrowUpRight className='text-white text-xl opacity-0 translate-x-2 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0'/>
                    </a>
                </div>
                <div className='border border-gray-400/50 rounded-2xl p-5 group bg-gray-500/10  hover:bg-gradient-to-r hover:from-red-800/20 hover:to-red-400/10 hover:bg-opacity-20'>
                    <a href="https://youtube.com/@kanujan?si=88UOywyDRiwdPpld" className='flex justify-between items-center' target='_blank'>
                      <div className='flex'>
                        <div className='bg-[#c20a0a51] p-3 text-3xl rounded-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-115'>
                            <FaYoutube className='text-[#ec0000]'/>
                        </div>
                        <div className='px-3'>
                            <p className='text-lg font-medium text-white'>YouTube</p>
                            <p className=' text-gray-400'>@Kanu Jan</p>
                        </div>
                      </div>
                      <BsBoxArrowUpRight className='text-white text-xl opacity-0 translate-x-2 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0'/>
                    </a>
                </div>
                </div>
                <div className='border border-gray-400/50 rounded-2xl p-5 mt-5 group bg-gray-500/10  hover:bg-gradient-to-r hover:from-black/20 hover:to-gray-400/10 hover:bg-opacity-20'>
                    <a href="https://github.com/KanujanS" className='flex justify-between items-center' target='_blank'>
                      <div className='flex'>
                        <div className='bg-gray-400/20 p-3 text-3xl rounded-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-115'>
                            <SiGithub className='text-white'/>
                        </div>
                        <div className='px-3'>
                            <p className='text-xl font-semibold text-white'>Github</p>
                            <p className=' text-gray-400'>@KanujanS</p>
                        </div>
                      </div>
                      <BsBoxArrowUpRight className='text-white text-xl opacity-0 translate-x-2 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0'/>
                    </a>
                </div>
            </div>
            <div className='pt-10 px-10 rounded-2xl bg-gradient-to-b from-sky-400/10 via-teal-400/10 to-sky-700/10 backdrop-blur-md'>
                <div className='text-center'>
                    <p className='text-4xl font-bold gradient-text-heading '>- Get In Touch -</p>
                    <p className=' text-gray-400 py-1'>Have something to discuss? Send me a message and let's talk.</p>
                </div>
                <form onSubmit={onSubmit} className='pt-8 pb-3 space-y-5'>
                    <div className='flex text-gray-400 text-xl items-center w-full px-5 py-3 border border-gray-400/50 gap-2 rounded-2xl bg-sky-950/50 group focus-within:border-sky-300'>
                        <RxPerson className='text-2xl group-focus-within:text-sky-300'/>
                        <input type="text" placeholder='Your Name' name='name' className='outline-none w-full text-white' required/>
                    </div>
                    <div className='flex text-gray-400 text-xl items-center w-full px-5 py-3 border border-gray-400/50 gap-2 rounded-2xl bg-sky-950/50 group focus-within:border-sky-300'>
                        <MdMailOutline className='text-2xl group-focus-within:text-sky-300'/>
                        <input type="email" placeholder='Your Email' name='email' className='outline-none w-full text-white' required/>
                    </div>
                    <div className='flex text-gray-400 text-xl w-full px-5 py-3 border border-gray-400/50 gap-2 rounded-2xl bg-sky-950/50 group focus-within:border-sky-300'>
                        <BiMessage className='text-2xl group-focus-within:text-sky-300 mt-1'/>
                        <textarea type="text" placeholder='Your Message' name='message' className='outline-none w-full pb-25 text-white resize-none' required/>
                    </div>
                    <button className='flex items-center cursor-pointer gap-2 w-full justify-center py-4 bg-gradient-to-r from-sky-600 to-teal-600  text-white rounded-2xl'>
                        <p className='font-semibold text-lg'>Send Message</p>
                        <LuSend className='text-2xl'/>
                    </button>
                </form>
                <span className='text-gray-400 text-sm'>{result}</span>
            </div>
        </div>
    </div>
  )
}

export default Contact