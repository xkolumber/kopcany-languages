

export default{
    name:'baroque',
    type:'document',
    title:'Zaži barok',
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
            title: 'Opis projektu',
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
                    type: 'array',
                    title: 'Content',
                    of: [{ type: 'block' }], 
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
            name:'text_pred_mapou',
            type:'object',
            title:'Text pred mapou',
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
            name: 'mapa',
            type: 'image',
            title: 'Mapa',
            options: {
              hotspot: true, 
            },
          },
          {
            name:'nadpis_sekcie1',
            type:'object',
            title:'Nadpis sekcie',
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
            name: 'popis_sekcie1',
            type: 'array',
            title: 'Popis sekcie',
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
                    type: 'array',
                    title: 'Content',
                    of: [{ type: 'block' }], 
                  },
                ],
              },
            ],
          },
          {
            name: 'skupina_obrazkov',
            title: 'Skupina obrázkov',
            type: 'array',
            of: [{ type: 'image' }]
           },
           {
            name:'nadpis_sekcie2',
            type:'object',
            title:'Nadpis sekcie 2',
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
            name: 'popis_sekcie2',
            type: 'array',
            title: 'Popis sekcie 2',
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
                    type: 'array',
                    title: 'Content',
                    of: [{ type: 'block' }], 
                  },
                ],
              },
            ],
          },
          {
            name: 'skupina_obrazkov2',
            title: 'Skupina obrázkov',
            type: 'array',
            of: [{ type: 'image' }]
           },
           {
            name:'nadpis_sekcie3',
            type:'object',
            title:'Nadpis sekcie 3',
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
            name: 'popis_sekcie3',
            type: 'array',
            title: 'Popis sekcie 3',
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
                    type: 'array',
                    title: 'Content',
                    of: [{ type: 'block' }], 
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
            name: 'skupina_obrazkov3',
            title: 'Skupina obrázkov',
            type: 'array',
            of: [{ type: 'image' }]
           },
          
     
    ]
}