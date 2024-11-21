import toast from "react-hot-toast";

const getStoreCardList = () => {
  const storedListStr = localStorage.getItem("card-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredCardList = (id) => {
  const storedList = getStoreCardList();
  if (storedList.includes(id)) {
    toast.error("This book is already in your card list.");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("card-list", storedListStr);
    toast.success("This book has been added to your card list.");
  }
};

export { addToStoredCardList, getStoreCardList };
