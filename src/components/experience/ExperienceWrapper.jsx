import React from "react";
import CompaniesBar from "./CompaniesBar";
import LnvDigitalExperience from "./LnvDigitalExperience";
import ADDigitech from "./ADDigitech";

const ExperienceWrapper = () => {
  const [DescriptionJob, setDescriptionJob] =
    React.useState("LnvDigitalExperience");

  const GetDescription = () => {
    switch (DescriptionJob) {
      case "LnvDigitalExperience":
        return <LnvDigitalExperience />;
      case "ADDigitech":
        return <ADDigitech />;
      default:
        return null;
    }
  };

  return (
    <section className="flex w-full flex-col lg:flex-row gap-6 px-4 lg:px-20">
      <CompaniesBar setDescriptionJob={setDescriptionJob} />
      <div className="flex-1">{GetDescription()}</div>
    </section>
  );
};

export default ExperienceWrapper;
