import * as React from 'react';

export default function Seo(props) {
  return (
      <>
        <meta name="title" content={props.title} />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Finnish" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Minä" />
      </>
  )
}
