"use client";
import React, { useState } from "react";
import ReusableHerosection from "../components/ReusableHerosection";
import { MdKeyboardArrowDown } from "react-icons/md";

const page = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigation items for the tabs
  const navigationTabs = [
    { id: 'trademark', label: 'Trademark' },
    { id: 'patent', label: 'Patent' },
    { id: 'design', label: 'Design' },
    { id: 'general-faq', label: 'General FAQ' },
    { id: 'common-mistakes', label: 'Common Mistakes' }
  ];

  const faqData = [
    {
      category: "TRADEMARK",
      subtitle: "",
      sections: [
        {
          sectionTitle: "Understanding Trademarks in Nigeria",
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
          sectionTitle: "How to Register a Trademark in Nigeria",
          questions: [
            {
              question: "Do I need to conduct a trademark search before filing?",
              answer: "Yes, conducting a trademark search before filing is highly recommended. This helps identify potential conflicts with existing trademarks and increases your chances of successful registration. A thorough search can save time and money by avoiding objections during the examination process."
            },
            {
              question: "How do I register a trademark in Nigeria?",
              answer: "To apply for a trademark in Nigeria: 1) Conduct a trademark search, 2) Prepare your application with required documents, 3) File with the Nigerian Trademark Registry, 4) Pay prescribed fees, 5) Wait for examination, 6) Respond to any objections, 7) Publication in Trade Marks Journal, 8) Opposition period (3 months), 9) Registration certificate issued if no opposition."
            }
          ]
        },
        {
          sectionTitle: "Eligibility and Requirements",
          questions: [
            {
              question: "Who can file a trademark application?",
              answer: "Any individual, company, partnership, or organization that uses or intends to use a trademark in Nigeria can file an application. Foreign applicants must have an address for service in Nigeria or appoint a local agent/attorney to represent them."
            },
            {
              question: "What can be registered as a trademark?",
              answer: "In Nigeria, you can register words, phrases, logos, symbols, designs, colors, sounds, or any combination thereof as a trademark. The mark must be distinctive, not descriptive of the goods/services, not confusingly similar to existing trademarks, and not contrary to public policy or accepted principles of morality."
            },
            {
              question: "What cannot be registered as a trademark?",
              answer: "You cannot register marks that are: descriptive of goods/services, generic terms, deceptive or misleading, contrary to public policy or morality, similar to existing registered marks, national emblems or flags, or lacking distinctiveness. Geographical names and surnames may also face restrictions."
            },
            {
              question: "Is there any disclaimer practice?",
              answer: "Yes, disclaimers may be required for descriptive elements within your trademark. If your mark contains descriptive words or common terms, you may need to disclaim exclusive rights to those elements while maintaining protection for the mark as a whole. This allows registration while acknowledging that certain parts are not exclusively yours."
            },
            {
              question: "What are the requirements for filing a trademark application?",
              answer: "Requirements include: completed application form, clear representation of the mark, list of goods/services in appropriate classes, applicant's details and address for service in Nigeria, filing fees, power of attorney if using an agent, priority documents if claiming priority, and evidence of intention to use the mark in Nigeria."
            }
          ]
        },
        {
          sectionTitle: "Filing and Payment",
          questions: [
            {
              question: "Must I design a logo before I can register a trademark?",
              answer: "No, you don't need to design a logo before registering a trademark. You can register word marks (text only), logos, or combined marks. If you plan to use just text, you can register it as a word mark. However, if you intend to use a specific design or logo, it's better to register the complete mark as you plan to use it."
            },
            {
              question: "How can I make payment?",
              answer: "Trademark application fees in Nigeria can be paid through various methods including bank transfers, online payments through the Nigerian Trademark Registry portal, bank drafts payable to the registry, or cash payments at designated registry offices. All payments should include proper reference numbers for tracking."
            },
            {
              question: "What is mark representation?",
              answer: "Mark representation is how your trademark appears in the official records and determines the scope of your protection. It includes the visual appearance of your mark - whether it's text only, logo only, or a combination. The representation must be clear, precise, and show exactly what you want to protect. For color marks, specific color codes should be provided."
            }
          ]
        },
        {
          sectionTitle: "Validity and Territorial Scope",
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
          sectionTitle: "Duration and Renewal",
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
          sectionTitle: "Post-Registration Best Practices",
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
          sectionTitle: "Foreign Applicants",
          questions: [
            {
              question: "Can foreigners register trademarks in Nigeria?",
              answer: "Yes, foreign individuals and companies can register trademarks in Nigeria. However, they must have an address for service in Nigeria or appoint a local agent/attorney to represent them. Foreign applicants can also claim priority based on earlier applications filed in other countries within 6 months of the first filing, provided there's a reciprocal arrangement or both countries are party to the Paris Convention."
            }
          ]
        },
        {
          sectionTitle: "Trademark Classes in Nigeria",
          isTextOnly: true,
          content: {
            text: "Trademarks in Nigeria are categorized into 45 classes (1-34 for goods and 35-45 for services). You can view the full classification on our website or download the Trademark Class Guide (PDF) for detailed descriptions.",
            link: "List of Trademarks.docx"
          }
        }
      ]
    },
    {
      category: "PATENT",
      subtitle: "",
      sections: [
        {
          sectionTitle: "Understanding Patent in Nigeria",
          questions: [
            {
              question: "What is a Patent?",
              answer: "A patent is an exclusive right granted by the government to an inventor for a new, useful, and non-obvious invention. In Nigeria, patents provide protection for inventions, giving the patent holder the exclusive right to make, use, sell, or import the patented invention for a specified period, typically 20 years from the filing date."
            },
            {
              question: "Why register a patent?",
              answer: "Registering a patent provides legal protection for your invention, prevents others from making, using, or selling your invention without permission, allows you to license or sell your patent rights, enhances your business value and competitive advantage, and provides legal remedies against infringement."
            },
            {
              question: "How long does a patent registration last?",
              answer: "In Nigeria, utility patents are valid for 20 years from the filing date, provided annual maintenance fees are paid. After expiry, the invention enters the public domain and can be freely used by anyone."
            }
          ]
        },
        {
          sectionTitle: "How to Register a Patent in Nigeria",
          questions: [
            {
              question: "How do I register a patent in Nigeria?",
              answer: "To register a patent in Nigeria: 1) Ensure your invention is new, useful, and non-obvious, 2) Conduct a patent search, 3) Prepare detailed patent application with specifications and claims, 4) File application with the Nigerian Patents and Designs Registry, 5) Pay required fees, 6) Undergo examination process, 7) Respond to office actions if any, 8) Patent granted if all requirements are met."
            },
            {
              question: "How can I make payment?",
              answer: "Patent application fees in Nigeria can be paid through various methods including bank transfers, online payments through the registry portal, bank drafts payable to the Nigerian Patents and Designs Registry, or cash payments at designated registry offices. All payments should include proper reference numbers for tracking."
            }
          ]
        }
      ]
    },
    {
      category: "DESIGN",
      subtitle: "",
      sections: [
        {
          sectionTitle: "Understanding Industrial Designs",
          questions: [
            {
              question: "What is a design?",
              answer: "An Industrial Design refers to the ornamental or aesthetic aspect of an article. It may consist of three-dimensional features, such as the shape or surface of an article, or two-dimensional features, such as patterns, lines, or color. Industrial designs protect the visual design of objects that are not purely utilitarian."
            },
            {
              question: "Why register a design?",
              answer: "Registering an industrial design provides exclusive rights to use, manufacture, and sell products with that design. It prevents others from copying your design's appearance, enhances commercial value, provides legal protection against infringement, and can be licensed or sold as a business asset."
            }
          ]
        },
        {
          sectionTitle: "How to Register a Design in Nigeria",
          questions: [
            {
              question: "How do I register a design in Nigeria?",
              answer: "To register an Industrial Design in Nigeria: 1) Ensure your design is new and has individual character, 2) Prepare clear representations of your design from multiple angles, 3) File application with the Nigerian Patents and Designs Registry, 4) Pay required fees, 5) Undergo examination, 6) Design registered if requirements are met. Protection lasts for 5 years and can be renewed."
            },
            {
              question: "How can I make payment?",
              answer: "Industrial design application fees in Nigeria can be paid through various methods including bank transfers, online payments through the Nigerian Patents and Designs Registry portal, bank drafts payable to the registry, or cash payments at designated registry offices. All payments should include proper reference numbers for tracking."
            }
          ]
        }
      ]
    },
    {
      category: "General Intellectual Property FAQs",
      subtitle: "",
      sections: [
        {
          sectionTitle: "",
          questions: [
            {
              question: "What are the general requirements for IP registration?",
              answer: "General requirements for intellectual property registration in Nigeria include: submitting proper application forms, paying prescribed fees, providing accurate representations or descriptions, meeting specific criteria for each IP type (novelty for patents, distinctiveness for trademarks, individual character for designs), and complying with formal requirements set by the respective registries."
            },
            {
              question: "How long do IP registrations typically take?",
              answer: "IP registration timelines in Nigeria vary: Trademarks typically take 12-18 months, Patents take 2-4 years depending on complexity, and Industrial Designs usually take 6-12 months. Processing times may be longer if there are objections, oppositions, or if additional documentation is required."
            },
            {
              question: "Can I check the status of my IP application?",
              answer: "Yes, you can check the status of your intellectual property applications through the respective registry portals online. The Nigerian Trademark Registry and Patents & Designs Registry provide online tracking systems where you can monitor your application progress using your application number and other reference details."
            }
          ]
        }
      ]
    },
    {
      category: "COMMON MISTAKES BY ENTREPRENEURS AND SMALL BUSINESS OWNERS",
      subtitle: "",
      isTextOnly: true,
      content: {
        title: "Avoid these common pitfalls:",
        points: [
          "1. Delaying registration until competitors copy your brand.",
          "2. Assuming a CAC registration gives trademark, Patent, or Design protection; it does not.",
          "3. Forgetting to renew after 7 or 14 years.",
          "4. Using marks that resemble established brands, leading to legal disputes."
        ]
      }
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
        
        {/* Navigation Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {navigationTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className="px-4 py-2 bg-white border-2 border-gray-200 rounded-full shadow-sm hover:bg-green-50 hover:border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 text-sm font-medium text-gray-700 hover:text-green-700"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      <section className="w-5/6 mx-auto my-10">
        {faqData.map((section, sectionIndex) => {
          // Generate section ID based on category
          let sectionId = '';
          if (section.category === 'TRADEMARK') sectionId = 'trademark';
          else if (section.category === 'PATENT') sectionId = 'patent';
          else if (section.category === 'DESIGN') sectionId = 'design';
          else if (section.category === 'General Intellectual Property FAQs') sectionId = 'general-faq';
          else if (section.category === 'COMMON MISTAKES BY ENTREPRENEURS AND SMALL BUSINESS OWNERS') sectionId = 'common-mistakes';
          
          return (
            <div key={sectionIndex} id={sectionId} className="mb-12 bg-gray-100 p-8 rounded-lg">
              {/* Main Section Header */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {section.category}
                </h2>
                {section.subtitle && (
                  <p className="text-gray-600 text-lg">{section.subtitle}</p>
                )}
              </div>

            {/* Check if it's a text-only section */}
            {section.isTextOnly ? (
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{section.content.title}</h3>
                <div className="space-y-2">
                  {section.content.points.map((point, pointIndex) => (
                    <p key={pointIndex} className="text-gray-700">{point}</p>
                  ))}
                </div>
              </div>
            ) : (
              /* Regular accordion sections */
              section.sections?.map((subsection, subsectionIndex) => (
                <div key={subsectionIndex} className="mb-8">
                  {subsection.sectionTitle && (
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {subsection.sectionTitle}
                    </h3>
                  )}
                  
                  {/* Check if subsection is text-only */}
                  {subsection.isTextOnly ? (
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                      <p className="text-gray-700 mb-3">{subsection.content.text}</p>
                      <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">
                        {subsection.content.link}
                      </span>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {subsection.questions.map((faq, faqIndex) => {
                        const globalIndex = `${sectionIndex}-${subsectionIndex}-${faqIndex}`;
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
                  )}
                </div>
              ))
            )}
          </div>
        );
        })}
      </section>
    </main>
  );
}

export default page;