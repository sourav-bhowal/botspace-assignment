import { SAMPLE_POSTS } from "@/data/data";
import { PostState } from "@/types/type";
import { create } from "zustand";

export const usePostStore = create<PostState>((set) => ({
  // Initial state with a sample post
  post: SAMPLE_POSTS[0],

  // Sample posts data
  posts: SAMPLE_POSTS,

  // Active view and step for the post configuration
  activeView: "post",

  // Current step in the post configuration process
  currentStep: 0,

  // Selected post ID for configuration
  selectedPostId: 0,

  // Actions to manipulate the post state
  updatePost: (updates) =>
    set((state) => {
      const updatedPost = { ...state.post, ...updates };
      const updatedPosts = state.posts.map((post, idx) =>
        idx === state.selectedPostId ? updatedPost : post
      );
      return {
        post: updatedPost,
        posts: updatedPosts,
      };
    }),

  // Actions to add comments and direct messages
  addComment: (comment) =>
    set((state) => ({
      post: {
        ...state.post,
        comments: [...state.post.comments, comment],
      },
    })),

  // Actions to add direct messages
  addDirectMessage: (message) =>
    set((state) => ({
      post: {
        ...state.post,
        directMessages: [...state.post.directMessages, message],
      },
    })),

  // Actions to set the active view and manage steps
  setActiveView: (view) => set(() => ({ activeView: view })),

  // Actions to manage the current step in the configuration process
  nextStep: () =>
    set((state) => ({
      currentStep: state.currentStep + 1,
      activeView:
        state.currentStep === 0
          ? "comments"
          : state.currentStep === 1
          ? "dm"
          : "post",
    })),

  // Actions to go back to the previous step
  prevStep: () =>
    set((state) => ({ currentStep: Math.max(0, state.currentStep - 1) })),

  // Actions to select a post by ID
  selectPost: (id) =>
    set((state) => ({
      selectedPostId: id,
      post: state.posts[id],
    })),
}));
