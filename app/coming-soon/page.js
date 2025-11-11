import React from 'react';
import ReusableHerosection from '../components/ReusableHerosection';
import PrimaryButton from '../components/PrimaryButton';
import ScrollAnimation from '../components/ScrollAnimation';

const page = () => {
  return (
    <main>
      <ReusableHerosection title="Coming Soon" />
      
      <ScrollAnimation>
        <section className="w-5/6 mx-auto py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-green-700 mb-4">
              We're Working on Something Amazing!
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Our video tutorials and resources are currently being prepared to help you navigate the IP registration process with ease. Check back soon for comprehensive guides and step-by-step tutorials.
            </p>
            
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 font-medium">What's Coming:</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Step-by-step video tutorials</li>
                <li>• Interactive guides for trademark filing</li>
                <li>• Patent application walkthroughs</li>
                <li>• Portal navigation tutorials</li>
              </ul>
            </div>
            
            <PrimaryButton href="/">
              Back to Home
            </PrimaryButton>
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
};

export default page;