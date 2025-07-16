// 게시물 데이터
const POSTS = [
  {
    username: "pan._.da",
    likes: 10,
    description: "안녕 나는 판다야!",
    image:
      "https://cdn.pixabay.com/photo/2016/03/04/22/54/animal-1236875_1280.jpg",
  },
  {
    username: "rrred_panda",
    likes: 30,
    description: "안녕 나는 레서판다야!",
    image:
      "https://cdn.pixabay.com/photo/2018/06/28/12/34/panda-3503779_1280.jpg",
  },
  {
    username: "kitty__",
    likes: 20,
    description: "안녕 나는 고양이야!",
    image:
      "https://cdn.pixabay.com/photo/2018/01/14/14/42/cat-3081939_1280.jpg",
  },
  {
    username: "doosan_bear",
    likes: 25,
    description: "안녕 나는 곰이야!",
    image:
      "https://cdn.pixabay.com/photo/2021/11/05/18/23/bear-6771842_1280.jpg",
  },
  {
    username: "puppy123",
    likes: 32,
    description: "안녕 나는 강아지야!",
    image:
      "https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg",
  },
  {
    username: "im_bunny",
    likes: 17,
    description: "안녕 나는 토끼야!",
    image:
      "https://cdn.pixabay.com/photo/2017/04/02/22/36/easter-2197043_1280.jpg",
  },
  {
    username: "chummy._.official",
    likes: 1111,
    description: "안녕 나는 참이야!",
    image: "./img/chummy.png",
  },
];

function createPost(post) {
  const postElement = document.createElement("div");
  postElement.setAttribute("id", post.username);
  postElement.classList.add("container");

  const userProfileContainer = document.createElement("div");
  const userName = document.createElement("p");
  const userProfile = document.createElement("div");
  userProfileContainer.classList.add("user-profile-container");
  userName.classList.add("user-name");
  userProfile.classList.add("user-profile");
  userName.innerText = post.username;
  userProfileContainer.appendChild(userProfile);
  userProfileContainer.appendChild(userName);

  const likesContainer = document.createElement("div");
  const likes = document.createElement("p");
  const likesImg = document.createElement("img");
  likesContainer.classList.add("likes-container");
  likes.classList.add("likes");
  likesImg.classList.add("likes-img");
  likes.innerText = post.likes;
  likesImg.setAttribute("src", "./img/heart.png");
  likesImg.setAttribute("alt", "heart");
  likesContainer.appendChild(likesImg);
  likesContainer.appendChild(likes);

  const descriptionContainer = document.createElement("div");
  const description = document.createElement("p");
  description.classList.add("description");
  description.innerText = post.description;
  descriptionContainer.appendChild(description);

  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  imageContainer.classList.add("image-container");
  image.classList.add("image");
  image.setAttribute("alt", post.username);
  image.setAttribute("src", post.image);
  imageContainer.appendChild(image);

  postElement.appendChild(userProfileContainer);
  postElement.appendChild(imageContainer);
  postElement.appendChild(likesContainer);
  postElement.appendChild(descriptionContainer);

  return postElement;
}

function sortPost() {
  const postsContainer = document.getElementById("posts");
  const containers = document.querySelectorAll(".container");
  for (let container of containers) {
    postsContainer.removeChild(container);
  }

  POSTS.sort((a, b) => a.likes - b.likes);
  for (let post of POSTS) {
    postsContainer.appendChild(createPost(post));
  }
}
// main 실행 함수
function main() {
  // 게시물 엘리먼트를 넣어야 하는 곳
  const postsContainer = document.getElementById("posts");

  const sortBtn = document.getElementById("sort");
  sortBtn.addEventListener("click", sortPost);

  for (let post of POSTS) {
    postsContainer.appendChild(createPost(post));
  }
}

main();
