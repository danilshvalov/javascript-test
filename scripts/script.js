const initialCards = [
        {
        name: "Калерия",
        link: "https://images.unsplash.com/photo-1559029885-dfa0555748d2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640&h=427&fit=crop&ixid=eyJhcHBfaWQiOjF9"
    },
    {
        name: "Камчатка",
        link: "https://images.unsplash.com/photo-1556661076-23e13ce7489c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640&h=1136&fit=crop&ixid=eyJhcHBfaWQiOjF9"
    },
    {
        name: "Судак",
        link: "https://images.unsplash.com/photo-1550399741-5f47100fc53b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640&h=426&fit=crop&ixid=eyJhcHBfaWQiOjF9"
    },
    {
        name: "Роза Хутор",
        link: "https://images.unsplash.com/photo-1586204644281-ea6e30baad36?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640&h=426&fit=crop&ixid=eyJhcHBfaWQiOjF9"
    },
    {
        name: "Остров Ольхон",
        link: "https://images.unsplash.com/photo-1490879112094-281fea0883dc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640&h=427&fit=crop&ixid=eyJhcHBfaWQiOjF9"
    },
    {
        name: "Карачаевск",
        link: "https://images.unsplash.com/photo-1599821020079-515af554d944?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=640&h=426&fit=crop&ixid=eyJhcHBfaWQiOjF9"
    }
];


let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__about");

let nameInput = document.querySelector(".popup__field_type_name");
let jobInput = document.querySelector(".popup__field_type_job");

let editProfileButton = document.querySelector(".profile__button_type_edit");
let closePopupButton = document.querySelector(".popup__button_type_close");
let addElementButton = document.querySelector(".profile__button_type_add");

let editForm = document.querySelector(".popup__container_edit-profile");

let popup = document.querySelector(".popup");

function toggleEditProfilePopup() {
    if (!popup.classList.contains("popup_opened")) {
        nameInput.value = profileName.textContent.trim();
        jobInput.value = profileJob.textContent.trim();
    }

    popup.classList.toggle("popup_opened");
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    let name = nameInput.value;
    let job = jobInput.value;

    profileName.textContent = name;
    profileJob.textContent = job;

    toggleEditProfilePopup();
}

editProfileButton.addEventListener("click", toggleEditProfilePopup);
closePopupButton.addEventListener("click", toggleEditProfilePopup);
editForm.addEventListener("submit", formSubmitHandler);








const templateElement = document.querySelector(".template-element").content;
const elementsSection = document.querySelector(".elements");


function createNewElement(data) {
    let newElement = templateElement.cloneNode(true);

    let title = newElement.querySelector(".element__title");
    let image = newElement.querySelector(".element__image");
    let likeButton = newElement.querySelector(".element__like-button");

    title.textContent = data.name;
    image.src = data.link;
    image.alt = data.name;

    likeButton.addEventListener("click", (event) => {
        event.target.classList.toggle("element__like-button_active");
    });

    return newElement;
}

function renderNewElement(data) {
    elementsSection.prepend(createNewElement(data));
}

initialCards.forEach((cardData) => {
    renderNewElement(cardData);
});

