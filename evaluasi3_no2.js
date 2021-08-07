const asalSantri = {
Sidik : "Lampung", 
Wandi : "Prabumulih", 
Rahmad : "Medan", 
Usamah : "Ceribon", 
"Syofyan" : "Purwokerto", 
"Aldi" : "Kendari", 
"Kardi" : "Lombok" }

const {Sidik = Sidik, Wandi = Wandi, Rahmad = Rahmad, Usamah = Usamah,...rest } = asalSantri
console.log(Sidik, Wandi, Rahmad, Usamah);
console.log(rest);