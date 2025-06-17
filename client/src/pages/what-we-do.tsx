import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface ApproachCardProps {
  step: string;
  title: string;
  description: string;
}

const WhatWeDo = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

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
              What We Do
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="text-xl">
                LABS196 offers comprehensive support for startups, providing resources, mentorship, 
                and connections that drive sustainable growth and innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Unique Approach</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              At LABS196, we've developed a comprehensive framework to support startups at every stage of their journey
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ApproachCard 
              step="01"
              title="Source" 
              description="LABS196 leverages our global presence and partners to identity exciting ideas and impressive founders to maintain a pipeline of companies across the industry spectrum. Our diligent sourcing effort has allowed us to amass a rich portfolio of companies across eight Industry verticals."
            />
            <ApproachCard 
              step="02"
              title="Incubate" 
              description="Our in-house and extemal mentors work side by side with the companies in our portfolio to help them as they navigate the stages of growth. A notincens ourselves, we understand the passion, joy and challenges of building a business from des to bunch."
            />
            <ApproachCard 
              step="03"
              title="Build" 
              description="LABS196 supports our portfolio beyond the bunch phase to identity and acquire the resources to grow the terms in our portfolio for long-term success."
            />
            <ApproachCard 
              step="04"
              title="Invest" 
              description="We support our firms in numerous ways as they seek investment. Depending on the structure of the arrangement, some firms may receive investment from EDGE196. through outreach efforts conducted by LABS196, or through a partner entity such as FINIX196."
            />
            <ApproachCard 
              step="05"
              title="Liquidity" 
              description="Finally, we support our portfolio members as they seek liquidity whether through the traditional avenues or via the newer alternative markets."
            />
          </motion.div>
        </div>
      </section>


    </div>
  );
};

// Approach Card Component
const ApproachCard = ({ step, title, description }: ApproachCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5 }
        }
      }}
      className="relative p-6 border rounded-lg overflow-hidden group hover:border-labs-orange transition-all duration-300"
    >
      <div className="absolute -top-6 -left-6 text-8xl font-bold text-labs-orange/10 select-none">
        {step}
      </div>
      <div className="relative">
        <h3 className="text-xl font-bold mb-3 dark:text-white text-labs-navy">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

export default WhatWeDo;
