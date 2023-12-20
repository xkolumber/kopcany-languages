

export default{
    name:'about_project',
    type:'document',
    title:'O projekte',
    fields: [
        {
            name:'nazov_temy',
            type:'object',
            title:'Názov témy',
            fields:[
                {
                    title:'Slovensky',
                    name:'sk',
                    type:'string'
                },
                {
                    title:'Anglicky',
                    name:'en',
                    type:'string'
                },
                {
                    title:'Česky',
                    name:'cz',
                    type:'string'
                }
               
            ]
        },
        {
            name:'slug',
            type:'slug',
            title:'Slug',
            options: {
                source: 'nazov_temy.sk', // Use the Slovak name as the source
              }
        },
        {
          name:'financovanie_text',
          type:'object',
          title:'Financovanie - text',
          fields:[
              {
                  title:'Slovensky',
                  name:'sk',
                  type:'string'
              },
              {
                  title:'Anglicky',
                  name:'en',
                  type:'string'
              },
              {
                  title:'Česky',
                  name:'cz',
                  type:'string'
              }
             
          ]
      },
        {
            name: 'titulna_foto',
            type: 'image',
            title: 'Titulná fotka',
            options: {
              hotspot: true, 
            },
          },
          {
            name: 'kresleny_obrazok',
            type: 'image',
            title: 'Kreslený obrázok',
            options: {
              hotspot: true, 
            },
          },
        {
            name:'uvodny_text',
            type:'object',
            title:'Opis projektu',
            fields:[
                {
                    title:'Slovensky',
                    name:'sk',
                    type:'string'
                },
                {
                    title:'Anglicky',
                    name:'en',
                    type:'string'
                },
                {
                    title:'Česky',
                    name:'cz',
                    type:'string'
                }
               
            ]
        },
        {
          name: 'youtube_link',
          type: 'string',
          title: 'Youtube video URL',
        },
       
        {
            name: 'mapa',
            type: 'image',
            title: 'Mapa',
            options: {
              hotspot: true, 
            },
          },
          {
            name:'projekt_ciel',
            type:'object',
            title:'Cieľ projektu',
            fields:[
                {
                    title:'Slovensky',
                    name:'sk',
                    type:'string'
                },
                {
                    title:'Anglicky',
                    name:'en',
                    type:'string'
                },
                {
                    title:'Česky',
                    name:'cz',
                    type:'string'
                }
               
            ]
        },
        {
          name:'projekt_vysledok',
          type:'object',
          title:'Výsledok projektu',
          fields:[
              {
                  title:'Slovensky',
                  name:'sk',
                  type:'string'
              },
              {
                  title:'Anglicky',
                  name:'en',
                  type:'string'
              },
              {
                  title:'Česky',
                  name:'cz',
                  type:'string'
              }
             
          ]
      },
      {
        name: 'projekt_aktivity',
        type: 'array',
        title: 'Projektové aktivity Vedúceho partnera',
        of: [
          {
            type: 'object',
            name: 'activity',
            title: 'Activity',
            fields: [
              {
                name: 'language',
                type: 'string',
                title: 'Jazyk',
                options: {
                  list: [
                    { title: 'Slovensky', value: 'sk' },
                    { title: 'Anglicky', value: 'en' },
                    { title: 'Česky', value: 'cz' },
                    // Add other languages as needed
                  ],
                },
              },
              {
                name: 'content',
                type: 'array', // Define content as an array of blocks
                title: 'Content',
                of: [{ type: 'block' }], // Array of blocks for content
              },
            ],
          },
        ],
      },
      {
        name: 'projekt_aktivity_hlavne',
        type: 'array',
        title: 'Projektové aktivity Hlavného cezhraničného partnera:',
        of: [
          {
            type: 'object',
            name: 'activity',
            title: 'Activity',
            fields: [
              {
                name: 'language',
                type: 'string',
                title: 'Jazyk',
                options: {
                  list: [
                    { title: 'Slovensky', value: 'sk' },
                    { title: 'Anglicky', value: 'en' },
                    { title: 'Česky', value: 'cz' },
                    // Add other languages as needed
                  ],
                },
              },
              {
                name: 'content',
                type: 'array', // Define content as an array of blocks
                title: 'Content',
                of: [{ type: 'block' }], // Array of blocks for content
              },
            ],
          },
        ],
      },
    
  {
    name: 'three_d_foto',
    type: 'image',
    title: '3d fotka',
    options: {
      hotspot: true, 
    },
  },
          {
            name: 'skupina_obrazkov',
            title: 'Skupina obrázkov',
            type: 'array',
            of: [{ type: 'image' }]
           },
    {
            name: 'rozpocet',
            type: 'array',
            title: 'Rozpočet projektu:',
            of: [
              {
                type: 'object',
                name: 'activity',
                title: 'Rozpočet',
                fields: [
                  {
                    name: 'language',
                    type: 'string',
                    title: 'Jazyk',
                    options: {
                      list: [
                        { title: 'Slovensky', value: 'sk' },
                        { title: 'Anglicky', value: 'en' },
                        { title: 'Česky', value: 'cz' },
                        // Add other languages as needed
                      ],
                    },
                  },
                  {
                    name: 'content',
                    type: 'array', // Define content as an array of blocks
                    title: 'Content',
                    of: [{ type: 'block' }], // Array of blocks for content
                  },
                ],
              },
            ],
          },
     
    ]
}