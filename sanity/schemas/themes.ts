

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
          name: 'mapa_oblast',
          type: 'image',
          title: 'Súvisiaca mapa',
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
          name:'komentar_skupina_obrazkov',
          type:'string',
          title:'Komentár ku skupine obrázkov'
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
            type:'string',
            title:'Komentár ku fotke'
        },
        {
          name:'skupina_obrazkov2',
          type:'string',
          title:'Skupina obrázkov 2'
      },
      {
        name:'komentar_skupina_obrazkov2',
        type:'string',
        title:'Komentár ku skupine obrázkov 2'
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
      type:'string',
      title:'Komentár ku fotke'
  },
  {
    name:'skupina_obrazkov3',
    type:'string',
    title:'Skupina obrázkov 3'
},
{
  name:'komentar_skupina_obrazkov3',
  type:'string',
  title:'Komentár ku skupine obrázkov 3'
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
  type:'string',
  title:'Komentár ku záverečnej fotke'
},
    ]
}