

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
            title:'Úvodný text',
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
            name: 'foto_stred_clanku',
            type: 'image',
            title: 'Fotka v strede článku',
            options: {
              hotspot: true, 
            },
          },
        {
            name:'pokracovanie_text',
            type:'object',
            title:'Pokračovanie článku',
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
            name:'skupina_obrazkov',
            type:'string',
            title:'Skupina obrázkov'
        },
        {
            name: 'zaverecna_foto',
            type: 'image',
            title: 'Záverečná fotka',
            options: {
              hotspot: true, 
            },
          },
    ]
}