import Genre from "./Genre";
import Images from "./Images";

const Container = () => {
  return (
    <>
      <h1>MOVIES</h1>
      <Genre
        genre="Sci-Fi Films"
        movie1={{
          description:
            "Interstellar is about Earth's last chance to find a habitable planet before a lack of resources causes the human race to go extinct. The film's protagonist is Cooper (Matthew McConaughey), a former NASA pilot who is tasked with leading a mission through a wormhole to find a habitable planet in another galaxy.",
          title: "Interstella",
          year: 1981,
          img: Images.interstella,
        }}
        movie2={{
          description:
            "This film follows the stories of six people's 'souls' across time, and the stories are interweaved as they advance, showing how they all interact. It is about how the people's lives are connected with and influence each other",
          title: "Cloud Atlas",
          year: 1981,
          img: Images.cloudAtlas,
        }}
      />

      <Genre
        genre="Comedy Films"
        movie1={{
          description:
            "Think you've got what it takes to be the boss? This interactive special puts your skills to the test and matches you up with one of 16 jobs at Baby Corp.",
          title: "The Boss Baby: Get That Baby!",
          year: 2020,
          img: Images.boss,
        }}
        movie2={{
          description:
            "Rejected by his supervillain idols, 12-year-old Gru sets out to prove his despicable nature with the help of his bumbling team of Minions.",
          title: "Minions: The Rise of Gru",
          year: 2022,
          img: Images.guru,
        }}
      />
    </>
  );
};

export default Container;
