import fs from 'fs';
import path from 'path';
import Layout from '../../components/Layout'
import matter from 'gray-matter';
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { InferGetStaticPropsType } from 'next';


export const getStaticProps: GetStaticProps = async () => {
    const files = fs.readdirSync(path.join('content/blog'))
    const posts = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('content/blog', filename), 'utf-8')
        const { data: frontMatter } = matter(markdownWithMeta)
        return {
            frontMatter,
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
            {
                posts.map((post, index) => (
                    <Link href={'/blog/' + post.slug} passHref key={index}>
                        <div className="card mb-3 pointer" style={{ maxWidth: '540px' }}>
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{post.frontMatter.title}</h5>
                                        <p className="card-text">{post.frontMatter.description}</p>
                                        <p className="card-text">
                                            <small className="text-muted">{post.frontMatter.date}</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 m-auto">
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </Layout>
    )
}


export default Blog
