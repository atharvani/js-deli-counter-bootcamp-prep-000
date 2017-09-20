function takeANumber(katzDeli, name)
{
  var retString
    katzDeli.push(name)
    retString = "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
    return retString;
}

function nowServing(katzDeliLine)
{
  var retString
  if(katzDeliLine.length === 0)
  {
    retString = "There is nobody waiting to be served!"

  }
  else
  {
    var number = katzDeliLine.length
      retString = "Currently serving " + katzDeliLine[0] + ".";
      katzDeliLine.shift();
    }
    return retString
}
