

export default{
    name:'themes',
    type:'document',
    title:'Témy',
    fields: [
        {
            name:'nazov_temy',
            type:'string',
            title:'Názov témy'
        },
        {
            name:'slug',
            type:'slug',
            title:'Slug',
            options: {
                source:'nazov_temy',
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
            type:'string',
            title:'Úvodný text'
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
            type:'string',
            title:'Pokračovanie článku'
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