export const WEBVIEW_LOAD = 'WEBVIEW/START_LOAD';
export const WEBVIEW_FINISH = 'WEBVIEW/FINISH_LOAD';
export const WEBVIEW_FAIL = 'WEBVIEW/FAILED_LOAD';


export const startLoad = (name) => {
    return {
        type: WEBVIEW_LOAD,
        name,
    };
};

export const finishLoad = (name) => {
    return {
        type: WEBVIEW_FINISH,
        name,
    };
};

export const failLoad = (name, error) => {
    return {
        type: WEBVIEW_FAIL,
        name,
        error,
    };
};
