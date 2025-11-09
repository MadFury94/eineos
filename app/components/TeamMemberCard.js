"use client";
import React from 'react';
import Image from 'next/image';
import { BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const TeamMemberCard = ({ 
  member, 
  isExpanded, 
  onHover, 
  onLeave 
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out cursor-pointer group ${
        isExpanded 
          ? 'flex-3 min-w-[400px]' 
          : 'flex-1 min-w-[120px] max-w-[200px]'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{ height: '450px' }}
    >
      {/* Background Image */}
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        {/* Always visible name */}
        <div className="mb-4">
          <h3 className={`font-bold transition-all duration-300 ${
            isExpanded ? 'text-2xl mb-2' : 'text-lg'
          }`}>
            {member.name}
          </h3>
          
          {/* Position - visible when expanded or as subtitle when collapsed */}
          <p className={`text-gray-300 transition-all duration-300 ${
            isExpanded ? 'text-base' : 'text-sm'
          }`}>
            {member.position}
          </p>
        </div>

        {/* Expanded Details */}
        <div className={`transition-all duration-500 ${
          isExpanded 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8 pointer-events-none'
        }`}>
          {/* Bio
          <p className="text-sm text-gray-200 mb-6 leading-relaxed">
            {member.bio}
          </p> */}
          
          {/* Expertise */}
          <div className="mb-6">
            <p className="text-xs text-gray-400 mb-2">EXPERTISE</p>
            <p className="text-sm text-green-300 font-medium">
              {member.expertise}
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            {member.email && (
              <a 
                href={`mailto:${member.email}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <MdEmail size={20} />
              </a>
            )}
            {member.linkedin && (
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <BsLinkedin size={18} />
              </a>
            )}
            {member.twitter && (
              <a 
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-300 transition-colors"
              >
                <BsTwitter size={18} />
              </a>
            )}
            {member.instagram && (
              <a 
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-colors"
              >
                <BsInstagram size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;