import { FooterSection } from "@/components/footer-section";
import { Header } from "@/components/header";
import { contentfulClient } from "@/lib/contentfulServer";
import { getAssetUrl } from "@/lib/contentfulUtils";

export const revalidate = 60;

export default async function BlogDetail({ params }: { params: { slug: string } }) {

  const res = await contentfulClient.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
    limit: 1,
  });

  const post = res.items?.[0];
  const includes = res.includes;

  if (!post) return <div className="p-20 text-center">Post Not Found</div>;

  const imgId = post.fields.featuredImage?.sys?.id;
  const imgUrl = getAssetUrl(imgId, includes);

  return (
    < >
      <Header />
      <div className="p-20 max-w-4xl mx-auto">
        <img src={imgUrl} className="w-full rounded-xl mb-10" />
        <h1 className="text-4xl font-bold mb-6">{post.fields.title}</h1>
        <p className="text-muted-foreground whitespace-pre-line">
          {post.fields.body}
        </p>
      </div>
      <FooterSection />
    </>
  );
}
