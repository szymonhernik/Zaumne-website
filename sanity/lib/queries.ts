import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    aboutDescription,
    showcaseProjects[]->{
      _type,
      coverImage,
      title,
      date,
      link,
      quote,
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
  }
`

export const calendarQuery = groq`
  *[_type == "calendar"] {
    title,
    city,
    date,
    link
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
