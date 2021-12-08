const getNameInitials = name => {
  const words = name.split(' ');
  var ans = '';

  for (var i = 0; i < words.length; i++) {
    ans = ans + words[i].charAt(0);
  }
  return ans;
};

export default getNameInitials;
