import React from "react";
import { useQuery } from "react-query";

import { api } from "../utils/api/instance";

export const RootPage = () => {
  const { data, isLoading } = useQuery(
    "characters",
    () =>
      api.get(
        "http://shift-summer-2022-backend.herokuapp.com/api/rickAndMorty/characters",
        {
          headers: {
            AuthToken: "test",
          },
        }
      ),
    {
      select: ({ data }) => {
        return data.data.results.map((character) => (
          <div>
            <img src={character.image} alt="character" />
            <div>{character.name}</div>
          </div>
        ));
      },
    }
  );

  if (isLoading) return <div>loading...</div>;

  return (
    <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>{data}</div>
  );
};
