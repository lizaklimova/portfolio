import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { ContactLink, ContactsList } from "./SocialsList.styled";

const SocialsList = ({ variant }) => {
  return (
    <ContactsList $variant={variant}>
      <li>
        <ContactLink
          $variant={variant}
          href="https://t.me/lizaklimovaaa"
          target="_blank"
        >
          <FaTelegram size={30} />
        </ContactLink>
      </li>
      <li>
        <ContactLink
          $variant={variant}
          href="https://github.com/lizaklimova"
          target="_blank"
        >
          <FaGithub size={30} />
        </ContactLink>
      </li>
      <li>
        <ContactLink
          $variant={variant}
          href="https://www.linkedin.com/in/elizabeth-klymova-frontend-dev/"
          target="_blank"
        >
          <FaLinkedin size={30} />
        </ContactLink>
      </li>
      <li>
        <ContactLink
          $variant={variant}
          href="mailto:elizabeth.klymova.dev@gmail.com"
          target="_blank"
        >
          <SiGmail size={30} />
        </ContactLink>
      </li>
    </ContactsList>
  );
};

export default SocialsList;
