function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`)
  }
}
console.log(logItems(['Mango', 'Poly', 'Ajax']))


function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  const totalPrice = words.length * pricePerWord;
  return totalPrice;
}
console.log(calculateEngravingPrice("Hello world", 10))



function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0];
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord("я не люблю китайців"));



function formatString(string) {
  if (string.length <= 40) {
    return string
  }
  const formattedString = string.slice(0, 40) + '...'
  return formattedString
}
console.log(formatString("Мало тексту"))
console.log(formatString("Я не можу описати кількість слів яка була використана в цьому реченні бо я вмію говорити по британськи і я щиро співчуваю що ви на жаль не можете прочитати і зрозуміти це речення цілком бо воно занадто довге, щиро вибачаюся за втручання у справи🕵️‍♂️"))



function checkForSpam(message) {
  const lowerCasedMessage = message.toLowerCase();
  const hasSpam = lowerCasedMessage.includes('спам');
  const hasSale = lowerCasedMessage.includes('розпродажа');
  if (hasSpam || hasSale) {
    return true;
  }
  else{
    return false;
  }
 
}
console.log(checkForSpam("отримайте знижки на розпродаж уже зараз"))
console.log(checkForSpam("Привіт як ти?"))




function getSumOfNumbers() {
  const numbers = []
  let total = 0
  let input
  while (true) {
    input = prompt("Введіть число:");
    if (input === null) {
      break;
    }
    input = Number(input);
    if (isNaN(input)) {
      alert("Було введено не число, попробуйте ще раз");
      continue;
    }
    numbers.push(input);
  }
  if (numbers.length > 0) {
    for (const number of numbers) {
      total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
  }
}
getSumOfNumbers([2, 2])



const logins = ["admin", "user123", "testUser"]
function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login)// я зрозумів що функції можна заперечувати тобто ! не валідний логін це те саме що ця
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }

  if (!isLoginUnique(allLogins, login)) {
    return "Такий логін уже використовується!";
  }
  allLogins.push(login);
  return "Логін успішно доданий!";
}
console.log(addLogin(logins, "newUser"))
console.log(addLogin(logins, "ad"))
console.log(addLogin(logins, "user123"))
console.log(logins)