import Image from "next/image";
import React from "react";
import { PricingCard } from "./pricing-card";

export const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto container">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-2xl">
        One tool for your whole company. Free for teams to try.
      </h1>
      <p className="uppercase opacity-70">TRUSTED BY TEAMS AT</p>

      <div className="flex gap-4 flex-row flex-wrap mt-4">
        {teams.map((team, index) => (
          <Image src={team} key={index} alt="Teams" width={50} height={50} />
        ))}
      </div>

      <div className="mt-6">
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

const teams = [
  "/teams/1.svg",
  "/teams/2.svg",
  "/teams/3.svg",
  "/teams/4.svg",
  "/teams/5.svg",
];

const plans = [
  {
    title: "Free",
    subtitle: "For organizing every corner of your work & life.",
    options:
      "Collaborative workspace, Integrate with Slack, Github & more, Basic page analytics, 7 days page history, Invite 10 guests.",
    price: "Free",
  },
  {
    title: "Plus",
    subtitle: "A place for small groups to plan & get organized.",
    options:
      "Unlimited blocks for teams, Unlimited file uploads, 30 days page history, Invite 100 guests.",
    price: "8",
  },
  {
    title: "Business",
    subtitle: "For companies using Notion to connect sveral teams & tools.",
    options:
      "SAML SSO, Private teamspace, Bulk PDF export, Advanced page analytics, 90 days page history, Invite 250 guests.",
    price: "15",
  },
];
