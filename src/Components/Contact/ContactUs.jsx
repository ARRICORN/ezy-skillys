"use client"
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import EmailImage from '../../assets/Contact/emailimage.png';
import CallImage from '../../assets/Contact/callimage.png';
import Rounded from '../../assets/Contact/Ellipse 3.png';
import Dots from '../../assets/Contact/Group 2147.png';
import Wave from '../../assets/Contact/Wave.png';
import './ContactUs.css';

const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          setMessage('Thank you for contacting us. We will reply to you shortly.');
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          console.log(error.text);
          setIsSuccess(false);
          setMessage('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="relative mt-[-105px]">
      <div className="relative bg-[#F98149] pt-52 pb-80">
        <h2 className="text-[53px] text-white font-bold text-center leading-[73px]">Contact Our Team</h2>
        <div className="absolute bottom-[-1px] left-0 w-full">
          <Image className="w-full" src={Wave} alt="wave" width={1920} height={120} />
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto relative z-10 top-[-94px]">
        <form
          onSubmit={sendEmail}
          ref={form}
          className="px-14 py-24 bg-white mt-[-160px] rounded-[30px] shadow-lg relative z-50"
          style={{ boxShadow: '10px 10px 54px 0px rgba(0, 0, 0, 0.04)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="mb-11">
              <label
                htmlFor="name"
                className="block text-[#003F7D] text-[23px] font-semibold leading-[34.5px] mb-4"
              >
                Your Name *
              </label>
              <input
                type="text"
                className="w-full h-[50px] pl-4 bg-transparent outline-none border border-[#C3CAD9] rounded-md"
                id="name"
                name="user_name"
                placeholder="Your Name *"
                required
              />
            </div>
            <div className="mb-11">
              <label
                htmlFor="email"
                className="block text-[#003F7D] text-[23px] font-semibold leading-[34.5px] mb-4"
              >
                Contact Email *
              </label>
              <input
                type="email"
                className="w-full h-[50px] pl-4 bg-transparent outline-none border border-[#C3CAD9] rounded-md"
                id="email"
                name="user_email"
                placeholder="Your Email *"
                required
              />
            </div>
            <div className="mb-11">
              <label
                htmlFor="phone_number"
                className="block text-[#003F7D] text-[23px] font-semibold leading-[34.5px] mb-4"
              >
                Phone Number *
              </label>
              <input
                type="text"
                className="w-full h-[50px] pl-4 bg-transparent outline-none border border-[#C3CAD9] rounded-md"
                id="phone_number"
                name="user_phone"
                placeholder="Phone Number *"
                required
              />
            </div>
            <div className="mb-11">
              <label
                htmlFor="user_services"
                className="block text-[#003F7D] text-[23px] font-semibold leading-[34.5px] mb-4"
              >
                Issue Related To *
              </label>
              <select
                id="user_services"
                name="user_services"
                className="w-full h-[50px] pl-4 bg-transparent outline-none border border-[#C3CAD9] rounded-md"
                required
              >
                <option value="Course Structure" className="text-black font-normal text-xl py-3">
                  Course Structure
                </option>
                <option value="Payment Failure" className="text-black font-normal text-xl">
                  Payment Failure
                </option>
                <option value="Other" className="text-black font-normal text-xl">
                  Other
                </option>
              </select>
            </div>
          </div>
          <div className="mt-7 mb-11">
            <label
              htmlFor="message"
              className="block text-[#003F7D] text-[23px] font-semibold leading-[34.5px] mb-4"
            >
              Your Message *
            </label>
            <textarea
              className="w-full h-[150px] pl-4 pt-3 bg-transparent outline-none border border-[#C3CAD9] rounded-md"
              id="message"
              name="message"
              placeholder="Your Message *"
              required
            ></textarea>
          </div>
          <p className="text-xl font-normal text-[#5A7184]">
            By submitting this form you agree to our terms and conditions and our Privacy Policy
            which explains how we may collect, use and disclose your personal information including
            to third parties.
          </p>
          <button
            type="submit"
            className="text-center mt-11 flex rounded-md border bg-[#003F7D] text-white font-bold text-xl py-2 px-8"
          >
            Send
          </button>
          {message && (
            <p className={`mt-4 text-xl ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </form>

        <div className="absolute left-[-64px] bottom-[40%] z-0">
          <Image className="" width={100} height={100} src={Dots} alt="Dots" />
        </div>
        <div className="absolute right-0 bottom-[30%] md:right-[0px] md:bottom-[17%]  lg:right-[-80px] lg:bottom-[23%] z-0 overflow-hidden">
          <Image className="w-40" width={100} height={100} src={Rounded} alt="Rounded Image" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto mt-20 max-w-7xl">
  <div className="text-center mx-auto max-w-sm">
    <div className="flex flex-col items-center">
      <Image width={100} height={100} src={EmailImage} alt="Email Icon" />
      <h4 className="text-[#F98149] font-bold text-[26px] leading-6 pt-8">Email us</h4>
      <p className="text-black font-normal text-lg pt-4">
        Email us for general queries, including marketing and partnership opportunities.
      </p>
      <a href="mailto:hello@ezyskills.com" className="text-[#003F7D] font-bold text-lg pt-7">
        hello@ezyskills.com
      </a>
    </div>
  </div>
  
  <div className="text-center mx-auto max-w-sm">
    <div className="flex flex-col items-center">
      <Image width={100} height={100} src={CallImage} alt="Call Icon" />
      <h4 className="text-[#F98149] font-bold text-[26px] leading-6 pt-8">Call Us</h4>
      <p className="text-black font-normal text-lg pt-4">
        Call us to speak to a member of our team. We are always happy to help.
      </p>
      <a href="tel:+1234567890" className="text-[#003F7D] font-bold text-lg pt-7">
        +1234567890
      </a>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default ContactUs;