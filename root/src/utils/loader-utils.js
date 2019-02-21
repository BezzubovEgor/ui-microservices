export const runScript = async (url) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;

        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    });
};

export const loadApp = (appName, urls) => async () => {
    for (const url of urls) {
        await runScript(url);
    }
    return window[appName];
}
