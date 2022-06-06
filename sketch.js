function setup() {
  createCanvas(1600, 2700);
}

let dataJenisKelamin;
let urlJenisKelamin = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSK30NpUcFsQq1vSeDdJ3YlZgJAqWD7ShsbudR6W7NwF_qmG8ybzgerUceQVqbQdQcJx5mcewjdYtN/pub?output=csv"

let dataPenganutAgama;
let urlPenganutAgama = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRHwdQRYvKI2kpQmgVdC5wLyp_32kMs2vj4Dx0D_iaXo4waWHRai6UqMKoXgIZoUxzFE20Fb_4Tl-zG/pub?output=csv"

function preload() {
  dataJenisKelamin = loadTable(urlJenisKelamin, 'csv', 'header');
  dataPenganutAgama = loadTable(urlPenganutAgama, 'csv', 'header');
  organisasi = loadImage('organisasi.png');
  peta = loadImage('peta.jpeg');
  dasar = loadImage('dasar.jpeg');
  logokab = loadImage('logokab.png');
}

function draw() {
  background(240);

  //gambar background
  image(dasar,0,0,1600,2800)
  //gambar peta
   textSize(20)
  fill('orange')
  textAlign()
  textFont("Algerian");
  text("Peta Administrasi Desa Gedung Harapan",1265,1150)
  image(peta,1020,1200,500,400)
  
  // Deskripsi 
  fill('white')
  textFont('Algerian')
  textSize(40)
  text("Profil Desa Gedung Harapan", 770, 1850)
  textSize(16)
   text("Desa Gedung Harapan merupakan salah satu desa yang masuk di dalam wilayah administratif Kecamatan Jati Agung, Kabupaten Lampung Selatan.", 700,1900)
    text("Desa Gedung Harapan ini sekarang mempunyai lokasi yang cukup alternatif ke TOL, Pelabuhan, dan Batas Kabupaten Lampung.", 720, 1940)
  text("Walau masih terbilang jauh dari jalan besar, tetapi sebenarnya bagi warga Lampung Timur dari Sukadana dan menuju arah Jalan Ir. Sutami Pugung Raharjo",700,1980)
       text("jalur Desa Gedung Harapan merupakan akses menuju arah Kota Baru yang sekarang dekat dengan kampus Institut Teknologi Sumatera", 700, 2020)
  text("Kantor Polisi Lampung dan dekat untuk pergi ke pusat kota yaitu Bandar Lampung. ",710,2060)
   //gambar struktur organisasi
  image(organisasi,300,2100,1000,500)
  //gambar logo kabupaten
  image(logokab,320,1770,90,100)
  
  // Diagram Data Penduduk
  line(60, 450, 450, 450)
  line(60, 450, 60, 100)
  
  textFont("Georgia");
  //2020 
  fill(184,134,11);
  rect(65, 270, 55, 180);
  //2021 
  fill(85,107,47);
  rect(150, 215, 55, 235);
  //2022
  fill(0,128,128);
  rect(240, 115, 55, 336);

  textSize (20); 
  fill(139,69,19);
  textFont('Algerian');
  text('Data Penduduk Tahunan Desa Gedung Harapan',320,55);
  {
    textSize (12); 
    fill('white');
    textAlign(CENTER);
    text('2020', 90, 470);
    text('2021', 180,470);
    text('2022', 270,470);
    
    //jumlah data
    fill ('white');
    text(0,50,450);
    text(100,48, 390);
    text(500,48, 335)
    text(600,45, 280);
    text(650,45, 225)
    text(700,45, 170)
    text(750,45, 120)
}
  // Diagram Data Pendidikan
  {
  line(60, 1000, 600, 1000)
  line(60, 1000, 60, 620)
    
  //TK
  fill(184,134,11);
  rect(65,845,55,155);
  //SD
  fill(0,128,128);
  rect(150, 700, 55, 300);
  //SMP
  fill(85,107,47);
  rect(258, 800, 55, 200);
  // SMA
  fill(160,82,45);
  rect(380, 845, 55, 155);
  //KULIAH
  fill(128,0,0);
  rect(510, 900, 55, 100);
}
  textSize (22); 
  fill(139,69,19);
  textFont('Algerian');
  text('Data Pendidikan Desa Gedung Harapan',330,565);
  {
    textSize (12); 
    fill('white');
    textAlign(CENTER);
    text('TK', 90, 1030);
    text('SD', 180,1030);
    text('SMP', 285,1030);
    text('SMA', 410,1030);
    text('Perguruan Tinggi', 540,1030);
    
    //jumlah data
    fill ('white');
    text(0,50,1000);
    text(5,48, 950);
    text(10,48, 900)
    text(15,45, 850);
    text(20,45, 800);
    text(50,45, 750);
    text(70,45, 700);
  }
  
  // Diagram Data Pekerjaan
  {
  line(60, 1600, 600, 1600)
  line(60, 1600, 60, 1200)
  //Petani
  fill(119,136,153);
  rect(65, 1265, 55, 335);
  //Peternak
  fill(0,128,128);
  rect(150, 1415, 55, 185);
  //Wiraswasta
  fill(85,107,47);
  rect(249, 1445, 55, 155);
  //PNS
  fill(184,134,11);
  rect(340, 1490, 55, 110);
  //Buruh
  fill(128,0,0);
  rect(430, 1520, 55, 80);
}
  
  textSize (22); 
  fill(139,69,19);
  textFont('Algerian');
  text('Data Pekerjaan Penduduk Desa Gedung Harapan',375,1150);
  
  {
    textSize (14); 
    fill('white');
    textAlign(CENTER);
    text('Petani', 90, 1620);
    text('Peternak', 180,1620);
    text('Wiraswasta', 280,1620);
    text('PNS', 370,1620);
    text('Buruh', 460,1620);
    
    //jumlah data
    fill ('white');
    text(0,50,1600);
    text(10,48, 1550);
    text(20,48, 1500)
    text(50,45, 1450);
    text(100,45, 1400);
    text(200,45, 1350);
    text(400,46, 1300);
    text(500,45, 1250);
    
  }  
  angles = dataJenisKelamin.getColumn("JK")
  pieChart(230, angles);
}

  function pieChart(diameter, dataJenisKelamin){
  let lastAngle = 2;
  var color =  ['cyan','salmon'];
  for (var i = 0; i < dataJenisKelamin.length; i++) {
    fill(color[i])
    arc(
      1250,230,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles[i])
    );
    lastAngle += radians(angles[i]);
  }
 fill('white')
  //text
  textSize(15)
  textFont("Algerian");
  text("Laki-Laki                      = 328",1250,400)
  text("Perempuan                      = 322",1245,430)
  
  
  textSize(20)
  fill('orange')
  textAlign()
  textFont("Algerian");
  text("DATA JENIS KELAMIN DESA GEDUNG HARAPAN",1270,55)

  
  //penanda warna
  fill('cyan') ;
  ellipse(1265,395,10,10);
  fill('salmon') ;
  ellipse(1265,425,10,10);
    
angles = dataPenganutAgama.getColumn("Agama")
  pieChart(240, angles);

function pieChart(diameter, dataPenganutAgama) {
  let lastAngle = 0;
  var color =  ['yellowgreen'];
  for (var i = 0; i < dataPenganutAgama.length; i++) {
    fill(color[i])
    ellipse(1300,750,220,210);
  }
 fill('white')
  //text
  textSize(20)
  textFont("Algerian");
  text("Islam                      = 750",1300,930)

  
  textSize(20)
  fill('orange')
  textAlign()
  textFont("Algerian");
  text("DATA PENGANUT AGAMA DESA GEDUNG HARAPAN",1280,555)
  textSize(18)
  fill(238,232,170);
  textFont('Times New Roman');
  text("Semua Penduduk Desa Gedung Harapan Beragama Islam", 1300,1000)

  //penanda warna
  fill('yellowgreen') ;
  ellipse(1305,925,10,10);
}
  }