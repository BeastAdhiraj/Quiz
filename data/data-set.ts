export type PersonalityKey = 
  | 'chinaar' 
  | 'gf_kutta' 
  | 'bf_chamchi' 
  | 'saccha_ashiq' 
  | 'overthinker' 
  | 'ghosting_specialist' 
  | 'food_gossip';



export interface PersonalityMeta {
  titleMale: string;
  titleFemale: string;
  desc: string;
}

export interface Option {
  text: string;
  personality: PersonalityKey;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export interface QuestionsData {
  male: Question[];
  female: Question[];
}



export type PersonalitiesMeta = Record<PersonalityKey, PersonalityMeta>;

// --- ACCURATE, CLEAR & HUMOROUS QUESTION BANK ---
const  questionsData: QuestionsData = {
  male: [
    {
      id: 1,
      question: "Phone par achanak low battery 5 percent ka alert aaya. Pehla reaction?",
      options: [
        { text: "Turant girlfriend ko text karta hoon taaki woh naraaz na ho jaye.", personality: "gf_kutta" },
        { text: "WhatsApp khol ke dekhta hoon kisi ladki ka message  pending toh nhi hai.", personality: "chinaar" },
        { text: "Swiggy Zomato khol ke dekhta hu kya order kar sakta hu.", personality: "food_gossip" },
        { text: "Phone charging pe laga ke side mein rakh deta hoon.", personality: "ghosting_specialist" }
      ]
    },
    {
      id: 2,
      question: "ek par poora din free mil gaya. toh kya karoge?",
      options: [
        { text: "Girlfriend ke saath poora din bitana aur uske saare kaam niptana.", personality: "gf_kutta" },
        { text: "Female friends se masti karna, Insta DMs check karna.", personality: "chinaar" },
        { text: "songs sunke ex ki yaadon mein kho jana.", personality: "saccha_ashiq" },
        { text: "Dosto ke saath kuch khane jaana.", personality: "food_gossip" }
      ]
    },
    {
      id: 3,
      question: "Restaurant se menu card se kese Order karoge?",
      options: [
        { text: "Girlfriend se poochhta hoon, woh jo bolegi wahi order hoga.", personality: "gf_kutta" },
        { text: "tasty food items order karta hu.", personality: "food_gossip" },
        { text: "Aadhe ghante tak rate list aur tax calculate karke.", personality: "overthinker" },
        { text: "Menu ko kon dekhta hai, mai toh ladkiya dekhne jata hu .", personality: "chinaar" }
      ]
    },
    {
      id: 4,
      question: "late night kya karte ho?",
      options: [
        { text: "Songs, breakup playlist.", personality: "saccha_ashiq" },
        { text: "Girlfriend ki bheji hui voice notes baar baar sunta hoon.", personality: "gf_kutta" },
        { text: "Dimaag mein 50 alag-alag baatein soch ke overthink karta hoon.", personality: "overthinker" },
        { text: "Phone off karke soo jata hu.", personality: "ghosting_specialist" }
      ]
    },
    {
      id: 5,
      question: "Group plan mein ek dost ne achanak cancel kar diya. Reaction?",
      options: [
        { text: "Bakiyo ko inform karta hu.", personality: "food_gossip" },
        { text: "Mai hi wahi friend hu ", personality: "ghosting_specialist" },
        { text: "Sochne lagta hoon ki mere hi plans hamesha kyun cancel hote hain.", personality: "overthinker" },
        { text: "Turant apni besti ke saath jane ka plan banata hu.", personality: "chinaar" }
      ]
    },
    {
      id: 6,
      question: "Party mein sabse zyada time kahan nikalta hai?",
      options: [
        { text: "Buffet aur starters counter ke paas khane aur baatein karne mein.", personality: "food_gossip" },
        { text: "Girls ko dekhne mai.", personality: "chinaar" },
        { text: "Quiet corner mein baith ke phone pe girlfriend ka wait karta hoon.", personality: "gf_kutta" },
        { text: "Bas yeh sochta rehta hoon ki main yahan aakar galti toh nahi kar di.", personality: "overthinker" }
      ]
    },
    {
      id: 7,
      question: "Insta pe ex ki id dikh gayi. Kya thought aaya?",
      options: [
        { text: "Uss waqt mera pehla sachha pyaar mere saath tha, woh din bhi kya din the.", personality: "saccha_ashiq" },
        { text: "request bhejta hu.", personality: "chinaar" },
        { text: "ID open karke dekhta hu.", personality: "overthinker" },
        { text: "Ignore karke agla reel dekhne lagta hoon.", personality: "food_gossip" }
      ]
    },
    {
      id: 8,
      question: "WhatsApp par kisi ka message aaya aur tumne dekh liya. Reaction?",
      options: [
        { text: "Seen karke chhod deta hoon, do din tak koi reply nahi karta.", personality: "ghosting_specialist" },
        { text: "Girlfriend ka message hai toh turant 1 second mein reply karta hoon.", personality: "gf_kutta" },
        { text: "Normal baat karta hoon.", personality: "food_gossip" },
        { text: "Pehle reply ka tone aur matlab sochta hoon fir send karta hu.", personality: "overthinker" }
      ]
    },
    {
      id: 9,
      question: "Market mein EX dikh gai. Kya karoge?",
      options: [
        { text: "Chupchaap rasta badal leta hu.", personality: "ghosting_specialist" },
        { text: "Dil ki dhadkan tez ho jaati hai kyunki woh mera pehla pyaar tha.", personality: "saccha_ashiq" },
        { text: "Smile pass karta hoon.", personality: "chinaar" },
        { text: "Food pe focus karta hu.", personality: "food_gossip" }
      ]
    },
    {
      id: 10,
      question: "Jab koi tumse koi favour maange jo tumhe bilkul pasand na ho?",
      options: [
        { text: "Girlfriend maange toh jaan bhi haazir hai, turant kar deta hoon.", personality: "gf_kutta" },
        { text: "Seen karke chhod deta hoon, reply hi nahi karta.", personality: "ghosting_specialist" },
        { text: "Haan bol deta hoon par baad mein akela baith ke tension leta hoon.", personality: "overthinker" },
        { text: "Agr ladki ka hota hai toh kar deta hu.", personality: "chinaar" }
      ]
    },
    {
      id: 11,
      question: "Weather ekdum romantic ho gaya hai aur baarish ho rahi hai. Pehla thought?",
      options: [
        { text: "Garam pakode, chai ka perfect combo ka time ho rha hai.", personality: "food_gossip" },
        { text: "romantic songs laga ke ex ki yaad mein kho jata hu.", personality: "saccha_ashiq" },
        { text: "Girlfriend ke saath ghummne jaata hu.", personality: "gf_kutta" },
        { text: "crush ko text bhejta hu, aaj kitna mast weather hai .", personality: "chinaar" }
      ]
    },
    {
      id: 12,
      question: "Shopping karte waqt sabse zyada focus kahan hota hai?",
      options: [
        { text: "Girlfriend ke liye gifts aur shopping pasand karne mein.", personality: "gf_kutta" },
        { text: "Snacks pe .", personality: "food_gossip" },
        { text: "Salesgirl ya doosri ladkiyon se help lena. taki baat kar saaku", personality: "chinaar" },
        { text: "kya lu ya kya na lu issmai dimaag kharab karne mein.", personality: "overthinker" }
      ]
    },
    {
      id: 13,
      question: "Dost ne Ek secret bataya hai'",
      options: [
        { text: "Dhindora peet dunga next day.", personality: "food_gossip" },
        { text: "chup chap apne tak rhkna", personality: "ghosting_specialist" },
        { text: "Girlfriend se kya saare secrets rhkna.", personality: "gf_kutta" },
        { text: "mere pe kitna trust karta hai ye, ki isne mujhe hi bataya.", personality: "overthinker" }
      ]
    },
    {
      id: 14,
      question: "Raat ke 2 baje neend nahi aa rahi hai. Kya kar rahe hoge?",
      options: [
        { text: "Instagram pe alag-alag dance dekhunga.", personality: "chinaar" },
        { text: "breakup waale letters aur messages padh raha hunga.", personality: "saccha_ashiq" },
        { text: "Zomato pe late night food delivery menu dekhunga .", personality: "food_gossip" },
        { text: "Zindagi ke baare mein overthink karke khud ko pareshan kar raha hunga.", personality: "overthinker" }
      ]
    },
    {
      id: 15,
      question: "Jab tumhara koi plan cancel ho jaye achanak, tab kaisa lagta hai?",
      options: [
        { text: "farrak nhi padta hai.", personality: "ghosting_specialist" },
        { text: "Always with plan B", personality: "chinaar" },
        { text: "Akele khane chala jaata hu.", personality: "food_gossip" },
        { text: "Girlfriend ke saath ghar pe ya phone par hi time spend karta hu", personality: "gf_kutta" }
      ]
    },
    {
      id: 16,
      question: "Phone par ek saath 3 logon ke messages aaye hain. Priority?",
      options: [
        { text: "Pehle girlfriend ka message, baaki sab wait karein.", personality: "gf_kutta" },
        { text: "Dekhta hu interesting topic konsa hai.", personality: "food_gossip" },
        { text: "Ladki ko phle reply deta hu", personality: "chinaar" },
        { text: "Jhaat kisiko reply nahi deta hu", personality: "ghosting_specialist" }
      ]
    },
    {
      id: 17,
      question: "Ghar par koi nahi hai aur poora din akele rehna hai.",
      options: [
        { text: "Girlfriend ko ghar pe bula leta hu ya uske saath call par rehta hu.", personality: "gf_kutta" },
        { text: "Khane-peene ka dher saara saman maangata hu aur chill karta hoon.", personality: "food_gossip" },
        { text: "Apni hobby follow karta hu and relax karta hu", personality: "ghosting_specialist" },
        { text: "Ghr mai akela hu toh Ek hi kaam karunga na 🌚", personality: "chinaar" }
      ]
    },
    {
      id: 18,
      question: "Kisi ne tumhari purani galti yaad dila di. Reaction?",
      options: [
        { text: " Agr Girlfriend ne bola toh turant sorry bol dunga.", personality: "gf_kutta" },
        { text: "Smile karke baat mazaak mein uda deta hoon aur topic badal deta hoon.", personality: "chinaar" },
        { text: "Raat ko sone se pehle uss baat ko 100 baar sochta hu .", personality: "overthinker" },
        { text: "EX ki yaad mein emotional ho jata hoon.", personality: "saccha_ashiq" }
      ]
    },
    {
      id: 19,
      question: "Tumhe ek surprise box mila. Pehla thought?",
      options: [
        { text: "Sochta hu kaash iske andar mere favorite snacks ho.", personality: "food_gossip" },
        { text: "how sweet meri girlfriend ne mere liye koi pyaara sa  gift bheja hai.", personality: "gf_kutta" },
        { text: "Sochne lagta hoon ki iske andar kya bura ya dangerous ho sakta hai.", personality: "overthinker" },
        { text: "Kya ye ussnai gift bheja hai?.", personality: "saccha_ashiq" }
      ]
    },
    {
      id: 20,
      question: "Relationship mai kya sochte ho?",
      options: [
        { text: "Girlfriend hi sab kuch hai, baaki duniya baad mein.", personality: "gf_kutta" },
        { text: "Multiple options rakho, ek par kabhi mat rhao.", personality: "chinaar" },
        { text: "Relationship faaltu hai, Kon baat kare, mood sahi kare etc..", personality: "ghosting_specialist" },
        { text: "Dil ka rasta stomach se jaata hai.", personality: "food_gossip" }
      ]
    }
  ],
  female: [
    {
      id: 1,
      question: "Phone par achanak low battery 5 percent ka alert aaya. Pehla reaction?",
      options: [
        { text: "Turant boyfriend ko text karti hoon taaki woh naraaz na ho jaye.", personality: "bf_chamchi" },
        { text: "WhatsApp khol ke dekhti hu ki crush ka msg toh nhi aaya hai.", personality: "chinaar" },
        { text: "Mummy ko kuch khane ke liye bol ti .", personality: "food_gossip" },
        { text: "Phone charging pe laga deti hu.", personality: "ghosting_specialist" }
      ]
    },
    {
      id: 2,
      question: "Ek poora din free mil gaya. kya karogi?",
      options: [
        { text: "Boyfriend ke saath poora din spend karna.", personality: "bf_chamchi" },
        { text: "male friends ke saath plan bana ke ghummna.", personality: "chinaar" },
        { text: "Songs sunnke Ex ki yaad mai din katna.", personality: "saccha_ashiq" },
        { text: "Koi new recipe try karna.", personality: "food_gossip" }
      ]
    },
    {
      id: 3,
      question: "Restaurant mai menu card se kese order karti ho?",
      options: [
        { text: "Boyfriend se poochhti hoon, woh jo bolega wahi order hoga.", personality: "bf_chamchi" },
        { text: "tasty food items order karti hu.", personality: "food_gossip" },
        { text: "Aadhe ghante tak rate list aur tax calculate karti hu .", personality: "overthinker" },
        { text: "Menu ko maaro goli, yrrr ye waiter kitna handsome hai", personality: "chinaar" }
      ]
    },
    {
      id: 4,
      question: "late night kya karti ho?",
      options: [
        { text: "Songs, breakup playlist, Ex ki yaad.", personality: "saccha_ashiq" },
        { text: "Boyfriend se baat .", personality: "bf_chamchi" },
        { text: "Dimaag mein 50 alag-alag baatein soch ke overthink karti hoon.", personality: "overthinker" },
        { text: "Soo jaati hu", personality: "ghosting_specialist" }
      ]
    },
    {
      id: 5,
      question: "Group plan mein ek friend ne achanak cancel kar diya. Reaction?",
      options: [
        { text: "Baakiyo ko inform karti hu.", personality: "food_gossip" },
        { text: "Mai hi wahi friend hu", personality: "ghosting_specialist" },
        { text: "Sochne lagti hoon ki mere hi plans hamesha kyun cancel hote hain.", personality: "overthinker" },
        { text: "Friendzone wale ko call karti hu time pass kahi toh ho.", personality: "chinaar" }
      ]
    },
    {
      id: 6,
      question: "Party mein sabse zyada time kahan nikalta hai?",
      options: [
        { text: "Buffet aur starters counter ke paas khane aur baatein karne mein.", personality: "food_gossip" },
        { text: "Dance floor par centre of attraction bane mai.", personality: "chinaar" },
        { text: "Quiet corner mein baith ke phone pe boyfriend ka wait karti hoon.", personality: "bf_chamchi" },
        { text: "Bas yeh sochti rehti hoon ki main yahan aakar galti toh nahi kar di.", personality: "overthinker" }
      ]
    },
    {
      id: 7,
      question: "Insta pe Ex ki ID dikh gai?",
      options: [
        { text: "Uss waqt mera pehla sachha pyaar mere saath tha, woh din bhi kya din the.", personality: "saccha_ashiq" },
        { text: "Request bhejti hoon, dekhte hain kya reply aata hai.", personality: "chinaar" },
        { text: "Id ko check karti hu, ki koi new gf toh nhi bani.", personality: "overthinker" },
        { text: "Ignore karke next reel dekh ti hu.", personality: "food_gossip" }
      ]
    },
    {
      id: 8,
      question: "WhatsApp par kisi ka message aaya aur tumne dekh liya. Reaction?",
      options: [
        { text: "Seen karke chhod deti hoon, do din tak koi reply nahi ", personality: "ghosting_specialist" },
        { text: "Agr Boyfriend ka message hai toh turant 1 second mein reply karti hoon.", personality: "bf_chamchi" },
        { text: "Screenshot leke doston ko bhejti hu gossip karne ke liye.", personality: "food_gossip" },
        { text: "Pehle reply ka tone aur matlab sochti hu fir msg send karti hu.", personality: "overthinker" }
      ]
    },
    {
      id: 9,
      question: "Market mein Ex dikh gaya. Kya karogi?",
      options: [
        { text: "Chupchaap rasta badal leti hu.", personality: "ghosting_specialist" },
        { text: "Dil ki dhadkan tez ho jaati hai kyunki woh mera pehla pyaar tha.", personality: "saccha_ashiq" },
        { text: "Smile pass karti hu.", personality: "chinaar" },
        { text: "Who cares, Golgappe pe focus karo!", personality: "food_gossip" }
      ]
    },
    {
      id: 10,
      question: "Jab koi tumse koi favour maange jo tumhe bilkul pasand na ho?",
      options: [
        { text: "Boyfriend maange toh jaan bhi haazir hai, turant kar deti hoon.", personality: "bf_chamchi" },
        { text: "Seen karke chhod deti hoon, reply hi nahi karti.", personality: "ghosting_specialist" },
        { text: "Haan bol deti hoon par baad mein akela baith ke tension leti hu.", personality: "overthinker" },
        { text: "Agr ladke ka hai toh kar deti hu.", personality: "chinaar" }
      ]
    },
    {
      id: 11,
      question: "Weather ekdum romantic ho gaya hai aur baarish ho rahi hai. Pehla thought?",
      options: [
        { text: "Garam pakode, coffee aur gossip ka perfect combo friend ke saath time spend karna.", personality: "food_gossip" },
        { text: "romantic gaane laga ke ex ki yaad mein kho jaati hoon.", personality: "saccha_ashiq" },
        { text: "Boyfriend ke barrish ke maje leti hu", personality: "bf_chamchi" },
        { text: " crush ko text bhejti hu ki aaj kitna romantic weather hai.", personality: "chinaar" }
      ]
    },
    {
      id: 12,
      question: "Shopping karte waqt sabse zyada focus kahan hota hai?",
      options: [
        { text: "Boyfriend ke liye gifts aur shopping pasand karne mein.", personality: "bf_chamchi" },
        { text: "snacks konse lu.", personality: "food_gossip" },
        { text: "Male staff se help lene ki acting and cute acting to attract other boys", personality: "chinaar" },
        { text: "Kya lena hai aur kya nhi issmai dimaag kharab karne mein.", personality: "overthinker" }
      ]
    },
    {
      id: 13,
      question: "Friend ne Ek secret batya hai",
      options: [
        { text: "Mere stomach mai kuch nhi rhta ", personality: "food_gossip" },
        { text: "Apne tak rakhti hu", personality: "ghosting_specialist" },
        { text: "Boyfriend ke aage kya secrets.", personality: "bf_chamchi" },
        { text: "itna trust mere pe?", personality: "overthinker" }
      ]
    },
    {
      id: 14,
      question: "Raat ke 2 baje neend nahi aa rahi hai. Kya kar rahi hogi?",
      options: [
        { text: "Instagram pe Male friends se masti karti hu.", personality: "chinaar" },
        { text: "Old breakup waale letters aur messages padhti hu.", personality: "saccha_ashiq" },
        { text: "Zomato pe late night food delivery menu dekhti hu.", personality: "food_gossip" },
        { text: "Zindagi ke baare mein overthink karke khud ko pareshan kar rahi hogi.", personality: "overthinker" }
      ]
    },
    {
      id: 15,
      question: "Jab tumhara koi plan cancel ho jaye achanak, tab kaisa lagta hai?",
      options: [
        { text: "Farrak nhi padta hai.", personality: "ghosting_specialist" },
        { text: "Always ready with my Male friend to go on", personality: "chinaar" },
        { text: "Ghar pe baith ke tasty khana order karti hu aur relaxing TV dekhti hoon.", personality: "food_gossip" },
        { text: "Boyfriend hai toh konse plans.", personality: "bf_chamchi" }
      ]
    },
    {
      id: 16,
      question: "Phone par ek saath 3 logon ke messages aaye hain. Priority?",
      options: [
        { text: "Pehle boyfriend ka message, baaki sab wait karein.", personality: "bf_chamchi" },
        { text: "Jiske saath sabse mazedaar gossip hoti hai usko pehle.", personality: "food_gossip" },
        { text: "Agr ladke ka hai toh phle usse reply.", personality: "chinaar" },
        { text: "Jhaat kise baat karungi.", personality: "ghosting_specialist" }
      ]
    },
    {
      id: 17,
      question: "Ghar par koi nahi hai aur poora din akele rehna hai.",
      options: [
        { text: "Boyfriend ko ghar pe bula leti hu ya uske saath call par rehti hoon.", personality: "bf_chamchi" },
        { text: "Khane-peene ka dher saara saman maangati hu aur chill karti hoon.", personality: "food_gossip" },
        { text: "Khud pe focus, hobby follow karna, relax", personality: "ghosting_specialist" },
        { text: "Male friend ke saath flirting karti hu, aur usse pareshan karti hu.", personality: "chinaar" }
      ]
    },
    {
      id: 18,
      question: "Kisi ne tumhari purani galti yaad dila di. Reaction?",
      options: [
        { text: "Agr Boyfriend ne bola hai toh turant sorry bol deti hu.", personality: "bf_chamchi" },
        { text: "Smile karke, mai toh maasum hu yesha bol deti hu", personality: "chinaar" },
        { text: "Raat ko sone se pehle uss baat ko 100 baar overthink karti hoon.", personality: "overthinker" },
        { text: "Ki meri kya galti thi , ussne kyu breakup kiya ", personality: "saccha_ashiq" }
      ]
    },
    {
      id: 19,
      question: "Tumhe ek surprise box mila. Pehla thought?",
      options: [
        { text: "Sochti hu kaash iske andar mere favorite snacks ho.", personality: "food_gossip" },
        { text: "How sweet mere boyfriend ne mere liye koi pyaara sa gift bheja hoga.", personality: "bf_chamchi" },
        { text: "Sochne lagti hoon ki iske andar kya bura ya dangerous ho sakta hai.", personality: "overthinker" },
        { text: "Kya ye gift Ussne bheja hai?", personality: "saccha_ashiq" }
      ]
    },
    {
      id: 20,
      question: "Relationship ka sabse bada rule jo tum follow karti ho?",
      options: [
        { text: "Boyfriend hi sab kuch hai, baaki duniya baad mein, Loyaty at peak!.", personality: "bf_chamchi" },
        { text: "Multiple options rakho, ek par kabhi mat bharosa karo.", personality: "chinaar" },
        { text: "Relationship faaltu chiz hai, No drama needed.", personality: "ghosting_specialist" },
        { text: "Dill ka rasta toh stomach se hi jaata hai na", personality: "food_gossip" }
      ]
    }
  ]
};

const personalitiesMeta: PersonalitiesMeta = {
  chinaar: {
    titleMale: "Certified Chinaar",
    titleFemale: "Certified Chinaar",
    desc: "Inka dill bahut bada hai kisko maana nhi karte hai, sabke saath ghummte hai aur flirt karte hai, loyalty toh bilkul nhi hoti. Ek se katega but 10 se thodi"
  },
  gf_kutta: {
    titleMale: "Girlfriend Ka Kutta",
    titleFemale: "Boyfriend Ki Chamchi",
    desc: "Gf ki har baat patthar ki lakeer hai. Dost jayein tel lene, boss toh sirf ek hi hai!"
  },
  bf_chamchi: {
    titleFemale: "Boyfriend Ki Chamchi",
    titleMale: "Girlfriend Ka Kutta",
    desc: "Bf ka har ek hukum sar-maathe par. Apni family aur friends ko bhool ke bas sir ji ki seva mein hazir."
  },
  saccha_ashiq: {
    titleMale: "Saccha Ashiq",
    titleFemale: "Sacchi Ashiqi",
    desc: "Phela pyaar saccha pyaar hota hai, wo khush rhe bss "
  },
  overthinker: {
    titleMale: "CEO of Overthinking",
    titleFemale: "Founder of Overthinking",
    desc: "Ovethinking toh yese karte hai hai jaise mentalist ho but mental baan jaate hai"
  },
  ghosting_specialist: {
    titleMale: "Introvert ka Baap",
    titleFemale: "Introvert ki Maa",
    desc: "Inka hona ya na hona ek hi baat hai."
  },
  food_gossip: {
    titleMale: "Food pglu",
    titleFemale: "Bhooki",
    desc: "Hum khane ke liye jeete hai, khana hai toh jeevan hai, "
  }
};

export { questionsData, personalitiesMeta };