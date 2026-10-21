import { parse } from 'yaml';
import pubsRaw from '../data/publications.yaml?raw';
import cvRaw from '../data/cv.yaml?raw';
import mentorshipRaw from '../data/mentorship.yaml?raw';
import newsRaw from '../data/news.yaml?raw';
import teachingRaw from '../data/teaching.yaml?raw';

export type Publication = {
  id: string; type: string; year?: number; authors: string; title: string;
  venue?: string; short_venue?: string; author_count?: number; links?: { label: string; url: string }[];
};
export const publications: Publication[] = parse(pubsRaw);
export const cv = parse(cvRaw) as {
  updated: string;
  sections: { title: string; compact?: boolean; items: { when: string; what: string; where?: string; detail?: string }[] }[];
};

export const mentorship = parse(mentorshipRaw) as {
  intro: string;
  posters: { image: string; title: string; students: string; institution: string; years: string; description: string }[];
  others: { name: string; institution: string; years: string; description: string }[];
  programs?: { name: string; url?: string; institution: string; years: string; description: string }[];
};

export const teaching = parse(teachingRaw) as {
  intro: string;
  workshop: { title: string; where: string; when: string; term: string; photo: string; photo_alt: string; description: string; instructors: string; materials: string };
  courses: { institution: string; items: { when: string; what: string; detail?: string }[] }[];
  thanks: { text: string; name: string; link: string; link_label: string; photo: string };
};

export type NewsItem = { outlet: string; title: string; date: string; url: string; image?: string; fallback?: string; project?: string };
export const news: NewsItem[] = parse(newsRaw);
export const newsFor = (projectId: string) => news.filter((n) => n.project === projectId);

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/** Author list as HTML with the site owner's name in bold. */
export const authorsHtml = (a: string) => esc(a).replace(/Tolkova I(\*?)/g, '<strong>Tolkova I$1</strong>');

/** Publications shown as linked entries in the same style as news items, grouped
 *  under "Articles" (papers) and "Reports" (technical reports). */
export const articleSections = (ids: string[] = [], thumb?: string) => {
  const pubs = ids.map((id) => {
    const pub = publications.find((p) => p.id === id);
    if (!pub) throw new Error(`Unknown publication id in a project's "articles": ${id}`);
    return pub;
  });
  const item = (pub: Publication): NewsItem => ({
    outlet: pub.short_venue ?? (pub.venue ?? '').split(',')[0],
    title: pub.title,
    date: String(pub.year ?? ''),
    url: pub.links?.[0]?.url ?? '#',
    fallback: thumb,
  });
  return [
    { heading: 'Articles', items: pubs.filter((p) => p.type !== 'report').map(item) },
    { heading: 'Reports', items: pubs.filter((p) => p.type === 'report').map(item) },
  ].filter((s) => s.items.length > 0);
};
