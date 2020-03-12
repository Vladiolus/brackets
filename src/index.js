function check_open(ch, array)
{  
  let x;
  for (j = 0; j < array.length; j++)
    {
      if (ch == array[j][0])
        {
          return j;  // find out what brackets are opening          
        }
    }
  return -1;
}

function check_close(ch, array, last)
{
  for (j = 0; j < array.length; j++)
    {
      if (ch == array[j][1] && array[j] == last) return true;  // find bracket in pair with last bracket
    }
  return false;
}

module.exports = function check(str, bracketsConfig) {
  let buf = [];
  let temp;
  for (i = 0; i < str.length; i++)
    {
      if (buf.length != 0) 
        {
          if (check_close(str[i], bracketsConfig, buf[buf.length-1]) == true)
            {
              buf.splice(-1, 1);
              continue;
            }          
        }
      temp = check_open(str[i], bracketsConfig);
      if (temp != -1)
        {
          buf.push(bracketsConfig[temp]);
          continue;
        }
      return false; // cannot close brackets
    }
  if (buf.length == 0) return true;
  return false;
}