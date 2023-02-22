import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Post = ({ frontMatter: { title, date }, mdxSource }) => {
    return (
        <div>
            <h1 className="font-bold text-7xl mt-24 mb-12">{title}</h1>
            <time className="text-gray-500 italic">{date}</time>
            <p className="prose mt-12">
                <MDXRemote {...mdxSource} />
            </p>
        </div>
    );
}


export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('content/blog'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('content/blog',
        slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)

    return {
        props: {
            frontMatter,
            slug,
            mdxSource
        }
    }
}

export default Post
