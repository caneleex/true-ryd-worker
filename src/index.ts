const apiUrl = (videoId: string) =>
  `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=AIzaSyCOUG9NmlrerQC5OnS3Erbh5K34PobYDQE`;

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const videoId = url.searchParams.get("videoId");
    if (!videoId) {
      return new Response("Provide the video id.", { status: 400 });
    }
    const response = await fetch(apiUrl(videoId), {
      method: "GET",
      headers: {
        Accept: "application/json",
        Referer: "https://ytcomment.kmcat.uk",
      },
    });
    if (!response.ok) {
      return new Response(null, { status: response.status });
    }
    const data = (await response.json()) as YTResponse;
    const items = data.items;
    if (items.length == 0) {
      return new Response(null, { status: 404 });
    }
    const { likeCount = -1, dislikeCount = -1 } = items[0].statistics;
    return new Response(
      JSON.stringify({
        likes: +likeCount,
        dislikes: +dislikeCount,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  },
};

interface YTResponse {
  items: {
    statistics: {
      likeCount: number | undefined;
      dislikeCount: number | undefined;
    };
  }[];
}
