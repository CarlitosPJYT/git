const dip = [
     {
          Author : "Hector Lavoe",
          Song : "Simon the great man",
          Views : 448
     }
]

const music = dip.find(item => {
     return item.Author === 'Hector Lavoe'
})
prompt(music)

const IVA = dip.map(item => {
     item.Views *= 1.2
     return item
})
if (true){
     console.log(dip)
}

const sound = dip.filter(item => {
     return item.Song === 'Simon the great man'
})
setTimeout(() => {
     alert(sound)
}, 5000);