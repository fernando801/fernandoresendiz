export interface Project {
  name: string;
  description: string;
  img: {
    url: string;
    alt: string;
  };
  demo: string;
  repo: string;
  technologies: Array<string>;
}
