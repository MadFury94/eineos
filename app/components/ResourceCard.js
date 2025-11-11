import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';

const ResourceCard = ({ resource }) => {
  return (
    <Link href="/coming-soon">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
        {/* Resource Image with Play Button Overlay */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={resource.image}
            alt={resource.title}
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-300"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all duration-200">
              <FaPlay className="text-green-600 text-xl ml-1" />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {resource.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {resource.description}
          </p>
          
          {/* Duration and Category */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <span className="text-xs text-green-600 uppercase tracking-wide font-medium">
              {resource.category}
            </span>
            <span className="text-xs text-gray-500">
              {resource.duration}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ResourceCard;