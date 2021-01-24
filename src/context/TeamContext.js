import {createContext, useState} from "react";
import React from "react";

export const TeamContext = createContext();

export const TeamProvider = (props) => {
  const [teamData, setTeamData] = useState([
    {
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
      // Cc Portrait 5
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
      picture: "Emmanuel",
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
      picture: "Nkiruka",
      firstname: "Nkiruka",
      middlename: "Noella",
      lastname: "Ndulue",
      department: "Credit Management",
      role: "Credit/Financial Analyst",
      experience: "Zero finance Limited",
      education: "University of Benin B.Sc Economics and Statistics",
    },
  ]);

  const contextValue = {teamData};

  return (
    <TeamContext.Provider value={{contextValue}}>
      {props.children}
    </TeamContext.Provider>
  );
};
