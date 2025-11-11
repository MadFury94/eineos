import React from 'react';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';

const ResourceCard = ({ resource }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Resource Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={resource.image}
            alt={resource.title}
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {resource.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {resource.description}
          </p>
          
          {/* Primary Button */}
          <div className="pt-4 border-t border-gray-100">
            <PrimaryButton href="/coming-soon" asLink={true} size="sm" className="w-full">
              Learn More
            </PrimaryButton>
          </div>
        </div>
    </div>
  );
};

export default ResourceCard;