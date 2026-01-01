// Import jersey images - Original collection
import barcelonaAway from "@/assets/jerseys/barcelona-away.jpg";
import barcelonaBlack from "@/assets/jerseys/barcelona-black.jpg";
import barcelonaPink from "@/assets/jerseys/barcelona-pink.webp";
import realMadridDragon from "@/assets/jerseys/real-madrid-dragon.webp";
import santosHome from "@/assets/jerseys/santos-home.jpg";
import manUnitedRetro from "@/assets/jerseys/man-united-retro.jpg";
import barcelonaPinkSpecial from "@/assets/jerseys/barcelona-pink-special.jpg";
import brazilJesus from "@/assets/jerseys/brazil-jesus.jpg";

// Import jersey images - Retro collection
import barcelona1415Home from "@/assets/jerseys/barcelona-1415-home.jpg";
import acMilan0607Away from "@/assets/jerseys/ac-milan-0607-away.jpg";
import brazil0203Home from "@/assets/jerseys/brazil-0203-home.jpg";
import realMadrid1617Away from "@/assets/jerseys/real-madrid-1617-away.jpg";
import barcelona0809Home from "@/assets/jerseys/barcelona-0809-home.jpg";
import manUnited0203Home from "@/assets/jerseys/man-united-0203-home.jpg";
import netherlands9899Home from "@/assets/jerseys/netherlands-9899-home.webp";
import manUnited0708HomeSS from "@/assets/jerseys/man-united-0708-home-ss.jpg";
import realMadrid1314HomeLS from "@/assets/jerseys/real-madrid-1314-home-ls.jpg";
import realMadrid2122Home from "@/assets/jerseys/real-madrid-2122-home.jpg";
import france1819Home from "@/assets/jerseys/france-1819-home.webp";
import acMilan0910HomeLS from "@/assets/jerseys/ac-milan-0910-home-ls.webp";
import barcelona1011Home from "@/assets/jerseys/barcelona-1011-home.webp";

// Import jersey images - New additions
import acMilan2425Home from "@/assets/jerseys/ac-milan-2425-home.webp";
import atleticoMadrid2425Home from "@/assets/jerseys/atletico-madrid-2425-home.webp";
import barcelona2425Third from "@/assets/jerseys/barcelona-2425-third.jpg";
import chelsea2425ThirdSpecial from "@/assets/jerseys/chelsea-2425-third-special.webp";
import portugal2425Home from "@/assets/jerseys/portugal-2425-home.png";
import mexico2223Home from "@/assets/jerseys/mexico-2223-home.png";

// Import jersey images - 2026 World Cup
import peru2026WcHome from "@/assets/jerseys/peru-2026-wc-home.png";
import colombia2026WcHome from "@/assets/jerseys/colombia-2026-wc-home.png";
import germany2026WcHome from "@/assets/jerseys/germany-2026-wc-home.png";
import argentina2026WcHome from "@/assets/jerseys/argentina-2026-wc-home.png";

// Import jersey images - New batch
import tottenham2425Home from "@/assets/jerseys/tottenham-2425-home.webp";
import tottenham2425ThirdSpecial from "@/assets/jerseys/tottenham-2425-third-special.jpeg";
import liverpool2425Home from "@/assets/jerseys/liverpool-2425-home.webp";
import manUnitedRetroBlack from "@/assets/jerseys/man-united-retro-black.webp";
import liverpool2425AwayLS from "@/assets/jerseys/liverpool-2425-away-ls.webp";
import barcelonaElClasicoSpecial from "@/assets/jerseys/barcelona-el-clasico-special.webp";
import barcelonaTravisScott from "@/assets/jerseys/barcelona-travis-scott.webp";
import psg2425Away from "@/assets/jerseys/psg-2425-away.webp";
import manUnited2425Home from "@/assets/jerseys/man-united-2425-home.webp";
import realMadrid2425Away from "@/assets/jerseys/real-madrid-2425-away.jpg";

export type Category = "all" | "clubs" | "national" | "retro";

export interface Jersey {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  category: "clubs" | "national" | "retro";
  description?: string;
}

