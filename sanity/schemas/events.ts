

export default{
    name:'events',
    type:'document',
    title:'Podujatia',
    fields: [
        {
            name:'nazov_podujatia',
            type:'object',
            title:'Názov podujatia',
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
                source:'nazov_podujatia.sk',
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
            name: 'text_podujatie',
            type: 'array',
            title: 'Text o podujatí',
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
            name: 'plagat',
            type: 'image',
            title: 'Plagát k podujatiu',
            options: {
              hotspot: true, 
            },
          },
        
        {
            name:'kde',
            type:'object',
            title:'Kde',
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
            name: 'kedy', 
            title: 'Kedy',
            type: 'date', 
            options: {
              dateFormat: 'YYYY-MM-DD', 
            },
          },
          {
            name:'cas',
            title:'Presný čas: Napíš v tvare napr. 14:00',
            type:'string'
          },
        {
            name:'vstup_bezna_cena',
            type:'string',
            title:'Vstup - bežná ena'
        },
        {
            name:'vstup_vip',
            type:'string',
            title:'Vstup - VIP'
        },
        {
            name: 'skupina_obrazkov',
            title: 'Galéria obrázkov z udalosti',
            type: 'array',
            of: [{ type: 'image' }]
           },
     
      
     
    ]
}