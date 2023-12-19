

export default{
    name:'homepage',
    type:'document',
    title:'Úvodná stránka',
    fields: [
        {
            name: 'skupina_obrazkov',
            title: 'Slider fotiek',
            type: 'array',
            of: [{ type: 'image' }]
           },
           {
            name: 'youtube_link',
            type: 'string',
            title: 'Youtube video URL',
          },
          
          {
            name:'text_ku_mape',
            type:'object',
            title:'Text ku mape',
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
            name:'text_ku_temam',
            type:'object',
            title:'Text ku témam',
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
            name:'text_ku_udalostiam',
            type:'object',
            title:'Text ku udalostiam',
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
            name:'text_o_projekte',
            type:'object',
            title:'Text o projekte',
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
            name:'text_ku_archivu',
            type:'object',
            title:'Text ku archívu',
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