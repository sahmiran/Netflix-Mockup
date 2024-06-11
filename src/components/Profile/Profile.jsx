import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 20%;
  max-width: 200px;
`;

const Avatar = styled.img`
  width: 100%;
  border-radious: 0.2rem;
`;

const Name = styled.h2`
  color: gray;
  text-align: center;
`;

function Profile(props) {
  const { profile, setActiveProfile } = props;
  const { name, avatar } = profile;

  const history = useHistory();

  const activeProfileHandle = () => {
    setActiveProfile(profile);
    history.push("/home");
  };

  return (
    <Card onClick={activeProfileHandle}>
      <Avatar src={avatar}></Avatar>
      <Name>{name}</Name>
    </Card>
  );
}

export default Profile;
