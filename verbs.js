// 50 verbos: 10 por cada letra de BINGO. Imágenes de Freepik/Magnific.
const IMG_BASE = "https://img.magnific.com/free-vector/";
const LETTERS = ["B","I","N","G","O"];
const LETTER_COLORS = { B:"#ff5fa2", I:"#ff9f1c", N:"#ffd60a", G:"#2ee6a6", O:"#4dabff" };
const VERBS = {
  B: [
    ["steal","cute-thief-steal-money-from-man-strapped-chair-cartoon-vector-icon-illustration-people-finance_138676-13631.jpg"],
    ["weep","cute-boy-crying-cartoon-vector-icon-illustration-people-nature-icon-isolated-flat-vector_138676-13545.jpg"],
    ["fight","cute-man-fighting-cartoon-vector-icon-illustration-people-sport-icon-isolated-flat-vector_138676-12895.jpg"],
    ["fly","cute-bird-flying-cartoon-vector-icon-illustration-animal-nature-icon-isolated-flat-vector_138676-13886.jpg"],
    ["catch","cute-polar-bear-catching-fish-cartoon-vector-icon-illustration-animal-food-icon-concept-isolated_138676-7311.jpg"],
    ["ride","cute-boy-riding-bicycle-cartoon-vector-icon-illustration-people-transportation-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3948.jpg"],
    ["sing","cute-girl-singing-with-microphone-cartoon-vector-icon-illustration-people-music-icon-isolated-flat_138676-17435.jpg"],
    ["sleep","cute-koala-sleeping-pillow-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-4806.jpg"],
    ["drink","cute-grandfather-drink-coffee-cartoon-vector-icon-illustration-people-drink-icon-concept-isolated_138676-9913.jpg"],
    ["swim","cute-shiba-inu-dog-snorkeling-waving-hand-cartoon-vector-icon-illustration-animal-holiday-icon_138676-4990.jpg"]
  ],
  I: [
    ["grow","cute-girl-planting-crops-cartoon-icon-illustration-people-nature-icon-concept-isolated-flat-cartoon-style_138676-2109.jpg"],
    ["shine","seasonal-sun-smiling-kawaii_24908-82214.jpg"],
    ["sweep","cute-man-cleaning-with-broom-duster-cartoon-vector-icon-illustration-people-healthy-isolated_138676-15102.jpg"],
    ["hurt","cute-man-with-crutch-bandage-leg-cartoon-vector-icon-illustration-people-nature-isolated_138676-6222.jpg"],
    ["burn","cute-house-burning-cartoon-vector-icon-illustration-people-object-icon-isolated-flat-vector_138676-14426.jpg"],
    ["shout","cute-girl-holding-megaphone-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3983.jpg"],
    ["paint","cute-astronaut-painting-cartoon-vector-icon-illustration-science-technology-icon-isolated-flat_138676-11429.jpg"],
    ["pray","cute-boy-moslem-prayer-cartoon-vector-icon-illustration-people-religion-icon-concept-isolated-flat_138676-7943.jpg"],
    ["lift","cute-man-lifting-barbell-gym-cartoon-vector-icon-illustration-people-sport-icon-concept-isolated_138676-6223.jpg"],
    ["skate","cute-boy-playing-skateboard-cartoon-vector-icon-illustration-people-sport-icon-isolated-flat-vector_138676-17450.jpg"]
  ],
  N: [
    ["float","cute-koala-floating-with-balloon-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2349.jpg"],
    ["sweat","cute-boy-stiflingly-hot-holding-handheld-fan-cartoon-vector-icon-illustration-people-nature-flat_138676-8421.jpg"],
    ["dream","cute-dog-dream-bone-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4119.jpg"],
    ["hang","cute-children-clothes-hanging-line-outdoor-scene_1308-54582.jpg"],
    ["read","cute-woman-reading-book-sofa-cartoon-vector-icon-illustration-people-education-icon-isolated_138676-9120.jpg"],
    ["write","cute-bear-writing-book-with-pencil-cartoon-vector-icon-illustration-animal-education-isolated_138676-8796.jpg"],
    ["eat","cute-koala-eating-ramen-noodle-cartoon-vector-icon-illustration-animal-food-icon-concept-isolated_138676-9816.jpg"],
    ["cook","cute-bear-chef-cooking-honey-cartoon-vector-icon-illustration-animal-food-icon-concept-isolated_138676-7927.jpg"],
    ["dance","cute-bear-dancing-ballet-cartoon-vector-icon-illustration-animal-holiday-icon-isolated-flat-vector_138676-15065.jpg"],
    ["draw","cute-koala-drawing-leaf-paper-cartoon-vector-icon-illustration-animal-education-icon-isolated_138676-8002.jpg"]
  ],
  G: [
    ["think","cute-monkey-thinking-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium_138676-7896.jpg"],
    ["teach","cute-lion-teacher-with-board-cartoon-vector-icon-illustration-animal-education-icon-isolated-flat_138676-10302.jpg"],
    ["run","cute-bear-running-marathon-cartoon-vector-icon-illustration-animal-sport-icon-concept-isolated-flat_138676-6187.jpg"],
    ["jump","cute-shiba-inu-dog-playing-jump-rope-cartoon-vector-icon-illustration-animal-sport-icon-isolated_138676-8483.jpg"],
    ["kick","soccer-girl-cartoon-vector-icon-illustration-people-sport-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-1876.jpg"],
    ["hug","cute-astronaut-couple-hug-moon-cartoon-vector-icon-illustration-science-technology-isolated-flat_138676-8719.jpg"],
    ["study","cute-woman-study-with-laptop-book-cartoon-vector-icon-illustration-people-technology-isolated_138676-13540.jpg"],
    ["play","cute-man-playing-guitar-forest-cartoon-vector-icon-illustration-people-music-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3864.jpg"],
    ["drive","cute-giraffe-driving-car-cartoon-vector-icon-illustration-animal-transportation-icon-isolated-flat_138676-7289.jpg"],
    ["buy","cute-woman-shopping-with-basket-cartoon-vector-icon-illustration-people-business-icon-isolated-flat_138676-13593.jpg"]
  ],
  O: [
    ["listen","cute-girl-listening-music-with-headphone-cartoon-vector-icon-illustration-people-music-isolated_138676-17342.jpg"],
    ["shoot","cute-boy-playing-basket-ball-cartoon-vector-icon-illustration-people-sport-icon-isolated-flat_138676-17242.jpg"],
    ["win","cute-boy-soccer-winning-gold-medal-with-indonesia-flag-cartoon-vector-icon-illustration-people-sport_138676-8352.jpg"],
    ["send","cute-girl-send-mail-paper-plane-with-laptop-cartoon-vector-icon-illustration-people-technology-flat_138676-16949.jpg"],
    ["shake","cute-man-hand-shake-with-grandfather-cartoon-vector-icon-illustration-people-business-isolated-flat_138676-15118.jpg"],
    ["blow","cute-grandfather-blowing-bubble-cartoon-vector-icon-illustration-people-nature-icon-isolated_138676-6206.jpg"],
    ["wear","cute-astronaut-wearing-hoodie-jacket-cartoon-vector-icon-illustration-science-technology-isolated_138676-9288.jpg"],
    ["throw","cute-ninja-throwing-shuriken-cartoon-vector-icon-illustration-people-holiday-icon-concept-isolated_138676-9382.jpg"],
    ["sit","cute-girl-sitting-sofa-cartoon-vector-icon-illustration-people-holiday-icon-isolated-flat-vector_138676-17313.jpg"],
    ["carry","cute-astronaut-courier-shipping-package-cartoon-vector-icon-illustration-people-business-isolated_138676-16419.jpg"]
  ]
};
function imgUrl(file, w) { return IMG_BASE + file + "?w=" + (w || 360); }
