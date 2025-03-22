type Organizer = {
    name: string;
    position: string;
    image?: string;
  };
  export type College = {
    name: string;
    about?: string;
    place: string;
    image: string;
    comingSoon?: boolean;
    organizers?: Organizer[];
  };
  
  export const colleges: College[] = [
    {
      name: "Lovely Professional University-LPU",
      place: "Chaheru, Phagwara , Punjab",
      about:
        "Lovely Professional University (LPU) is a private university located in Chaheru, Phagwara, Punjab, India. The university was established in 2005 by Lovely International Trust, through the Lovely Professional University Act, 2005 (Punjab Act 25 of 2005) and started operation in 2006.",
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
      about:
        "Government College of Engineering, Kannur is one of the premier institutes among the 9 Government Engineering Colleges in Kerala and was established in 1986. The college is functioning in a sprawling 68-acre scenic campus, having sound and self-sufficient infrastructure,at Mangattuparamba, near the National Highway, 15 k.m from the headquarters of Kannur district.",
      place: "Kannur, Kerala",
      image:
        "/images/collegeChapters/colleges/GCE Kannur/Gec_Kannur.jpg",
      organizers: [
        {
          name: "Aleena Ann Tomy",
          position: "Chairperson",
          image:
            "/images/collegeChapters/colleges/GCE Kannur/organizers/Aleena Ann Tomy.jpg",
        },
        {
          name: "Vyshakh Rajeevan",
          position: "Vice Chairperson",
          image:
            "/images/collegeChapters/colleges/GCE Kannur/organizers/Vyshakh Rajeevan.jpg",
        },
        {
          name: "Sreenand Murali",
          position: "Technical Head",
          image:
            "/images/collegeChapters/colleges/GCE Kannur/organizers/Sreenand Murali.jpg",
        },
        {
          name: "Mohammed Fadil",
          position: "Event Head",
          image:
            "/images/collegeChapters/colleges/GCE Kannur/organizers/Mohammed Fadil.jpg",
        },
        {
          name: "Vijay Kiran K",
          position: "Outreach Head",
          image:
            "/images/collegeChapters/colleges/GCE Kannur/organizers/Vijay Kiran K.jpg",
        },
        {
          name: "Anshif T P",
          position: "Finance Head",
          image:
            "/images/collegeChapters/colleges/GCE Kannur/organizers/Anshif T P.jpg",
        },
      ],
    },
  
    {
      name: "College of Engineering, Trivandrum",
      place: "Trivandrum, Kerala",
      image: "/images/collegeChapters/colleges/cet trivandrum.jpg",
      comingSoon:true
    },


    {
      name: "NIT Calicut",
      place: "Calicut, Kerala",
      image:
        "/images/collegeChapters/colleges/nit calicut.png",
        comingSoon:true
    },


    {
      name: "Rajagiri School of Engineering & Technology",
      place: "Kochi, Kerala",
      image:
        "/images/collegeChapters/colleges/rajagiri.jpg",
        comingSoon:true
    },


    {
      name: "TKM College of Engineering",
      place: "Kollam, Kerala",
      image:"/images/collegeChapters/colleges/Thangal_Kunju_Musaliar_College_of_Engineering,_Kollam,_Kerala.jpg",
      comingSoon:true
        
    
      },


    {
      name: "Model Engineering College",
      place: "Thrikkakara, Kerala",
      image:
        "/images/collegeChapters/colleges/modelEngg.jpeg",
        comingSoon:true
    },


    {
      name: "Government Engineering College, Thrissur",
      place: "Thrissur, Kerala",
      image:
        "/images/collegeChapters/colleges/Gec_thrissur.jpg",
        
        comingSoon:true
    },


    {
      name: "SCMS School of Engineering & Technology",
      place: "Ernakulam, Kerala",
      image: "/images/collegeChapters/colleges/SCMS college.jpg",
      comingSoon:true
    },


    {
      name: "Amrita School of Engineering, Kollam",
      place: "Kollam, Kerala",
      image:
        "/images/collegeChapters/colleges/amrita-amritapuri-campus.jpg",
        comingSoon:true
    },


    {
      name: "FISAT",
      place: "Angamaly, Kerala",
      image:
        "/images/collegeChapters/colleges/fisat.jpg",
        comingSoon:true
    },
  ];
  