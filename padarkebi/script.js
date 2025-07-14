let GIFT_ID = 0;

const addGift = () => {
    let giftInput = document.getElementById("input-form-gift");
    let giftName = giftInput.value;

    if (giftName.length == 0) {
        alert("Gorozas tu ar achuqeb arafers - ewyineba")
        return;
    }
    let giftList = document.getElementById("gift-list");

    giftList.appendChild(getNewGiftEntry(giftName));
    giftInput.value = "";
};

const getNewGiftEntry = (gift) => {
    const giftId = GIFT_ID;
    GIFT_ID = GIFT_ID + 1;

    let giftEntry = document.createElement("div");
    giftEntry.id = giftId;
    giftEntry.className = "gift-list-entry";

    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.addEventListener("click", checkGift);

    let text = document.createElement("span");
    text.innerText = gift;

    let del = document.createElement("button");
    del.innerText = "Delete";
    del.addEventListener("click", deleteGift);

    giftEntry.appendChild(check);
    giftEntry.appendChild(text);
    giftEntry.appendChild(del);

    return giftEntry;
};

const checkGift = (event) => {
    let gift = document.getElementById(event.currentTarget.parentNode.id);
    if (gift.style.textDecorationLine == "line-through") {
        gift.style.textDecoration = "none";
        gift.lastChild.style.textDecorationLine = "none";
    }
    else {
        gift.style.textDecorationLine = "line-through";
        gift.lastChild.style.textDecorationLine = "line-through";
    }
};

const deleteGift = (event) => {
    document.getElementById(event.currentTarget.parentNode.id).style.display = "none";
};
