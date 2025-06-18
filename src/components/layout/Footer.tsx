import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="border-t py-12 transition-colors duration-300 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center">
              <img 
                src="https://labs196.com/images/labs196_logo_black.png"
                alt="LABS196 Logo"
                className="h-20 sm:h-24 mb-6"
              />
            </div>
            <div className="mt-4 text-muted-foreground">
              <p className="font-medium mb-2">USA R&D Office</p>
              <p className="text-sm">2150 Town Square Place, Suite 200</p>
              <p className="text-sm mb-1">Sugar Land, Texas 77479</p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">Navigation</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li><Link href="/" className="transition hover:text-labs-orange">Home</Link></li>
              <li><Link href="/programs/accelerator" className="transition hover:text-labs-orange">Programs</Link></li>
              <li><Link href="/about-us" className="transition hover:text-labs-orange">About Us</Link></li>
              <li><Link href="/mentors" className="transition hover:text-labs-orange">Mentors</Link></li>
            </ul>
          </div>
          
          <div className="text-center">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">Contact</h3>
            <ul className="mt-4 space-y-4 text-muted-foreground">
              <li className="flex items-center justify-center">
                <i className="ri-mail-line mr-2 mt-1"></i>
                <span>contact@labs196.com</span>
              </li>
              <li>
                <div className="flex justify-center space-x-4 text-muted-foreground mt-6">
                  <a href="https://www.linkedin.com/company/labs-196" className="transition hover:text-labs-orange hover:bg-labs-navy/10 bg-muted p-2 rounded-full">
                    <i className="ri-linkedin-fill text-2xl"></i>
                  </a>
                  <a href="https://x.com/labs196" className="transition hover:text-labs-orange hover:bg-labs-navy/10 bg-muted p-2 rounded-full">
                    <i className="ri-twitter-x-fill text-2xl"></i>
                  </a>
                  <a href="https://www.facebook.com/labs196/" className="transition hover:text-labs-orange hover:bg-labs-navy/10 bg-muted p-2 rounded-full">
                    <i className="ri-facebook-fill text-2xl"></i>
                  </a>
                  <a href="#" className="transition hover:text-labs-orange hover:bg-labs-navy/10 bg-muted p-2 rounded-full">
                    <i className="ri-telegram-fill text-2xl"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LABS196. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
