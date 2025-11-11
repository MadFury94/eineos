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
      category: "Pre-Application",
      subtitle: "",
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
        },
        {
          question: "What can be registered as a trademark?",
          answer: "In Nigeria, you can register words, phrases, logos, symbols, designs, colors, sounds, or any combination thereof as a trademark. The mark must be distinctive, not descriptive of the goods/services, not confusingly similar to existing trademarks, and not contrary to public policy or accepted principles of morality."
        }
      ]
    },
    {
      category: "Application Process",
      subtitle: "",
      questions: [
        {
          question: "How do I apply for a trademark in Nigeria?",
          answer: "To apply for a trademark in Nigeria: 1) Conduct a trademark search, 2) Prepare your application with required documents, 3) File with the Nigerian Trademark Registry, 4) Pay prescribed fees, 5) Wait for examination, 6) Respond to any objections, 7) Publication in Trade Marks Journal, 8) Opposition period (3 months), 9) Registration certificate issued if no opposition."
        },
        {
          question: "What documents do I need for trademark application?",
          answer: "Required documents include: completed Form TM2 application form, clear representation of the trademark, list of goods/services to be covered, applicant's details and address for service in Nigeria, power of attorney (if using an agent), priority documents (if claiming priority), and prescribed application fees."
        },
        {
          question: "How much does trademark registration cost?",
          answer: "Trademark registration fees in Nigeria vary by class and type of applicant. Basic fees include application fees, search fees, registration fees, and publication fees. Additional costs may include attorney fees, priority claim fees, and expedited processing fees. Contact the Nigerian Trademark Registry for current fee schedule."
        },
        {
          question: "Can I file my trademark application online?",
          answer: "Yes, Nigeria has implemented an online trademark application system through the Nigerian Trademark Registry portal. You can file applications, track status, pay fees, and manage your trademark portfolio online. However, some documents may still need to be submitted physically or by authorized agents."
        }
      ]
    },
    {
      category: "Requirements",
      subtitle: "",
      questions: [
        {
          question: "What are the requirements for trademark registration?",
          answer: "Requirements include: the mark must be distinctive and not descriptive, not similar to existing registered trademarks, not contrary to public policy, applicant must have intention to use or be using the mark in Nigeria, proper classification of goods/services, payment of required fees, and compliance with formal requirements of the application."
        },
        {
          question: "Do I need to use my trademark before registering?",
          answer: "No, Nigeria operates on a 'first-to-file' system, meaning you don't need to use your trademark before filing an application. However, you must have a bona fide intention to use the trademark in Nigeria. Actual use will be required to maintain and renew your registration."
        },
        {
          question: "Can I register a trademark that's similar to an existing one?",
          answer: "Generally, no. Your trademark cannot be confusingly similar to an existing registered trademark in the same or related class of goods/services. The Nigerian Trademark Registry conducts examination to identify conflicts. However, marks can coexist in different classes or if they're sufficiently different to avoid consumer confusion."
        }
      ]
    },
    {
      category: "Representation",
      subtitle: "",
      questions: [
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
    }
  ];

  return (
    <main>
      <ReusableHerosection title="FAQs" />
      <section className="mt-10 w-5/6 mx-auto text-center">
        <p className="text-3xl font-semibold">Frequently Asked Questions</p>
        <p>
          Register and manage Trademarks, Patents, and Industrial Designs with
          Nigeria's official Intellectual Property Office.
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