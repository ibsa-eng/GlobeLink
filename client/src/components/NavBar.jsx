// import React from "react";
// import { NavLink } from "react-router-dom";
// import { IoIosArrowDown } from "react-icons/io";
// const NavBar = () => {
//   return (
//     <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center">
//       <img
//         src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/All-in-one_Vector-Logo-06-1-e1734207318617.png"
//         alt="Logo"
//         className="h-10"
//       />
//       {/* <div className="space-x-6">
//         <NavLink to="/" className="flex items-center hover:text-gray-300">
//           HOME
//           <IoIosArrowDown className="ml-2" />
//         </NavLink>
//         <NavLink to="/buy" className="hover:text-gray-300">
//           BUY
//         </NavLink>
//         <NavLink to="/off-plan" className="hover:text-gray-300">
//           OFF-PLAN
//         </NavLink>
//         <NavLink to="/rent" className="hover:text-gray-300">
//           RENT
//         </NavLink>

//         <NavLink to="/media" className="flex items-center hover:text-gray-300">
//           MEDIA
//           <IoIosArrowDown className="ml-2" />
//         </NavLink>
//         <NavLink
//           to="/contact"
//           className="flex items-center hover:text-gray-300"
//         >
//           CONTACT
//           <IoIosArrowDown className="ml-2" />
//         </NavLink> */}
//       {/* </div> */}
//       <div className="flex items-center space-x-6">
//         {/* <NavLink to="/" className="flex items-center hover:text-gray-300">
//           HOME
//           <IoIosArrowDown className="ml-2" />
//         </NavLink> */}
//         <div className="relative">
//           <NavLink to="/" className="flex items-center hover:text-gray-300">
//             HOME
//             <IoIosArrowDown className="ml-2" />
//           </NavLink>

//           {/* ABOUT US button appears on hover */}
//           <div className="absolute left-0 top-full mt-1 hidden group-hover:block">
//             <NavLink
//               to="/about"
//               className="w-[220px] h-[21px] bg-blue-500 text-[rgb(224,242,250)] flex items-center justify-center"
//             >
//               ABOUT US
//             </NavLink>
//           </div>
//         </div>

//         <NavLink to="/buy" className="hover:text-gray-300">
//           BUY
//         </NavLink>
//         <NavLink to="/off-plan" className="hover:text-gray-300">
//           OFF-PLAN
//         </NavLink>
//         <NavLink to="/rent" className="hover:text-gray-300">
//           RENT
//         </NavLink>
//         <NavLink to="/media" className="flex items-center hover:text-gray-300">
//           MEDIA
//           <IoIosArrowDown className="ml-2" />
//         </NavLink>
//         <NavLink
//           to="/contact"
//           className="flex items-center hover:text-gray-300"
//         >
//           CONTACT
//           <IoIosArrowDown className="ml-2" />
//         </NavLink>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
// // import React from "react";
// // import { NavLink } from "react-router-dom";
// // import { IoIosArrowDown } from "react-icons/io";

// // const NavBar = () => {
// //   return (
// //     <nav className="text-white px-6 py-4 flex justify-between items-center">
// //       <img
// //         src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/All-in-one_Vector-Logo-06-1-e1734207318617.png"
// //         alt="Logo"
// //         className="h-10"
// //       />
// //       <div className="flex items-center space-x-6">
// //         {/* Home Link */}
// //         <div className="relative group">
// //           <NavLink to="/" className="flex items-center hover:text-gray-300">
// //             HOME
// //             <IoIosArrowDown className="ml-2" />
// //           </NavLink>
// //           <div className="absolute left-0 top-full hidden group-hover:block w-[66px] h-[90px] bg-blue-500 border-2 border-blue-500"></div>
// //           <div className="absolute left-0 top-[90px] hidden group-hover:block w-[220px] h-[21px] bg-white text-[rgb(211,163,85)]">
// //             <NavLink
// //               to="/about"
// //               className="w-full h-full flex items-center text-left pl-2 hover:bg-gray-200"
// //             >
// //               ABOUT US
// //             </NavLink>
// //           </div>
// //         </div>

