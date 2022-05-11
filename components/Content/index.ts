import fs from 'fs';
import matter from 'gray-matter';

export const Content = (path: string) => {
    var files = fs.readdirSync(`content/${path}/`);
    files.map((fileName) => {

        const readFile = fs.readFileSync(`content/${path}/${fileName}`, 'utf-8');

        const { data: frontmatter } = matter(readFile);

        return {

            frontmatter,

        };
    });
}