import { Post } from "@/types/type";

export const SAMPLE_POSTS: Post[] = [
  {
    username: "botspacehq",
    caption: "WhatsApp hits 3 Billion Users!",
    imageUrl: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 71,
    comments: [
      {
        username: "Username",
        text: "Price",
        timestamp: "Now"
      }
    ],
    directMessages: [
      {
        message: "Hey there! I'm so happy you're here, thanks so much for your interest 😊",
        isLink: false
      },
      {
        message: "Click below and I'll send you the link in just a sec ✨",
        isLink: false,
        btn: true
      },
      {
        message: "Send me the link",
        isLink: true
      }
    ]
  },
  {
    username: "botspacehq",
    caption: "New features coming soon!",
    imageUrl: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 92,
    comments: [
      {
        username: "Username",
        text: "Interested",
        timestamp: "Now"
      }
    ],
    directMessages: [
      {
        message: "Hey there! I'm so happy you're here, thanks so much for your interest 😊",
        isLink: false
      },
      {
        message: "Click below✨",
        isLink: false,
        btn: true
      },
      {
        message: "Send me the link",
        isLink: true
      }
    ]
  },
  {
    username: "botspacehq",
    caption: "AI revolution is here!",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 156,
    comments: [
      {
        username: "Username",
        text: "Price",
        timestamp: "Now"
      }
    ],
    directMessages: [
      {
        message: "Hey there! I'm so happy you're here, thanks so much for your interest 😊",
        isLink: false
      },
      {
        message: "Click below and I'll send you the link in just a sec ✨",
        isLink: false,
        btn : true
      },
      {
        message: "Send me the link",
        isLink: true
      }
    ]
  },
  {
    username: "botspacehq",
    caption: "Join our community!",
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 203,
    comments: [
      {
        username: "Username",
        text: "Hi",
        timestamp: "Now"
      }
    ],
    directMessages: [
      {
        message: "Hey there! I'm so happy you're here, thanks so much for your interest 😊",
        isLink: false
      },
      {
        message: "Click below and I'll send you the link in just a sec ✨",
        isLink: false,
        btn: true
      },
      {
        message: "Send me the link",
        isLink: true
      }
    ]
  }
];