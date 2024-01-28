// The base URL of your application during development or production.
const getImagePath = (imgPath) => {
  return  import.meta.env.BASE_URL + 'assets/images/' + imgPath;    
}

export default getImagePath;
