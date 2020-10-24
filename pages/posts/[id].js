import { MARKS, BLOCKS } from "@contentful/rich-text-types";
import { ONE_POST_QUERY } from "../../utils/query";
import { getContentForHomePage } from "../../utils/query";
import { formatPostDate, formatReadingTime } from "../../utils/helpers";
import Container, { Title, Links, Article } from "./styles";
import Header from "../../components/Header/Header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Description from "../../components/Description/Description";
import { useRouter } from "next/router";

const Code = ({ children }) => (
  <SyntaxHighlighter useInlineStyles={false} language="javascript">
    {children}
  </SyntaxHighlighter>
);

function Post({ post, blogName, avatar, setThemeDark, themeDark }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <main>
        <p>New comparison! Loading...</p>
      </main>
    );
  }

  const {
    title,
    publishDate: date,
    readingTime,
    article: postArticle,
    listUrl,
  } = post;
  const options = {
    renderMark: {
      [MARKS.CODE]: (text) => <Code>{text}</Code>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (typeof children[0].type === "function") {
          return <div className="code">{children}</div>;
        }
        return <p>{children}</p>;
      },
    },
  };

  const article = documentToReactComponents(postArticle?.json, options);
  const links = documentToReactComponents(listUrl?.json);

  return (
    <>
      <Container>
        <Header
          title={blogName}
          inPost={true}
          setThemeDark={setThemeDark}
          themeDark={themeDark}
        />
        <Title>
          <h1>{title}</h1>
          <small>
            {date} • {formatReadingTime(readingTime)}
          </small>
        </Title>
        <Article>{article}</Article>
        <Links>{links}</Links>
        <Description avatar={avatar} />
      </Container>
    </>
  );
}

// export async function getServerSideProps({ query }) {
//   const variables = { id: query.id };
//   const res = await getContentForHomePage(ONE_POST_QUERY, variables);
//   const { blogPost: post, avatarUrl: avatar } = res;
//   const blogName = res.blogName.title;
//   const title = post.title;
//   const publishDate = formatPostDate(post.publishDate);
//   return { props: { post: { ...post, publishDate }, blogName, avatar, title } };
// }

export async function getStaticProps({ params }) {
  const variables = { id: params.id };
  const res = await getContentForHomePage(ONE_POST_QUERY, variables);

  const { blogPost: post, avatarUrl: avatar } = res;
  const blogName = res.blogName.title;
  const title = post.title;
  const publishDate = formatPostDate(post.publishDate);

  return { props: { post: { ...post, publishDate }, blogName, avatar, title } };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default Post;
