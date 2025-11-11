"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import contacthero from "../../public/contactHero.jpg";
import PrimaryButton from "@/app/components/PrimaryButton";
import ReusableHerosection from "../components/ReusableHerosection";
import {
  MdAttachFile,
  MdClose,
  MdMailOutline,
  MdAccessTime,
} from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import ScrollAnimation from "../components/ScrollAnimation";

const page = () => {
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [selectedRegistry, setSelectedRegistry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Registry options array
  const registryOptions = ["Trademark Registry", "Patent and Design Registry"];

  // Subject options array
  const subjectOptions = [
    "Application Filing",
    "Registration Status",
    "Certificate Request",
    "Renewal Services",
    "Assignment/Transfer",
    "Opposition Matters",
    "Technical Support",
    "General Inquiry",
    "Payment Issues",
    "Document Amendment",
  ];

  // File upload handler
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      file: file,
    }));
    setAttachedFiles((prev) => [...prev, ...newFiles]);
    event.target.value = ""; // Reset file input
  };

  // Remove file handler
  const removeFile = (fileId) => {
    setAttachedFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  // Format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  // Handle registry selection change
  const handleRegistryChange = (e) => {
    setSelectedRegistry(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData(e.target);

      // Add attached files to formData
      attachedFiles.forEach((file, index) => {
        formData.append(`attachment${index}`, file.file);
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        // Reset form
        e.target.reset();
        setAttachedFiles([]);
        setSelectedRegistry("");

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <ReusableHerosection title="Contact Us" />

      <ScrollAnimation>
        <section className="bg-gray-100 w-5/6 my-5 py-10 mx-auto">
          <div className="lg:flex justify-between mx-auto w-11/12 gap-8">
            <form onSubmit={handleSubmit} className="lg:w-1/2 w-full">
              <p className=" mb-5 font-bold text-2xl">
                Get in Touch with{" "}
                <span className="block text-green-700">IPO Nigeria</span>
              </p>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="mb-5 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                  Form submitted successfully! We will get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-5 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                  Failed to submit form. Please try again later.
                </div>
              )}

              <select
                className="bg-white px-3 py-2 w-full mb-5 rounded-md text-gray-400 outline-none"
                name="registry"
                value={selectedRegistry}
                onChange={handleRegistryChange}
                required
              >
                <option value="" disabled>
                  Select Registry
                </option>
                {registryOptions.map((option, index) => (
                  <option key={index} value={option} className="text-gray-700">
                    {option}
                  </option>
                ))}
              </select>

              {/* Show selected registry email */}
              {selectedRegistry && (
                <p className="mb-5 text-sm text-gray-600">
                  Your message will be sent to:{" "}
                  <span className="font-semibold text-green-700">
                    {selectedRegistry === "Trademark Registry"
                      ? "trademark@iponigeria.com"
                      : "patent.design@iponigeria.com"}
                  </span>
                </p>
              )}

              <div className="grid gap-5 grid-cols-2">
                <input
                  className="bg-white px-3 py-2 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  name="firstName"
                  required
                />
                <input
                  className="bg-white px-3 py-2 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  name="lastName"
                  required
                />
              </div>

              <div className="grid gap-5 grid-cols-2">
                <input
                  className="bg-white px-3 py-2 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  required
                />
                <input
                  className="bg-white px-3 py-2 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  name="phone"
                  required
                />
              </div>
              <select
                className="bg-white px-3 py-2 w-full mb-5 rounded-md text-gray-400 outline-none"
                name="subject"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Subject
                </option>
                {subjectOptions.map((option, index) => (
                  <option key={index} value={option} className="text-gray-700">
                    {option}
                  </option>
                ))}
              </select>
              <div className="relative">
                <textarea
                  className="w-full px-3 py-2 bg-white mt-2 lg:mt-5 rounded-md placeholder:text-gray-400 outline-none"
                  cols="20"
                  rows="6"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>

                {/* File Upload Section */}
                <div className="mt-3">
                  <label className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md cursor-pointer transition-colors">
                    <MdAttachFile className="text-gray-600" />
                    <span className="text-gray-700 text-sm">
                      Upload Attachment
                    </span>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    Supported files: PDF, DOC, DOCX, TXT, JPG, PNG (Max 5MB
                    each)
                  </p>
                </div>

                {/* Attached Files Display */}
                {attachedFiles.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Attached Files:
                    </p>
                    <div className="space-y-2">
                      {attachedFiles.map((file) => (
                        <div
                          key={file.id}
                          className="flex items-center justify-between bg-gray-50 p-2 rounded-md"
                        >
                          <div className="flex items-center gap-2">
                            <MdAttachFile className="text-gray-500 text-sm" />
                            <span className="text-sm text-gray-700 truncate">
                              {file.name}
                            </span>
                            <span className="text-xs text-gray-500">
                              ({formatFileSize(file.size)})
                            </span>
                          </div>
                          <button
                            onClick={() => removeFile(file.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                            type="button"
                          >
                            <MdClose className="text-lg" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <PrimaryButton
                type="submit"
                className="w-full mt-5"
                disabled={isSubmitting}
                asLink={false}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </PrimaryButton>
            </form>

            <div className="bg-[#166534] mt-10 lg:mt-0 lg:w-1/2 rounded-2xl text-white">
              <div className="w-5/6 mx-auto py-10">
                <div>
                  <p className="text-xl font-semibold mb-2">Address</p>
                  <div className="flex items-start gap-3">
                    <IoLocationOutline className="h-6 w-6 shrink-0 mt-1" />
                    <p>
                      Block D, Old secretariat, Area 1, Garki, Abuja, Nigeria
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-xl font-semibold mb-4">Contact</p>

                  <div className="mb-4">
                    <p className="font-semibold mb-2">Trademark Registry</p>
                    <div className="flex items-center gap-2 mb-1">
                      <MdMailOutline className="h-5 w-5 shrink-0" />
                      <p>trademark@iponigeria.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoCallOutline className="h-5 w-5 shrink-0" />
                      <p>08034351514</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">
                      Patent and Design Registry
                    </p>
                    <div className="flex items-center gap-2 mb-1">
                      <MdMailOutline className="h-5 w-5 shrink-0" />
                      <p>patent.design@iponigeria.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoCallOutline className="h-5 w-5 shrink-0" />
                      <p>+2349163570744</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-xl font-semibold mb-2">Open time</p>
                  <div className="flex items-start gap-3">
                    <MdAccessTime className="h-6 w-6 shrink-0 mt-1" />
                    <p>Monday - Friday: 9:00am - 4:00pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white w-11/12 mt-10 mx-auto">
            <div className="mx-auto w-11/12 py-5">
              <p className="text-2xl font-semibold mb-2">Technical Support</p>
              <p>
                For technical support, please submit a support ticket
                (hyperlink) through our portal. You may also contact us via
                phone or WhatsApp for urgent assistance:{" "}
                <span className="text-green-700">+2349038979681</span>
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
};

export default page;
