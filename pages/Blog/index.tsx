import fs from 'fs';
import path from 'path';
import Layout from '../../components/Layout'
import matter from 'gray-matter';
import { GetStaticProps, NextPage } from 'next'
import { InferGetStaticPropsType } from 'next';
import { Card } from '../../components/Card';


export const getStaticProps: GetStaticProps = async () => {
    const dirents = fs.readdirSync("content/blog", { withFileTypes: true });
    const files = dirents
        .filter(dirent => dirent.isFile())
        .map(dirent => dirent.name);
    const posts = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('content/blog', filename), 'utf-8')
        const { data: metadata } = matter(markdownWithMeta)
        return {
            metadata,
            slug: filename.split('.')[0]
        }
    })
    return {
        props: {
            posts
        }
    }
}

const Blog: NextPage = ({ posts, settings }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout title={settings.name} description={settings.description} radialBackground={settings.radialBackground} colors={settings.colors}>
            <div className="flex flex-col justify-center items-center gap-6">
                {posts.map((post, index) => (
                    <Card
                        isMobile={false}
                        image="https://via.placeholder.com/300.png/09f/fff "
                        textColor='white' title={post.metadata.title}
                        date={post.metadata.date}
                        description={post.metadata.description}
                        link={'/Blog/' + post.slug} />
                ))}
            </div>

        </Layout>
    )
}


export default Blog
