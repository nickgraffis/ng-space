import Shiki from './markdown-it-shiki';
import CodeCopy from './src/markdown-it-code-copy';
import Anchor from 'markdown-it-anchor'
import Emoji from 'markdown-it-emoji'
import twemoji from 'twemoji';
import LinkAttributes from 'markdown-it-link-attributes'
import Markdown from 'vite-plugin-md'
import Footnote from 'markdown-it-footnote'
export const markdownWrapperClasses = 'prose prose-sm m-auto text-left'

export default Markdown({
  wrapperComponent: 'post',
  wrapperClasses: markdownWrapperClasses,
  headEnabled: true,
  markdownItOptions: {
    quotes: '""\'\'',
  },
  markdownItSetup(md) {
    md.use(CodeCopy, {
      iconClass: 'heroicon heroicon-duplicate',
      iconStyle: ''
    })
    md.use(LinkAttributes, {
      pattern: /^https?:\/\//,
      attrs: {
        target: '_blank',
        rel: 'noopener',
      },
    })
    md.use(Emoji)
    md.renderer.rules.text = (token, idx) => {
      return twemoji.parse(token[idx].content, { className: 'twemoji'});
    }
    md.renderer.rules.emoji = (token, idx) => {
      return twemoji.parse(token[idx].content, { className: 'twemoji'});
    }
    md.use(Anchor, {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '#',
    })
    md.use(Footnote)
    md.use(Shiki, {
      theme: 'dracula'
    })
  },
})