import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Layout({ children }) {
  const { sanitySetting } = useStaticQuery(graphql`
    query SiteSettings {
      sanitySetting {
        footer {
          text
          href {
            current
          }
        }
      }
    }
  `);

  return (
    <>
      <main>{children}</main>
      <footer className="bg-sky-800 text-white pt-2 pb-10">
        <div className="container mx-auto">Test</div>

        <div className="bg-teal-800 text-white pt-2 pb-10">
          <SocialMediaLinks links={sanitySetting.footer} />
        </div>
        {/* Contact me info */}
        {/* Other sites I've made? */}
        {/* Copyright statement? */}
        {/* Github link to this source code */}
        {/* Cute sign off message? */}
      </footer>
    </>
  );
}
