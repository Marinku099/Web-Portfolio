const langTexts = {
    title: ["My Portfolio", "พอร์ตโฟลิโอ"],
    welcomeMessage: ["Welcome to my website!", "ยินดีต้อนรับเข้าสู่เว็ปไซต์!"],
    aboutMe: [
      "Here's a little about me...",
      "มารู้จักกับฉันสักนิดนึง..."
    ],
    contactMe: ["Contact Me", "ช่องทางติดต่อ"],
    swapLang: ["Swap Language", "เปลี่ยนภาษา"]
    // Add more text pairs for other parts of the website as needed
  };

let langIndex = 1;

function swapLanguage() {
    for (const key in langTexts){
        // console.log(key);
        var element = document.getElementById(key);

        if (element != null) {
            element.textContent = langTexts[key][langIndex];
        }
    }
    langIndex = (langIndex+1)%2;
}
//do not forget to hide debug lines.
//Document is stored everything in a HTML file.