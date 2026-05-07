export const currentUserId = "user2";

export const users = [
  {
    id: "user1",
    name: "Amandeep Singh",
    bio: "Frontend Developer & Blogger",
  },
  {
    id: "user2",
    name: "Nishtha Sharma",
    bio: "UI/UX Designer with a love for minimalism.",
  },
];

export const blogs = [
  {
    _id: "blog1",
    title: "Inside the World of OTT: Why Streaming Rules 2025",
    content:
      "OTT platforms are reshaping how we watch content with binge-worthy series, global access, and personalized viewing.",
    desc: "Gone are the days of waiting a week for the next episode. Streaming platforms like Netflix, Prime Video, and Hotstar have revolutionized entertainment by making it instant, personalized, and globally accessible. With AI-driven recommendations, multilingual subtitles, and regional content gaining momentum, OTT is not just a trend—it’s the new normal. Moreover, web series are now competing with big-budget films in both quality and storytelling. In 2025, streaming is no longer optional; it's how the world unwinds.",
    category: "Entertainment",
    authorId: "user1",
    createdAt: "2025-07-01T10:00:00Z",
    likes: ["user2"],
    bookmarks: ["user2"],
  },
  {
    _id: "blog2",
    title: "Freelance Economy: Building a Career Without a 9-to-5",
    content:
      "More professionals are ditching traditional jobs for freelance freedom and flexibility.",
    desc: "The freelance revolution is in full swing. With platforms like Upwork, Fiverr, and Toptal, skilled individuals can now build global careers from home. Whether it's content creation, web development, or marketing, freelancers enjoy the flexibility to choose clients, set their rates, and define work-life balance on their terms. As companies seek agile talent and individuals seek purpose-driven work, freelancing is becoming a legitimate and respected career path in 2025.",
    category: "Business",
    authorId: "user1",
    createdAt: "2025-07-02T14:30:00Z",
    likes: ["user1"],
    bookmarks: [],
  },
  {
    _id: "blog3",
    title: "AI Tools That Are Changing the Way We Work",
    content:
      "From content generation to automation, these AI tools boost productivity and creativity.",
    desc: "Artificial Intelligence is no longer limited to tech experts. Tools like ChatGPT, Notion AI, Jasper, and Grammarly are simplifying everything from writing to workflow automation. Developers now generate code faster, writers overcome creative blocks instantly, and marketers automate campaigns with precision. These tools aren’t replacing jobs—they’re enhancing human potential. In 2025, knowing how to leverage AI tools is as essential as knowing how to use the internet.",
    category: "Technology",
    authorId: "user1",
    createdAt: "2025-07-03T09:15:00Z",
    likes: [],
    bookmarks: ["user1", "user2"],
  },
];