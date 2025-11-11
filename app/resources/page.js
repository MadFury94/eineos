import React from 'react'
import ReusableHerosection from '../components/ReusableHerosection'
import ResourceCard from '../components/ResourceCard'
import ScrollAnimation from '../components/ScrollAnimation'

const page = () => {
  // Resource data based on your image
  const resourcesData = [
    {
      id: 1,
      title: "Trademarks, Patents and Design Acts and Regulations",
      description: "Access comprehensive legal documentation including acts, regulations, and guidelines governing intellectual property protection in Nigeria.",
      image: "/gavel-scales-justice-law-books.jpg"
    },
    {
      id: 2,
      title: "Ministry Publication/News",
      description: "Stay updated with the latest announcements, policy changes, and official communications from the Ministry regarding IP matters.",
      image: "/services2.jpg"
    },
    {
      id: 3,
      title: "PDF and Video Guides on Portal Use",
      description: "Download detailed PDF manuals and watch instructional videos to master the IPO Nigeria portal for all your registration needs.",
      image: "/resource3.jpg"
    }
  ]

  return (
    <main className=''>
      <ReusableHerosection title="Resources" />
      <ScrollAnimation>
        <section className='mx-auto w-5/6'>
          <div className='text-center mt-10 mb-12'>
            <p className='lg:text-5xl text-green-700 text-3xl font-bold'>Learn How to Use<span className='block text-black'>the Portal</span></p>
            <p className='lg:w-4/6 mx-auto mt-4'>Watch step-by-step video guides on how to register, renew, and manage your Trademarks, Patents, and Industrial Designs through the IPO Nigeria online portal.</p>
          </div>

          <div className="mb-20">
            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourcesData.map((resource, index) => (
                <ScrollAnimation 
                  key={resource.id} 
                  delay={index * 0.1} 
                  direction="scale"
                >
                  <ResourceCard resource={resource} />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </main>
  )
}

export default page