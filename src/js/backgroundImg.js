const bgImages = [
    "https://img.freepik.com/free-photo/breathtaking-shot-of-the-sea-under-a-dark-and-purple-sky-filled-with-stars_181624-23013.jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20220313/pngtree-photography-of-night-scenery-of-galaxy-starry-sky-image_1000896.jpg",
    "https://cdn.pixabay.com/photo/2016/07/17/16/19/stars-1524180_960_720.jpg",
    "https://png.pngtree.com/background/20230317/original/pngtree-beautiful-background-of-starry-sky-at-night-picture-image_2148622.jpg",
    "https://c.pxhere.com/photos/7e/f0/star_night_sky_meteor_night_sky-2156.jpg!d",
    "https://img.pikbest.com/back_our/20210228/bg/7f852d3b6f4e4.png!w700wp",
    "https://img.pikbest.com/back_our/20210301/bg/bcc553997ccfc.png!bw700",
    "https://newsimg.hankookilbo.com/cms/articlerelease/2021/07/20/c2a06033-1428-47a6-8237-19070e181abd.jpg",
    "https://www.fnnews.com/resource/media/image/2022/06/20/202206201514075447_l.jpg",
]

const chosenBgImg = bgImages[Math.floor(Math.random() * bgImages.length)]
const mainBackImage = document.querySelector(".main-bg-image img")

mainBackImage.src = chosenBgImg