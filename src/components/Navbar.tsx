import { SlSocialTwitter } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto flex items-center justify-between bg-[#1b1b1b] p-1 text-purple-800">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7efpxgJZC1uGvHAAfFME_2e9eZr2uxttJEr1MGlJzjEze6u6nDqBPhYd0ejbGbqR6eAw&usqp=CAU"
            className="h-10 w-10"
          />
        </div>
        <h1>Home</h1>
        <h1>Project</h1>
        <h1>Testimonials</h1>
        <h1>Recent Work</h1>
        <h1>Skill</h1>
        <div className="text-4xl flex">
          <SlSocialTwitter />
          <FaLinkedin />
          <FaBehance />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
