// Когда страница загрузилась
document.addEventListener("DOMContentLoaded", async () => {
  // Твои картинки
  const images = [
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    "https://images.unsplash.com/photo-1701451391813-2ffa8bc04f5e",
    "https://images.unsplash.com/photo-1699614614613-bb757029f49f",
  ];

  // Ждем пока все картинки загрузятся
  await Promise.allSettled(
    images.map(
      (image) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = resolve;
          img.onerror = reject;
        })
    )
  );

  let currentIdx = 0;

  //   Создаем элемент (это можно убрать, у тебя в верстке уже есть элемент)
  const image = document.createElement("div");
  image.classList.add("image");

  //   Стили (лучше вынести в css)
  image.style.width = "200px";
  image.style.height = "200px";
  image.style.backgroundSize = "cover";
  image.style.backgroundPosition = "center";
  image.style.backgroundRepeat = "no-repeat";
  image.style.backgroundImage = `url(${images[0]})`;
  //   Добавляем на страницу (можно)
  document.body.appendChild(image);

  //   Меняем картинку каждую секунду
  setInterval(() => {
    const image = document.querySelector(".image");
    image.style.backgroundImage = `url(${images[currentIdx]})`;
    currentIdx = (currentIdx + 1) % images.length;
  }, 1000);
});
