import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Post = ({ frontMatter: { title, description, date }, content }) => {
    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-7xl mt-24 mb-12">{title}</h1>
            <h2 className="text-2xl mb-12">{description}</h2>
            <div className="w-12 h-1 bg-gray-800 mb-12"></div>
            <time className="text-gray-500 italic">{date}</time>
            <p className="prose lg:prose-xl mt-12">
                {content}
            </p>
        </div>
    );
}


export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('content/blog'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('content/blog',
        slug + '.md'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontMatter,
            slug,
            content
        }
    }
}

export default Post
