import React from 'react';
import {Link} from 'umi';
import styles from './index.css'

const PxxHeader = (props) => {
  return (
    <div className={styles.Header}>
      <div className={styles.tabs}>
        {
          props.tabs.map(item => {
            const isActive = item.location.pathname === props.location.pathname
            return (
              <Link to={item.location}
                    key={item.location.pathname}
                    className={`${styles.item} ${isActive ? styles.active : null}`}>
                {item.route.tabLocalName || item.route.name}
              </Link>
            )
          })
        }
      </div>
    </div>
  );
};
export default PxxHeader
