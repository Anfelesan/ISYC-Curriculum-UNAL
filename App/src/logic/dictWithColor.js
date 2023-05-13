//This function expects a dictionary {} from data, and returns
//other dictionary with the color depending of dark mode

const dictWithColor = dict => {
  if(!document.body.classList.contains('dark')) return dict;

  const newDict = Object.assign({}, dict);
  newDict.color = dict.color;
  delete newDict.colorDM;

  return newDict;
}
export default dictWithColor;