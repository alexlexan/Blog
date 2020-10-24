import React from "react";
import { formatPostDate, formatReadingTime } from "../../utils/helpers";
import Container from "./styles";
import Link from "next/link";

function Article({ previewPost }) {
  const { title, description, publishDate, readingTime, sys } = previewPost;
  const date = formatPostDate(publishDate);
  return (
    <Container>
      <header>
        <h3>
          <Link as={`/posts/${sys.id}`} href="/posts/[id]" shallow={true}>
            <a>{title}</a>
          </Link>
        </h3>
        <small>
          {date} • {formatReadingTime(readingTime)}
        </small>
      </header>
      <p>{description}</p>
    </Container>
  );
}

export default Article;
