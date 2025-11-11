import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const TeamSection = ({ teamMembers = [] }) => {
  // Default team data if none provided
  const defaultTeamMembers = [
    {
      id: 1,
      name: "Hon. Jumoke Oduwole",
      position: "Minister, Federal Ministry of Industry, Trade, and Investment.",
      expertise: "Business Law, Intellectual Property",
      image: "/team1.png",
      email: "jumokeoduwole@iponigeria.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    {
      id: 2,
      name: "Barr. Jane Igwe",
      position: "Registrar, Patent and Design Registry",
      expertise: "Patent Law, Innovation Protection",
      image: "/team2.png",
      email: "janeigwe@iponigeria.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: 3,
      name: "Barr. Shafiu Adamu Yauri",
      position: "Registrar, Trademark Registry",
      expertise: "Trademark Registration, Brand Protection",
      image: "/team3.png",
      email: "shafiuyauri@iponigeria.com",
      linkedin: "https://linkedin.com"
    }
  ];

  const membersToShow = teamMembers.length > 0 ? teamMembers : defaultTeamMembers;

  return (
    <div className="w-full">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Leadership & Management
        </h2>
        
      </div>
      
      {/* Simple Grid Layout - Works on all devices */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {membersToShow.map((member) => (
          <TeamMemberCard
            key={member.id}
            member={member}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;