import Card from "./Card";
import { useLanguage } from "../context/languageCtx";

const CardsGroup = () => {
  const { language, translate } = useLanguage();
  return (
    <div className="w-full bg-light dark:bg-darkDark pb-8 md:pb-20">
      <div className="max-w-[1000px] 2xl:max-w-[1280px] m-auto grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-8 p-4 xl:p-0">
        <Card
          img="/innovacion.webp"
          title={translate[language].cardFront1}
          backText={translate[language].cardBack1}
          align=""
        />
        <Card
          img="/ingreso.webp"
          title={translate[language].cardFront2}
          backText={translate[language].cardBack2}
          align="text-right ml-auto"
        />
        <Card
          img="/crecimiento.webp"
          title={translate[language].cardFront3}
          backText={translate[language].cardBack3}
          align="text-left self-end"
        />
        <Card
          img="/calidad.webp"
          title={translate[language].cardFront4}
          backText={translate[language].cardBack4}
          align="text-right ml-auto self-end"
        />
      </div>
    </div>
  );
};

export default CardsGroup;
