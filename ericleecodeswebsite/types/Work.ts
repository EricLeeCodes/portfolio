import { PortableTextBlock } from "next-sanity";

export type Work = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  //content is not a string. It's a PortableTextBlock to return rich content
  content: PortableTextBlock;
};
