import Book from "./Book";
import HarryPotter from "../assets/img/book1.jpg";
import TwentyThousand from "../assets/img/book2.jpg";
import MysteriousIsland from "../assets/img/book3.jpg";

const data = [
  {
    id: 1,
    imgUrl: HarryPotter,
    name: `Harry Potter and the Sorcerer's Stone`,
    description: `"Harry Potter and the Sorcerer's Stone" is the enchanting first installment in J.K. Rowling's beloved series. It follows the story of a young orphan, Harry Potter, who discovers he is a wizard on his eleventh birthday and is accepted into Hogwarts School of Witchcraft and Wizardry. As Harry embarks on his magical journey, he uncovers dark secrets about his past and the world of magic. With the help of loyal friends, he must confront the evil wizard Lord Voldemort and his quest for immortality. This captivating tale of friendship, bravery, and the power of love introduces readers to a world of wonder and enchantment that has captivated readers of all ages for decades.`,
    characters: [
      "Harry Potter",
      "Hermione Granger",
      "Ron Weasley",
      "Albus Dumbledore",
    ],
  },

  {
    id: 2,
    imgUrl: TwentyThousand,
    name: `20,000 Leagues Under the Sea`,
    description: `"20,000 Leagues Under the Sea" is a classic adventure novel by Jules Verne. The story follows the thrilling journey of Captain Nemo and his extraordinary submarine, the Nautilus, as they explore the depths of the ocean, encountering wondrous creatures and mysterious landscapes. Join Professor Pierre Aronnax, Conseil, and Ned Land on their harrowing voyage as they become prisoners aboard the enigmatic Nautilus, while unraveling the secrets of the enigmatic Captain Nemo. This timeless tale of exploration, scientific curiosity, and the wonders of the deep sea is a masterpiece of science fiction and a must-read for those who crave underwater adventures and imaginative storytelling.`,
    characters: ["Pierre Aronnax", "Captain Nemo", "Ned Land", "Conseil"],
  },

  {
    id: 3,
    imgUrl: MysteriousIsland,
    name: `The Mysterious Island`,
    description: `"The Mysterious Island" is an adventurous novel by Jules Verne that tells the captivating story of five castaways who escape a Confederate prison camp during the American Civil War and find themselves stranded on a remote and enigmatic island in the South Pacific. The group, consisting of Captain Cyrus Harding, Gideon Spilett, Herbert, Pencroft, and Neb, must use their ingenuity and resourcefulness to survive and thrive on the island. As they face numerous challenges, from building shelter to taming the wild environment, they gradually uncover the island's secrets and its connection to Captain Nemo from Verne's earlier work, "20,000 Leagues Under the Sea." "The Mysterious Island" is a tale of survival, scientific exploration, and the enduring human spirit, making it a timeless classic of adventure literature.`,
    characters: [
      "Cyrus Smith",
      "Gideon Spilett",
      "Pencroff",
      "Herbert Brown",
      "Ayrton",
    ],
  },
];

const BookList = () => {
  function action(name, characters) {
    console.log(`this is an action from ${name} ${characters.join(", ")}`);
  }
  return (
    <div className="book-list">
      {data.map((book) => {
        return (
          <Book
            key={book.id}
            imgUrl={book.imgUrl}
            name={book.name}
            description={book.description}
            characters={book.characters}
            action={action}
          />
        );
      })}
    </div>
  );
};

export default BookList;
