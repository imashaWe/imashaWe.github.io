export default class MediumApiService {
    static getMediumArticles = new Promise((resolve, reject) => {
        fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@imasha98-we",
            {
                headers: {
                    Accept: "application/json",
                },
            })
            .then((response) => response.json())
            .then(resolve)
            .catch(reject);
    });
}