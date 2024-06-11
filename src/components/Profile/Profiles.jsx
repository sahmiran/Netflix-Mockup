import { useState } from "react";
import { profilesData } from "../../profiles";
import styled from "styled-components";
import Profile from "./Profile";

const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

function Profiles(props) {
  const [profiles, setProfiles] = useState(profilesData);
  const { setActiveProfile } = props;
  return (
    <ProfileContainer>
      {profiles.map((profile) => {
        return (
          <Profile
            key={profile.id}
            profile={profile}
            setActiveProfile={setActiveProfile}
          />
        );
      })}
    </ProfileContainer>
  );
}

export default Profiles;
