type StandardService = {
  type: "standard";
  name: string;
  details: string;
};

type SpecialService = {
  type: "special";
  name: string;
  userDetails: true;
};

export type EnterpriseService = StandardService | SpecialService;

export const enterpriseData: Record<string, EnterpriseService> = {
  vpn: {
    type: "standard",
    name: "Multiprotocol Label Switching & Virtual Private Network",
    details:
      "We understand that as your company expands, so do the challenges of managing and securing your data traffic. This is where our MPLS/VPN (Multiprotocol Label Switching/Virtual Private Network) steps in as a powerful solution to simplify your network operations while enhancing security.",
  },
  "global-ip-transit-internet": {
    type: "standard",
    name: "Global IP Transit Internet Service",
    details:
      "Global IP transit Internet providers typically own extensive networks of routers and data centers that are interconnected across various regions and continents. Our service provides exceptionally resilient and robust global connectivity, empowering and safeguarding your business. Benefit from our competitive pricing and unparalleled customer support.",
  },
  "dedicated-internet": {
    type: "special",
    name: "Dedicated Internet Service",
    userDetails: true,
  },
};
