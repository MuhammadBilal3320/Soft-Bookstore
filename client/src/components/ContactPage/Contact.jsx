// src/components/ContactUs.jsx
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Navbar from '../HomePage/Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen dark:text-white text-black dark:bg-base-100 bg-white p-4">
                <div className="w-full max-w-5xl dark:text-white text-black dark:bg-base-100 bg-white rounded-lg shadow-heroShadow p-8 md:p-12">
                    <div className="flex flex-col md:flex-row">
                        {/* Left Side */}
                        <div className="md:w-1/3 flex flex-col items-center md:items-start space-y-8 relative">
                            {/* Vertical Line for Desktop */}
                            <div className="hidden md:block absolute right-[-15px] top-1/2 transform -translate-y-1/2 h-4/5 w-0.5 bg-[#afafb6]"></div>

                            {/* Address */}
                            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                <FaMapMarkerAlt className="text-3xl text-[#3e2093] mb-2" />
                                <h3 className="text-lg font-medium text-[#3e2093]">Address</h3>
                                <p className="text-sm dark:text-white text-black dark:bg-base-100 bg-white">Unknown</p>
                                <p className="text-sm dark:text-white text-black dark:bg-base-100 bg-white">Unknown</p>
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                <FaPhoneAlt className="text-3xl text-[#3e2093] mb-2" />
                                <h3 className="text-lg font-medium text-[#3e2093]">Phone</h3>
                                <p className="text-sm dark:text-white text-black dark:bg-base-100 bg-white">+0092 3123 5678</p>
                                <p className="text-sm dark:text-white text-black dark:bg-base-100 bg-white">+0092 3434 5678</p>
                            </div>

                            {/* Email */}
                            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                <FaEnvelope className="text-3xl text-[#3e2093] mb-2" />
                                <h3 className="text-lg font-medium text-[#3e2093]">Email</h3>
                                <p className="text-sm dark:text-white text-black dark:bg-base-100 bg-white">Unknown@gmail.com</p>
                                <p className="text-sm dark:text-white text-black dark:bg-base-100 bg-white">Unknown@gmail.com</p>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="md:w-2/3 mt-8 md:mt-0 md:ml-12">
                            <h2 className="text-2xl font-semibold dark:text-white text-black mb-4">Send us a message</h2>
                            <p className="text-sm dark:text-white text-black dark:bg-base-100 bg-white mb-6">
                                If you have any work from me or any types of queries related to my tutorial, you can send me a message from here. It's my pleasure to help you.
                            </p>
                            <form action="#" className="space-y-4">
                                {/* Name Input */}
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 dark:text-white text-black dark:bg-base-100 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3e2093] text-sm"
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 dark:text-white text-black dark:bg-base-100 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3e2093] text-sm"
                                    />
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <textarea
                                        placeholder="Enter your message"
                                        rows="5"
                                        className="w-full px-4 py-3 dark:text-white text-black dark:bg-base-100 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3e2093] text-sm resize-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#3e2093] text-white py-3 rounded-lg hover:bg-[#5029bc] transition-colors duration-300 text-sm font-semibold"
                                    >
                                        Send Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ContactUs;
