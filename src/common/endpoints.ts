import client1 from "assets/images/client1.jpg";
import client2 from "assets/images/client2.jpg";
import client3 from "assets/images/client3.jpg";
import client4 from "assets/images/client4.jpg";
import client5 from "assets/images/client5.jpg";
import client6 from "assets/images/client6.jpg";
import client7 from "assets/images/client7.jpg";
import client8 from "assets/images/client8.jpg";
import client9 from "assets/images/client9.jpg";
import client10 from "assets/images/client10.jpg";
import client11 from "assets/images/client11.jpg";
import client12 from "assets/images/client12.jpg";
import client13 from "assets/images/client13.jpg";

export const pageContent = [
  {
    type: "projects",
    layout: "grid",
    projects: [
      {
        uuid: "1",
        title: "A Summer island in the Netherlands",
        companyName: "BOL.COM",
        categories: ["commercial"],
        imagePath: client1,
      },
      {
        uuid: "2",
        title: "Not some average banking website",
        companyName: "KEMPEN",
        categories: ["lighting"],
        imagePath: client2,
      },
      {
        uuid: "3",
        title: "Beautiful design meets innovative technology",
        companyName: "PHILIPS",
        categories: ["commercial"],
        imagePath: client3,
      },
      {
        uuid: "4",
        title: "A 100 years of Mondriaan & De Stijl",
        companyName: "GEMEENTEMUSEUM",
        categories: ["social"],
        imagePath: client4,
      },
    ],
  },
  {
    type: "projects",
    layout: "notes",
    projects: [
      {
        uuid: "1",
        title: "Rethinking the entire online ecosystem",
        companyName: "FLORENSIS",
        categories: ["tech"],
        imagePath: client5,
        notes: [
          {
            companyName: "MICROSOFT",
            text: "Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
            uuid: "1",
          },
          {
            companyName: "O’NEILL",
            text: "Integrating existing content into O’Neills’s new e-commerce platform",
            uuid: "2",
          },
          {
            companyName: "MICROSOFT",
            text: "Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
            uuid: "3",
          },
        ],
      },
    ],
  },
  {
    type: "projects",
    layout: "grid",
    projects: [
      {
        uuid: "1",
        title: "Delivering clarity on a global scale",
        companyName: "BE LIGHTNING",
        categories: ["commercial"],
        imagePath: client6,
      },
      {
        uuid: "2",
        title: "Swipe to find your next holiday destination",
        companyName: "TUI",
        categories: ["travel"],
        imagePath: client7,
      },
    ],
  },
  {
    type: "projects",
    layout: "notes",
    reverse: true,
    projects: [
      {
        uuid: "1",
        title: "Delivering clarity on a global scale",
        companyName: "BE LIGHTNING",
        categories: ["lighting"],
        imagePath: client8,
        notes: [
          {
            companyName: "AMAZON",
            text: "Starting with delivering through drones",
            uuid: "1",
          },
          {
            companyName: "O’NEILL",
            text: "Integrating existing content into O’Neills’s new e-commerce platform",
            uuid: "2",
          },
          {
            companyName: "MICROSOFT",
            text: "Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
            uuid: "3",
          },
        ],
      },
    ],
  },
  {
    type: "projects",
    layout: "grid",
    projects: [
      {
        uuid: "1",
        title: "A Summer island in the Netherlands",
        companyName: "BOL.COM",
        imagePath: client9,
        categories: ["commercial"],
      },
      {
        uuid: "2",
        title: "Not some average banking website",
        companyName: "KEMPEN",
        imagePath: client10,
        categories: ["banking"],
      },
      {
        uuid: "3",
        title: "Beautiful design meets innovative technology",
        companyName: "PHILIPS",
        imagePath: client11,
        categories: ["commercial"],
      },
      {
        uuid: "4",
        title: "A 100 years of Mondriaan & De Stijl",
        companyName: "GEMEENTEMUSEUM",
        imagePath: client12,
        categories: ["city"],
      },
    ],
  },
  {
    type: "quote",
    text: "“Dept helped us tell our story through a bold new identity and a robust online experience. To the tone of 60% growth in online bookings in just one month”",
    author: "MATTIJS TEN DRINK - CEO, TRANSAVIA",
  },
  {
    type: "projects",
    layout: "grid",
    projects: [
      {
        uuid: "1",
        title: "A Summer island in the Netherlands",
        companyName: "BOL.COM",
        imagePath: client13,
        categories: ["commercial"],
      },
      {
        uuid: "2",
        title: "Not some average banking website",
        companyName: "KEMPEN",
        imagePath: client4,
        categories: ["environment"],
      },
    ],
  },
  {
    type: "clients",
  },
  {
    type: "question-form",
  },
];

export const fakeGetPageData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(pageContent);
    }, 2000);
  });
