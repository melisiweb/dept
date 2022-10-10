interface MenuItem {
  path: string;
  label: string;
  end?: boolean;
}

const HOME = {
  path: "/",
  label: "Home",
  end: true,
};

const WORK = {
  path: "/work",
  label: "Work",
  end: true,
};

const CULTURE = {
  path: "/culture",
  label: "Culture",
};

const SERVICES = {
  path: "/services",
  label: "Services",
};

const INSIGHTS = {
  path: "/insights",
  label: "Insights",
};

const CAREERS = {
  path: "/careers",
  label: "Careers",
};

const PARTNERS = {
  path: "/partners",
  label: "Partners",
};

const STORIES = {
  path: "/stories",
  label: "Stories",
};

const EVENTS = {
  path: "/events",
  label: "Events",
};

const CONTACT = {
  path: "/contact",
  label: "Contact",
};

export const mainMenuShort: MenuItem[] = [
  WORK,
  CULTURE,
  SERVICES,
  INSIGHTS,
  CAREERS,
  CONTACT,
];

export const mainMenuLong: MenuItem[] = [
  HOME,
  WORK,
  CULTURE,
  SERVICES,
  PARTNERS,
  STORIES,
  CAREERS,
  EVENTS,
  CONTACT,
];
