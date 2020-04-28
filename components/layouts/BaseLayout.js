import React from "react";
import Header from "../shared/Header";
import Head from "next/head";

const BaseLayout = (props) => {
  const {
    className,
    children,
    isAuthenticated,
    user,

  } = props;
  const headerType = props.headerType || "default";
  const title = props.title || "Yohan Kim Portfolio";
  return (
    <React.Fragment>
      <div className="layout-container">
        <Header
          className={`port-nav-${headerType}`}
          isAuthenticated={isAuthenticated}
          user={user}

        />
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
