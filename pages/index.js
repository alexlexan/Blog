import Header from "../components/Header/Header";
import Description from "../components/Description/Description";
import Article from "../components/Article/Article";
import { Container } from "../styles/Container";
import { CONTENT_HOME_PAGE_QUERY } from "../utils/query";
import { getContentForHomePage } from "../utils/query";

export default function Blog({
  title,
  previewPosts,
  avatar,
  setThemeDark,
  themeDark,
}) {
  return (
    <Container>
      <Header title={title} setThemeDark={setThemeDark} themeDark={themeDark} />
      <Description avatar={avatar} />
      <main>
        {previewPosts.map((previewPost) => (
          <Article key={previewPost.sys.id} previewPost={previewPost} />
        ))}
      </main>
    </Container>
  );
}

export async function getStaticProps() {
  const res = await getContentForHomePage(CONTENT_HOME_PAGE_QUERY);
  const title = res.blogName.title;
  const previewPosts = res.blogPostCollection.items;
  const avatar = res.avatarUrl;
  return {
    props: { title, previewPosts, avatar },
  };
}

// revalidate: 1,
