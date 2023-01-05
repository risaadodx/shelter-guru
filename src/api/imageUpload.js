export const getImageUrl = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const url =
    "https://api.imgbb.com/1/upload?key=0ece13906c3391198b10c01424636fca";

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data.data.display_url;
};
