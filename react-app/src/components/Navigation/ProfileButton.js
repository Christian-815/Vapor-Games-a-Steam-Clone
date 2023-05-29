import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory()

  const openMenu = () => {
    if (showMenu) {
      return setShowMenu(false)
    } else {
      return setShowMenu(true);
    }
  };
  // const closeMenu = () => setShowMenu(false);

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch(logout());
    history.push('/');
    return window.location.reload()
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  // console.log(showMenu)

  return (
    <>
      <button className="login-button" onClick={openMenu}>
        <>
          <div className="navbar-user-username-dropdown">
            <div>
              {user.username}
            </div>
            <div>
              <img src='https://store.cloudflare.steamstatic.com/public/shared/images/popups/btn_arrow_down_padded.png' />
            </div>
          </div>
        </>
      </button>
      <div className={ulClassName} ref={ulRef}>
        <div>{user.username}</div>
        <div>{user.email}</div>
        <div>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </>
  );
}

export default ProfileButton;
