import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  BookOpen,
  BarChart3,
  Gift,
  GraduationCap,
  DollarSign,
  Network,
  Award,
  ArrowRight,
} from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Accelerator = () => {
  const benefitCards: BenefitCardProps[] = [
    {
      title: "Advanced Training",
      description:
        "Our goal is to help innovative startups and leadership teams reach their full potential and become the unicorns of tomorrow.",
      icon: <GraduationCap className="h-12 w-12 text-labs-orange" />,
    },
    {
      title: "Learn New Things",
      description:
        "Fill in the knowledge gasp and get hands-on advice and support from experts in areas such as finance, technology, marketing, management, HR, and more.",
      icon: <BookOpen className="h-12 w-12 text-labs-orange" />,
    },
    {
      title: "Money, Mentoring & Market Access",
      description:
        "Our '3-M' model provides startups with access to single-source funding, world-class mentorship from expert entrepreneurs, and access to a global market through our extensive network.",
      icon: <DollarSign className="h-12 w-12 text-labs-orange" />,
    },
    {
      title: "Unique Perks",
      description:
        "Get access to free and heavily subsidized technology marketing and financial solutions from some of the world's top vendors.",
      icon: <Gift className="h-12 w-12 text-labs-orange" />,
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://labs196.com/images/MainBanner.png"
            alt="LABS196 Accelerator"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              LABS196 Accelerator Program
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-labs-orange mb-8">
              A one-million-dollar seed investment
            </h2>
            <h3 className="text-lg sm:text-xl font-medium mb-6">
              Leadership training for your startup
            </h3>
            <p className="text-base sm:text-lg leading-relaxed mb-8">
              LABS196 is a one-month intense in-person learning accelerator
              program that includes lectures, talks, brainstorming exercises,
              networking sessions, events, hackathons, and contests to help
              startups reach their maximum potential. We are looking for the
              next generation of tech startups with unicorn potential to send up
              to three leadership team members to join us in our accelerator
              program at our state-of-the-art office in Sugar Land, Texas, USA.
            </p>
            <Button
              size="lg"
              className="px-8 font-medium"
              onClick={() =>
                (window.location.href =
                  "mailto:contact@labs196.com?subject=Accelerator%20Program%20Inquiry")
              }
            >
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Benefits of the
                  <br />
                  <span className="text-labs-orange">Accelerator Program</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  LABS196 is revolutionizing the venture capital investment
                  industry. Our accelerator program is designed to support
                  startups with unicorn potential due to their innovative ideas
                  and exceptional team to get investor-ready and launch their
                  project to the moon.
                </p>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]"
              >
                <img
                  src="https://labs196.com/images/office4.jpg"
                  alt="LABS196 Office"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What You'll Get
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive program offers a wide range of benefits to help
              your startup succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitCards.map((card, index) => (
              <BenefitCard
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Benefit Card Component
const BenefitCard = ({
  title,
  description,
  icon,
  index,
}: BenefitCardProps & { index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full p-6 flex flex-col border-2 hover:border-labs-orange transition-all duration-300">
        <div className="rounded-full bg-labs-orange/10 w-16 h-16 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 dark:text-white text-labs-navy">{title}</h3>
        <p className="text-muted-foreground flex-grow">{description}</p>
      </Card>
    </motion.div>
  );
};

export default Accelerator;
