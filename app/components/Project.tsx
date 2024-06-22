import EntryItem from "./common/EntryItem";

export default function Project() {
  const projects = [
    {
      title: "NBA Shotchart",
      duration: "Jun – Aug 2020",
      descriptions: [
        "Web application that visualizes and tracks where NBA players shoot on the basketball court, with information such as field goal percentage, distance to basket, shot type, and shot zone. The shot charts can further be filtered based on the year, season type, team, player, and period.",
        "Deployed serverless GraphQL backend to AWS Lambda that’s connected through Amazon API Gateway",
      ],
      technologies: [
        "React",
        "D3.js",
        "Node.js",
        "Express",
        "AWS Lambda",
        "MongoDB",
        "GraphQL",
        "Apollo",
        "TypeScript",
      ],
    },
    {
      title: "SpotifyQ",
      duration: "Jul – Sep 2019",
      descriptions: [
        "Web application built with Django that allows users to add songs to a Spotify queue and vote on them to collectively decide what to play at a party or event.",
        "Used Python’s requests library with client-side AJAX to interact with Spotify’s Web API with OAuth 2.0",
        "Implemented WebSockets with Django Channels to synchronize added tracks and their vote counts",
        "Stored playback, queue, and vote count information in database using Heroku Postgres and Django ORM",
      ],
      technologies: [
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "jQuery",
        "Django",
        "PyUnit",
        "OAuth",
        "MVC",
      ],
    },
  ];

  return (
    <>
      {projects.map((exp, index) => (
        <EntryItem key={index} {...exp} />
      ))}
    </>
  );
}
