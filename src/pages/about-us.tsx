import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface ApproachCardProps {
  step: string;
  title: string;
  description: string;
}

const AboutUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
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
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-8">
              About LABS196
            </h1>

            <div className="mx-auto max-w-4xl">
              <motion.p
                className="text-2xl font-light leading-relaxed mb-8 text-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Labs196 is a fully integrated ecosystem designed to support
                startups from inception to established companies, with a strong
                emphasis on blockchain and AI technologies.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <motion.div
                  className="text-left space-y-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-labs-orange rounded-full mt-3"></div>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      Since our founding in{" "}
                      <span className="font-semibold text-white">2021</span>,
                      entrepreneurs and experts from{" "}
                      <span className="font-semibold text-labs-orange">
                        various countries
                      </span>{" "}
                      have joined the Labs196 ecosystem.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="text-left space-y-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-labs-orange rounded-full mt-3"></div>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      We focus on{" "}
                      <span className="font-semibold text-white">
                        AI and Blockchain
                      </span>{" "}
                      technology startups, with{" "}
                      <span className="font-semibold text-labs-orange">
                        multiple startups
                      </span>{" "}
                      participating in our global competitions.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section - What We Do */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-labs-orange mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Labs196 has assembled outstanding founders, formed
              cross-functional teams, brought on mentors, and made qualified
              investments to create a cohesive environment for AI and Blockchain
              startups. We're building the future of decentralized innovation
              and intelligent systems.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ApproachCard
              step="01"
              title="Source"
              description="LABS196 leverages our global presence and partners to identity exciting ideas and impressive founders to maintain a pipeline of companies across the industry spectrum. Our diligent sourcing effort has allowed us to amass a rich portfolio of companies across eight Industry verticals, with particular strength in blockchain and decentralized technologies."
            />
            <ApproachCard
              step="02"
              title="Incubate"
              description="Our in-house and extemal mentors work side by side with the companies in our portfolio to help them as they navigate the stages of growth. A notincens ourselves, we understand the passion, joy and challenges of building a business from des to bunch. We offer specialized guidance for blockchain and smart contract development."
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

      {/* Core Values Section */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Our Foundation
            </h2>
            <div className="w-24 h-1 bg-labs-orange mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Vision Card */}
            <motion.div variants={itemVariants}>
              <Card className="h-full p-8 transition-all hover:shadow-lg hover:scale-105 border-0 shadow-md">
                <div className="mb-6 rounded-full bg-labs-orange/10 p-4 w-16 h-16 flex items-center justify-center">
                  <i className="ri-eye-line text-3xl text-labs-orange"></i>
                </div>
                <h3 className="text-2xl font-bold mb-6 dark:text-white text-labs-navy">
                  Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We act as a synergist between startups, investors, and service
                  providers. We open new opportunities to a marketplace in a
                  cross-border ecosystem. We maximize digital asset value
                  through the Labs196 syndication economy.
                </p>
              </Card>
            </motion.div>

            {/* Mission Card */}
            <motion.div variants={itemVariants}>
              <Card className="h-full p-8 transition-all hover:shadow-lg hover:scale-105 border-0 shadow-md">
                <div className="mb-6 rounded-full bg-labs-orange/10 p-4 w-16 h-16 flex items-center justify-center">
                  <i className="ri-flag-line text-3xl text-labs-orange"></i>
                </div>
                <h3 className="text-2xl font-bold mb-6 dark:text-white text-labs-navy">
                  Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our ultimate goal is to operate companies across the world. We
                  believe a single successful startup can generate enough
                  excitement and inspiration to motivate and energize an entire
                  country's entrepreneurial spirit to produce economic
                  prosperity.
                </p>
              </Card>
            </motion.div>

            {/* Overview Card */}
            <motion.div variants={itemVariants}>
              <Card className="h-full p-8 transition-all hover:shadow-lg hover:scale-105 border-0 shadow-md">
                <div className="mb-6 rounded-full bg-labs-orange/10 p-4 w-16 h-16 flex items-center justify-center">
                  <i className="ri-compass-3-line text-3xl text-labs-orange"></i>
                </div>
                <h3 className="text-2xl font-bold mb-6 dark:text-white text-labs-navy">
                  Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our objective is to create a cohesive environment that
                  transforms AI and Blockchain startups into successful
                  businesses and enables them to reach their maximum potential
                  through our marketplace. We invite you to join our mission to
                  revolutionize how decentralized technologies shape the future.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Holistic Approach Section */}
      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              A holistic approach to scale startups
            </h2>
            <h3 className="text-xl font-semibold mb-4 dark:text-white">
              Learn through experience
            </h3>
            <p className="text-muted-foreground">
              Participating startups get the financial support they need because
              they have the opportunity of receiving additional funding from our
              global investor network, contingent on achieving milestones. We
              provide mentorship from our seasoned worldwide professional
              network along with market access to the world's most significant
              markets, in addition to money.
            </p>
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
          transition: { duration: 0.5 },
        },
      }}
      className="relative p-6 border rounded-lg overflow-hidden group hover:border-labs-orange transition-all duration-300 bg-card"
    >
      <div className="absolute -top-6 -left-6 text-7xl font-bold text-labs-orange/10 select-none">
        {step}
      </div>
      <div className="relative">
        <h3 className="text-xl font-bold mb-3 dark:text-white text-labs-navy">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutUs;
