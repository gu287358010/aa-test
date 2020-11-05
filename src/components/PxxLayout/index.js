import React from 'react';
import {Link} from 'umi';
import Icon from '../Icon';
import {Layout} from 'antd';
import PropTypes from 'prop-types';
import Header from '../Header';
import PageTab from "../PageTab";
import ProLayout from '@ant-design/pro-layout';
import request from 'umi-request';

import styles from './index.css';

const PxxLayout = (props) => {
  console.log('PxxLayout:', props)

  const menuItemRender = (menuItemProps, defaultDom) => {
    if (menuItemProps.isUrl || !menuItemProps.path) {
      return defaultDom;
    }
    return <Link to={menuItemProps.path}>{defaultDom}</Link>;
  };
  const menuDataRender = (menus) =>
    menus.map(({icon, children, ...item}) => ({
      ...item,
      icon: icon && <Icon type={icon}/>,
      children: children && menuDataRender(children),
    }));

  return (
    <ProLayout className={styles.PxxLayout}
               loading={props.loading}
               menuItemRender={menuItemRender}
               headerRender={props.headerRender}
               contentStyle={props.contentStyle}
               menuDataRender={() => menuDataRender(props.menuData)}>
      <Layout>
        <Header tabs={props.tabs}
                location={props.location}/>
        <PageTab tabs={props.tabs}
                 location={props.location}>
          {props.children}
        </PageTab>
      </Layout>
    </ProLayout>
  );
};

PxxLayout.prototype = {
  loading: PropTypes.bool,
  headerRender: PropTypes.bool,
  contentStyle: PropTypes.object,
  menuData: PropTypes.array,
  tabs: PropTypes.array,
  location: PropTypes.object,
};

PxxLayout.defaultProps = {
  loading: false,
  headerRender: false,
  contentStyle: {margin: 0, display: 'flex'},
  menuData: [],
  tabs: [],
  location: {},
};

export default PxxLayout;
