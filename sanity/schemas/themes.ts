

export default{
    name:'themes',
    type:'document',
    title:'Témy',
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
                source:'nazov_temy.sk',
            }
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
            name: 'uvodny_text',
            type: 'array',
            title: 'Úvodný text',
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
            name: 'youtube_link',
            type: 'string',
            title: 'Youtube video URL',
          },
          {
            name: 'pokracovanie_text',
            type: 'array',
            title: 'Pokračovanie článku',
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
          name: 'mapa_oblastt',
          type: 'image',
          title: 'Mapa',
          options: {
            hotspot: true, 
          },
      },
      {
        name: 'komentar_ku_mape',
        type: 'array',
        title: 'Komentár ku mape',
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
        name: 'three_d_photo',
        type: 'image',
        title: '3D foto',
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
        name: 'komentar_skupina_obrazkov',
        type: 'array',
        title: 'Komentár ku skupine obrázkov',
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
            name: 'dalsia_foto',
            type: 'image',
            title: 'Ďalšia fotka',
            options: {
              hotspot: true, 
            },
          },
          {
            name: 'komentar_fotka',
            type: 'array',
            title: 'Komentár ku fotke',
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
          name: 'skupina_obrazkov2',
          title: 'Skupina obrázkov 2',
          type: 'array',
          of: [{ type: 'image' }]
         },
         {
            name: 'komentar_skupina_obrazkov2',
            type: 'array',
            title: 'Komentár ku skupine obrázkov 2',
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
      name: 'dalsia_foto2',
      type: 'image',
      title: 'Ďalšia fotka',
      options: {
        hotspot: true, 
      },
    },
    {
        name: 'komentar_fotka2',
        type: 'array',
        title: 'Komentár ku fotke',
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
    name: 'skupina_obrazkov_3',
    title: 'Skupina obrázkov 3',
    type: 'array',
    of: [{ type: 'image' }]
   },
   {
    name: 'komentar_skupina_obrazkov3',
    type: 'array',
    title: 'Komentár ku skupine obrázkov 3',
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
  name: 'dalsia_foto3',
  type: 'image',
  title: 'Záverečná fotka',
  options: {
    hotspot: true, 
  },
},
{
    name: 'komentar_fotka3',
    type: 'array',
    title: 'Komentár ku záverečnej fotke',
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