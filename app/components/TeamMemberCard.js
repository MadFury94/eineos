import React from 'react';
import Image from 'next/image';
import { BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Member Image */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-center hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Name and Position */}
        <h3 className="text-xl font-bold text-gray-800 mb-1">
          {member.name}
        </h3>
        <p className="text-green-600 font-medium mb-3">
          {member.position}
        </p>
        
        {/* Expertise */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">EXPERTISE</p>
          <p className="text-sm text-gray-700">
            {member.expertise}
          </p>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-3">
          {member.email && (
            <a 
              href={`mailto:${member.email}`}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <MdEmail size={20} />
            </a>
          )}
          {member.linkedin && (
            <a 
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <BsLinkedin size={18} />
            </a>
          )}
          {member.twitter && (
            <a 
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors"
            >
              <BsTwitter size={18} />
            </a>
          )}
          {member.instagram && (
            <a 
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition-colors"
            >
              <BsInstagram size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;