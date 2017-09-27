import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import UserList from '../../components/Users/UserList';
import UserSearch from '../../components/Users/UserSearch';
import UserMoal from '../../components/Users/UserModal';

import styles from './Users.less';

function Users({ location, dispatch, users}) {
  const {
    loading, list, total, current,
    currentItem, modalVisible, modalType
  } = users
  const UserSearchProps = {};
  const UserListProps = {
    total,
    loading,
    current,
    dataSource: list
  };
  const UserModalProps = {};

  return (
    <div className={styles.normal}>
      {/*筛选框*/}
      <UserSearch {...UserSearchProps} />
      {/*用户信息展示列表*/}
      <UserList {...UserListProps} />
      {/*用户信息修改弹出浮层*/}
      <UserMoal {...UserModalProps} />
    </div>
  );
}
Users.propTypes = {
  users: PropTypes.object
};
function mapStateToProps({users}) {
  return {users}
}
export default connect(mapStateToProps)(Users)
