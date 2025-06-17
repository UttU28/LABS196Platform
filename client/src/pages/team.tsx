import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, MapPin } from "lucide-react";

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  linkedin: string;
  location: string;
}

const Team = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Albert Balderas",
      position: "Operations",
      image: "https://labs196.com/images/new_team/Albert_Balderas.png",
      linkedin: "https://www.linkedin.com/in/albert-balderas-16b00978/",
      location: "Sugar Land, USA"
    },
    {
      name: "Gabriela Balderas",
      position: "Compliance",
      image: "https://labs196.com/images/new_team/Gabriela_Balderas.png",
      linkedin: "https://www.linkedin.com/in/gabriela-balderas-11a796162/",
      location: "Sugar Land, USA"
    },
    {
      name: "Sudip Chakraborthy",
      position: "Outreach",
      image: "https://edgex-web-app.s3.us-east-2.amazonaws.com/edgeq96_team/sudip_chakraborthy.jpg",
      linkedin: "https://www.linkedin.com/in/sudipckol/",
      location: "Kolkata, INDIA"
    },
    {
      name: "Vienne Nguyen",
      position: "Projects",
      image: "https://labs196.com/images/new_team/VienneNguen.png",
      linkedin: "https://www.linkedin.com/in/vi-nguyen-swe/",
      location: "Sugar Land, USA"
    },
    {
      name: "Mayur Patel",
      position: "Operations",
      image: "https://edgex-web-app.s3.us-east-2.amazonaws.com/edgeq96_team/17-compressed.jpg",
      linkedin: "https://www.linkedin.com/in/mayur-patel-273746235/",
      location: "Sugar Land, USA"
    },
    {
      name: "Renuka Patel",
      position: "Outreach",
      image: "https://labs196.com/images/new_team/renuka.jpg",
      linkedin: "https://www.linkedin.com/in/renuka-patel-b5a499235/",
      location: "Sugar Land, USA"
    },
    {
      name: "Agam Rao",
      position: "Projects",
      image: "https://labs196.com/images/new_team/agam.png",
      linkedin: "https://www.linkedin.com/in/agam-rao-5596bb264",
      location: "Sugar Land, USA"
    },
    {
      name: "Vandana Rao",
      position: "Operations",
      image: "https://labs196.com/images/new_team/Vandana_Rao.png",
      linkedin: "https://www.linkedin.com/in/vandana-rao-965ab7222/",
      location: "Sugar Land, USA"
    },
    {
      name: "Atif Siddiqui",
      position: "Outreach",
      image: "https://labs196.com/images/new_team/Atif_Siddique.png",
      linkedin: "https://www.linkedin.com/in/mohammad-atif-siddiqui-aa8b012a/",
      location: "Sugar Land, USA"
    },
    {
      name: "Ankur Trivedi",
      position: "Projects",
      image: "https://labs196.com/images/new_team/Ankur_Trivedi.png",
      linkedin: "https://www.linkedin.com/in/ankur-trivedi-pharmd/",
      location: "Sugar Land, USA"
    },
    {
      name: "Samir Thakkar",
      position: "Financial Analyst",
      image: "https://labs196.com/images/new_team/Samir.png",
      linkedin: "https://www.linkedin.com/in/samirthakkar-finance/",
      location: "Sugar Land, USA"
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-labs-navy text-white">
        <div className="absolute inset-0 opacity-60">
          <img 
            src="https://labs196.com/images/whatBanner0.5x.png" 
            alt="LABS196 background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Meet our Team
            </h1>
            <div className="mx-auto max-w-3xl space-y-4">
              <p className="text-xl">
                We are proud of the people who work to make LABS196 possible. Meet the team members who make LABS196 a global changemaker.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={member.name} 
                member={member}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in working with us? We're always looking for talented individuals who are passionate about innovation and making a difference in the startup ecosystem.
            </p>
            <Button 
              size="lg" 
              className="px-8"
              onClick={() => window.location.href = 'mailto:contact@labs196.com'}
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Team Member Card Component
const TeamMemberCard = ({ member, index }: { member: TeamMemberProps, index: number }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.4 }
        }
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={member.image}
            alt={member.name}
            className="object-cover w-full h-full object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="destructive" className="bg-labs-orange text-white dark:bg-labs-orange dark:text-white font-medium text-xs shadow-md">
              {member.position}
            </Badge>
          </div>
        </div>
        
        <div className="p-3 sm:p-4 flex-grow flex flex-col">
          <div className="mb-2 flex justify-between items-start">
            <h3 className="font-semibold text-base">{member.name}</h3>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}'s LinkedIn profile`}
              className="text-labs-orange hover:text-labs-orange/70 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
          
          <div className="flex items-center gap-1 text-muted-foreground text-sm mt-auto">
            <MapPin size={14} />
            <span>{member.location}</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Team;
