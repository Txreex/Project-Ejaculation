// steamApi.js
export async function fetchAppDetails(appId) {
    try {
        const response = await fetch(`https://store.steampowered.com/api/appdetails?appids=${appId}`);
        const data = await response.json();

        if (data[appId].success) {
            const appDetails = data[appId].data;
            // Try to find the logo URL - this might be under different fields
            return {
                appID: appDetails.steam_appid,
                name: appDetails.name,
                description: appDetails.short_description,
                logoUrl: appDetails.header_image.replace('header.jpg', 'logo.png'),
                videos: appDetails.movies.map(video => ({
                    name: video.name,
                    link: video.mp4.max
                }))
            };
        } else {
            console.log('Failed to fetch app details');
            return null;
        }
    } catch (error) {
        console.error('Error fetching app details:', error);
        return null;
    }
}

export async function fetchAppList(game_name) {
    try {
        const response = await fetch('https://api.steampowered.com/ISteamApps/GetAppList/v2/');
        const data = await response.json();
        const apps = data.applist.apps;

        const app = apps.find(app => app.name === game_name);
        if (app) {
            const appId = app.appid;
            return await fetchAppDetails(appId);
        } else {
            console.log("App not found");
            return null;
        }
    } catch (error) {
        console.error('Error fetching app list:', error);
        return null;
    }
}
