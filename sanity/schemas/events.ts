

export default{
    name:'events',
    type:'document',
    title:'Podujatia',
    fields: [
        {
            name:'nazov_podujatia',
            type:'string',
            title:'Názov podujatia'
        },
        {
            name:'slug',
            type:'slug',
            title:'Slug',
            options: {
                source:'nazov_podujatia',
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
            type:'string',
            title:'Text o podujatí'
        },
        {
            name:'kde',
            type:'string',
            title:'Kde'
        },
        {
            name:'kedy',
            type:'string',
            title:'Kedy'
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