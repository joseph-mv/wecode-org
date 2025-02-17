type Organizer = {
  name: string;
  position: string;
  image?: string;
};
export type College = {
  name: string;
  about:string
  place: string;
  image: string;
  organizers: Organizer[];
};

export const colleges: College[] = [
  {
    name: "Lovely Professional University-LPU",
    place: "Chaheru, Phagwara , Punjab",
    about:"Lovely Professional University (LPU) is a private university located in Chaheru, Phagwara, Punjab, India. The university was established in 2005 by Lovely International Trust, through the Lovely Professional University Act, 2005 (Punjab Act 25 of 2005) and started operation in 2006.",
    image: "/images/collegeChapters/colleges/Lpu/Lpu college.webp",
    organizers: [
      {
        name: "Gautham Madhu",
        position: "President/CEO",
        image:
          "/images/collegeChapters/colleges/Lpu/organizers/Gautham Madhu.jpg",
      },
      {
        name: "Benson Binu Philip",
        position: "President/CEO",
        image:
          "/images/collegeChapters/colleges/Lpu/organizers/Benson Binu Philip.jpg",
      },
      {
        name: "Muhammed AL Fahim Meethale",
        position: "Finance Head",
        image:
          "/images/collegeChapters/colleges/Lpu/organizers/Muhammed AL Fahim Meethale.jpg",
      },
      {
        name: "Luthfi Nassir",
        position: "Marketing Head ",
        image:
          "/images/collegeChapters/colleges/Lpu/organizers/Luthfi Nassir.jpg",
      },
      {
        name: "Advaith Krishna",
        position: "People Manager",
        image:
          "/images/collegeChapters/colleges/Lpu/organizers/Advaith Krishna.jpg",
      },
      {
        name: "Niranj Toms",
        position: "Event Manager",
        image:
          "/images/collegeChapters/colleges/Lpu/organizers/Niranj Toms.jpg",
      },
    ],
  },

  {
    name: "Government College of Engineering, Kannur",
    about:"Government College of Engineering, Kannur is one of the premier institutes among the 9 Government Engineering Colleges in Kerala and was established in 1986. The college is functioning in a sprawling 68-acre scenic campus, having sound and self-sufficient infrastructure,at Mangattuparamba, near the National Highway, 15 k.m from the headquarters of Kannur district.",
    place: "Kannur, Kerala",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Government_College_of_Engineering%2C_Kannur.jpg",
      organizers:[
        { name: "Aleena Ann Tomy", position: "Chairperson", image: "/images/collegeChapters/colleges/GCE Kannur/organizers/Aleena Ann Tomy.jpg" },
        { name: "Vyshakh Rajeevan", position: "Vice Chairperson", image: "/images/collegeChapters/colleges/GCE Kannur/organizers/Vyshakh Rajeevan.jpg" },
        { name: "Sreenand Murali", position: "Technical Head", image: "/images/collegeChapters/colleges/GCE Kannur/organizers/Sreenand Murali.jpg" },
        { name: "Mohammed Fadil", position: "Event Head", image: "/images/collegeChapters/colleges/GCE Kannur/organizers/Mohammed Fadil.jpg" },
        { name: "Vijay Kiran K", position: "Outreach Head", image: "/images/collegeChapters/colleges/GCE Kannur/organizers/Vijay Kiran K.jpg" },
        { name: "Anshif T P", position: "Finance Head", image: "/images/collegeChapters/colleges/GCE Kannur/organizers/Anshif T P.jpg" }
      ]
  
    },
];
