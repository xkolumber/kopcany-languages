

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
            name:'text_podujatie',
            type:'object',
            title:'Text o podujatí',
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
     
      
     
    ]
}