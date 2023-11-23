//ARRAY METHODS:
const arr = [1,2,3,4,5,6,7]
const arr1 = [8,9,10]

//push => array içine eleman ekler
//shift => bir dizinin ilk ögesini kaldırır.
//slice => bir dizideki seçili ögeleri "YENİ BİR DİZİ" olarak döndürür.
//SPREAD OPERATIONS => ...
//concat => Birleştirme işlemi yapar
//entries => [key,value] çiftlerine sahip degerler döndürür
//some => Belirli bir array içerisinde vereceğimiz koşula uyan tek bir eleman dahi bulsa true döner
//every => Dizi içerisinde vereceğimiz koşula bütün elemanların uymasını bekler.
//findIndex => Kurala uyan ilk elemanın indexini verir.
//fill => bir dizideki belirtilen ögeleri bir değerle doldurur.
//filter  => filteleme işlemleri yaparız.
//find => array içerisinde değer bulmamızı sağlar
//map => her dizi ögesi için bir işlev cagırarak "YENİ BİR DİZİ" oluşturur.
//forEach => bir dizideki her öge için bir işlev cagırır.
//join => bir diziyi dize olarak döndürür.
//lenght => arr içindeki veri sayısını verir.
//includes => bir dizi belirtilen bir değeri içeriyorsa yöntem döndürür.
//reduce => tek bir değer döndürür.işlevin birikmiş sonucu
//reverse => arrayı ters çevirir.
//sort => sıralama işlemleri yapar.
// arr.push(311)
// arr.shift()
// let s = arr.slice(0,3)
// console.log(s);
// let x = arr.concat(arr1)   
// console.log(x)
// console.log(arr)
// if(arr.some(x=>x == 3)){
//     console.log("TRUE");
// }
// console.log(arr)
// if(arr.every(x=>x == 3)){
//          console.log("TRUE");
//   }
// let i = arr.findIndex(x => x == 6)
// console.log(i)
// let i = arr.fill(1,0,2)  tek değişkenle kullanılırsa hepsini o deger yapıyor.coklu degisken ile kullanımı ise öncelikle istenen deger
// sonrasında da hangi indexten başlayıp kac tane elemanı etkilemesini istediğimiz bilgisi girilir.
// let i = arr.filter(x=>x == 3)
// console.log(i);
// let i = arr.find(x=>x <5)
// console.log(i);
// let i = arr.map(x=>x += 2)
// console.log(i);
// let i = arr.join()
// console.log(i);
// console.log(arr.includes(11));
// console.log(arr.reverse());
// console.log(arr.sort());
// let s = arr.reduce((a,b) => a*b , 1 ) // 1 dediğimiz şey başlangıç değeri DIKKAT index değil değeri.
// console.log(s);

//STRING METHODLAR:
//replace => verilen string ifadede bulunan ilk karakteri istenilen başka bir karakterle değiştirmemizi sağlar.iki parametre alır.
//replaceAll => verilen string ifadede bulunan bir veya birden çok aynı karakteri istenilen başka bir karakterle değiştirmemizi sağlar.iki parametre alır.
//substring => iki parametre alır.ilk parametreden başlayıp 2.parametreye kadar parcalanır.
//toLowerCase => verilen ifadeyi komple küçük harfe çevirir.
//toUpperCase => verilen ifadeyi komple büyük harfe çevirir.
//trim => verilen ifadede bosluk karakterini ilk gördüğü yerde siler.
//split => verilen string ifade istenen karakter görüldüğü yerlerden parcalanır ve bir dizi olarak bize döner
//indexOf => verdiğimiz karakter mevcutsa kacıncı indexde oldugu bilgisi döner mevcut degilse -1 döner.
let name = " enistu fekci"
console.log(name.replace('e','a'));
console.log(name.replaceAll('e','a'));
console.log(name.substring(0,4));
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.trim());
console.log(name.split(" ")[1]);
console.log(name.indexOf("t"));

