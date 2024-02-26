export interface ICategory {
  category: string;
  categoryDescription: string;
  image: string;
  products: IProduct[];
}

interface IProduct {
  productName: string;
  productDescription: string;
  productPrice: string;
}

export const foods: ICategory[] = [
  {
    category: 'Sparmenüs',
    categoryDescription:
      'Alle Sparmenüs werden mit Gemüse, Reis, Hühnerfleisch, Entenfleisch, Rindfleisch und einer Beilage Ihrer Wahl serviert.',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_imbiss/imbiss_nuggets.png',
    products: [
      {
        productName: 'Sparmenü (2 Personen)',
        productDescription:
          '• gebratenes Hühner-, Rind- und Entenfleisch mit Gemüse• Mini-Frühlingsrollen oder Pekingsuppe• Reis',
        productPrice: '23,90 €',
      },
      {
        productName: 'Sparmenü 8 Kostbarkeiten (2 Personen)',
        productDescription:
          '• knuspriges Enten-, Hühner- und Rindfleisch• Garnelen• Gemüse• Mini-Frühlingsrollen oder Pekingsuppe• Reis',
        productPrice: '25,90 €',
      },
      {
        productName: 'Sparmenü Familienglück (3 Personen)',
        productDescription:
          '• gebratenes Rindfleisch• Spezial gebratenes Entenfleisch• knuspriges Hähnchenbrustfilet• verschiedenes Gemüse• Mini-Frühlingsrollen oder Pekingsuppe• Reis',
        productPrice: '29,90 €',
      },
      {
        productName: 'Sparmenü Thai Spezial (3 Personen, scharf)',
        productDescription:
          '• Thai Spezial mit rotem Curry und Kokosmilch• Gaeng Kiew Wan Gai mit Hühnerfleisch• Grand phat Nnae mit Rindfleisch• Red Korb mit knuspriger Ente• Mini-Frühlingsrollen oder Pekingsuppe• Reis',
        productPrice: '31,90 €',
      },
      {
        productName: 'Sparmenü Glückwunsch (3 Personen)',
        productDescription:
          '• knusprige Ente mit Bambus, Paprika und Morcheln• gebratene Rindfleisch mit Bambus, Paprika, und Champignons in Currysauce• mariniertes Hühnerfleisch mit Limettenblättern• Gemüse• Mini-Frühlingsrollen oder Pekingsuppe• Reis',
        productPrice: '30,90 €',
      },
      {
        productName: 'Sparmenü Al Lala Canton (3 Personen, scharf)',
        productDescription:
          '• Canton knusprige Ente mit Gemüse• gebratenes Rindfleisch mit Zwiebeln, Knoblauch und Ingwer• gebratenes Hühnerfleisch mit Gemüse• Mini-Frühlingsrollen oder Pekingsuppe• Reis',
        productPrice: '30,90 €',
      },
      {
        productName: 'Sparmenü Nedel Spezial (3 Personen)',
        productDescription:
          '• Hühnerfleisch, Gemüse und Ei mit einer Beilage nach Wahl• Ente, Gemüse und Ei mit einer Beilage nach Wahl• Rindfleisch, Gemüse und Ei mit einer Beilage nach Wahl• Mini-Frühlingsrollen oder Pekingsuppe',
        productPrice: '26,90 €',
      },
    ],
  },
  {
    category: 'Sushi - Boxen',
    categoryDescription:
      'Alle Boxen werden mit Sojasauce, Wasabi, Ingwer und Stäbchen serviert.',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_sushi/sushi_sushi.png',
    products: [
      {
        productName: 'Sushi Box S (12 Stück)',
        productDescription:
          '• 4 Kani Maki• 4 Kappa Maki• 2 Miami Inside Out Roll• 2 Sake Nigiri',
        productPrice: '8,90 €',
      },
      {
        productName: 'Sushi Box M (18 Stück)',
        productDescription:
          '• 4 Sake Maki• 4 Tekka Maki• 4 Kappa Maki• 2 Sake Nigiri• 2 Ebi Nigiri• 2 Miami Inside Out Roll',
        productPrice: '15,00 €',
      },
      {
        productName: 'Sushi Box L (21 Stück)',
        productDescription:
          '• 3 Toronto Maki• 6 Kappa Maki• 2 Sake Nigiri• 2 Maguro Nigiri• 2 Ebi Nigiri• 2 Fotu Maki• 2 Miami Inside Out Roll• 2 Tuna Inside Out Roll',
        productPrice: '22,00 €',
      },
      {
        productName: 'Sushi Box XL (26 Stück)',
        productDescription:
          '• 6 Kappa Maki• 6 Toronto Maki• 2 Sake Nigiri• 2 Maguro Nigiri• 2 Ebi Nigiri• 2 Futo Maki• 2 Tuna Inside Out Roll• 2 California Inside Out Roll• 1 Sake Gunkan • 1 Tuna Gunkan',
        productPrice: '28,00 €',
      },
      {
        productName: 'Vegan Box Klein (10 Stück)',
        productDescription:
          '• 3 Kappa Maki• 3 Avocado Maki • 2 Avocado Nigiri • 2 Fotu Maki Vegan',
        productPrice: '8,00 €',
      },
      {
        productName: 'Vegan Box Groß (20 Stück)',
        productDescription:
          '• 6 Kappa Maki• 6 Avocado Maki• 2 Futo Maki Vegan• 2 Avocado Nigiri • 4 Veggie Inside Out Roll',
        productPrice: '16,00 €',
      },
      {
        productName: 'Party Box (55 Stück)',
        productDescription:
          '• 9 Maki nach Wahl • 8 Nigiri nach Wahl• 2 Futo Maki nach Wahl • 3 Inside Out Roll nach Wahl • 2 Gunkan Maki nach Wahl',
        productPrice: '57,90 €',
      },
      {
        productName: 'Sushi Wunsch Box (15 Stück)',
        productDescription:
          '• 3 Maki nach Wahl• 2 Nigiri nach Wahl• 1 Inside out Roll nach Wahl',
        productPrice: '16,50 €',
      },
      {
        productName: 'Sashimi Lachs Mix Box',
        productDescription:
          '• 8 Lachs Filetscheiben• Reis• Algensalat• Gurken.',
        productPrice: '18,00 €',
      },
      {
        productName: 'Nigiri Box (10 Stück)',
        productDescription: '• 5 Nigiri nach Wahl',
        productPrice: '20,00 €',
      },
      {
        productName: 'Sashimi Lachs & Thunfisch Mix Box',
        productDescription:
          '• 4 Thunfisch Filetscheiben • 4 Lachs Filetscheiben• Reis• Algensalat• Gurken',
        productPrice: '18,50 €',
      },
      {
        productName: 'Unagi Spezial Box (6 Stück)',
        productDescription:
          'Unagi Spezial Roll gefüllt mit Avocado, Surimicreme, Rettich, Röstzwiebeln, ummantelt mit gegrilltem Aal, Unagi-Sauce und Sesam',
        productPrice: '15,00 €',
      },
      {
        productName: 'Sashimi Royal Box',
        productDescription:
          '• 2 Thunfisch Filetscheiben • 2 Lachs Filetscheiben • 2 Riesengarnelen • 2 Süßwassergarnelen• Reis • Kim Chi',
        productPrice: '19,00 €',
      },
    ],
  },
  {
    category: 'Asiatische Vorspeisen',
    categoryDescription: '',

    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_asian/asia_wantan.png',
    products: [
      {
        productName: 'Tofu Suppe',
        productDescription: 'mit Gemüse und rotem Curry',
        productPrice: '3,50 €',
      },
      {
        productName: 'Pekingsuppe',
        productDescription: '',
        productPrice: '3,50 €',
      },
      {
        productName: 'Tom-Yam-Gung Suppe',
        productDescription: 'mit Garnelen, Gemüse und rotem Curry',
        productPrice: '4,90 €',
      },
      {
        productName: 'Tom-Yam-Gai Suppe',
        productDescription: 'mit Hühnerfleisch, Gemüse und rotem Curry',
        productPrice: '4,50 €',
      },
      {
        productName: 'Mini-Frühlingsrollen (6 Stück)',
        productDescription: '',
        productPrice: '3,20 €',
      },
      {
        productName: 'Kim Chi (scharf)',
        productDescription: 'Chinakohl',
        productPrice: '4,10 €',
      },
      {
        productName: 'Edamame',
        productDescription: 'gekochte Sojabohnen mit Meersalz',
        productPrice: '4,10 €',
      },
      {
        productName: 'Wakame',
        productDescription: 'Seetangsalat mit Sesam',
        productPrice: '4,10 €',
      },
      {
        productName: 'Miso Suppe',
        productDescription: 'mit Tofu, Seetang und Lauchzwiebeln',
        productPrice: '4,00 €',
      },
      {
        productName: 'Yakitori (2 Stück)',
        productDescription: 'Hähnchenspieße',
        productPrice: '4,60 €',
      },
      {
        productName: 'Chicken Gyoza (6 Stück)',
        productDescription:
          'knusprige japanische Dumplings mit Hähnchenfleisch, dazu Suß-Sauer-Sauce',
        productPrice: '5,30 €',
      },
      {
        productName: 'Gemüse Gyoza (6 Stück, vegetarisch)',
        productDescription:
          'knusprige japanische Dumplings mit Gemüse, dazu Suß-Sauer-Sauce',
        productPrice: '5,30 €',
      },
      {
        productName: 'Mini Frühlingsrollen Vegetarisch (6 Stück)',
        productDescription: 'mit Süß-Sauer-Sauce',
        productPrice: '3,40 €',
      },
      {
        productName: 'Crispy Ebi Sticks (4 Stück)',
        productDescription: 'in Tempura frittierte Black Tiger Garnelen',
        productPrice: '6,00 €',
      },
    ],
  },
  {
    category: 'Bowls',
    categoryDescription:
      'Alle Bowls werden mit Gurken, Avocado, Edamame, Reis und einer Sauce nach Wahl zubereitet.',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_asian/poke_bowl_1_asian.png',
    products: [
      {
        productName: 'Tuna Bowl',
        productDescription: 'mit Thunfisch, Salat und Sesam',
        productPrice: '17,00 €',
      },
      {
        productName: 'Lachs Bowl',
        productDescription: 'mit Mango und Granatapfel',
        productPrice: '18,00 €',
      },
      {
        productName: 'Hähnchen Bowl',
        productDescription: 'mit Mango und Granatapfel',
        productPrice: '17,00 €',
      },
      {
        productName: 'Tofu Bowl',
        productDescription: 'mit Mango und Granatapfel',
        productPrice: '16,00 €',
      },
      {
        productName: 'Veggie Bowl',
        productDescription: 'mit Mango und Granatapfel',
        productPrice: '16,00 €',
      },
    ],
  },
  {
    category: 'Salate',
    categoryDescription:
      'Alle Salate werden mit einem Dressing Ihrer Wahl zubereitet.',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Gemischter Salat',
        productDescription: '',
        productPrice: '5,90 €',
      },
      {
        productName: 'Mozzarella Salat',
        productDescription:
          'mit Mozzarella, frischen Tomaten, Gurken und Zwiebeln',
        productPrice: '7,90 €',
      },
      {
        productName: 'Griechischer Salat',
        productDescription:
          'mit Schafskäse, Oliven, Gurken, Tomaten, Weinblättern und Peperoni',
        productPrice: '7,90 €',
      },
      {
        productName: 'Nizza Salat',
        productDescription:
          'gemischter Salat mit Thunfisch, Ei, Oliven, Gurken, Zwiebeln und Tomaten',
        productPrice: '7,90 €',
      },
      {
        productName: 'Chef Salat',
        productDescription:
          'gemischter Salat mit Ei, Schinken, Käse, Thunfisch und Gurken',
        productPrice: '7,90 €',
      },
      {
        productName: 'Italienischer Salat',
        productDescription:
          'gemischter Salat mit Schinken, Ei, Käse, Tomaten und Oliven',
        productPrice: '7,90 €',
      },
      {
        productName: 'Kaiser Salat',
        productDescription:
          'gemischter Salat mit gegrillten Hühnerstreifen, Käse, Tomaten, Gurken und Ei',
        productPrice: '8,90 €',
      },
    ],
  },
  {
    category: 'Reis und Nudelgerichte',
    categoryDescription: '',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Bami Goreng',
        productDescription:
          'gebratene Nudeln mit Gemüse, Hühnerfleisch und Krabben',
        productPrice: '11,90 €',
      },
      {
        productName: 'Nasi Goreng',
        productDescription:
          'gebratener Reis mit Gemüse, Hühnerfleisch und Krabben',
        productPrice: '11,90 €',
      },
      {
        productName: 'Gebratener Reis mit Gemüse',
        productDescription: '',
        productPrice: '10,90 €',
      },
      {
        productName: 'Gebratener Reis mit Hühnerfleisch',
        productDescription: '',
        productPrice: '10,90 €',
      },
      {
        productName: 'Gebratener Reis mit Rindfleisch',
        productDescription: '',
        productPrice: '10,90 €',
      },
      {
        productName: 'Gebratener Reis mit Garnelen',
        productDescription: '',
        productPrice: '12,90 €',
      },
      {
        productName: 'Gebratener Reis mit Ente',
        productDescription: '',
        productPrice: '12,90 €',
      },
      {
        productName: 'Gebratene Nudeln mit Gemüse',
        productDescription: '',
        productPrice: '10,90 €',
      },
      {
        productName: 'Gebratene Nudeln mit Hünerfleisch',
        productDescription: '',
        productPrice: '10,90 €',
      },
      {
        productName: 'Gebratene Nudeln mit Rindfleisch',
        productDescription: '',
        productPrice: '10,90 €',
      },
      {
        productName: 'Gebratene Nudeln mit Garnelen',
        productDescription: '',
        productPrice: '12,90 €',
      },
      {
        productName: 'Gebratene Nudeln mit Ente',
        productDescription: '',
        productPrice: '12,90 €',
      },
      {
        productName: 'Gebratener Reis',
        productDescription:
          'mit Hühnerfleisch, Rindfleisch, Garnelen und Gemüse',
        productPrice: '12,90 €',
      },
      {
        productName: 'Gebratene Nudeln',
        productDescription:
          'mit Hühnerfleisch, Rindfleisch, Garnelen und Gemüse',
        productPrice: '12,90 €',
      },
      {
        productName: 'Gebratene Nudeln mit knusprigem Hähnchen',
        productDescription: '',
        productPrice: '12,90 €',
      },
      {
        productName: 'Gebratener Reis mit knusprigem Hähnchen',
        productDescription: '',
        productPrice: '12,90 €',
      },
      {
        productName: 'Gebratener Reis mit Shrimps',
        productDescription: '',
        productPrice: '12,90 €',
      },
      {
        productName: 'Gebratene Nudeln mit Shrimps',
        productDescription: '',
        productPrice: '12,90 €',
      },
    ],
  },
  {
    category: 'Thai-Curry Spezialitäten',
    categoryDescription:
      'Alle Gerichte werden mit einer Beilage nach Wahl serviert.',

    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Gaeng Kiew Wan Gai',
        productDescription: 'mit Hühnerfleisch, Gemüse und Kokosmilch',
        productPrice: '13,90 €',
      },
      {
        productName: 'Grand Phat Nnae',
        productDescription:
          'mit Rindfleisch, rotem Curry, Gemüse und Kokosmilch',
        productPrice: '13,90 €',
      },
      {
        productName: 'Red Korb',
        productDescription:
          'mit knuspriger Ente, rotem Curry, Gemüse und Kokosmilch',
        productPrice: '14,90 €',
      },
      {
        productName: 'Gaeng Kua Garnelen',
        productDescription: 'mit rotem Curry, Gemüse und Kokosmilch',
        productPrice: '14,90 €',
      },
      {
        productName: 'Asia-Thai-Spezial',
        productDescription:
          'mit knuspriger Ente, Gemüse, tropischen Früchten und Spezial-Kokosmilch-Sauce',
        productPrice: '15,90 €',
      },
      {
        productName: 'Gebratene Hühnerflügel',
        productDescription: 'mit knuspriger Ente, Gemüse und Kokosmilch-Sauce',
        productPrice: '14,90 €',
      },
      {
        productName: 'Knusprige Ente',
        productDescription:
          'mit Hühnerfleisch, Rindfleisch, Kokosmilch-Sauce und Gemüse',
        productPrice: '14,90 €',
      },
    ],
  },
  {
    category: 'Hühnergerichte',
    categoryDescription:
      'Alle Gerichte werden mit einer Beilage nach Wahl serviert.',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Gebratenes Hühnerfleisch-Gemüsemix',
        productDescription: '',
        productPrice: '12,90 €',
      },
      {
        productName: 'Gebratenes Hühnerfleisch-Paprika',
        productDescription: 'mit Bambus, Paprika und Morcheln',
        productPrice: '12,90 €',
      },
      {
        productName: 'Gebratenes Hühnerfleisch-Bambus',
        productDescription: 'mit Paprika und Champignons in Currysauce',
        productPrice: '12,90 €',
      },
      {
        productName: 'Gebratenes Hühnerfleisch Sojasauce (pikant)',
        productDescription: 'mit verschiedenen Gemüsesorten und Sojasauce',
        productPrice: '12,90 €',
      },
      {
        productName: 'Gebratenes Hühnerfleisch-Zwiebeln',
        productDescription: 'mit Zwiebeln, Knoblauch und Ingwer',
        productPrice: '12,90 €',
      },
      {
        productName: 'Mariniertes Hühnerfleisch',
        productDescription:
          'mit Limettenblättern, Gemüse und eine Sauce nach Wahl',
        productPrice: '12,90 €',
      },
      {
        productName: 'Knuspriges Hähnchenbrustfilet',
        productDescription: 'mit frischem Gemüse und einer Sauce nach Wahl',
        productPrice: '12,90 €',
      },
    ],
  },
  {
    category: 'Rindergerichte',
    categoryDescription:
      'Alle Gerichte werden mit einer Beilage nach Wahl serviert.',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Rindfleisch Spezial (pikant)',
        productDescription:
          'mit Gemüse-Mix, ingwer und Knoblauch in pikanter Spezialsauce',
        productPrice: '13,90 €',
      },
      {
        productName: 'Gebratenes Rindfleisch mit Bambus, Paprika und Morcheln',
        productDescription: '',
        productPrice: '12,90 €',
      },
      {
        productName:
          'Gebratenes Rindfleisch mit Zwiebeln, Knoblauch und Ingwer',
        productDescription: '',
        productPrice: '12,90 €',
      },
      {
        productName:
          'Gebratenes Rindfleisch mit Bambus, Paprika und Champignons',
        productDescription: 'in Currysauce',
        productPrice: '13,90 €',
      },
    ],
  },
  {
    category: 'Entengerichte',
    categoryDescription:
      'Alle Gerichte werden mit einer Beilage nach Wahl serviert.',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Gebratenes Entenfleisch',
        productDescription: 'mit Gemüse',
        productPrice: '12,90 €',
      },
      {
        productName: 'Knusprige Ente mit Gemüse',
        productDescription: '',
        productPrice: '13,90 €',
      },
      {
        productName: 'Knusprige Ente mit Bambus, Paprika und Morcheln',
        productDescription: '',
        productPrice: '13,90 €',
      },
      {
        productName: 'Knusprige Ente mit Gemüse und einer Sauce nach Wahl',
        productDescription: '',
        productPrice: '13,90 €',
      },
    ],
  },
  {
    category: 'Garnelengerichte',
    categoryDescription:
      'Alle Gerichte werden mit einer Beilage nach Wahl serviert.',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Gebratene Garnelen mit Gemüse',
        productDescription: '',
        productPrice: '14,90 €',
      },
      {
        productName: 'Gebratene Garnelen mit Bambus und Champignons',
        productDescription: 'in Currysauce',
        productPrice: '14,90 €',
      },
      {
        productName: 'Gebratene Garnelen mit Gemüse und Sojasauce',
        productDescription: '',
        productPrice: '14,90 €',
      },
      {
        productName: 'Gebratene Garnelen mit Gemüse und Süß-Sauer-Sauce',
        productDescription: '',
        productPrice: '14,90 €',
      },
    ],
  },
  {
    category: 'Vegetarische Gerichte',
    categoryDescription:
      'Alle Gerichte werden mit einer Beilage nach Wahl serviert.',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Gemüse-Mix mit Sojasauce',
        productDescription: '',
        productPrice: '10,90 €',
      },
      {
        productName: 'Gemüse-Mix mit rotem Curry und Kokosmilch',
        productDescription: '',
        productPrice: '10,90 €',
      },
      {
        productName: 'Gemüse-Mix mit Tofu und Sojasauce',
        productDescription: '',
        productPrice: '11,90 €',
      },
      {
        productName: 'Gemüse-Mix mit rotem Curry, Tofu und Kokosmilch',
        productDescription: '',
        productPrice: '11,90 €',
      },
    ],
  },
  {
    category: 'Dürüm',
    categoryDescription: '',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Mexikanisch Dürüm',
        productDescription:
          'mit Fresch Brot, Hühnerfleisch, Pommes frites, Joghurt, Knoblauch und Tabasco-Sauce',
        productPrice: '7,90 €',
      },
      {
        productName: 'Danisch Dürüm',
        productDescription:
          'mit Fresch Brot, Hühnerfleisch, Hackfleisch, Ananas, Salat und Joghurt',
        productPrice: '8,90 €',
      },
    ],
  },
  {
    category: 'Pasta',
    categoryDescription: '',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Pasta Napoli',
        productDescription: 'mit Gnocchi und Sahnesauce',
        productPrice: '7,90 €',
      },
      {
        productName: 'Pasta Bolognese',
        productDescription: 'mit Tomaten und Hackfleischsauce',
        productPrice: '7,90 €',
      },
      {
        productName: 'Tortellini',
        productDescription: 'mit Bolognesesauce',
        productPrice: '7,90 €',
      },
      {
        productName: 'Pasta Schinken',
        productDescription: 'mit Schinken, frischen Champignons und Bolognese',
        productPrice: '8,90 €',
      },
    ],
  },
  {
    category: 'Schnitzel',
    categoryDescription: '',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Schnitzel Wiener Art',
        productDescription: '',
        productPrice: '11,90 €',
      },
      {
        productName: 'Rahmschnitzel',
        productDescription: 'mit Rahmsauce',
        productPrice: '11,90 €',
      },
      {
        productName: 'Schnitzel Bolognese',
        productDescription: 'mit Hackfleischsauce',
        productPrice: '11,90 €',
      },
      {
        productName: 'Jägerschnitzel (pikant)',
        productDescription: 'mit Zwiebeln und frischen Champignons',
        productPrice: '11,90 €',
      },
      {
        productName: 'Zigeunerschnitzel',
        productDescription: 'mit Paprika und pikanter Tomatensauce',
        productPrice: '11,90 €',
      },
      {
        productName: 'Parmegiana-Schnitzel',
        productDescription: 'mit Käsecreme',
        productPrice: '11,90 €',
      },
      {
        productName: 'Gorgonzola-Schnitzel',
        productDescription: 'mit Gorgonzola, Zwiebeln und frischen Champignons',
        productPrice: '11,90 €',
      },
      {
        productName: 'Hawaii-Schnitzel',
        productDescription: 'mit Schinken, Ananas und Curry-Sahnesauce',
        productPrice: '11,90 €',
      },
      {
        productName: 'Zwiebel-Schnitzel',
        productDescription: 'mit Zwiebeln und Rahmsauce',
        productPrice: '11,90 €',
      },
      {
        productName: 'Paprika-Schnitzel',
        productDescription: 'mit Paprika und Süß-Sauer-Sauce',
        productPrice: '11,90 €',
      },
      {
        productName: 'Holsteiner-Schnitzel',
        productDescription: 'mit Schinken, Zwiebeln, Ei und Käse überbacken',
        productPrice: '11,90 €',
      },
    ],
  },
  {
    category: 'Beilagen und Saucen',
    categoryDescription: '',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Pommes frites',
        productDescription: '',
        productPrice: '2,90 €',
      },
      {
        productName: 'Zwiebel Ringe',
        productDescription: '',
        productPrice: '3,90 €',
      },
      {
        productName: 'Hähnchen Sticks',
        productDescription: '',
        productPrice: '3,90 €',
      },
      {
        productName: 'Chicken Nuggets',
        productDescription: '',
        productPrice: '3,90 €',
      },
      {
        productName: 'Chili Cheese Nuggets',
        productDescription: '',
        productPrice: '3,90 €',
      },
      {
        productName: 'Chicken Wings',
        productDescription: '',
        productPrice: '5,90 €',
      },
      {
        productName: 'Sweet Chili-Dip',
        productDescription: '',
        productPrice: '0,60 €',
      },
      {
        productName: 'Ketchup',
        productDescription: '',
        productPrice: '0,60 €',
      },
      {
        productName: 'Mayonnaise',
        productDescription: '',
        productPrice: '0,60 €',
      },
      {
        productName: 'Aioli',
        productDescription: '',
        productPrice: '0,60 €',
      },
    ],
  },
  {
    category: 'Sushi - Tempura Sushi',
    categoryDescription:
      'Es werden jeweils 8 Stück serviert.Alle Gerichte werden mit Sojasauce, Wasabi, Ingwer und Stäbchen serviert.',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Tempura Sake Box',
        productDescription: 'mit Lachs, Avocado und Frischkäse',
        productPrice: '13,00 €',
      },
      {
        productName: 'Tempura Veggie Box',
        productDescription: 'mit Avocado, Rettich und Algensalat',
        productPrice: '12,00 €',
      },
      {
        productName: 'Tempura Tuna Box',
        productDescription: 'mit Thunfischcreme und geschmolzenem Käse',
        productPrice: '11,00 €',
      },
    ],
  },
  {
    category: 'Sushi - Futo Maki',
    categoryDescription:
      'Es werden jeweils 2 Stück serviert.Alle Gerichte werden mit Sojasauce, Wasabi, Ingwer und Stäbchen serviert.',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Futo Maki',
        productDescription: 'große Mixrolle',
        productPrice: '3,10 €',
      },
      {
        productName: 'Futo Maki Vegan',
        productDescription: 'große Mixrolle vegan',
        productPrice: '2,90 €',
      },
    ],
  },
  {
    category: 'Sushi - Maki',
    categoryDescription:
      'Es werden jeweils 3 Stück serviert.Alle Gerichte werden mit Sojasauce, Wasabi, Ingwer und Stäbchen serviert.',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Sake Maki',
        productDescription: 'mit Lachs',
        productPrice: '2,80 €',
      },
      {
        productName: 'Avocado Maki',
        productDescription: '',
        productPrice: '2,60 €',
      },
      {
        productName: 'Kappa Maki',
        productDescription: 'mit Gurke',
        productPrice: '2,30 €',
      },
      {
        productName: 'Kappa Phila Maki',
        productDescription: 'mit Gurke und Frischkäse',
        productPrice: '2,60 €',
      },
      {
        productName: 'Oshinko Maki',
        productDescription: 'mit Rettich',
        productPrice: '2,30 €',
      },
      {
        productName: 'Toronto Maki',
        productDescription: 'mit Lachs und Avocado',
        productPrice: '2,80 €',
      },
      {
        productName: 'Inari Maki',
        productDescription: 'mit gebackener Tofutasche',
        productPrice: '2,60 €',
      },
      {
        productName: 'Tuna Maki',
        productDescription: 'mit gekochtem Thunfisch',
        productPrice: '2,80 €',
      },
      {
        productName: 'Tuna Kappa Maki',
        productDescription: 'mit gekochtem Thunfisch und Gurke',
        productPrice: '2,80 €',
      },
      {
        productName: 'Tekka Avocado Maki',
        productDescription: 'mit Thunfisch und Avocado',
        productPrice: '3,20 €',
      },
    ],
  },
  {
    category: 'Sushi - Inside Out Rolls',
    categoryDescription:
      'Es werden jeweils 2 Stück serviert.Alle Gerichte werden mit Sojasauce, Wasabi, Ingwer und Stäbchen serviert.',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Veggie Inside Out Roll',
        productDescription: 'mit gebackener Tofutasche, Avocado und Gurke',
        productPrice: '2,80 €',
      },
      {
        productName: 'Power Inside Out Roll',
        productDescription: 'mit Avocado, Surimi, Gurke und Lachs',
        productPrice: '3,60 €',
      },
      {
        productName: 'Crunch Inside Out Roll',
        productDescription: 'mit Avocado, Surimi, Frischkäse und Röstzwiebeln',
        productPrice: '3,40 €',
      },
      {
        productName: 'Avocado Inside Out Roll',
        productDescription: 'mit Gurke und Sesam',
        productPrice: '2,70 €',
      },
      {
        productName: 'Tuna Inside Out Roll',
        productDescription: 'mit gekochtem Thunfisch, Avocado und Sesam',
        productPrice: '3,00 €',
      },
      {
        productName: 'California Inside Out Roll',
        productDescription: 'mit Surimi, Avocado und Masago',
        productPrice: '2,90 €',
      },
      {
        productName: 'Grilled Salmon Inside Out Roll',
        productDescription:
          'mit Avocado, gegrilltem Lachs und hausgemachter pikanter Würzmischung',
        productPrice: '3,00 €',
      },
      {
        productName: 'Miami Inside Out Roll',
        productDescription: 'mit Lachs, Avocado, Frischkäse und Masago',
        productPrice: '3,00 €',
      },
    ],
  },
  {
    category: 'Sushi - Nigiri',
    categoryDescription:
      'Es werden jeweils 2 Stück serviert.Alle Gerichte werden mit Sojasauce, Wasabi, Ingwer und Stäbchen serviert.',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Maguro Nigiri',
        productDescription: '',
        productPrice: '4,20 €',
      },
      {
        productName: 'Sake Nigiri',
        productDescription: '',
        productPrice: '4,20 €',
      },
      {
        productName: 'Temago Nigiri',
        productDescription: '',
        productPrice: '3,50 €',
      },
      {
        productName: 'Ebi Nigiri',
        productDescription: '',
        productPrice: '4,00 €',
      },
      {
        productName: 'Avocado Nigiri',
        productDescription: '',
        productPrice: '3,60 €',
      },
      {
        productName: 'Unagi Nigiri',
        productDescription: '',
        productPrice: '4,30 €',
      },
      {
        productName: 'Inari Nigiri',
        productDescription: '',
        productPrice: '3,60 €',
      },
      {
        productName: 'Aburi Sake Nigiri',
        productDescription: '',
        productPrice: '4,60 €',
      },
      {
        productName: 'Aburi Maguro Nigiri',
        productDescription: '',
        productPrice: '4,60 €',
      },
    ],
  },
  {
    category: 'Sushi - Gunkan',
    categoryDescription:
      'Es wird jeweils 1 Stück serviert.Alle Gerichte werden mit Sojasauce, Wasabi, Ingwer und Stäbchen serviert.',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Ikura Gunkan',
        productDescription: 'mit Lachskaviar',
        productPrice: '4,20 €',
      },
      {
        productName: 'Sake Gunkan',
        productDescription: 'mit hausgemachter Lachscreme',
        productPrice: '2,60 €',
      },
      {
        productName: 'Kani Gunkan',
        productDescription: 'mit Surimicreme und Schnittlauch',
        productPrice: '2,30 €',
      },
      {
        productName: 'Grilled Salmon Gunkan',
        productDescription:
          'mit gegrillter Lachscreme und hausgemachter Würzmischung',
        productPrice: '2,60 €',
      },
      {
        productName: 'Maguro Gunkan',
        productDescription: 'mit pinkantem Thunfischtatar',
        productPrice: '2,60 €',
      },
      {
        productName: 'Tuna Gunkan',
        productDescription: 'mit Thunfischcreme',
        productPrice: '2,50 €',
      },
      {
        productName: 'Sake Gunkan',
        productDescription: 'mit pikantem Lachstatar',
        productPrice: '2,60 €',
      },
      {
        productName: 'Goma Gunkan',
        productDescription: 'mit Seetangsalat',
        productPrice: '2,10 €',
      },
    ],
  },
  {
    category: 'Sushi - Extras',
    categoryDescription: '',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Sojasauce 28ml',
        productDescription: '',
        productPrice: '1,00 €',
      },
      {
        productName: 'Wasabi 28g',
        productDescription: '',
        productPrice: '1,00 €',
      },
      {
        productName: 'Ingwer 28g',
        productDescription: '',
        productPrice: '1,00 €',
      },
      {
        productName: 'Süss-Sauer-Sauce 28ml',
        productDescription: '',
        productPrice: '1,00 €',
      },
      {
        productName: 'Unagi-Sauce 28ml',
        productDescription: '',
        productPrice: '1,00 €',
      },
      {
        productName: 'Essstäbchen',
        productDescription: '',
        productPrice: '1,00 €',
      },
      {
        productName: 'Japanische scharfe Mayonnaise 28ml',
        productDescription: '',
        productPrice: '1,00 €',
      },
    ],
  },
  {
    category: 'Ben & Jerrys',
    categoryDescription: '',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: "Ben & Jerry's Strawberry Cheesecake 100ml",
        productDescription:
          'Erdbeer- und Käsekuchen-Eiscreme mit Erdbeerstücken und einem Keksstrudel.',
        productPrice: '4,50 €',
      },
      {
        productName: "Ben & Jerry's Cookie Dough 100ml",
        productDescription:
          'Vanille-Eiscreme mit Riesenstücken aus Plätzchenteig und leckeren kakaohaltigen Bits.',
        productPrice: '4,50 €',
      },
      {
        productName: "Ben & Jerry's Chocolate Fudge Brownie 100ml",
        productDescription:
          'Sündhaft cremige Schokoladen-Eiscreme mit saftigen Schokogebäck-Stücken.',
        productPrice: '4,50 €',
      },
    ],
  },
  {
    category: 'Desserts',
    categoryDescription: '',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Tiramisu',
        productDescription: '',
        productPrice: '3,90 €',
      },
      {
        productName: 'Pancake Chocolate Creme',
        productDescription: '',
        productPrice: '3,90 €',
      },
      {
        productName: 'Mochi Raspberry (2 Stück)',
        productDescription: 'mit Himbeer-Eiscremefüllung',
        productPrice: '3,70 €',
      },
      {
        productName: 'Mochi Chocolate (2 Stück)',
        productDescription: 'mit Schokoladen-Eiscremefüllung',
        productPrice: '3,70 €',
      },
      {
        productName: 'Mochi Grüner Tee (2 Stück)',
        productDescription: 'mit Grüner Tee-Eiscremefüllung',
        productPrice: '3,70 €',
      },
      {
        productName: 'Mochi Mango (2 Stück)',
        productDescription: 'mit Mango-Eiscremefüllung',
        productPrice: '3,70 €',
      },
      {
        productName: 'Mochi Coconut (2 Stück)',
        productDescription: 'mit Kokosnuss-Eiscremefüllung',
        productPrice: '3,70 €',
      },
      {
        productName: 'Mochi Vanilla (2 Stück)',
        productDescription: 'mit Vanille-Eiscremefüllung',
        productPrice: '3,70 €',
      },
    ],
  },
  {
    category: 'Alkoholfreie Getränke',
    categoryDescription: '',
    image:
      'https://static.thuisbezorgd.nl/images/generic/categories/1_salads/salat_salat.png',
    products: [
      {
        productName: 'Coca-Cola 0,5l (EINWEG)',
        productDescription:
          'Coca-Cola steht für einzigartigen Geschmack, Erfrischung und Momente voller Lebensfreude. Die 0,5l wiederverschließbare PET Einwegflasche - die richtige Trinkgröße für jeden Anlass.',
        productPrice: '2,90 €',
      },
      {
        productName: 'Coca-Cola 1,0l (MEHRWEG)',
        productDescription:
          'Coca-Cola steht für einzigartigen Geschmack, Erfrischung und Momente voller Lebensfreude. Die 1,0l PET Mehrwegflasche für die perfekte Erfrischung für jeden Tag - allein oder zu zweit.',
        productPrice: '3,20 €',
      },
      {
        productName: 'Coca-Cola light taste 0,5l (EINWEG)',
        productDescription:
          'Light taste: Leichter als das Original und in stylischem Design überzeugt Cola Light nicht nur die eigene Fangemeinschaft - und das komplett zucker- und kalorienfrei.',
        productPrice: '2,90 €',
      },
      {
        productName: 'Coca-Cola light taste 1,0l (MEHRWEG)',
        productDescription:
          'Light taste: Leichter als das Original und in stylischem Design überzeugt Cola Light nicht nur die eigene Fangemeinschaft - und das komplett zucker- und kalorienfrei.',
        productPrice: '3,20 €',
      },
      {
        productName: 'Fanta Orange 0,5l (EINWEG)',
        productDescription:
          'Trinke Fanta. Lebe bunter. Spritzig erfrischend begleitet die originale Fanta Orange jede Lebenssituation und macht jetzt noch mehr Spaß.',
        productPrice: '2,90 €',
      },
      {
        productName: 'Fanta Orange 1,0l (MEHRWEG)',
        productDescription:
          'Trinke Fanta. Lebe bunter. Spritzig erfrischend begleitet die originale Fanta Orange jede Lebenssituation und macht jetzt noch mehr Spaß.',
        productPrice: '3,20 €',
      },
      {
        productName: 'Mezzo Mix 0,5l (EINWEG)',
        productDescription:
          'Mixt euch eine gute Zeit mit Mezzo Mix, dem erfrischend-leckeren Kuss aus Cola und Orange.',
        productPrice: '2,90 €',
      },
      {
        productName: 'Mezzo Mix 1,0l (MEHRWEG)',
        productDescription:
          'Mixt euch eine gute Zeit mit mezzo mix, dem erfrischend-leckeren Kuss aus Cola und Orange.',
        productPrice: '3,20 €',
      },
      {
        productName: 'Sprite 0,5l (EINWEG)',
        productDescription:
          'Bist du bereit für Sprite? Die einzigartige Formel aus grünen Limetten und sonnengelben Zitronen erfrischt dich maximal.',
        productPrice: '2,90 €',
      },
      {
        productName: 'Sprite 1,0l (MEHRWEG)',
        productDescription:
          'Bist du bereit für Sprite? Die einzigartige Formel aus grünen Limetten und sonnengelben Zitronen erfrischt dich maximal.',
        productPrice: '3,20 €',
      },
      {
        productName: 'Fuze Tea Schwarzer Tee Pfirsich 0,4l (EINWEG)',
        productDescription:
          'Eine außergewöhnliche Fusion aus dem Guten des Tees und fruchtiger Pfirsich-Note.',
        productPrice: '2,90 €',
      },
      {
        productName: 'Fuze Tea Schwarzer Tee Zitrone 0,4l (EINWEG)',
        productDescription:
          'Eine außergewöhnliche Fusion aus dem Guten des Tees und fruchtiger Zitronen-Note.',
        productPrice: '2,90 €',
      },
      {
        productName: 'ViO still 0,5l (EINWEG)',
        productDescription:
          'Das stille Mineralwasser in der umweltfreundlichen 0,5l Flasche aus heimischer Quelle der Lüneburger Heide hat einen weichen Geschmack und ist außergewöhnlich leicht zu trinken.',
        productPrice: '2,90 €',
      },
      {
        productName: 'Orangina Gelb 0,25l',
        productDescription: '',
        productPrice: '2,90 €',
      },
      {
        productName: 'Orangina Rot 0,,25l',
        productDescription: '',
        productPrice: '2,90 €',
      },
      {
        productName: 'Red Bull 0,25l',
        productDescription: '',
        productPrice: '3,20 €',
      },
      {
        productName: 'Arizona Eistee Lemon 0,5l',
        productDescription: '',
        productPrice: '3,20 €',
      },
      {
        productName: 'Arizona Eistee Peach 0,5l',
        productDescription: '',
        productPrice: '3,20 €',
      },
      {
        productName: 'Arizona Eistee Blueberry White Tea 0,5l',
        productDescription: '',
        productPrice: '3,20 €',
      },
    ],
  },
];
