// // export default BottomBar;
// import React from "react";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// const BottomBar = () => {
//     return (
//         <div className=" bottom-0 left-0 w-full ">
//             <div className="flex items-center justify-center gap-3 py-4">
//                 {/* <img
//                     src="./icons/pointer.webp"
//                     alt="Pointer icon"
//                     className="w-6 h-6 opacity-80"
//                 /> */}

//                 <p
//                     className="text-lg font-semibold bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800 
//                      bg-[length:400%_400%] text-transparent bg-clip-text 
//                      animate-shine [background-position:0%_50%]"
//                 >
//                     Connect with the <span className="font-bold">Dev Team</span>
//                 </p>

//                 {/* Social Links */}
//                 <div className="flex items-center gap-4 ml-3 text-gray-700">
//                     <a
//                         href="https://github.com/YOUR_GITHUB"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:text-black transition-colors duration-200"
//                         aria-label="GitHub"
//                     >
//                         <FaGithub size={22} />
//                     </a>
//                     <a
//                         href="https://linkedin.com/in/YOUR_LINKEDIN"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:text-blue-600 transition-colors duration-200"
//                         aria-label="LinkedIn"
//                     >
//                         <FaLinkedin size={22} />
//                     </a>
//                     <a
//                         href="mailto:youremail@example.com"
//                         className="hover:text-red-500 transition-colors duration-200"
//                         aria-label="Email"
//                     >
//                         <FaEnvelope size={22} />
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BottomBar;

import React from "react";

const BottomBar = () => {
    return (
        <div className="w-full text-gray-400">
            <div className="flex justify-center py-2">
                <a
                    href="https://digitallyvibe.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-medium transition-colors hover:text-red-500"
                >
                    Developed by Digitally Vibe !!
                </a>
            </div>
        </div>
    );
};

export default BottomBar;

