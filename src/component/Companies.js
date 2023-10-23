import React from "react";
import img from "../Images/compnay profile.png";
const Companies = () => {
  let companyDetails = [
    {
      name: "TexlaCulture",
      subtitle: "INV-17048",
      onboarding: "12 Jan 2022",
      go_live: "07 Aug 2022",
      total: 244,
      billing_date: "07 Aug 2022",
      status: "Actice",
    },
    {
      name: "TexlaCulture",
      subtitle: "INV-17049",
      onboarding: "11 Feb 2022",
      go_live: "06 May 2022",
      total: 1000,
      billing_date: "07 Aug 2022",
      status: "Actice",
    },
    {
      name: "TexlaCulture",
      subtitle: "INV-13042",
      onboarding: "10 Sep 2022",
      go_live: "07 Aug 2022",
      total: 150,
      billing_date: "207 Aug 2022",
      status: "Draft",
    },
  ];
  return (
    <div className="company">
      <tabel>
        <thead>
          <tr className="tr">
            <th className="th1">Company Name</th>
            <th className="th2">Onboarding date</th>
            <th className="th3">Go-Live Date</th>
            <th className="th4">Total User </th>
            <th className="th5">Last Billing</th>
            <th className="th6">Status</th>
          </tr>
        </thead>
        <tbody>
          {companyDetails.map((c) => (
            <tr key={c.id} className="trr">
              <td className="flex">
                <img src={img} alt="Company_profile" />
                <div className="flex2">
                  <p>{c.name}</p>
                  <span className="subfont">{c.subtitle}</span>
                </div>
              </td>
              <td className="tdd">{c.onboarding}</td>
              <td className="tdd">{c.go_live}</td>
              <td className="tdd">{c.total}</td>
              <td className="tdd">{c.billing_date}</td>
              <td className="tdd">{c.status}</td>
            </tr>
          ))}
        </tbody>
      </tabel>
    </div>
  );
};

export default Companies;
