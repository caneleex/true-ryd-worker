# true-ryd-worker

This repository contains a Cloudflare worker which serves **true dislike counts** for YouTube videos. I learned about the endpoint when randomly going through Discussions on [the Return YouTube Dislike repository](https://github.com/Anarios/return-youtube-dislike)[^1].

I've modified [the original userscript](https://github.com/Anarios/return-youtube-dislike/blob/main/Extensions/UserScript/Return%20Youtube%20Dislike.user.js) to use my worker instead[^2] and I'm currently trying to figure out how to build the extension with my changes. In the meantime, you can find [the branch with modified code](https://github.com/caneleex/return-youtube-dislike/tree/patch/use-worker) in my fork.

## How to use

Simply append the `videoId` parameter to the worker address, like so: [`https://true-ryd.cane.workers.dev/?videoId=YbJOTdZBX1g`](https://true-ryd.cane.workers.dev/?videoId=YbJOTdZBX1g)[^3]

[^1]: https://github.com/Anarios/return-youtube-dislike/discussions/753
[^2]: https://gist.github.com/caneleex/b4ddd643b07e2c0aa49df77e75fd5c8d
[^3]: [YouTube Rewind 2018](https://youtu.be/YbJOTdZBX1g)