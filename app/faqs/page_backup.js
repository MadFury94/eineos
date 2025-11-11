"use client";
import React, { useState } from "react";
import ReusableHerosection from "../components/ReusableHerosection";
import { MdKeyboardArrowDown } from "react-icons/md";

const page = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      category: "TRADEMARK",
      subtitle: "Understanding Trademarks in Nigeria",
      questions: [
        {
          question: "What is a trademark?",
          answer: "A trademark is a distinctive sign, symbol, word, or phrase that identifies and distinguishes the source of goods or services of one business from those of others. In Nigeria, trademarks can include names, logos, slogans, colors, sounds, or any combination that serves to identify your brand in the marketplace."
        },
        {
          question: "Why register a trademark?",
          answer: "Registering your trademark provides legal protection and exclusive rights to use your brand name or logo in Nigeria. It prevents others from using similar marks, helps build brand recognition, provides legal remedies against infringement, and can be a valuable business asset that increases in value over time."
        },
        {
          question: "How long does a trademark registration last?",
          answer: "In Nigeria, trademark registration is valid for 7 years from the date of filing. After the initial period, it can be renewed for subsequent periods of 14 years each, indefinitely, as long as renewal fees are paid and the trademark continues to be used in commerce."
        }
      ]
    },
    {
      category: "How to Register a Trademark in Nigeria",
      subtitle: "",
      questions: [
        {
          question: "Do I need to conduct a trademark search before filing?",
          answer: "Yes, it's highly recommended to conduct a comprehensive trademark search before filing your application. This helps identify existing similar or identical trademarks that might conflict with yours, saving you time and money by avoiding potential rejections or opposition proceedings."
        },
        {
          question: "How do I register a trademark in Nigeria?",
          answer: "To register a trademark in Nigeria: 1) Conduct a trademark search, 2) Prepare your application with required documents, 3) Submit application to the Trademark Registry, 4) Pay required fees, 5) Wait for examination, 6) Respond to any objections, 7) Publication in the Trade Marks Journal, 8) Receive certificate if no opposition is filed."
        }
      ]
    },
    {
      category: "Eligibility and Requirements",
      subtitle: "",
      questions: [
        {
          question: "Who can file a trademark application?",
          answer: "Any person, company, partnership, or organization that uses or intends to use a trademark in Nigeria can file an application. This includes Nigerian citizens, foreign nationals, local companies, and international businesses seeking protection in Nigeria. You must have a legitimate interest in using the trademark."
        },
        {
          question: "What can be registered as a trademark?",
          answer: "In Nigeria, you can register words, names, signatures, letters, numerals, symbols, logos, colors, shapes, sounds, and any combination of these elements as trademarks, provided they are distinctive and not descriptive of the goods or services they represent."
        },
        {
          question: "What cannot be registered as a trademark?",
          answer: "You cannot register marks that are: purely descriptive of goods/services, common surnames, geographical names, scandalous or offensive material, government symbols, flags, religious symbols, marks that deceive the public, or marks identical to existing registered trademarks in the same class."
        },
        {
          question: "Is there any disclaimer practice?",
          answer: "Yes, in certain cases, the Trademark Registry may require disclaimers for parts of your trademark that are not distinctive or are descriptive. For example, if your trademark contains generic terms or geographical names, you may need to disclaim exclusive rights to those specific elements while still protecting the trademark as a whole."
        },
        {
          question: "What are the requirements for filing a trademark application?",
          answer: "To file a trademark application in Nigeria, you need: 1) Completed application form (TM2), 2) Clear representation of the trademark, 3) List of goods/services with appropriate classification, 4) Applicant's details and address for service in Nigeria, 5) Power of attorney (if using an agent), 6) Priority documents (if claiming priority), and 7) Required filing fees."
        }
      ]
    },
    {
      category: "Filing and Payment",
      subtitle: "",
      questions: [
        {
          question: "Must I design a logo before I can register a trademark?",
          answer: "No, you don't need to design a logo to register a trademark. Trademarks can be words, names, slogans, or any distinctive sign. However, if you plan to use a logo as part of your brand identity, it's advisable to register it as a trademark for protection. You can register word marks, logo marks, or combination marks separately."
        },
        {
          question: "How can I make payment?",
          answer: "Trademark application fees in Nigeria can be paid through several methods: 1) Bank draft made payable to 'Commercial Law Department', 2) Online payment through the IPO Nigeria portal, 3) Direct bank transfer to designated government accounts, 4) Cash payment at the registry office during business hours. All payments must include the correct application reference number."
        },
        {
          question: "What is mark representation?",
          answer: "Mark representation is how your trademark appears in the official records and determines the scope of your protection. It includes the visual appearance of your mark - whether it's text only, logo only, or a combination. The representation must be clear, precise, and show exactly what you want to protect. For color marks, specific color codes should be provided."
        }
      ]
    },
    {
      category: "Validity and Territorial Scope",
      subtitle: "",
      questions: [
        {
          question: "Is a trademark registration valid for all goods and services?",
          answer: "No, trademark registration is limited to the specific goods and services listed in your application and classified according to the Nice Classification system. Your trademark protection only extends to the classes you've registered for. If you want to expand to other goods/services categories, you'll need to file additional applications for those specific classes."
        },
        {
          question: "Is a Nigerian trademark recognized internationally?",
          answer: "No, Nigerian trademark registration only provides protection within Nigeria's borders. However, Nigeria is a member of the Madrid Protocol, which allows for international trademark registration through a single application. To protect your trademark in other countries, you can either file individual applications in each country or use the Madrid System for international registration."
        },
        {
          question: "Can a trademark be sold or licensed?",
          answer: "Yes, trademarks are valuable business assets that can be sold (assigned) or licensed to other parties. Any assignment or licensing agreement must be recorded with the Trademark Registry to be legally effective. The new owner or licensee must meet the same requirements as the original applicant, and proper documentation must be filed with the registry."
        }
      ]
    },
    {
      category: "Duration and Renewal",
      subtitle: "",
      questions: [
        {
          question: "How long does trademark registration take?",
          answer: "The trademark registration process in Nigeria typically takes 12-18 months from filing to registration, assuming no objections or oppositions. This includes examination (3-6 months), publication in the Trade Marks Journal (3 months opposition period), and final registration. Complex cases or those with objections may take longer to resolve."
        },
        {
          question: "What is the post-registration and renewal process?",
          answer: "After registration, you must renew your trademark every 14 years to maintain protection. The first renewal is due 7 years after initial registration, then every 14 years thereafter. You should apply for renewal 6 months before expiry. Late renewals are possible within 6 months after expiry with additional fees. Failure to renew results in loss of trademark rights."
        }
      ]
    },
    {
      category: "Post-Registration Best Practices",
      subtitle: "",
      questions: [
        {
          question: "Why are post-registration steps important?",
          answer: "Post-registration maintenance is crucial to preserve your trademark rights. You must actively use your trademark in commerce, monitor for infringement, maintain proper records, file renewals on time, and update your registration if business details change. Failure to maintain your trademark properly can result in cancellation or weakening of your rights."
        },
        {
          question: "What are the best practices after registration?",
          answer: "After registration: 1) Use your trademark consistently in commerce, 2) Monitor the market for potential infringement, 3) Keep detailed records of trademark use, 4) Update your registration if you change business name or address, 5) Set reminders for renewal deadlines, 6) Enforce your rights against infringers, 7) Consider registering in additional classes as your business grows, 8) Use proper trademark symbols (®)."
        }
      ]
    },
    {
      category: "Foreign Applicants",
      subtitle: "",
      questions: [
        {
          question: "Can foreigners register trademarks in Nigeria?",
          answer: "Yes, foreign individuals and companies can register trademarks in Nigeria. However, they must have an address for service in Nigeria or appoint a local agent/attorney to represent them. Foreign applicants can also claim priority based on earlier applications filed in other countries within 6 months of the first filing, provided there's a reciprocal arrangement or both countries are party to the Paris Convention."
        }
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ReusableHerosection 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about trademark registration in Nigeria" 
      />
      
      <div className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h2>
              {section.subtitle && (
                <p className="text-gray-600 mb-4">{section.subtitle}</p>
              )}
              
              <div className="space-y-4">
                {section.questions.map((faq, questionIndex) => (
                  <div key={questionIndex} className="border border-gray-200 rounded-lg">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      onClick={() => toggleAccordion(sectionIndex, questionIndex)}
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <MdKeyboardArrowDown 
                        className={`text-xl text-gray-500 transition-transform ${
                          isOpen(sectionIndex, questionIndex) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen(sectionIndex, questionIndex) && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* Trademark Classes Information Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Trademark Classes in Nigeria</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Trademarks in Nigeria are categorized into 45 classes (1-34 for goods and 35-45 for services). 
                You can view the full classification on our website or download the Trademark Class Guide (PDF) for 
                detailed descriptions.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">
                  List of Trademarks.docx
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

  return (
    <main>
      <ReusableHerosection title="FAQs" />
      <section className="mt-10 w-5/6 mx-auto text-center">
        <p className="text-3xl font-semibold">Frequently Asked Questions</p>
        <p>
          Register and manage Trademarks, Patents, and Industrial Designs with
          Nigeria’s official Intellectual Property Office.
        </p>
      </section>

      <section className="w-5/6 mx-auto my-10">
        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            {/* Section Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {section.category}
              </h2>
              {section.subtitle && (
                <p className="text-gray-600">{section.subtitle}</p>
              )}
            </div>

            {/* FAQ Questions */}
            <div className="space-y-4">
              {section.questions.map((faq, faqIndex) => {
                const globalIndex = `${sectionIndex}-${faqIndex}`;
                const isOpen = openFAQ === globalIndex;
                
                return (
                  <div
                    key={faqIndex}
                    className="bg-white rounded-lg shadow-sm border border-gray-200"
                  >
                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-700 font-medium">
                        {faq.question}
                      </span>
                      <MdKeyboardArrowDown
                        className={`text-gray-500 text-xl transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Answer */}
                    {isOpen && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default page;
