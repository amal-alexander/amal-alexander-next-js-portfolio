export type MetaProps = {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
};

export interface PageProps {
  children: React.ReactNode;
}

export type EmbedContentProps = {
  url: string;
  title: string;
};