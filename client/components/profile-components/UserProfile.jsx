import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const UserProfile = () => {
  // const { matchList, total } = useSelector((store) => store.matches);
  const { user_id } = useSelector((state) => state.auth);
  // const [matches, setMatches] = useState(0);
  const handleImages = async () => {
    const images = await axios.get(`api/images/getImages?user_id=${user_id}`);
    console.log("images", images);
  };
  return (
    <>
      <div>I'm UserProfile</div>;
      <button onClick={handleImages}>SHOW IMAGES</button>
    </>
  );
};

export default UserProfile;
