
import React from "react";
import { SiGmail, SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
import {
  Github_Link,
  Email_Link,
  Linkedin_Link,
  Twitter_Link,
} from "../utils/constants";

const SocialProfileClass = () => {
  return (
    <div className="social-media-container">
      <a href={Linkedin_Link} className="icon-button linkedin" target="_blank" rel="noopener noreferrer">
        <i>
          <SiLinkedin />
        </i>
      </a>
      <a href={Twitter_Link} className="icon-button twitter" target="_blank" rel="noopener noreferrer">
        <i>
          <SiTwitter />
        </i>
      </a>
      <a href={Github_Link} className="icon-button github" target="_blank" rel="noopener noreferrer">
        <i>
          <SiGithub />
        </i>
      </a>
      <a href={Email_Link} className="icon-button email">
        <i>
          <SiGmail />
        </i>
      </a>
    </div>
  );
};

export default SocialProfileClass;



