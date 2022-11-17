import axios from "axios";
import mainConfig from "config/main.json";

function getClientUrl(url) {
    return `${mainConfig.ClienteUrl}${url}`;
}

function createRequestConfig(data, viewConfig, args, form) {
    const action = viewConfig.actions[args.action];
    return axios({
        method: action.httpMethod,
        url: getClientUrl(action.url),
        data,
        headers: action.headers || {},
    });
}

export { createRequestConfig };
