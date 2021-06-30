import React from "react";
import { useQuery, gql } from "@apollo/client";

const ROASTERS = gql`
  {
    roasters {
        best_speciality_roast
        name
        id
    }
  }
`;

const Roasters = ({ newRoasters }) => {
  const { loading, error, data } = useQuery(ROASTERS);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;

  return data.roasters.map(({id, name, best_speciality_roast}) => (
  	<div key={id}>
      <p>
      	{name} | {best_speciality_roast}
      </p>
    </div>
  ));
};

export default Roasters;