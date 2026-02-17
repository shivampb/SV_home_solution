export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  completionYear: string;
  area: string;
  description: string;
  conceptSubtitle?: string;
  conceptQuote?: string;
  conceptContent?: string;
  heroImage: string;
  images: string[];
  materials?: {
    name: string;
    usage: string;
    image: string;
  }[];
  details?: {
    label: string;
    value: string;
  }[];
}

export interface NavItem {
  label: string;
  href: string;
}
