import {Constant} from "../config/Constant";

export default class MediumApiService {
    static getMediumArticles = new Promise((resolve, reject) => {
        fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=${Constant.medium}`,
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