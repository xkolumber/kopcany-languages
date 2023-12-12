

export default{
    name:'news',
    type:'document',
    title:'Aktuality',
    fields: [
        {
            name:'nazov_aktuality',
            type:'object',
            title:'Názov aktuality',
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
                source:'nazov_aktuality.sk',
            }
        },
        {
            name:'text_aktualita',
            type:'object',
            title:'Text o aktualite',
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
            title: 'Príslušná fotka',
            options: {
              hotspot: true, 
            },
          }, 
      
     
    ]
}