import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, MessageSquare } from "lucide-react";

interface MentorProps {
  name: string;
  image: string;
  title: string;
  category: string;
  bio: string;
  linkedin: string;
  qualifications: string[];
  experience: string[];
  expertise: string[];
}

const Mentors = () => {
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

  const mentors: MentorProps[] = [
    // {
    //   name: "Jay Patel",
    //   image: "https://eco-cdn.iqpc.com/eco/images/speakers/QJNDuxlzYn2hrDyQsHt5Rp9fQlYJPNMax1n4ZjIJ.png",
    //   title: "Founder & Chairman",
    //   category: "Blockchain/AI",
    //   bio: "Jay's experience managing hospitality ventures and startups through his private family office provided broad exposure to several industries. His team boasts over 100 years of combined private equity, venture capital, corporate finance, trade finance, and M&A experience. They have invested $20 Million+ of their own equity capital in over 25 deals creating over $1 Billion+ of enterprise value. Finix196 Capital focuses on real-world asset tokenization, bridging Web3 and traditional finance.",
    //   linkedin: "https://www.linkedin.com/in/jaypatel500/",
    //   qualifications: [
    //     "Doctor of Medicine - MD",
    //     "Pre-Medicine/Pre-Medical Studies - University of Houston",
    //     "American University of the Caribbean",
    //   ],
    //   experience: [
    //     "21 years Chairman - Private Family Office",
    //     "4 years 9 months Founder, Chairman & CEO - Finix196 Capital",
    //     "4 years Founder & Chairman - Geothermal",
    //     "1 year 7 months Founder, Chairman & CEO - Realproton",
    //     "9 months Chairman - GeoPower Data Center",
    //   ],
    //   expertise: [
    //     "Private Equity",
    //     "Venture Capital",
    //     "Asset Tokenization",
    //     "Blockchain/Web3",
    //     "Angel Investing",
    //     "Corporate Finance",
    //     "Trade Finance",
    //     "M&A",
    //     "Real Estate",
    //     "Geothermal Energy",
    //     "Family Office Management",
    //   ],
    // },
    {
      name: "Uday Molugu",
      image: "https://media.licdn.com/dms/image/v2/C5603AQEDFBwll9TuqQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1557175035647?e=1755734400&v=beta&t=wJNFjzjRmNB-ymhyNbxg1kIYEmSPQ9PO0Q5Qr1S3IUM",
      title: "Technologist | Strategy",
      category: "Blockchain/AI",
      bio: "Extensive experience as an entrepreneur, strategy and product management leader, driving technology and product vision with a proven track record in strategic initiatives, software product launches, portfolio product management, solution architecture and business transformation. Strong background in XaaS, Real World Asset (RWA) Tokenization, Blockchain, Digital Assets, Cybersecurity, Network Security, Cloud Computing and Mobile Networks. Expertise in building blockchain-based products and Web 3 technology.",
      linkedin: "https://www.linkedin.com/in/udaymolugu/",
      qualifications: [
        "Stanford University Graduate School of Business - LEAD Program",
        "Master's in Computer Engineering - University of New Haven",
        "PowerMBA Certification",
      ],
      experience: [
        "3+ years Product, Strategy and Architecture - Verizon",
        "1 year Advisor - Realproton",
        "6+ months Advisor - Nilfee Payments",
        "7+ years Technology Advisor - EDGE196",
        "1+ years Advisor and Investor - AgentKnox",
      ],
      expertise: [
        "Real World Asset Tokenization",
        "Blockchain & Digital Assets",
        "Web3 Technology",
        "Product Strategy",
        "Network Security",
        "Cloud Computing",
        "Mobile Networks",
        "Cybersecurity",
        "XaaS",
        "Investment Strategy",
        "Fin-Tech",
        "Solution Architecture",
      ],
    },
    {
      name: "Harish Mamtani",
      image: "https://labs196.com/images/team/harish_mamtani.png",
      title: "Advisor",
      category: "Investments",
      bio: "Harish has been dedicated to building Recordent. Additionally, he is an advisor for building high-quality private schools in Hyderabad, India. He has previously advised high net worth clients and family offices on investments since 1998. Not only has he invested in equities, hedge funds (direct and fund of funds), private equity, real estate (domestic and international) but also managed direct investments in the technology, healthcare, and real estate sectors.",
      linkedin: "https://www.linkedin.com/in/harishmamtani/",
      qualifications: [
        "IMBA",
        "Master's in International Business",
        "BS Accounting & Finance",
      ],
      experience: [
        "2 years Financial advisor",
        "5 years Vice President",
        "2 years Investment advisor",
        "6 years Board of Director",
        "4 years Vice chairperson",
        "14 years Managing Director",
        "8 years Founder and Board member",
      ],
      expertise: [
        "Entrepreneurship",
        "Investments",
        "Portfolio management",
        "Venture capital",
        "Hedge funds",
        "Financial modeling",
        "Asset allocation",
        "Real estate",
        "Equities",
      ],
    },
    {
      name: "Deepak Sharma",
      image: "https://labs196.com/images/team/deepak_sharma.png",
      title: "Advisor",
      category: "Investments",
      bio: "Deepak founded many companies and exited many successfully. He overlooks strategy and its implementation for Generation Rise. He is serial entrepreneur and has been involved with multiple global ventures. Deepak brings 20 plus years of business and technology expertise across industry domains while he is an avid working enthusiast in creating disruptive technology and businesses in the field of assets and securities. Deepak has earned MS in Computer Science from Michigan State, US.",
      linkedin: "https://www.linkedin.com/in/deepak-sharma-4b21a1181/",
      qualifications: [
        "Bachelor of Engineering",
        "Master's in Management Information Systems",
        "Master's in Cyber Law",
        "Master's in Business Administration and Management",
      ],
      experience: [
        "2 years Senior Software Engineer",
        "19 years Founder",
        "5 years Entrepreneur",
      ],
      expertise: ["Business Administration and Management", "Entrepreneurship"],
    },
    {
      name: "Daniel Sloan",
      image: "https://labs196.com/images/team/daniel_sloan.png",
      title: "Advisor",
      category: "Blockchain/AI",
      bio: "Daniel has been in the Information Technology industry since 1995 and has built multiple businesses over his 23-year career. FutureTech, LLC is Daniel's most recent venture, and he is focused on helping companies understand the value that Blockchain can bring. Daniel and his team work closely with companies to put together a strategy that will enable them to integrate Blockchain or build new custom applications to realize its value.",
      linkedin: "https://www.linkedin.com/in/sloandaniel/",
      qualifications: ["BS, Business Administration"],
      experience: [
        "VP for 8 years",
        "Founder for 14 years",
        "4 years CEO, 5 years Advisor",
        "4 years Board member",
      ],
      expertise: [
        "Business development",
        "Start-ups",
        "Blockchain",
        "DeFi",
        "Investment",
        "Cryptocurrency",
        "NFTs",
        "Business strategy",
        "Strategic planning",
        "Entrepreneurship",
        "Marketing",
        "Consulting",
        "Software development",
      ],
    },
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
              Our Mentors
            </h1>
            <div className="mx-auto max-w-3xl space-y-4 text-xl">
              <p>Learn from the right people when you need them</p>
              <p className="text-lg">
                Consult our mentors if you find yourself in a tricky situation.
                Mentors are available for consultations to guide entrepreneurs.
                Need help with choosing software? Consult our technology mentor.
                Need help with choosing the right marketing agency? You'll have
                an expert to get a second opinion.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Meet our mentors</h2>
          <p className="text-lg text-muted-foreground mb-4">
            When you become a LABS196 startup, you have access to our network of
            mentors and consultations. Many of our mentors are from our
            extensive network of partners and have years of experience in
            various industries, including technology, marketing, human
            resources, compliance, leadership development, and more.
          </p>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-12 mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {mentors.map((mentor, index) => (
              <MentorCard
                key={mentor.name}
                mentor={mentor}
                isEven={index % 2 === 0}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Action Cards */}
      <section className="py-12 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 h-full flex flex-col justify-between">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-3">
                    Become a LABS196 mentor
                  </h3>
                  <p className="text-muted-foreground">
                    Great people often point to others who helped them along the
                    way. If you would like to become a mentor and support
                    LABS196 startups with your experience and knowledge, please
                    reach out to us at contact@labs196.com.
                  </p>
                </div>
                <div>
                  <Button
                    className="flex items-center gap-2"
                    onClick={() =>
                      (window.location.href = "mailto:contact@labs196.com")
                    }
                  >
                    <Mail size={18} />
                    Email Us
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8 h-full flex flex-col justify-between">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-3">
                    Access the LABS196 mentor network
                  </h3>
                  <p className="text-muted-foreground">
                    Become a LABS196 startup by applying to our accelerator
                    program here to access the mentor network we've created.
                  </p>
                </div>
                <div>
                  <Button
                    className="flex items-center gap-2"
                    onClick={() => console.log("Hello Mentor")}
                  >
                    <MessageSquare size={18} />
                    Learn More
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const MentorCard = ({
  mentor,
  isEven,
}: {
  mentor: MentorProps;
  isEven: boolean;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="bg-background rounded-lg border border-border/40 shadow-sm overflow-hidden"
    >
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Left - Image */}
          <div
            className={`md:w-[120px] flex-shrink-0 ${!isEven ? "md:order-2" : ""}`}
          >
            <div className="h-[120px] w-[120px] mx-auto rounded-full overflow-hidden border-2 border-border shadow-sm">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="object-cover w-full h-full object-top"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className={`flex-1 ${!isEven ? "md:order-1" : ""}`}>
            <div className="space-y-5">
              {/* Name, title and LinkedIn */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold">{mentor.name}</h2>
                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-labs-orange hover:text-labs-orange/80 transition-colors"
                      aria-label={`${mentor.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <Badge
                      variant="outline"
                      className="bg-labs-orange/5 text-labs-orange dark:text-labs-orange"
                    >
                      {mentor.title}
                    </Badge>
                    <Badge variant="outline" className="bg-labs-navy/5 text-labs-navy dark:text-white dark:border-white/20">{mentor.category}</Badge>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground">{mentor.bio}</p>

              {/* Details grid */}
              <div className="grid md:grid-cols-3 gap-5 md:gap-6 pt-2">
                <div>
                  <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                    Qualifications
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground text-sm">
                    {mentor.qualifications.map((qual, i) => (
                      <li key={i} className="mb-1">
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                    Experience
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground text-sm">
                    {mentor.experience.map((exp, i) => (
                      <li key={i} className="mb-1">
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                    Area of expertise
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {mentor.expertise.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-labs-slate/10 text-labs-slate border-labs-slate/20 dark:text-white dark:border-white/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Mentors;
