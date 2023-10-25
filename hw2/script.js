{
  console.log('String: greeting');
  let userName = prompt('Enter your name');
  userName = userName[0].toLocaleUpperCase() + userName.slice(1);
  alert('Hello, ' + userName + '! Nice to meet you');
}

{
  console.log('String: gopni4ek');
  let someString = prompt('Enter a sentense');
  let word = someString.split(',');
  let gopni4ek = word.join(' блин, ');
  alert(gopni4ek);
}
{
  console.log('String: capitalize');
  let str = "cANBerRa"
  let lowerCase = str.toLocaleLowerCase();
  let result = lowerCase[0].toLocaleUpperCase() + lowerCase.slice(1);
  console.log(result)
}
{
  console.log('String: word count');
  let str = prompt('Enter a sentense');
  let wordArray = str.split(' ');
  let wordCounter = wordArray.length;
  alert(wordCounter);
}
{
  let name = prompt("enter your name");
  let surname = prompt("enter your surname");
  let patronymic = prompt("enter your patronymic");
  name = name.trim();
  name = name[0].toUpperCase() + name.slice(1);

  surname = surname.trim();
  surname = surname[0].toUpperCase() + surname.slice(1);

  patronymic = patronymic.trim();
  patronymic = patronymic[0].toUpperCase() + patronymic.slice(1);

  let fullName = [name, surname, patronymic];
  fullname = fullName.join(" ");
  alert(fullName);
}

{
  console.log("String: beer")
  let str = "Було жарко. Василь пив пиво вприкуску з креветками"
  let result = str.split(" ");
  result[4] = "чай";
  alert(result);
}

{
  console.log("String: no tag");
  let str = "якийсь текст, в якому є один тег <br /> і всяке інше";

  let start = str.indexOf("<");
  let finish = str.indexOf(">");
  let result;

  if (start !== -1 && finish !== -1) {
    let before = str.slice(0, start);
    let after = str.slice(finish + 1);
    result = before + after;
  }
  console.log(result)
}

{
  console.log("String: big tag");
  let str = "якийсь текст, в якому є один тег <br /> і всяке інше";

  let start = str.indexOf("<");
  let finish = str.indexOf(">");
  let result;

  if (start !== -1 && finish !== -1) {
    let tag = str.slice(start, finish + 1);
    tag = tag.toUpperCase();
    result = str.slice(0, start) + tag + str.slice(finish + 1);
  }
  console.log(result)
}

{
  let userInput = prompt("enter the line with \\n:");

  if (userInput !== null) {
    let lines = userInput.split("\\n");
    let String = lines.join("\n");
    console.log(String);
  }
}

{
  const regular = /http(?:s)?:\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-_]*)(&(amp;)?[\w\?\=]*)?/;
  const input = prompt("Введите текст с ссылкой на YouTube:");
  const matches = input.match(regular);

  if (matches) {
    const videoId = matches[1];
    const code = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
    document.write(code);
  } else {
    document.write("Ссылка на YouTube не была найдена в введенном тексте.");
  }
}
