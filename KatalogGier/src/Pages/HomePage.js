import React, { useState } from "react";
import Header from "../Components/Header";
import { Container } from "react-bootstrap";
import SearchBar from "../Components/SearchBar";
import Catalog from "../Components/Catalog";
import Footer from "../Components/Footer";
import { movieFilter } from "../filter.js";
import ButtonGroup from "../Components/ButtonGroup";

const myTitle = "Super extra katalog gier";

const allMovies = [
  {
    title: "Dark Souls III",
    studio: "From Software",
    description:
      "Ognie przygasają, a świat chyli się ku upadkowi. Ruszaj do krainy pełnej gigantycznych wrogów i lokacji. Gracze zatopią się w świecie epickiej atmosfery i mroku, dzięki szybszej rozgrywce i zwiększonej intensywności walki. Zarówno fani, jak i początkujący gracze, w pełni zatopią się w tej produkcji, znanej z grywalności i świetnej grafiki.",
    imageurl:
      "https://allegro.stati.pl/AllegroIMG/PRODUCENCI/CENEGA/Dark%20Souls%20III/alto/f2.jpg",
    tags: ["Souls Like", "Hidetaka Miyazaki", "RPG"],
    genre: "RPG",
  },
  {
    title: "Wiedźmin 3: Dziki Gon",
    studio: "CD Project Red",
    description:
      "Gra action RPG, stanowiąca trzecią część przygód Geralta z Rivii. Podobnie jak we wcześniejszych odsłonach cyklu, Wiedźmin 3: Dziki Gon bazuje na motywach twórczości literackiej Andrzeja Sapkowskiego, jednak nie jest bezpośrednią adaptacją żadnej z jego książek.",
    imageurl:
      "https://www.miastogier.pl/baza/Encyklopedia/gry/News/11.01.2016/nws_witcher343xciri.jpg",
    tags: ["RPG", "Folklor", "Polskie"],
    genre: "RPG",
  },
  {
    title: "Assassin's Creed: Odyssey",
    studio: "Ubisoft",
    description:
      "Assassin's Creed Odyssey to jedenasta główna odsłona bestsellerowego cyklu sandboksów zapoczątkowanego w 2007 roku. W przeciwieństwie do poprzednich części serii, które były grami akcji, omawiana produkcja wykonała silny zwrot w stronę gatunku RPG, upodabniając się do gry Wiedźmin 3: Dziki Gon. Przemierzając antyczną Grecję, gracz m.in. podejmuje wybory moralne w misjach, odgrywa postać w interaktywnych dialogach i awansuje na kolejne poziomy doświadczenia.",
    imageurl:
      "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7KyI2BUBqcUIqCj086Zrm1/54b7e94a21fab157551220648aa5b1ac/ACD_EMEA_KEYART_WIDE_UCS_RGB_NoLogo.jpg",
    tags: ["RPG", "Historyczne", "Assasin", "Grecja"],
    genre: "Akcja",
  },
  {
    title: "Assassin's Creed: Valhalla",
    studio: "Ubisoft",
    description:
      "Dwunasta główna odsłona bestsellerowego cyklu od firmy Ubisoft. Assassin's Creed: Valhalla to gra RPG akcji przenosząca nas do IX-wiecznej Anglii. W trakcie zabawy wcielamy się w postać o imieniu Eivor, której klan wikingów szuka dla siebie nowego domu.",
    imageurl:
      "https://ocdn.eu/images/pulscms/NmM7MDA_/0226183bb2b6ce59b961454959aa6dae.jpg",
    tags: ["RPG", "Akcja", "Historyczne"],
    genre: "Akcja",
  },
  {
    title: "Resident Evil VII: Biohazard",
    studio: "Capcom",
    description:
      "Gra stanowi wyraźne odejście od kanonu serii. Poprzednie odsłony opowiadały o walce doskonale wyszkolonych żołnierzy z potwornościami stworzonymi przez pozbawione jakichkolwiek hamulców moralnych korporacje. Resident Evil VII: Biohazard jest inne. Tym razem wcielamy się w zwykłego, szarego człowieka imieniem Ethan, który w poszukiwaniu zaginionej żony udaje się do ponurej i pozornie porzuconej rezydencji, zlokalizowanej na południu Stanów Zjednoczonych.",
    imageurl:
      "https://allegro.stati.pl/AllegroIMG/PRODUCENCI/CENEGA/Resident%20Evil%207%20Biohazard/fresh/f1.jpg",
    tags: ["Horror", "Survival", "FPS"],
    genre: "Horror",
  },
  {
    title: "Resident Evil VII: Village",
    studio: "Capcom",
    description:
      "Minęły trzy lata od wydarzeń zaprezentowanych w siódmej części. Ethan i jego żona Mia zamieszkali w Rumunii, w miejscu znajdującym się pod ścisłą obserwacją BSAA. Niedawno na świecie pojawiła się ich córeczka – Rosemary. Para stara się wieść spokojne życie, jednak przeżyty w Luizjanie koszmar wciąż nad nią ciąży.",
    imageurl:
      "https://cdn.prod.www.spiegel.de/images/c554c23e-524c-47c1-9a88-c17c25b3bc07_w1600_r1.7777777777777777_fpx35.99_fpy50.jpg",
    tags: ["Horror", "Survival", "FPS"],
    genre: "Horror",
  },
  {
    title: "Until Dawn",
    studio: "Supermassive Games",
    description:
      "Zrealizowana w konwencji horroru przygodowa gra akcji, przygotowana z myślą o kontrolerze PlayStation Move. Głównymi bohaterami tytułu są nastolatkowie, przebywający w odciętym od świata miejscu w górach. Zebrali się oni w rocznicę tajemniczego zaginięcia ich przyjaciółki z klasy, by raz na zawsze zapomnieć o tej ciążącej nad nimi sprawie. Sielanka dość szybko zmienia się w koszmar i osiem osób musi teraz walczyć o życie.",
    imageurl:
      "https://planetagracza.pl/wp-content/uploads/2015/07/Until-Dawn-e.jpg",
    tags: ["Play Station Exclusive", "Horror", "Quick Time Events"],
    genre: "Horror",
  },
  {
    title: "Sid Meier's Civilization VI",
    studio: "Firaxis Games",
    description:
      "Sid Meier’s Civilization VI to szósta odsłona legendarnej serii strategii turowych, pozwalających zbudować i rozwijać imperium na przestrzeni kilku tysięcy lat historii świata.",
    imageurl:
      "https://cdn2.unrealengine.com/2kgcap-civ-6-new-frontier-screenshots-silver-corporation-02-3840x2160-73ea9642c337.png",
    tags: ["Strategia", "Turowe", "Online"],
    genre: "Strategiczne",
  },
  {
    title: "Might & Magic: Heroes VII",
    studio: "Limbic Entertainment",
    description:
      "Siódma odsłona jednej z najpopularniejszych turowych strategii fantasy, zapoczątkowanej w 1995 roku. Za powstanie gry odpowiada niemieckie studio Limbic Entertainment, które ma na swoim koncie dodatki do poprzedniej części serii oraz RPG-owy Might & Magic X: Legacy.",
    imageurl:
      "https://allegro.stati.pl/AllegroIMG/PRODUCENCI/UBISOFT/Might-%26-Magic-Heroes-VII/Might-%26-Magic-Heroes-VII-gra.jpg",
    tags: ["Strategia", "Turowe", "Fantasy"],
    genre: "Strategiczne",
  },
  {
    title: "Demon's Souls Remake",
    studio: "Bluepoint Games",
    description:
      "Demon’s Souls to remake kultowej gry RPG akcji studia FromSoftware, który stanowi protoplastę cyklu Dark Souls. Nowa wersja, przygotowana przez Bluepoint Games, oferuje przede wszystkim kompletnie odświeżoną oprawę graficzną oraz ulepszone sterowanie.",
    imageurl:
      "https://www.tabletowo.pl/wp-content/uploads/2020/11/demons-souls-screenshot-08-disclaimer-en-28oct20.jpg",
    tags: ["Souls Like", "RPG", "Play Station Exclusive"],
    genre: "RPG",
  },
  {
    title: "Uncharted 3: Oszustwo Drake'a",
    studio: "Naughty Dog",
    description:
      "Trzecia odsłona cieszącego się dużą popularnością cyklu przygodowych gier akcji, za którego powstanie i rozwój odpowiada studio Naughty Dog. Fabuła Uncharted 3: Drake's Deception opowiada o kolejnych perypetiach łowcy przygód Nathana Drake'a.",
    imageurl:
      "https://lowcytrofeow.pl/wp-content/uploads/2018/12/uncharted-3-t%C5%82o.jpg",
    tags: ["Przygodowe", "Akcji", "FPS"],
    genre: "Przygodowe",
  },
  {
    title: "Uncharted 4: Kres złodzieja",
    studio: "	Naughty Dog",
    description:
      "Bohaterem Uncharted 4 studia Naughty Dog jest sympatyczny awanturnik i poszukiwacz przygód Nathan Drake – spadkobierca Indiany Jonesa i męska alternatywa dla legendarnej Lary Croft.",
    imageurl:
      "https://gmedia.playstation.com/is/image/SIEPDC/uncharted-4-a-thiefs-end-screen-02-ps4-us-09mar16?$native--t$",
    tags: ["Przygodowe", "Akcji", "FPS"],
    genre: "Przygodowe",
  },
];

const HomePage = () => {
  const [searchWord, setSearchWord] = useState();
  const [genre, setGenre] = useState("Wszystkie");

  /// 1. funkcja filtrująca filmy
  /// 2. jeżeli searchWord istnieje to przekazujemy do Catalog wyfiltrowaną tablicę filmów
  /// a jeżeli nie istnieje to przekazujemy do Catalog allMovies

  const changeGenre = (_genre) => {
    setGenre(_genre);
    console.log(genre);
  };

  const filterByGenre = (data) => {
    if (genre === "Wszystkie") {
      return data;
    }
    let filteredData = [];
    data.forEach((element) => {
      if (element.genre === genre) {
        filteredData.push(element);
      }
    });
    return filteredData;
  };

  const movies = searchWord ? movieFilter(allMovies, searchWord) : allMovies;

  const saveUserWord = (data) => {
    setSearchWord(data);
  };

  return (
    <>
      <Container>
        <Header title={myTitle} />
        <SearchBar getUserWordFunc={saveUserWord} />
        <ButtonGroup handleGenreChange={changeGenre} />
        <Catalog movies={filterByGenre(movies)} />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
