// Utility function to get the full image path
const getImagePath = (imgPath) => {
  // Combine the base URL with the relative image path
  return  import.meta.env.BASE_URL + 'assets/images/' + imgPath;    
}

export default getImagePath;
