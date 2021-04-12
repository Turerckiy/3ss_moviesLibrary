import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getCollectionId } from "../../services/API/api";
import { useData } from "../../services/Contexts/DataContext";
import { useLoader } from "../../services/Contexts/LoaderContext";
import Form from "../../structure/Form/Form";
import {
  Container,
  Ul,
} from "../../structure/stylredComponents/stiledComponents";
import CollectionsList from "./CollectionsList";

function Collections() {
  const { search: searchQuery } = useLocation();
  const [, setState] = useData(null);
  const [collectons, setCollectons] = useState(null);
  const [, setIsLoading] = useLoader(false);

  useEffect(() => {
    if (!searchQuery) return;
    setIsLoading(true); //spiner on
    getCollectionId({ searchQuery }) //get collections {id, name}
      .then((response) => {
        setCollectons(response); //set local stse collections {id, name}
        setIsLoading(false); //spiner off
        // setState((prev) => ({
        //   ...prev,
        //   // currentCollectons: 2,
        //   // currentSection: `${path}`,
        // }));
      })
      .catch((error) => {
        setState((prev) => ({
          ...prev,
          error: error.response.data,
        }));
        setIsLoading(false); //spiner off

        throw new Error(error.response.data);
      });
  }, [searchQuery]);
  return (
    <Container>
      <p>Collections page</p>
      <Form queryLocation={"Collection"} />

      {collectons && (
        <Ul>
          {collectons.map((item) => (
            <CollectionsList item={item} />
          ))}
        </Ul>
      )}
    </Container>
  );
}
export default Collections;
