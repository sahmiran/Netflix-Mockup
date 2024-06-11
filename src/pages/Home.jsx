import { useEffect } from "react";
import { userSuggestionsData } from "../userSuggestions";
import Suggestion from "../components/Suggestions/Suggestion";
import { useState } from "react";

export default function Home(props) {
  const { activeProfile } = props;
  const { name } = activeProfile;
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestionsData = userSuggestionsData[activeProfile.id];
    setSuggestions(suggestionsData);
  }, [activeProfile]);

  return (
    <>
      <div>Home {name}</div>
      {suggestions.map((suggestion, index) => {
        return <Suggestion key={index} suggestion={suggestion} />;
      })}
    </>
  );
}
