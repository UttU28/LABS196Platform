import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  name: string;
  logo: string;
  banner: string;
  description: string[];
  index: number;
}

const OurProjects = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projects = [
    {
      name: "Geothermal Holdings",
      logo: "https://labs196.com/images/logo_without_holdings.png",
      banner: "https://labs196.com/images/geotherma-banner0.5x.png",
      description: [
        "Geothermal Holdings is revolutionizing the renewable energy by expanding the geography where geothermal power production is viable.",
        "The evolution of Organic Rankin Cycle turbines makes geothermal power production viable in geographies that lack the underlying volcanic geology.",
        "This green power source offers 24/7 baseload, dispatchable power with a fraction of the land usage of alternative sources."
      ]
    },
    {
      name: "AuctionTree",
      logo: "https://labs196.com/images/auctiontree.png",
      banner: "https://labs196.com/images/remp196-banner0.5x.png",
      description: [
        "AuctionTree is an innovative online bidding platform designed to expedite real estate sales through auctions which unite interested buyers and motivated sellers to achieve timely, safe transactions.",
        "AuctionTree marketplace shows all real estate listings - Residential Land, Commercial Land, Industrial Land, Agriculture Land, Hotels, Offices, Retail, Multi Family, Single Family, etc.",
        "The goal of AuctionTree is to create a thriving marketplace uniting active buyers and motivated sellers of real property throughout the world with a simple, effective, and timely sale."
      ]
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
              Our Projects
            </h1>
            <p className="mx-auto max-w-3xl text-xl">
              We have 2 in-house projects, but this is a selection of our most active current projects representing a mix of technologies, industries, and stages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="space-y-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.name}
                name={project.name}
                logo={project.logo}
                banner={project.banner}
                description={project.description}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({ name, logo, banner, description, index }: ProjectProps) => {
  // Animation variants for staggered items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  // Alternate layout for even/odd indexes
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      variants={itemVariants}
      className="flex flex-col lg:flex-row gap-8 items-center"
    >
      {/* Image section - Conditionally swap order */}
      <div className={`w-full lg:w-1/2 ${!isEven ? 'lg:order-2' : ''}`}>
        <div className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-96">
          <img 
            src={banner} 
            alt={`${name} banner`} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content section */}
      <div className={`w-full lg:w-1/2 ${!isEven ? 'lg:order-1' : ''}`}>
        <div className="flex flex-row items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-labs-navy dark:text-white">{name}</h2>
          <div className="flex-shrink-0 w-auto max-w-[150px]">
            <img 
              src={logo} 
              alt={`${name} logo`} 
              className="h-10 sm:h-14 object-contain"
            />
          </div>
        </div>
        
        <div className="space-y-6">
          <ul className="space-y-4 list-disc list-outside pl-5 text-muted-foreground">
            {description.map((point, i) => (
              <li key={i} className="text-base sm:text-lg leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default OurProjects;
