// const { createContext, useContext } = require("react");
// import { useState } from "react";

// // create post context here
// const postContext = createContext();

// // Create custom hook that returns context value here
// export function usePostContextValue() {
//   const value = useContext(postContext);
//   return value;
// }

// // create a custom saved post provider here with add and reset functions

// function CustomPostContext({ children }) {
//   const [savedPosts, setSavedPosts] = useState([]);
//   const [showSavedList, setShowSavedList] = useState(false);

//   function handleReset() {
//     setSavedPosts([]);
//   }

//   function toggleShowSavedList() {
//     setShowSavedList(!showSavedList);
//   }

//   function toggleSavedPosts(post) {
//     const index = savedPosts.findIndex((i) => i.id === post.id);
//     if (index === -1) {
//       // then add to the savedPost
//       setSavedPosts([{...post},...savedPosts]);
//     } else {
//       // remove from the post
//       console.log('hi');
//       savedPosts.splice(index,1);
//       setSavedPosts(savedPosts);
//     }
//   }

//   return (
//     <>
//       <postContext.Provider
//         value={{
//           savedPosts,
//           showSavedList,
//           handleReset,
//           toggleSavedPosts,
//           toggleShowSavedList,
//         }}
//       >
//         {children}
//       </postContext.Provider>
//     </>
//   );
// }

// export default CustomPostContext;

import { useState, useContext, createContext } from "react";

const postContext = createContext();

export const usePostsValue = () => {
  const value = useContext(postContext);
  return value;
};

export const PostContextProvider = ({ children }) => {
  const [savedPosts, setSavedPosts] = useState([]);

  const resetPosts = () => setSavedPosts([]);

  const isPostSaved = (post) => !!savedPosts.find((p) => p.id === post.id);

  const savePost = (post) => {
    const isSaved = isPostSaved(post);
    if (isSaved) {
      return alert("Post is already saved.");
    }
    setSavedPosts((prev) => [post, ...prev]);
  };

  return (
    <postContext.Provider
      value={{ savedPosts, setSavedPosts, resetPosts, savePost, isPostSaved }}
    >
      {children}
    </postContext.Provider>
  );
};
