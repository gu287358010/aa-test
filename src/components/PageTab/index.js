import React from 'react';
import styles from './index.css'

const PageTab = props => {
  const {tabs, location} = props;
  const isLocationInTab = tabs.some(item => item.location.pathname === location.pathname);
  const tabsRender = () => {
    if (!isLocationInTab) return props.children;
    return (
      <>
        {tabs.map(item => (
          <div key={item.location.pathname}
               className={`${styles.PageTab} ${item.location.pathname === location.pathname ? styles.show : styles.hide}`}>
            {item.children}
          </div>
        ))}
      </>
    )
  }
  return (
    <>
      {tabsRender()}
    </>
  );
};

export default PageTab;
