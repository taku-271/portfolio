import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiZenn } from "react-icons/si";

export const links = [
  {
    id: 1,
    name: "GitHub",
    userId: "@taku-271",
    url: "https://github.com/taku-271",
    iconElement: <FaGithub size="10em" color="black" />,
  },
  {
    id: 2,
    name: "X(Twitter)",
    userId: "@taku_271",
    url: "https://twitter.com/taku_271",
    iconElement: <FaXTwitter size="10em" color="black" />,
  },
  {
    id: 3,
    name: "zenn",
    userId: "taku_271",
    url: "https://zenn.dev/taku_271",
    iconElement: <SiZenn size="10em" />,
  },
];
