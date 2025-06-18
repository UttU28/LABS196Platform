import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Link } from "wouter";

const Home = () => {
  const carouselSlides = [
    {
      image: "https://labs196.com/images/last_slide1.jpg",
      title: "Headquartered in Sugar Land, TX",
      subtitle: "The next generation of unicorns will come from LABS196",
    },
    {
      image: "https://labs196.com/images/Houston.png",
      title: "Our Backyard is Houston, Texas",
      subtitle: "The next generation of unicorns will come from LABS196",
    },
    {
      image: "https://labs196.com/images/MainBanner.png",
      title: "Empowering Companies to Innovate",
      subtitle: "The next generation of unicorns will come from LABS196",
    },
  ];

  const [api, setApi] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);
  const benefits = [
    {
      icon: "ri-global-line",
      title: "Market Access",
      description:
        "Our goal is to help innovative startups and leadership teams reach their full potential and become the unicorns of tomorrow. We have particular expertise in blockchain and emerging technology markets.",
      color: "text-labs-orange",
      bgColor: "bg-labs-orange/10",
    },
    {
      icon: "ri-graduation-cap-line",
      title: "Advanced Training",
      description:
        "Fill in the knowledge gaps and get hands-on advice and support from experts in areas such as finance, technology, marketing, management, HR, and more. Special focus on blockchain development, smart contracts, and decentralized technologies.",
      color: "text-labs-orange",
      bgColor: "bg-labs-orange/10",
    },
    {
      icon: "ri-lightbulb-line",
      title: "Learn New Skills",
      description:
        "Our 3-M model provides startups with access to single-source funding, world-class mentorship from expert entrepreneurs and access to a global market through our extensive network, including blockchain and cryptocurrency ecosystems.",
      color: "text-labs-orange",
      bgColor: "bg-labs-orange/10",
    },
    {
      icon: "ri-gift-line",
      title: "Unique Perks",
      description:
        "Get access to free and heavily-subsidised technology marketing and financial solutions from some of the world's top vendors, including blockchain infrastructure providers and Web3 development tools.",
      color: "text-labs-orange",
      bgColor: "bg-labs-orange/10",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen">
        <Carousel
          className="w-full h-full"
          setApi={setApi}
          opts={{ loop: true }}
        >
          <CarouselContent className="h-full">
            {carouselSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative h-screen w-full">
                  <div className="absolute inset-0">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  </div>
                  <div className="relative flex h-full items-center justify-center text-center">
                    <div className="max-w-3xl px-4 sm:px-6 lg:px-8 text-white mt-16">
                      <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                        {slide.title}
                      </h1>
                      <p className="text-lg sm:text-xl md:text-2xl">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentSlide === index ? "bg-white w-4" : "bg-white/50"
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
          <CarouselPrevious className="carousel-nav-btn carousel-previous">
            &lt;
          </CarouselPrevious>
          <CarouselNext className="carousel-nav-btn carousel-next">
            &gt;
          </CarouselNext>
        </Carousel>
      </section>

      {/* Introduction Section */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Welcome to LABS196
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Welcome to LABS196, headquartered in Sugar Land, Texas. We stand
              as a beacon of innovation, committed to reshaping the trajectory of startups
              poised for exceptional growth, with a particular focus on
              blockchain and emerging technologies.
            </p>
            <p>
              At LABS196, we recognize the potential of startups with unicorn
              status in the making. Our Accelerator Program is meticulously
              crafted to provide unparalleled support to such ventures and their
              exemplary teams, guiding them from concept refinement to investor
              readiness with precision and expertise, especially in the rapidly
              evolving blockchain space.
            </p>
            <p>
              Within our Advanced Training sessions, startups are afforded the
              opportunity to hone their skill sets under the tutelage of
              seasoned professionals. From bridging knowledge gaps to receiving
              bespoke guidance in pivotal areas such as finance, technology,
              marketing, and human resources, our mentorship ensures
              comprehensive development. We offer specialized tracks for
              blockchain development, smart contract programming, and
              decentralized application creation.
            </p>
            <p>
              However, our commitment extends far beyond mere guidance. Through
              our 3-M model, startups gain access to a trifecta of invaluable
              resources: robust financial backing, unparalleled mentorship from
              industry luminaries, and a gateway to global markets facilitated
              by our extensive network, including key partnerships in the
              blockchain and cryptocurrency ecosystem.
            </p>
            <p>
              Moreover, LABS196 extends exclusive privileges to its affiliated
              startups, including access to complimentary and heavily subsidized
              solutions in technology, marketing, and finance from esteemed
              vendors worldwide.
            </p>
            <p>
              We cordially invite you to join us at LABS196, where tradition
              meets innovation, and aspirations are transformed into reality.
              Together, let us chart a course towards pioneering success in the
              dynamic realm of startups.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose LABS196
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              LABS196 is revolutionizing the venture capital investment
              industry. Our accelerator program is designed to support startups
              with unicorn potential due to their innovative ideas and
              exceptional team to get investor-ready and launch their project to
              the moon. We're particularly excited about blockchain and AI
              innovations that are reshaping the future.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="rounded-xl p-6 transition-all hover:shadow-md"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${benefit.bgColor} ${benefit.color}`}
                >
                  <i className={`${benefit.icon} text-2xl`}></i>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-16 bg-labs-navy text-white">
        <div className="absolute inset-0 opacity-20">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#FF4B22", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#5C6B8A", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grad)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Enroll now to accelerate your startup
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg">
              Additionally, there is the possibility of more funding from our
              global investor network, as well as mentorship from international
              leaders and service providers within key industries, including
              legal, IT, accounting, human resources, public relations, and
              more. We have specialized connections in the blockchain and
              cryptocurrency space.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg">
              Each startup can send between 1-3 leadership team members to join
              our program in Sugar Land, Texas, USA. New cohorts start every
              month, offering ongoing opportunities for growth and development.
            </p>
            <div className="mt-8">
              <Link href="/programs/accelerator">
                <Button variant="default" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
