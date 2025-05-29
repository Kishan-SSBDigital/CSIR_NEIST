import React from 'react';
import { TeamMember } from '../types';
import Card, { CardContent } from './ui/Card';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <Card hoverable className="h-full">
      <div className="relative h-60 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-5 text-center">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-blue-700 font-medium mb-1">{member.position}</p>
        <p className="text-slate-500 text-sm mb-3">{member.department}</p>
        <p className="text-slate-600 text-sm line-clamp-3">
          {member.bio}
        </p>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;