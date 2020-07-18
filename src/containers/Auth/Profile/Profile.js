import React from "react";
import { auth } from "../../../utils/Firebase";

const Profile = () => {
  return (
    <div className='container'>
      <div>
        <div>
          <h2>{}</h2>
          <h3>{}</h3>
        </div>
      </div>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
};
export default Profile;
