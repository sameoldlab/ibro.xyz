import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import sanitizeHtml from 'sanitize-html'
import MarkdownIt from 'markdown-it'
const parser = new MarkdownIt()

export async function get(context) {
	const posts = await getCollection('note')
	return rss({
		title: `Notes from the lab`,
		description: 'Words but faster',
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			link: `/note/${post.slug}/`,
			//   description: "post.data.description",
			pubDate: post.data.date,
			content: sanitizeHtml(parser.render(post.body))
		})),
		// stylesheet: "/rss/styles.xsl",
		// xmlns: { h: 'http://www.w3.org/TR/html4/' },
		customData: '<language>en</language>'
	})
}
