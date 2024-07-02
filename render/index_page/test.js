let appID,name,description,logoUrl,vid_name,vid_link

async function fetchAppDetails(appId) {
    try {
      const response = await fetch(`https://store.steampowered.com/api/appdetails?appids=${appId}`);
      const data = await response.json();
  
      if (data[appId].success) {
        const appDetails = data[appId].data;
        // Try to find the logo URL - this might be under different fields
        appID = appDetails.steam_appid;
        name = appDetails.name;
        description = appDetails.short_description;
        logoUrl = appDetails.header_image.replace('header.jpg', 'logo.png');
        const videos = appDetails.movies;

        vid_name = [];
        vid_link = [];
          
        for (let i = 0; i < videos.length; i++) {
            const data = videos[i];
            vid_name.push(data.name)
            vid_link.push(data.mp4.max);
        }
        
        console.log(`ID: ${appID}`);
        console.log(`Name: ${name}`);
        console.log(`Description: ${description}`);
        console.log(`Game Logo URL: ${logoUrl}`);
        console.log(`Vid_Name: ${JSON.stringify(vid_name, null, 2)}`)
        console.log(`Vid_Link: ${JSON.stringify(vid_link, null, 2)}`)
        // You can now use the logoUrl to display the logo on your website
      } else {
        console.log('Failed to fetch app details');
      }
    } catch (error) {
      console.error('Error fetching app details:', error);
    }
}
  
async function fetchAppList(game_name) {
    try {
      const response = await fetch('https://api.steampowered.com/ISteamApps/GetAppList/v2/');
      const data = await response.json();
      const apps = data.applist.apps;
  
      // Find the app you're interested in by name (e.g., "Counter-Strike")
      const app = apps.find(app => app.name === game_name);
    //   console.log(app);
      if (app) {
        const appId = app.appid;
        // Fetch the app details using the appId
        await fetchAppDetails(appId);
      } else {
        console.log("App not found");
      }
    } catch (error) {
      console.error('Error fetching app list:', error);
    }
}
  
// Call the fetchAppList function to start the process

window.onload = async function() {
    await fetchAppList("Counter-Strike 2");
    document.getElementById("summary").textContent = description;
    document.getElementById('Logo').src = logoUrl;
    document.getElementById('Vid').src = vid_link[0];
    // console.log(vid_link[0]);
};

document.querySelector('.search-btn').addEventListener('click', async function(event) {
    event.preventDefault();
    const query = document.querySelector('.search-input').value;
    await fetchAppList(query);   
    document.getElementById("summary").textContent = description;
    document.getElementById('Logo').src = logoUrl;
    document.getElementById('Vid').src = vid_link[0];
});