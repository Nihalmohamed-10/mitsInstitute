import { createClient } from "contentful";

const client = createClient({
  space: "u2z5sd6vj5qg", 
  accessToken: "sSsRrNk1kmgAlDDNqCD02mjceHBm-wqxuYautKoijVc", 
  environment: "master",
});

export async function getWebImages() {
  try {
    const response = await client.getEntries({ content_type: "gallery" }); 
    console.log("Fetched entries:", response.items);
    return response.items;
  } catch (error) {
    console.error("Contentful fetch error:", error);
    return [];
  }
}


// import { createClient } from "contentful";

// const client = createClient({
//   space: "u2z5sd6vj5qg",
//   accessToken: "sSsRrNk1kmgAlDDNqCD02mjceHBm-wqxuYautKoijVc",
// });

// export async function getGalleryImages() {
//   const response = await client.getEntries({ content_type: "testing" });

//   return response.items;
// }
