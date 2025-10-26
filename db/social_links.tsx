import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail, SiWellfound } from "react-icons/si";

const socialLinks = [
  {
    title: "Gmail",
    href: "mailto:yashrajgupta6826@gmail.com",
    icon: <SiGmail />,
  },
  {
    title: "Github",
    href: "https://github.com/Yashu6826",
    icon: <FaGithub />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/yashraj-gupta-803282251/",
    icon: <FaLinkedinIn />,
  },
  
];
export default socialLinks;
export type socialLinksType = typeof socialLinks;

