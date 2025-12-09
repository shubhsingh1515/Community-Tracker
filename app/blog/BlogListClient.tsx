"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/footer-section";
import { getAssetUrl } from "@/lib/contentfulUtils";


export default function BlogListClient({ posts, includes }: any) {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  const featuredImgId = featuredPost.fields.featuredImage?.sys?.id;
  const featuredImageUrl = getAssetUrl(featuredImgId, includes);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">

      <Header />

      {/* HERO */}
      <section className="py-16 md:py-24 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-xs font-bold tracking-wide mb-6">
            BLOG
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ideas to level-up your freelance game
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore expert tips and insights to improve customer engagement.
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden border shadow-sm">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-80 overflow-hidden"
          >
            <img
              src={featuredImageUrl}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-10"
          >
            <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
              MUST READ
            </span>

            <h2 className="text-3xl font-bold mb-4">
              {featuredPost.fields.title}
            </h2>

            <p className="text-muted-foreground mb-8">
              {featuredPost.fields.excerpt}
            </p>

            <Link href={`/blog/${featuredPost.fields.slug}`}>
              <motion.a
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-primary font-semibold"
              >
                Read Article <ArrowRight className="w-5 h-5" />
              </motion.a>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* OTHER POSTS */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {otherPosts.map((post: any) => {
            const imgId = post.fields.featuredImage?.sys?.id;
            const imgUrl = getAssetUrl(imgId, includes);

            return (
              <Link key={post.sys.id} href={`/blog/${post.fields.slug}`}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-2xl overflow-hidden border bg-white cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={imgUrl}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">
                      {post.fields.title}
                    </h3>

                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">
                        {post.fields.publishDate?.slice(0, 10)}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}

        </div>
      </section>

      <FooterSection />

    </div>
  );
}
