import React, { useState, useEffect } from "react";
import { Dropdown, Icon } from "semantic-ui-react";

const trigger = (props) => (
  <span>
    <a class="navbar-item"><img class="header-avatar" src={props.avatar}></img></a>
  </span>
);

const options = [
  {
    key: "user",
    text: (
      <span>
        Signed in as <strong>me</strong>
      </span>
    ),
    disabled: true
  },
  { key: "profile", text: "Your Profile" },
  { key: "saved", text: "Saved Booths" },
  { key: "help", text: "Help" },
  { key: "settings", text: "Settings" },
  { key: "sign-out", text: "Sign Out" }
];

function ProfileDropMenu(props) {
  return <Dropdown trigger={trigger} options={options} />;
}

export default ProfileDropMenu;
