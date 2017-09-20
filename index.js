function takeANumber(katzDeli, name)
{
  var retString
    katzDeli.push(name)
    retString = "Welcome " + name + ". You are number " + katzDeli.length + " in line."
    return retString;
}
