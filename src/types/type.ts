// Interface for posts
export interface Post {
  username: string;
  caption: string;
  imageUrl: string;
  likes: number;
  comments: Comment[];
  directMessages: DirectMessage[];
  commentKeywords?: string;
  commentType?: string;
  commentUsername?: string;
}

// Interface for comments
export interface Comment {
  username: string;
  text: string;
  timestamp: string;
}

// Interface for direct messages
export interface DirectMessage {
  message: string;
  isLink?: boolean;
  btn?: boolean; // Indicates if the message is a button prompt
}

// Interface for the post state in Zustand store
export interface PostState {
  post: Post;
  activeView: "post" | "comments" | "dm";
  currentStep: number;
  selectedPostId: number;
  posts: Post[];
  updatePost: (updates: Partial<Post>) => void;
  addComment: (comment: Comment) => void;
  addDirectMessage: (message: DirectMessage) => void;
  setActiveView: (view: "post" | "comments" | "dm") => void;
  nextStep: () => void;
  prevStep: () => void;
  selectPost: (id: number) => void;
}