export const jerseys: Jersey[] = [
  // Clubs - Current season
  { id: "barcelona-away", name: "Barcelona 24/25 Away Kit", image: barcelonaAway, price: 3599, originalPrice: 7199, category: "clubs", description: "Premium quality Barcelona away jersey for the 24/25 season. Features breathable fabric and authentic club details." },
  { id: "barcelona-black", name: "Barcelona 25/26 Black Special Kit", image: barcelonaBlack, price: 3599, originalPrice: 7199, category: "clubs", description: "Exclusive Barcelona special edition black jersey. Limited release with unique design elements." },
  { id: "barcelona-pink", name: "Barcelona 25/26 Bright Pink Special Kit", image: barcelonaPink, price: 3599, originalPrice: 7199, category: "clubs", description: "Bold pink Barcelona special edition jersey. Stand out from the crowd with this striking design." },
  { id: "real-madrid-dragon", name: "Real Madrid 25/26 Pink Dragon Special Kit", image: realMadridDragon, price: 3599, originalPrice: 7199, category: "clubs", description: "Stunning Real Madrid dragon edition jersey. Features intricate dragon design elements." },
  { id: "barcelona-pink-special", name: "Barcelona 25/26 Pink Special Kit", image: barcelonaPinkSpecial, price: 3599, originalPrice: 7199, category: "clubs", description: "Elegant pink Barcelona special edition. Perfect blend of style and club heritage." },
  { id: "ac-milan-2425-home", name: "AC Milan 24/25 Home Kit", image: acMilan2425Home, price: 3599, originalPrice: 7199, category: "clubs", description: "Classic AC Milan home jersey with iconic red and black stripes." },
  { id: "atletico-madrid-2425-home", name: "Atletico Madrid 24/25 Home Kit", image: atleticoMadrid2425Home, price: 3599, originalPrice: 7199, category: "clubs", description: "Atletico Madrid home jersey featuring traditional red and white stripes." },
  { id: "barcelona-2425-third", name: "Barcelona 24/25 Third Kit", image: barcelona2425Third, price: 3599, originalPrice: 7199, category: "clubs", description: "Barcelona third kit with unique color scheme for the 24/25 season." },
  { id: "chelsea-2425-third-special", name: "Chelsea 24/25 Third Special Kit", image: chelsea2425ThirdSpecial, price: 3599, originalPrice: 7199, category: "clubs", description: "Chelsea special edition third jersey with premium design details." },
  { id: "tottenham-2425-home", name: "Tottenham 24/25 Home Kit", image: tottenham2425Home, price: 3599, originalPrice: 7199, category: "clubs", description: "Classic Tottenham home jersey in pristine white." },
  { id: "tottenham-2425-third-special", name: "Tottenham 24/25 Third Special Kit", image: tottenham2425ThirdSpecial, price: 3599, originalPrice: 7199, category: "clubs", description: "Tottenham special edition third jersey with unique design." },
  { id: "liverpool-2425-home", name: "Liverpool 24/25 Home Kit", image: liverpool2425Home, price: 3599, originalPrice: 7199, category: "clubs", description: "Iconic Liverpool red home jersey for the 24/25 season." },
  { id: "liverpool-2425-away-ls", name: "Liverpool 24/25 Away L/S Kit", image: liverpool2425AwayLS, price: 3599, originalPrice: 7199, category: "clubs", description: "Liverpool long sleeve away jersey with premium finish." },
  { id: "barcelona-el-clasico-special", name: "Barcelona El Clasico Special Kit", image: barcelonaElClasicoSpecial, price: 3599, originalPrice: 7199, category: "clubs", description: "Special El Clasico edition Barcelona jersey commemorating the legendary rivalry." },
  { id: "barcelona-travis-scott", name: "Barcelona Travis Scott Away Kit", image: barcelonaTravisScott, price: 3599, originalPrice: 7199, category: "clubs", description: "Limited edition Travis Scott x Barcelona collaboration jersey." },
  { id: "psg-2425-away", name: "PSG 24/25 Away Kit", image: psg2425Away, price: 3599, originalPrice: 7199, category: "clubs", description: "Paris Saint-Germain away jersey for the 24/25 season." },
  { id: "man-united-2425-home", name: "Man United 24/25 Home Kit", image: manUnited2425Home, price: 3599, originalPrice: 7199, category: "clubs", description: "Manchester United home jersey in classic red." },
  { id: "real-madrid-2425-away", name: "Real Madrid 24/25 Away Kit", image: realMadrid2425Away, price: 3599, originalPrice: 7199, category: "clubs", description: "Real Madrid away jersey for the 24/25 season." },
  { id: "man-united-retro-black", name: "Man United Retro Black Kit", image: manUnitedRetroBlack, price: 3599, originalPrice: 7199, category: "retro", description: "Classic Manchester United retro jersey in black edition." },
  
  // National Teams
  { id: "brazil-jesus", name: "Brazil 24/25 Jesus Special Kit", image: brazilJesus, price: 3599, originalPrice: 7199, category: "national", description: "Brazil special edition jersey featuring iconic national colors." },
  { id: "netherlands-9899-home", name: "Netherlands 98/99 Home Kit", image: netherlands9899Home, price: 4299, originalPrice: 8599, category: "national", description: "Classic Netherlands orange jersey from the legendary 98/99 era." },
  { id: "france-1819-home", name: "France 18/19 Home Kit", image: france1819Home, price: 4299, originalPrice: 8599, category: "national", description: "France World Cup winning jersey from the 18/19 season." },
  { id: "brazil-0203-home", name: "Brazil 02/03 Home Kit", image: brazil0203Home, price: 4299, originalPrice: 8599, category: "national", description: "Brazil iconic yellow jersey from the World Cup winning 02/03 season." },
  { id: "portugal-2426-wc", name: "Portugal 2026 World Cup Home Kit", image: portugal2425Home, price: 3599, originalPrice: 7199, category: "national", description: "Portugal home jersey for the 2026 World Cup." },
  { id: "mexico-2426-wc", name: "Mexico 2026 World Cup Home Kit", image: mexico2223Home, price: 3599, originalPrice: 7199, category: "national", description: "Mexico home jersey for the 2026 World Cup." },
  { id: "peru-2026-wc", name: "Peru 2026 World Cup Home Kit", image: peru2026WcHome, price: 3599, originalPrice: 7199, category: "national", description: "Peru home jersey for the 2026 World Cup featuring traditional colors." },
  { id: "colombia-2026-wc", name: "Colombia 2026 World Cup Home Kit", image: colombia2026WcHome, price: 3599, originalPrice: 7199, category: "national", description: "Colombia home jersey for the 2026 World Cup in iconic yellow." },
  { id: "germany-2026-wc", name: "Germany 2026 World Cup Home Kit", image: germany2026WcHome, price: 3599, originalPrice: 7199, category: "national", description: "Germany home jersey for the 2026 World Cup in classic white." },
  { id: "argentina-2026-wc", name: "Argentina 2026 World Cup Home Kit", image: argentina2026WcHome, price: 3599, originalPrice: 7199, category: "national", description: "Argentina home jersey for the 2026 World Cup with iconic stripes." },
  
  // Retro Kits
  { id: "santos-home", name: "Santos 12/13 Home Kit", image: santosHome, price: 3599, originalPrice: 7199, category: "retro", description: "Classic Santos FC home jersey reminiscent of Pelé era." },
  { id: "man-united-retro", name: "Man United 07/08 L/S UCL Home Kit", image: manUnitedRetro, price: 3599, originalPrice: 7199, category: "retro", description: "Manchester United Champions League winning jersey from 07/08." },
  { id: "barcelona-1415-home", name: "Barcelona 14/15 Home UCL Kit", image: barcelona1415Home, price: 4299, originalPrice: 8599, category: "retro", description: "Barcelona treble-winning jersey from the 14/15 season." },
  { id: "ac-milan-0607-away", name: "AC Milan 06/07 UCL Away Kit", image: acMilan0607Away, price: 4299, originalPrice: 8599, category: "retro", description: "AC Milan Champions League winning away jersey from 06/07." },
  { id: "real-madrid-1617-away", name: "Real Madrid 16/17 UCL Away Kit", image: realMadrid1617Away, price: 4299, originalPrice: 8599, category: "retro", description: "Real Madrid La Duodécima winning away jersey." },
  { id: "barcelona-0809-home", name: "Barcelona 08/09 UCL Home Kit", image: barcelona0809Home, price: 4299, originalPrice: 8599, category: "retro", description: "Barcelona legendary treble-winning jersey from 08/09." },
  { id: "man-united-0203-home", name: "Man United 02/03 Home Kit", image: manUnited0203Home, price: 4299, originalPrice: 8599, category: "retro", description: "Manchester United Premier League winning jersey from 02/03." },
  { id: "man-united-0708-home-ss", name: "Man United 07/08 UCL Home Kit", image: manUnited0708HomeSS, price: 4299, originalPrice: 8599, category: "retro", description: "Manchester United short sleeve Champions League winning jersey." },
  { id: "real-madrid-1314-home-ls", name: "Real Madrid 13/14 Home L/S UCL Kit", image: realMadrid1314HomeLS, price: 4299, originalPrice: 8599, category: "retro", description: "Real Madrid La Décima winning long sleeve jersey." },
  { id: "real-madrid-2122-home", name: "Real Madrid 21/22 Home Kit", image: realMadrid2122Home, price: 4299, originalPrice: 8599, category: "retro", description: "Real Madrid Champions League winning jersey from 21/22." },
  { id: "ac-milan-0910-home-ls", name: "AC Milan 09/10 L/S Home Kit", image: acMilan0910HomeLS, price: 4299, originalPrice: 8599, category: "retro", description: "AC Milan classic long sleeve home jersey from 09/10." },
  { id: "barcelona-1011-home", name: "Barcelona 10/11 Home Kit", image: barcelona1011Home, price: 4299, originalPrice: 8599, category: "retro", description: "Barcelona Champions League winning jersey from the 10/11 season." },
];

export const categories = [
  { id: "all" as const, label: "All Jerseys", icon: "🏆" },
  { id: "clubs" as const, label: "Club Kits", icon: "⚽" },
  { id: "national" as const, label: "National Teams", icon: "🌍" },
  { id: "retro" as const, label: "Retro Classics", icon: "⭐" },
];

export const getJerseyById = (id: string): Jersey | undefined => {
  return jerseys.find(jersey => jersey.id === id);
};
