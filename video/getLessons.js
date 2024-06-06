function get_lesson() {
  if (document.readyState == "complete") {
    const Http = new XMLHttpRequest();
    const url =
      "https://sheets.googleapis.com/v4/spreadsheets/1TD06fatq1pX9iNj1bcNlXWW5LQzZ4GY6JpdRNGEIQ6k/values/a2:e?key=AIzaSyAOch7SF63DFMkYhm-gHO2iOp9jZs1cObM";
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
      let lesson_box = document.getElementById("lesson_box");
      let response = JSON.parse(Http.responseText);
      let lessons = response["values"];
      console.log(response);
      let content = "";
      lessons = lessons.reverse();
      let index = 0;
      content += '<div style="height: 300px;">';
      while (index < lessons.length) {
        content += `<a href="./play/index.html?vid=${lessons[index][4]}"><div class="lesson" style="display: inline-block;">
                <p style="text-align: center;"><b>${lessons[index][0]}</b></p>
                <img src="https://i3.ytimg.com/vi/${lessons[index][4]}/hqdefault.jpg" alt="image" style="float: right;width: 250px;">
                <p style="text-align: left;margin-left: 5px;">講者: ${lessons[index][1]}</p>
                <p style="text-align: left;margin-left: 5px;">影片長度: ${lessons[index][2]}</p>
                <p style="text-align: left;margin-left: 5px;">版本: ${lessons[index][3]}</p>
                <p class="hide">${lessons[index][4]}</p>
                </div></a>`;
        index += 1;
      }
      content += "</div>";
      console.log(`content: ${content}`);
      lesson_box.innerHTML = content;
    };
  }
}
