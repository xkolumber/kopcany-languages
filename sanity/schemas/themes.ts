

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
          name: 'mapa_oblastt',
          type: 'image',
          title: 'Mapa',
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
        name:'komentar_skupina_obrazkov',
        type:'object',
        title:'Komentár ku skupine obrázkov',
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
            name: 'dalsia_foto',
            type: 'image',
            title: 'Ďalšia fotka',
            options: {
              hotspot: true, 
            },
          },
          {
            name:'komentar_fotka',
            type:'object',
            title:'Komentár ku fotke',
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
          name: 'skupina_obrazkov2',
          title: 'Skupina obrázkov 2',
          type: 'array',
          of: [{ type: 'image' }]
         },
         {
          name:'komentar_skupina_obrazkov2',
          type:'object',
          title:'Komentár ku skupine obrázkov 2',
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
      name: 'dalsia_foto2',
      type: 'image',
      title: 'Ďalšia fotka',
      options: {
        hotspot: true, 
      },
    },
    {
      name:'komentar_fotka2',
      type:'object',
      title:'Komentár ku fotke',
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
    name: 'skupina_obrazkov_3',
    title: 'Skupina obrázkov 3',
    type: 'array',
    of: [{ type: 'image' }]
   },
   {
    name:'komentar_skupina_obrazkov3',
    type:'object',
    title:'Komentár ku skupine obrázkov 3',
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
  name: 'dalsia_foto3',
  type: 'image',
  title: 'Záverečná fotka',
  options: {
    hotspot: true, 
  },
},
{
  name:'komentar_fotka3',
  type:'object',
  title:'Komentár ku záverečnej fotke',
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
    ]
}