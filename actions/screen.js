export const SCREEN_LOAD = 'SCREEN/START_LOAD';
export const SCREEN_FINISH = 'SCREEN/FINISH_LOAD';
export const SCREEN_FAIL = 'SCREEN/FAILED_LOAD';


export const startLoad = (name) => {
    return {
        type: SCREEN_LOAD,
        screen: name,
    };
};

export const finishLoad = (name) => {
    return {
        type: SCREEN_FINISH,
        screen: name,
    };
};

export const failLoad = (name, error) => {
    return {
        type: SCREEN_FAIL,
        screen: name,
        error() {},
    };
};
