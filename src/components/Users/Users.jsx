import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        avatar:
          "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
        fullName: `cth`,
        status: `я тик-ток`,
        location: { city: `serpuhov`, country: `ru` },
      },
      {
        id: 2,
        followed: true,
        avatar:
          "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
        fullName: `shbmnk`,
        status: `nigga, diffa`,
        location: { city: `toola`, country: `ru` },
      },
      {
        id: 3,
        followed: false,
        avatar:
          "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png",
        fullName: `fv`,
        status: `чтоо..`,
        location: { city: `moscow`, country: `ru` },
      },
    ]);
  }

  return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.avatar} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                       
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;