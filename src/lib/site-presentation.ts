import { Compass, Gauge, Megaphone, TrendingUp, Workflow, Wallet, Users } from "lucide-react";

export function pageHead(title: string, description: string) {
  const fullTitle = `${title} — The Native AI Group`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
    ],
  };
}

export const departmentIcons = [Compass, Gauge, Megaphone, TrendingUp, Workflow, Wallet, Users];
