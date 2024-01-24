import { groq } from 'next-sanity'

export const homePageQuery = groq`
{
  "home": *[_type == "home"][0]{
    _id,
    aboutDescription,
    socials,
    showcaseProjects[]->{
      _type,
      coverImage,
      highlighted,
      title,
      date,
      link,
      quote,
      label,
      productionInfo,
    },
    showcaseWorks[]->{
      _type,
      coverImage,
      workDetails,
      workDescription,
      highlighted,
      title
    },
    showcaseMixes[]->{
      _type,
      date,
      link,
      title
    },
    title,
  },
  "calendar": *[_type == "calendar"] {
    title,
    city,
    date,
    link
  }
}
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`