// //         {/* Other Links */}
// //         <NavLink to="/buy" className="hover:text-gray-300">
// //           BUY
// //         </NavLink>
// //         <NavLink to="/off-plan" className="hover:text-gray-300">
// //           OFF-PLAN
// //         </NavLink>
// //         <NavLink to="/rent" className="hover:text-gray-300">
// //           RENT
// //         </NavLink>

// //         {/* MEDIA Link */}
// //         <div className="relative group">
// //           <NavLink
// //             to="/media"
// //             className="flex items-center hover:text-gray-300"
// //           >
// //             MEDIA
// //             <IoIosArrowDown className="ml-2" />
// //           </NavLink>
// //           {/* Box for MEDIA */}
// //           <div className="absolute left-0 top-full hidden group-hover:block w-[66px] h-[90px] bg-blue-500 border-2 border-blue-500"></div>
// //           {/* BLOG button */}
// //           <div className="absolute left-0 top-[90px] hidden group-hover:block w-[220px] h-[21px] bg-white text-[rgb(211,163,85)]">
// //             <NavLink
// //               to="/blog"
// //               className="w-full h-full flex items-center text-left pl-2 hover:bg-gray-200"
// //             >
// //               BLOG
// //             </NavLink>
// //           </div>
// //           {/* GALLERY button */}
// //           <div className="absolute left-0 top-[111px] hidden group-hover:block w-[220px] h-[21px] bg-white text-[rgb(211,163,85)]">
// //             <NavLink
// //               to="/gallery"
// //               className="w-full h-full flex items-center text-left pl-2 hover:bg-gray-200"
// //             >
// //               GALLERY
// //             </NavLink>
// //           </div>
// //         </div>

// //         {/* CONTACT Link */}
// //         <div className="relative group">
// //           <NavLink
// //             to="/contact"
// //             className="flex items-center hover:text-gray-300"
// //           >
// //             CONTACT
// //             <IoIosArrowDown className="ml-2" />
// //           </NavLink>
// //           {/* Box for CONTACT */}
// //           <div className="absolute left-0 top-full hidden group-hover:block w-[66px] h-[90px] bg-blue-500 border-2 border-blue-500"></div>
// //           {/* OUR AGENTS button */}
// //           <div className="absolute left-0 top-[90px] hidden group-hover:block w-[220px] h-[21px] bg-white text-[rgb(211,163,85)]">
// //             <NavLink
// //               to="/our-agents"
// //               className="w-full h-full flex items-center text-left pl-2 hover:bg-gray-200"
// //             >
// //               OUR AGENTS
// //             </NavLink>
// //           </div>
// //           {/* FAQS button */}
// //           <div className="absolute left-0 top-[111px] hidden group-hover:block w-[220px] h-[21px] bg-white text-[rgb(211,163,85)]">
// //             <NavLink
// //               to="/faqs"
// //               className="w-full h-full flex items-center text-left pl-2 hover:bg-gray-200"
// //             >
// //               FAQS
// //             </NavLink>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default NavBar;
// // import React from "react";
// // import { NavLink } from "react-router-dom";

