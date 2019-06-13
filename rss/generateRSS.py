#!/usr/bin/python3

import argparse
import json
import html

def _parseArgs():
    argparser = argparse.ArgumentParser(description="Generate RSS for blog")
    argparser.add_argument("posts_json", help="Posts JSON file")
    argparser.add_argument("output_rss", help="Output RSS file")
    return argparser.parse_args()


def _parsePosts(args):
    postsFile = args.posts_json

    print( "Reading posts from {0}".format(postsFile) )

    with open( postsFile, "r" ) as fileHandle:
        allPosts = json.load(fileHandle)

    return allPosts


def _generateRss(posts, args):
    headerContent = (
        '<?xml version="1.0" encoding="UTF-8" ?>\n'
        '\n'
        '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n'
        '   <channel>\n'
        '       <title>PublicNTP Blog</title>\n'
        '       <link>https://publicntp.org/blog.html</link>\n'
        '       <description>PublicNTP updates and initiatives</description>\n'
        '       <atom:link href="https://publicntp.org/blog/posts/rss.xml" rel="self" type="application/rss+xml" />\n'
    )

    bodyContent = ''

    for currPost in posts:

        bodyContent += \
            '       <item>\n' + \
            '           <title>{0}</title>\n'.format(html.escape(currPost['title'])) + \
            '           <link>https://publicntp.org/blog/posts/{0}.html</link>\n'.format(html.escape(currPost['permalink'])) + \
            '           <description>{0}</description>\n'.format(html.escape(currPost['excerpt'])) + \
            '           <guid>https://publicntp.org/blog/posts/{0}.html</guid>\n'.format(
                html.escape(str(currPost['permalink']))) + \
            '       </item>\n\n'

    footerContent = (
        '   </channel>\n'
        '</rss>\n'
    )

    fullContent =  headerContent + bodyContent + footerContent

    #print( "Content:\n{0}".format(fullContent) )
    return fullContent


def _writeRssToFile(rssContent, args):
    with open( args.output_rss, "wb" ) as outputHandle:
        outputHandle.write(rssContent.encode('utf-8'))

    print( "Wrote RSS to {0}".format(args.output_rss) )



def main():
    args = _parseArgs()
    posts = _parsePosts(args)
    rssContent = _generateRss(posts, args)
    _writeRssToFile(rssContent, args)

if __name__ == "__main__":
    main()
