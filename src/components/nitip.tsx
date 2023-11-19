// import { ReactNode } from "react";
// import { LuLayoutDashboard } from "react-icons/lu";
// import { BsBoxSeam, BsPersonGear, BsPerson } from "react-icons/bs";
// import { BiLogOut } from "react-icons/bi";
// import { LiaShippingFastSolid } from "react-icons/lia";
// import "./Navbar.css";
// import { NavLink } from "react-router-dom";

// interface NavbarProps {
//   children?: ReactNode;
//   active: number;
// }

// function Navbar({ children, active }: NavbarProps) {
//   return (
//     <div className="flex w-screen h-screen overflow-hidden">
//       <div className="pt-[60px] pb-[30px] flex flex-col justify-between min-w-[250px] shadow-navbar h-screen">
//         <div className="flex flex-col gap-[24px]">
//           <img
//             src="/assets/logo_medicargo.svg"
//             alt="Logo Medicargo"
//             className="mx-auto w-fit"
//           />
//           <div className="flex gap-[10px] justify-center items-center">
//             <div className="bg-purple-ternary bg-opacity-25 rounded-full py-[8px] px-[12px] h-fit w-fit">
//               <p className="text-purple-primary font-bold text-[16px]">Admin</p>
//             </div>
//             <p className="text-mono-600 text-[20px]">2023/2024</p>
//           </div>
//           <div className="flex flex-col gap-[16px]">
//             <NavLink
//               to="/"
//               className={`${
//                 active == 0
//                   ? "border-l-4 border-purple-secondary text-purple-secondary box-border font-bold px-[20px]"
//                   : "text-mono-600 px-[24px]"
//               } text-[24px] py-[8px] hover:text-purple-ternary active:text-purple-secondary hover:border-purple-ternary active:border-purple-secondary flex items-center gap-4 cursor-pointer`}
//             >
//               <LuLayoutDashboard />
//               <p className="text-[20px]">Dashboard</p>
//             </NavLink>
//             <NavLink
//               to="/list"
//               className={`${
//                 active == 1
//                   ? "border-l-4 border-purple-secondary text-purple-secondary box-border font-bold px-[20px]"
//                   : "text-mono-600 px-[24px]"
//               } text-[24px] py-[8px] hover:text-purple-ternary active:text-purple-secondary hover:border-purple-ternary active:border-purple-secondary flex items-center gap-4 cursor-pointer`}
//             >
//               <BsBoxSeam />
//               <p className="text-[20px]">List Order</p>
//             </NavLink>
//             <NavLink
//               to="/track"
//               className={`${
//                 active == 2
//                   ? "border-l-4 border-purple-secondary text-purple-secondary box-border font-bold px-[20px]"
//                   : "text-mono-600 px-[24px]"
//               } text-[24px] py-[8px] hover:text-purple-ternary active:text-purple-secondary hover:border-purple-ternary active:border-purple-secondary flex items-center gap-4 cursor-pointer`}
//             >
//               <LiaShippingFastSolid />
//               <p className="text-[20px]">Track Order</p>
//             </NavLink>
//             <NavLink
//               to="/driver"
//               className={`${
//                 active == 3
//                   ? "border-l-4 border-purple-secondary text-purple-secondary box-border font-bold px-[20px]"
//                   : "text-mono-600 px-[24px]"
//               } text-[24px] py-[8px] hover:text-purple-ternary active:text-purple-secondary hover:border-purple-ternary active:border-purple-secondary flex items-center gap-4 cursor-pointer`}
//             >
//               <BsPersonGear />
//               <p className="text-[20px]">List Driver</p>
//             </NavLink>
//             <NavLink
//               to="/profile"
//               className={`${
//                 active == 4
//                   ? "border-l-4 border-purple-secondary text-purple-secondary box-border font-bold px-[20px]"
//                   : "text-mono-600 px-[24px]"
//               } text-[24px] py-[8px] hover:text-purple-ternary active:text-purple-secondary hover:border-purple-ternary active:border-purple-secondary flex items-center gap-4 cursor-pointer`}
//             >
//               <BsPerson />
//               <p className="text-[20px]">Profile</p>
//             </NavLink>
//           </div>
//         </div>
//         <div className="flex flex-col gap-[15px]">
//           <NavLink
//             to="/login"
//             className={`text-[24px] px-[24px] py-[8px] text-error flex items-center gap-4 cursor-pointer`}
//           >
//             <BiLogOut />
//             <p className="text-[20px] font-bold">Logout</p>
//           </NavLink>
//           <hr />
//           <p className="p-6 text-mono-600 text-[12px]">
//             MediCargo, PT Dexa Group | <br />
//             All Rights Reserved
//           </p>
//         </div>
//       </div>
//       <div className="flex grow overflow-auto">{children}</div>
//     </div>
//   );
// }

// export default Navbar;