// // const NavBar = () => {
// //   return (
// //     <nav className="bg-transparent text-white px-6 py-4 flex justify-between items-center">
// //       <img
// //         src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/All-in-one_Vector-Logo-06-1-e1734207318617.png"
// //         alt="Logo"
// //         className="h-10"
// //       />
// //       <div className="space-x-6">
// //         <NavLink to="/" className="hover:text-gray-300">
// //           Home
// //         </NavLink>
// //         <NavLink to="/buy" className="hover:text-gray-300">
// //           Buy
// //         </NavLink>
// //         <NavLink to="/off-plan" className="hover:text-gray-300">
// //           Off-Plan
// //         </NavLink>
// //         <NavLink to="/rent" className="hover:text-gray-300">
// //           Rent
// //         </NavLink>
// //         <NavLink to="/media" className="hover:text-gray-300">
// //           Media
// //         </NavLink>
// //         <NavLink to="/contact" className="hover:text-gray-300">
// //           Contact
// //         </NavLink>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default NavBar;
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className="text-white px-6 py-4 flex justify-between items-center">
      <img
        src="https://dev.globelinkproperties.com/wp-content/uploads/2024/12/All-in-one_Vector-Logo-06-1-e1734207318617.png"
        alt="Logo"
        className="h-10"
      />
      <div className="flex items-center space-x-6">
        {/* Home Link */}
        <div className="relative group">
          <NavLink to="/" className="flex items-center hover:text-gray-300">
            HOME
            <IoIosArrowDown className="ml-2" />
          </NavLink>
          <div className="absolute left-0 top-full hidden group-hover:block w-[66px] h-[90px] bg-blue-500 border-2 border-blue-500"></div>
          <div className="absolute left-0 top-[90px] hidden group-hover:block w-[220px] h-[21px] bg-white text-[rgb(211,163,85)]">
            <NavLink
              to="/about"
              className="w-full h-full flex items-center text-left pl-2 hover:bg-gray-200"
            >
              ABOUT US
            </NavLink>
          </div>
        </div>

        {/* Other Links */}
        <NavLink to="/buy" className="hover:text-gray-300">
          BUY
        </NavLink>
        <NavLink to="/off-plan" className="hover:text-gray-300">
          OFF-PLAN
        </NavLink>
        <NavLink to="/rent" className="hover:text-gray-300">
          RENT
        </NavLink>

        {/* MEDIA Link */}
        <div className="relative group">
          <NavLink
            to="/media"
            className="flex items-center hover:text-gray-300"
          >
            MEDIA
            <IoIosArrowDown className="ml-2" />
          </NavLink>
          {/* Box for MEDIA */}
          <div className="absolute left-0 top-full hidden group-hover:block w-[66px] h-[90px] bg-blue-500 border-2 border-blue-500"></div>
          {/* BLOG button */}
          <div className="absolute left-0 top-[90px] hidden group-hover:block w-[220px] h-[21px] bg-white text-[rgb(211,163,85)]">
            <NavLink
              to="/blog"
              className="w-full h-full flex items-center text-left pl-2 hover:bg-gray-200"
            >
              BLOG
            </NavLink>
          </div>
          {/* GALLERY button */}
          <div className="absolute left-0 top-[111px] hidden group-hover:block w-[220px] h-[21px] bg-white text-[rgb(211,163,85)]">
            <NavLink
              to="/gallery"
              className="w-full h-full flex items-center text-left pl-2 hover:bg-gray-200"
            >
              GALLERY
            </NavLink>
          </div>
        </div>

        {/* CONTACT Link */}
        <div className="relative group">
          <NavLink
            to="/contact"
            className="flex items-center hover:text-gray-300"
          >
            CONTACT
            <IoIosArrowDown className="ml-2" />
          </NavLink>
          {/* Box for CONTACT */}
          <div className="absolute left-0 top-full hidden group-hover:block w-[66px] h-[90px] bg-blue-500 border-2 border-blue-500"></div>
          {/* OUR AGENTS button */}
          <div className="absolute left-0 top-[90px] hidden group-hover:block w-[220px] h-[21px] bg-white text-[rgb(211,163,85)]">
            <NavLink
              to="/our-agents"
              className="w-full h-full flex items-center text-left pl-2 hover:bg-gray-200"
            >
              OUR AGENTS
            </NavLink>
          </div>
          {/* FAQS button */}
          <div className="absolute left-0 top-[111px] hidden group-hover:block w-[220px] h-[21px] bg-white text-[rgb(211,163,85)]">
            <NavLink
              to="/faqs"
              className="w-full h-full flex items-center text-left pl-2 hover:bg-gray-200"
            >
              FAQS
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
