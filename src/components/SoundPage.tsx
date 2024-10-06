import React from "react";
import { useParams } from "react-router-dom";
import {
  loadJsonFile,
  storeJsonToLocalStorage,
  loadJsonFromLocalStorage,
  editJson,
  storeEditedJson,
} from "../utils/jsonUtils";

const SoundPage: React.FC = () => {
  // Extract the 'sound' parameter from the URL
  const { id } = useParams<{ id: string }>();
  const sound = id;

  const wordList: string[] = loadJsonFromLocalStorage(sound ? sound : "");

  return (
    <>
      <h1>Sound Page</h1>
      <h2>{id}</h2>
      <ul>
        {wordList ? (
          wordList.map((word) => (
            // Use item.id as the key and display item.name
            <li key={word}>
              <a
                href={
                  "https://vtudien.com/viet-trung/dictionary/nghia-cua-tu-" +
                  word.split(" ").join("%20")
                }
              >
                {word}
              </a>
            </li>
          ))
        ) : (
          <li>No word under this sound</li>
        )}
      </ul>
    </>
  );
};

export default SoundPage;
