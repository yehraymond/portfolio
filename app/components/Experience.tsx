import EntryItem from "./common/EntryItem";
import { EntryItemProps } from "./common/EntryItem";

export default function Experience() {
  const experiences: EntryItemProps[] = [
    {
      title: "Software Development Engineer · Amazon",
      duration: "Jul 2022 - Present",
      descriptions: [
        "Designed and implemented a comprehensive AWS-based automated backup solution for DynamoDB and RDS database engines. Implemented robust authorization controls and IAM based authentication for cross-account service access, ensuring compatibility across different AWS partitions such as GovCloud and China.",
        "Designed and developed a full-stack control plane operations dashboard using React and responsive design principles, integrating AWS CloudWatch for real-time service monitoring.",
        "Developed a code deployment automation tool that facilitated rapid AWS service deployment in new data centers globally, accounting for 13% of all region builds in AWS, with zero human intervention required.",
        "Developed and maintained a Control-Plane-as-a-Service platform with microservices for metadata storage and the lifecycle of data plane software, supporting critical services like Amazon Timestream and AWS HPC",
      ],
      technologies: [
        "EC2",
        "Lambda",
        "S3",
        "RDS",
        "ECS",
        "DynamoDB",
        "IAM",
        "KMS",
        "CloudWatch",
        "CDK",
        "CloudFormation",
        "EventBridge",
        "Glue",
        "Docker",
        "Java",
        "Kotlin",
        "Gradle",
        "Typescript",
        "Javascript",
        "Python",
        "Ruby",
        "React",
        "HTML",
        "CSS",
        "Smithy",
        "CI/CD",
      ],
    },
    {
      title: "Software Developer Intern · SAP",
      duration: "Jan - Apr 2021",
      descriptions: [
        "Migrated the backend web application architecture with a focus on increasing the performance using Java and GraphQL",
        "Improved and implemented the revamped frontend UI of SAP Concur using React and Redux",
        "Added E2E and unit tests for the application using Selenium, Cucumber, Enzyme, and Jest",
      ],
      technologies: [
        "Typescript",
        "Javascript",
        "Java",
        "GraphQL",
        "Jest",
        "React",
        "React Native",
        "Redux",
        "Selenium",
        "Enzyme",
        "Cucumber",
        "Kibana",
        "SQL",
      ],
    },
    {
      title: "Software Development Engineer Intern · Planview",
      duration: "Jan - Aug 2020",
      descriptions: [
        "Developed and maintained SDK interfacing with diverse third-party ALM, ITSM, and DevOps tools across platforms like GitHub, Microsoft Azure DevOps, Jira, Asana, and Salesforce",
        "Maintained build health and ensured successful deployment across all environments using Jenkins and Maven build tools",
        "Contributed to Mylyn Wikitext of the Eclipse Mylyn Open Source Project",
      ],
      technologies: [
        "Java",
        "Ruby on Rails",
        "Golang",
        "SQL",
        "Maven",
        "Jenkins",
        "Mockito",
        "Git",
      ],
    },
  ];

  return (
    <>
      {experiences.map((exp, index) => (
        <EntryItem key={index} {...exp} />
      ))}
    </>
  );
}
