import React from "react";

function TeamMemberCard({ name, role }) {
  console.log(`name : ${name} and role : ${role}`);

  return (
    <>
      <h1> Name: {`hi ${name} `} </h1>
      <h1> Role: {role} </h1>
    </>
  );
}

export default TeamMemberCard;
