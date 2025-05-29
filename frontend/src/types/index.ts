export interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  image?: string;
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  year: number;
  category: string;
  department: string;
  image: string;
  status: 'completed' | 'ongoing' | 'planned';
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  image: string;
  bio: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  category: string;
  date: string;
}

export interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}