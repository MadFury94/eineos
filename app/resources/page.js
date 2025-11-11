import React from 'react'
import ReusableHerosection from '../components/ReusableHerosection'
import ResourceCard from '../components/ResourceCard'

const page = () => {
  // Resource data based on your image
  const resourcesData = [
    {
      id: 1,
      title: "How to Create an Account on the IPO Nigeria Portal",
      description: "Learn how to set up your user profile and access all IP registration services online.",
      image: "/services1.jpg",
      category: "Getting Started",
      duration: "5 min"
    },
    {
      id: 2,
      title: "Filing a Trademark Application",
      description: "A step-by-step guide to submitting your trademark application, uploading documents, and tracking approval.",
      image: "/trademark.jpg",
      category: "Trademark",
      duration: "12 min"
    },
    {
      id: 3,
      title: "How to File Patent in Nigeria",
      description: "Complete walkthrough of the patent filing process including documentation and requirements.",
      image: "/patent.jpg",
      category: "Patent",
      duration: "15 min"
    },
    {
      id: 4,
      title: "Registering an Industrial Design",
      description: "Step-by-step instructions for protecting your product's unique visual design in Nigeria.",
      image: "/design.jpg",
      category: "Design",
      duration: "10 min"
    },
    {
      id: 5,
      title: "Understanding IP Classifications",
      description: "Learn about different intellectual property classes and how to choose the right category for your application.",
      image: "/services2.jpg",
      category: "General",
      duration: "8 min"
    },
    {
      id: 6,
      title: "Renewal and Maintenance Guide",
      description: "How to keep your IP registrations active through timely renewals and proper maintenance.",
      image: "/services3.jpg",
      category: "Maintenance",
      duration: "7 min"
    }
  ]

  return (
    <main className=''>
      <ReusableHerosection title="Resources" />
      <section className='mx-auto w-5/6'>
        <div className='text-center mt-10 mb-12'>
          <p className='lg:text-5xl text-green-700 text-3xl font-bold'>Learn How to Use<span className='block text-black'>the Portal</span></p>
          <p className='w-4/6 mx-auto mt-4'>Watch step-by-step video guides on how to register, renew, and manage your Trademarks, Patents, and Industrial Designs through the IPO Nigeria online portal.</p>
        </div>

        <div className="mb-20">
          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourcesData.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default page