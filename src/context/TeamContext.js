import {createContext, useState} from "react";
import React from "react";

export const TeamContext = createContext();

export const TeamProvider = (props) => {
  const [showModal, setshowModal] = useState(false);
  const [index, setIndex] = useState(0);

  const teamData = [
    {
      // aa headshot 14
      id: 0,
      picture: "Jerry",
      firstname: "Jerry",
      lastname: "Ehanmo",
      department: "Advisory",
      role: "",
      experience:
        "PwC, Income Electrix, Baker Hughes (A GE Company) , British Telecoms",
      education: "University of Dundee (MSc) University of Aberdeen (MBA)",
    },
    {
      // aa headshot 13
      id: 1,
      picture: "Doyin",
      firstname: "Doyin",
      lastname: "Adebiyi",
      department: "Advisory",
      role: "",
      experience: "GTB Plc, Bureau Veritas UK, Oando Plc.",
      education:
        "KNUST Ghana (B.A. Hons Economics and Law), University of Dundee (MSc and MBA)",
    },
    {
      id: 2,
      // picture: "Babatope",
      firstname: "Babatope",
      lastname: "Olabode",
      department: "Advisory",
      role: "",
      experience:
        "Senior Finance Analyst - Chevron Nigeria Ltd                        Treasurer – Chevron Employees Multipurpose Multipurpose & Credit Society Ltd ",
      education:
        "MBA (American InterContinental University, Houston B.Sc. Accounting (O.A.U)",
    },
    {
      id: 3,
      // picture: "Jon",
      firstname: "Dr. Jon",
      middlename: "Abbas",
      Lastname: "Zaidi",
      department: "Advisory",
      role: "",
      experience:
        "Deloitte, President – EDELAP, President - AES Corporation, Director - Kyivenergo",
      education: "HEC Paris, Said Business School, 	Oxford University (MSc)",
    },
    {
      id: 4,
      // picture: "George",
      firstname: "George",
      lastname: "Etomi",
      department: "Advisory",
      role: "",
      experience:
        "Chairman - Springfield Group, Principal Partner - George Etomi & Partners",
      education: "London School of Economics (LLM)",
    },
    {
      id: 5,
      // picture: "Olufemi",
      firstname: "Olufemi",
      lastname: "Adebiyi",
      department: "Advisory",
      role: "CEO",
      experience: "CEO – Legwork Limited, Accenture USA,",
      education: "Louisiana State University (PHD Chem. Eng.)",
    },
    {
      // Aa headshot(1)
      id: 6,
      picture: "enoma",
      firstname: "Enoma",
      middlename: "",
      lastname: "Agbonifo",
      department: "",
      role: "",
      experience: "AshEpelle Attorneys, Templars, Banwo & Ighodalo  ",
      education: "University of East Anglia (LLB), University of Warwick (LLM)",
    },
    {
      //Cc Portrait 5
      id: 7,
      picture: "Kingsley",
      firstname: "Kingsley",
      middlename: "Ojima",
      lastname: "Ojoduwa",
      department: "Credit",
      role: "Credit/Financial Analyst",
      experience: "Kaduna Refinery and Petrochemical Company",
      education:
        "Agro Park Development Company Kogi State University, B.Sc.  Chemistry. University of Ibadan, M.Sc.  Inorganic Chemistry.",
    },
    {
      // aa Headshot
      // picture: "Emmanuel",
      id: 8,
      firstname: "Emmanuel",
      middlename: "Chigozirim",
      lastname: "Onwuna",
      department: "Credit",
      role: "Credit/Financial Analyst",
      experience:
        "Union Bank Plc., GoldenIgho Logistics, Dangote Cement Transport.",
      education:
        " Lagos State University-B.Sc Geography & Regional Planning, Abia State University- M.Sc Environmental Resource Mgt.(in view).",
    },
    {
      // aa Headshot
      // picture: "Nkiruka",
      id: 9,
      firstname: "Nkiruka",
      middlename: "Noella",
      lastname: "Ndulue",
      department: "Credit Management",
      role: "Credit/Financial Analyst",
      experience: "Zero finance Limited",
      education: "University of Benin B.Sc Economics and Statistics",
    },
    {
      // Cc portrait 9
      id: 10,
      picture: "Goodness",
      firstname: "Goodness",
      middlename: "Iheoma",
      lastname: "Nwankpa",
      department: "Credit Management",
      role: "Customer service/Admin",
      experience: "Cornerstone Insurance Custodian Insurance",
      education: "Madonna University, B.Sc Biochemistry",
    },
    {
      // Aa headshots 7
      id: 11,
      picture: "Kelechi",
      firstname: "Kelechi",
      middlename: "Vivian",
      lastname: "Okeke",
      department: "Credit Management",
      role: "Intern",
      experience: "",
      education: "Covenant University B.Sc. Banking and Finance",
    },
    {
      // Bb headshot9
      id: 12,
      picture: "Chinonye",
      firstname: "Chinonye",
      middlename: "Blessing",
      lastname: "Omerenma",
      department: "Credit Management",
      role: "Head, Credit Management & Origination",
      experience: "Co-link Investment management Company Ltd ",
      education: "University of Nigeria, Nsukka, B.sc Microbiology",
    },
    {
      // Cc portraits 21A
      id: 13,
      picture: "Olumide",
      firstname: "Olumide",
      middlename: "Adeyemi",
      lastname: "Odukoya",
      department: "Finance & Accounting",
      role: "Financial Controller",
      experience:
        "Broadview microfinance bank, Taurus Accounting & Tax Professionals, Olak Travels, Guaranty Trust Bank, Superior Games Limited,  Waveline growth partners ltd  ",
      education: "The Polytechnic Ibadan, HND in Accounting",
    },
    {
      // Aa Headshots (10)
      id: 14,
      picture: "Elizabeth",
      firstname: "Elizabeth",
      middlename: "Omolola",
      lastname: "Oyelade",
      department: "Finance & Accounting",
      role: "Accountant",
      experience: "Accounting Business Concept, Triversa Limited",
      education: "University of Lagos (B.sc Accounting)",
    },
    {
      //  Cc portraits (15)
      id: 15,
      picture: "Seyifunmi",
      firstname: "Seyifunmi",
      middlename: "Olakunde",
      lastname: "Yewande",
      department: "Finance & Accounting",
      role: "Financial Analyst",
      experience: "Adesanya and Partners, Page Financials",
      education:
        "Obafemi Awolowo University B.Sc. Politics, Philosophy and Economics",
    },
    {
      //  Aa headshots 2
      id: 16,
      picture: "Omozokpia",
      firstname: "Omozokpia",
      lastname: "Ehikhamenor",
      department: "Risk",
      role: "Risk Manager",
      experience: "Zenith Capital, Marathon Asset and Fund Management",
      education: "University of Benin B.Sc. Agriculture, Tekedia Institute MBA",
    },
    {
      // no picuture labeled
      id: 17,
      firstname: "Oluwatosin",
      middlename: "Ezekiel",
      lastname: "Ikudayisi",
      department: "I.T",
      role: "Software Developer",
      experience: "Icredence Solutions, Valued Seed Limited, Princeps Finance",
      education:
        "Nigeria Army Institute of Technology & Environmental studies. 	(HND computer science)",
    },
    {
      // aa headshot (12)
      id: 18,
      picture: "Olatunji",
      firstname: "Olatunji",
      lastname: "Ishmael",
      department: "I.T",
      role: "Head- Product Manager",
      experience: "i-Sitek Network and Services",
      education:
        "Yaba College of Technology, HND, Industrial Maintenance Engineering",
    },
  ];

  const contextValue = {
    teamData,
    setshowModal,
    showModal,
    setIndex,
    index,
  };

  return (
    <TeamContext.Provider value={{contextValue}}>
      {props.children}
    </TeamContext.Provider>
  );
};

/*{
  firstname: "
  lastname: "
  department: "
  role: "
  experience: "
  education: "
}*/
