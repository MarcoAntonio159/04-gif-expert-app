export const getGifs = async (category) => {
  const token = "Ue8mGNyItTnXic4qOlyuqzcJrZAEN9Iu";
  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${token}&q=${category}&limit=${limit}`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifts = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifts;
};
