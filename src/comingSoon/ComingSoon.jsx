import React, { useState } from 'react';
import bgImg from "../assets/bg1.jpg"
import bgImg2 from "../assets/bg2.jpg"
const style = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${bgImg2})`
}
const ComingSoonPage = () => {
  const [daysLeft, setDaysLeft] = useState(7);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div 
        className="min-h-screen flex flex-col bg-cover bg-center bg-fixed"
       style={style}
      >
        {/* Header */}
        <header className="flex justify-between items-center p-4 lg:p-6">
          <div className="flex space-x-8">
            <a href="#" className="text-sm lg:text-base hover:text-amber-400 transition-colors duration-300 relative group">
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-sm lg:text-base hover:text-amber-400 transition-colors duration-300 relative group">
              ABOUT US
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          <div className="text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <h1 className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">nexus</h1>
            <p className="text-xs lg:text-sm">PUBLICATIONS</p>
          </div>
          
          <div className="rounded-full border border-amber-500 px-2 py-0.5 shadow-lg shadow-amber-900/20 hover:shadow-amber-500/30 transition-shadow duration-300">
  <span className="text-xs sm:text-sm lg:text-base font-bold text-amber-400">{daysLeft}</span>
  <span className="text-xs sm:text-sm ml-1">DAYS LEFT</span>
</div>

        </header>
        
        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent animate-pulse">COMING SOON</h2>
          
          <p className="max-w-lg mx-auto text-sm lg:text-base mb-2 text-gray-300">
            We're currently working on creating our new website.
          </p>
          <p className="max-w-lg mx-auto text-sm lg:text-base mb-8 text-gray-300">
            We'll be launching soon, subscribe to be notified.
          </p>
          
          <div className="max-w-md w-full">
            <div className="relative group">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-black bg-opacity-30 backdrop-blur-sm border border-gray-600 focus:border-amber-400 text-white placeholder-gray-400 rounded-sm transition-all duration-300 outline-none focus:shadow-lg focus:shadow-amber-900/20"
              />
              <button 
                onClick={handleSubmit}
                className="absolute right-0 top-0 bottom-0 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-6 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/30 transform hover:translate-x-0.5"
              >
                NOTIFY ME
              </button>
            </div>
            
            {isSubmitted && (
              <div className="mt-2 text-green-400 text-sm animate-pulse">Thank you! We'll notify you when we launch.</div>
            )}
          </div>
          
          {/* Services */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
            <div className="bg-black bg-opacity-30 p-6 backdrop-blur-sm border-t border-amber-900/30 rounded-sm shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-amber-600/20 hover:border-amber-500/30 group">
              <h3 className="text-lg font-semibold mb-2 text-amber-400 group-hover:text-amber-300 transition-colors duration-300">Publication Services</h3>
              <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">Transform your research into published work with our expert guidance.</p>
              <div className="w-0 h-0.5 bg-gradient-to-r from-amber-400 to-transparent mt-4 group-hover:w-full transition-all duration-500"></div>
            </div>
            
            <div className="bg-black bg-opacity-30 p-6 backdrop-blur-sm border-t border-amber-900/30 rounded-sm shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-amber-600/20 hover:border-amber-500/30 group">
              <h3 className="text-lg font-semibold mb-2 text-amber-400 group-hover:text-amber-300 transition-colors duration-300">Research Writing</h3>
              <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">Elevate your research with our expert writing assistance.</p>
              <div className="w-0 h-0.5 bg-gradient-to-r from-amber-400 to-transparent mt-4 group-hover:w-full transition-all duration-500"></div>
            </div>
            
            <div className="bg-black bg-opacity-30 p-6 backdrop-blur-sm border-t border-amber-900/30 rounded-sm shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-amber-600/20 hover:border-amber-500/30 group">
              <h3 className="text-lg font-semibold mb-2 text-amber-400 group-hover:text-amber-300 transition-colors duration-300">Presentation Design</h3>
              <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">Craft impactful presentations that captivate your audience.</p>
              <div className="w-0 h-0.5 bg-gradient-to-r from-amber-400 to-transparent mt-4 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="py-8 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
          <div className="relative z-10">
            <p className="text-xs mb-2 text-gray-300">Website by Nexus Publications</p>
            <p className="text-xs mb-6 text-gray-400">© 2025. All Rights Reserved.</p>
            
            <div className="flex justify-center space-x-6">
              <a href="#" className="w-10 h-10 rounded-full bg-black bg-opacity-50 border border-amber-900/30 flex items-center justify-center hover:bg-amber-900/20 hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300 transform hover:scale-110 group">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4 group-hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black bg-opacity-50 border border-amber-900/30 flex items-center justify-center hover:bg-amber-900/20 hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300 transform hover:scale-110 group">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4 group-hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black bg-opacity-50 border border-amber-900/30 flex items-center justify-center hover:bg-amber-900/20 hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300 transform hover:scale-110 group">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4 group-hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black bg-opacity-50 border border-amber-900/30 flex items-center justify-center hover:bg-amber-900/20 hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300 transform hover:scale-110 group">
                <span className="sr-only">Website</span>
                <svg className="w-4 h-4 group-hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ComingSoonPage;