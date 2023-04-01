import React from 'react';
import Giscus from '@giscus/react';

export const Comment = () => {
  return (
    <div style={{ paddingTop: 50 }}>
      <Giscus
        id="comments"
        // highlight-warn-start
        // 这部分填写你自己的
        repo="YouniQiao/hicarcool"
        repoId="R_kgDOJRIkVg"
        category="Announcements"
        categoryId="DIC_kwDOJRIkVs4CVdL8"
        // highlight-warn-end
        mapping="title"
        strict="1"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="light"
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
};

export default Comment;
