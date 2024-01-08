import Mock from 'mockjs';
import React from 'react';
import { useRequest } from 'zz-hooks';

function getUsername() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

export default () => {
  const { data, loading } = useRequest(getUsername, {
    refreshOnWindowFocus: true,
  });

  return (
    <>
      {/* @ts-ignore */}
      <div>Username: {loading ? 'Loading' : data}</div>;
    </>
  );
};
