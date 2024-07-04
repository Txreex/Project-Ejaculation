//All the variables that are to be further used in different js files
export let appID, name, description, detailed_description, logoUrl, coverUrl, bannerUrl, coming_soon, release_date, devs, vid_name, vid_link, genres, screenshots;

//Fetchs all required data related to game with the help of steamid of that game
export async function fetchAppDetails(appId) {
    try {
      const response = await fetch(`https://store.steampowered.com/api/appdetails?appids=${appId}`);
      const data = await response.json();
      
      //Specifying which data is required
      if (data[appId].success) {
        const appDetails = data[appId].data;
        appID = appDetails.steam_appid;
        name = appDetails.name;
        description = appDetails.short_description;
        detailed_description = appDetails.detail_description;
        logoUrl = appDetails.header_image.replace('header.jpg', 'logo.png');
        coverUrl = appDetails.header_image.replace('header.jpg', 'library_600x900_2x.jpg');
        bannerUrl = appDetails.header_image.replace('header.jpg', 'library_hero.jpg');
        coming_soon =  appDetails.release_date.coming_soon;
        release_date = appDetails.release_date.date;
        devs = appDetails.developers;
        
        const videos = appDetails.movies;

        vid_name = [];
        vid_link = [];

        for (let i = 0; i < videos.length; i++) {
            const data = videos[i];
            vid_name.push(data.name)
            vid_link.push(data.mp4.max);
        }

        const game_genre = appDetails.genres;

        genres = [];

        for (let i = 0; i < game_genre.length; i++) {
          const data = game_genre[i];
          genres.push(data.description)
        }
        
        const images = appDetails.screenshots;

        screenshots = [];

        for (let i = 0; i < images.length; i++) {
          const data = images[i];
          screenshots.push(data.path_full)
        }

        //Mainly Used for Debugging
        console.log(`ID: ${appID}`);
        console.log(`Name: ${name}`);
        console.log(`Description: ${description}`)
        console.log(`Detailed Description: ${detailed_description}`)
        console.log(`Game Logo URL: ${logoUrl}`)
        console.log(`Game Cover URL: ${coverUrl}`)
        console.log(`Game Banner URL: ${bannerUrl}`)
        console.log(`Coming Soon: ${coming_soon}`)
        console.log(`Release Date: ${release_date}`)
        console.log(`Developers: ${devs}`);
        console.log(`Genres: ${JSON.stringify(genres, null, 2)}`)
        console.log(`Vid_Name: ${JSON.stringify(vid_name, null, 2)}`)
        console.log(`Vid_Link: ${JSON.stringify(vid_link, null, 2)}`)
        console.log(`Screenshots: ${JSON.stringify(screenshots, null, 2)}`)
      } else {
        console.log('Failed to fetch app details');
      }
    } catch (error) {
      console.error('Error fetching app details:', error);
    }
}

//Fetchs the steamid from the name of the game
export async function fetchAppList(game_name) {
    try {
      const response = await fetch('https://api.steampowered.com/ISteamApps/GetAppList/v2/');
      const data = await response.json();
      const apps = data.applist.apps;
  
      //Find the app you're interested in by name (e.g., "Counter-Strike 2")
      const app = apps.find(app => app.name === game_name);
      if (app) {
        const appId = app.appid;
        //Fetch the app details using the appId
        await fetchAppDetails(appId);
      } else {
        //Happens if the app is not in the list
        console.log("App not found");
      }
    } catch (error) {
      console.error('Error fetching app list:', error);
    }
}