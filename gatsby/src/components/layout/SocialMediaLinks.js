import React from "react";
import { FaInstagram, FaTwitter, FaStrava, FaGithub } from "react-icons/fa";

export const iconDictionary = {
  Github: FaGithub,
  Instagram: FaInstagram,
  Strava: FaStrava,
  Twitter: FaTwitter,
};

export default function SocialMediaLinks({ links }) {
  return (
    <div className="my-4 text-3xl flex justify-center">
      {links.map(({ text, href: { current } }) => (
        <a
          className="hover:text-sky-200 mx-2"
          href={current}
          target="_blank"
          rel="noreferrer nofollow"
          key={text}
        >
          {iconDictionary[text]()}
        </a>
      ))}
    </div>
  );
}
