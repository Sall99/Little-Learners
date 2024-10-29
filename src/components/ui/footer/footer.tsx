import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Typography } from "@/components";
import {
  FooterLinks,
  footerPrivacyLinks,
  footerSocialNetworkLinks,
} from "@/constants";

interface SocialProps {
  title: string;
  icon: string;
  w: number;
  h: number;
}

interface PageLinkProps {
  title: string;
  links: { name: string; path: string }[];
}

const socialLinks = [
  { title: "hello@littlelearners.com", icon: "mail.png", w: 21, h: 16.5 },
  { title: "+221 918 23 29", icon: "tel.png", w: 21, h: 21 },
  { title: "hello@littlelearners.com", icon: "location.png", w: 16, h: 20 },
];

const PageLink = ({ title, links }: PageLinkProps) => {
  return (
    <div className="flex flex-col gap-6">
      <Typography variant="h2" headingSize="sm" className="font-medium">
        {title}
      </Typography>

      <ul>
        {links.map(({ name, path }, key) => (
          <li key={key} className="mb-_14">
            <Link href={path}>
              <Typography variant="p" paragraphSize="sm">
                {name}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Logo = () => {
  return (
    <div>
      <Link href="/" className="flex items-center gap-2">
        <div className="relative h-7 w-7">
          <Image src="/assets/img/logo.png" fill alt="Logo" />
        </div>
        <Typography variant="p" paragraphSize="sm">
          Little Learners
        </Typography>
      </Link>
    </div>
  );
};

const Social = ({ title, icon, w, h }: SocialProps) => {
  return (
    <div className="flex gap-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-gray-700 bg-primary-300">
        <div
          className="relative"
          style={{
            width: `${w}px`,
            height: `${h}px`,
          }}
        >
          <Image src={`/assets/img/${icon}`} alt={title} fill />
        </div>
      </div>
      <Typography variant="p" headingSize="sm">
        {title}
      </Typography>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="mb-_50 mt-_14 px-4 lg:px-_50">
      <div className="lg-box-shadow m-auto rounded-xl border-2 border-gray-800 bg-white px-_30 pb-10 pt-20 lg:px-20 2xl:max-w-_1819 2xl:px-_108 2xl:pt-_100">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <div className="lg:w-_519">
            <div>
              <Logo />
              <Typography variant="p" paragraphSize="sm" className="mt-5">
                We believe in the power of play to foster creativity,
                problem-solving skills, and imagination.
              </Typography>
            </div>

            <div className="mt-_50 flex flex-col gap-6">
              {socialLinks.map(({ title, icon, w, h }, key) => (
                <Social key={key} title={title} icon={icon} w={w} h={h} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-_30 lg:grid-cols-4">
            <PageLink title="Home" links={FooterLinks.Home} />
            <PageLink title="Home" links={FooterLinks["About us"]} />
            <PageLink title="Home" links={FooterLinks.Academics} />
            <PageLink title="Home" links={FooterLinks["Contact Us"]} />
          </div>
        </div>
        <div className="mt-_50 flex flex-col items-center justify-between gap-4 border-b-2 border-t-2 border-gray-700 py-4 lg:flex-row lg:py-10">
          <div className="flex">
            {footerPrivacyLinks.map(({ name, path }, key) => (
              <Link
                href={path}
                key={key}
                className="border-r-2 border-gray-700 px-3 last:border-0"
              >
                <Typography variant="p" paragraphSize="sm">
                  {name}
                </Typography>
              </Link>
            ))}
          </div>

          <div className="flex gap-_14">
            {footerSocialNetworkLinks.map(({ name, icon }, key) => (
              <div
                key={key}
                className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-gray-700 bg-primary-400 2xl:h-14 2xl:w-14"
              >
                <div className="2l:w-6 relative h-5 w-5 2xl:h-6">
                  <Image src={`/assets/img/${icon}`} alt={name} fill />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Typography
          variant="p"
          paragraphSize="sm"
          className="mt-_30 text-center"
        >
          Copyright © [2023] Little Learners Academy. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};
