const data = [
    { name: "AGROPECUÁRIA AGILE EIRELLI LTDA", vehicles: [
        { fleet: "25037893", plate: "RGC8B96" }, 
        { fleet: "25047893", plate: "QOX6J06" }, 
        { fleet: "25057893", plate: "RTO6H20" }, 
        { fleet: "2507893", plate: "BCQ5F69" }], 
        supplies: [] },
    { name: "AGROPECUÁRIA AGROLEVA LTDA", vehicles: [
        { fleet: "2502756", plate: "PUS6176" }, 
        { fleet: "2504756", plate: "HNE2B83" }, 
        { fleet: "2505756", plate: "MKK0543" }], 
        supplies: [] },
    { name: "AGROPECUÁRIA CARVALHO ALZAMORA", vehicles: [
        { fleet: "25028254", plate: "PXJ4427" }], 
        supplies: [] },
    { name: "AGROPECUÁRIA FERCI LTDA. (FERNANDO RAMOS)", vehicles: [
        { fleet: "250113684", plate: "QUL3955" }, 
        { fleet: "250213684", plate: "HMQ1G98" }, 
        { fleet: "250313684", plate: "RVB7H39" }, 
        { fleet: "25013684", plate: "RTA7A00" }], 
        supplies: [] },
    { name: "AGROPECUÁRIA SEVERO LTDA", vehicles: [
        { fleet: "2503404", plate: "HHG7809" }, 
        { fleet: "2504404", plate: "QUU2D71" }], 
        supplies: [] },
    { name: "AGROTÉCNICA INDUSTRIAL TORRES LTDA", vehicles: [
        { fleet: "25016677", plate: "HLG6283" }], 
        supplies: [] },
    { name: "ALEXANDRE CARVALHO ALZAMORA", vehicles: [
        { fleet: "25023018", plate: "GMW1436" }], 
        supplies: [] },
    { name: "BRUNO THIAGO DE CARVALHO", vehicles: [
        { fleet: "25021870", plate: "QPO4D95" },
        { fleet: "2501870", plate: "WWH1I87" }], 
        supplies: [] },
    { name: "CARLOS ALBERTO LEITE CARDOSO", vehicles: [
        { fleet: "250112396", plate: "HLO7D63" }], 
        supplies: [] },
    { name: "DEOLINO FERREIRA DE CARVALHO", vehicles: [
        { fleet: "25017314", plate: "GYQ6686" }, 
        { fleet: "25027314", plate: "QNR2961" }, 
        { fleet: "25037314", plate: "HED8917" }, 
        { fleet: "25047314", plate: "HTI2I12" }], 
        supplies: [] },
    { name: "ELAINE DE CARVALHO", vehicles: [
        { fleet: "25031424", plate: "QXR4C44" }], 
        supplies: [] },
    { name: "FERNANDO CARVALHO NASCIMENTO", vehicles: [
        { fleet: "29019577", plate: "OLU9457" }], 
        supplies: [] },
    { name: "FRANCISCO DE ASSIS CAR. JR", vehicles: [
        { fleet: "25031026", plate: "SHC7I90" }], 
        supplies: [] },
    { name: "FRANCISCO JOSÉ MARTINS DE CARVALHO", vehicles: [
        { fleet: "25011034", plate: "QQI6060" }], 
        supplies: [] },
    { name: "GLÓRIA DE SÃO SIMÃO", vehicles: [
        { fleet: "2514262", plate: "QNK6853" }], 
        supplies: [] },
    { name: "GR ANDRADE EMPREENDIMENTOS AGROPEC LTDA", vehicles: [
        { fleet: "250312397", plate: "PGN3A33" }], 
        supplies: [] },
    { name: "IRÊ ISOLDINO DA SILVA BORGES", vehicles: [
        { fleet: "25011893", plate: "QNQ9H73" }, 
        { fleet: "250110027", plate: "SHG4J09" }, 
        { fleet: "250311893", plate: "QPH3139" },
        { fleet: "250411893", plate: "QWU1501" }], 
        supplies: [] },
    { name: "JAR ADMINISTRAÇÃO DE BENS EIRELI", vehicles: [
        { fleet: "25028141", plate: "PWU0J74" }], 
        supplies: [] },
    { name: "JEMA ADMINISTRAÇÃO DE BENS LTDA", vehicles: [
        { fleet: "250211323", plate: "FDU8862" }], 
        supplies: [] },
    { name: "JESUS ADELUNGUE DOMINGOS", vehicles: [
        { fleet: "25012495", plate: "FHN2I12" }], 
        supplies: [] },
    { name: "JOÃO JOSÉ CONSOLAÇÃO DE ANDRADE", vehicles: [
        { fleet: "2511776", plate: "PVJ4459" }, 
        { fleet: "25011776", plate: "HMQ3261" }], 
        supplies: [] },
    { name: "FAZENDA AMÉRICA LTDA", vehicles: [
        { fleet: "213188", plate: "GBV8C10" }, 
        { fleet: "113188", plate: "SYE0D34" }], 
        supplies: [] },
    { name: "JOSÉ BENEDITO MAGALHÃES", vehicles: [
        { fleet: "25014553", plate: "PVS1875" }], 
        supplies: [] },
    { name: "JÚLIA CARDOSO SILVA BORGES", vehicles: [
        { fleet: "12035", plate: "SHZ4D67" }], 
        supplies: [] },
    { name: "KONRAD PASSOS E SILVA", vehicles: [
        { fleet: "25017127", plate: "GYX6430" }, 
        { fleet: "25027127", plate: "HJG7A39" }], 
        supplies: [] },
    { name: "LAURA MARIA DE CARVALHO", vehicles: [
        { fleet: "25012102", plate: "PVG4510" }], 
        supplies: [] },
    { name: "LEONARDO CAMPOS COSTA", vehicles: [
        { fleet: "25019740", plate: "HNE2B83" }], 
        supplies: [] },
    { name: "LUIS EUSTÁQUIO CHAVES", vehicles: [
        { fleet: "250113512", plate: "QQV3G69" }], 
        supplies: [] },
    { name: "OSCAR VON BENTZENN R. NETO", vehicles: [
        { fleet: "2501360", plate: "GYX6674" }, 
        { fleet: "2503360", plate: "QPU4J76" }], 
        supplies: [] },
    { name: "PEDRO PAULO DE CARVALHO", vehicles: [
        { fleet: "25025731", plate: "PUZ9983" }, 
        { fleet: "25035731", plate: "HKF8640" }], 
        supplies: [] },
    { name: "RICARDO ANDRADE E ROSALCA E. A. LTDA", vehicles: [
        { fleet: "2501782", plate: "OOW9893" }, 
        { fleet: "2502782", plate: "PUK1868" }, 
        { fleet: "2503782", plate: "PZKOG52" }, 
        { fleet: "2504782", plate: "PVZ4784" }, 
        { fleet: "2505782", plate: "OWS8146" }], 
        supplies: [] },
    { name: "TERESINHA DE LOURDES FARIA BRUNO", vehicles: [
        { fleet: "2501036", plate: "NND5H38" }], 
        supplies: [] },
    { name: "VITÓRIO URIAS CHAVES", vehicles: [
        { fleet: "25017187", plate: "OQU5352" }], 
        supplies: [] },
    { name: "WILSON CASTELAR BRITO", vehicles: [
        { fleet: "25021376", plate: "HLA1531" }], 
        supplies: [] },
    { name: "RICARDO MÁQUINAS AGRÍCOLAS LTDA", vehicles: [
        { fleet: "290914145", plate: "HLB3B86" }, 
        { fleet: "114145", plate: "NULL" }, 
        { fleet: "214145", plate: "NULL" }, 
        { fleet: "314145", plate: "OQC4C79" }], 
        supplies: [], 
        third: true },
    { name: "AVI ROCHA SERVIÇOS AGRÍCOLAS LTDA", vehicles: [
        { fleet: "114424", plate: "FKX5I46" }, 
        { fleet: "1014424", plate: "HTF6D16" }, 
        { fleet: "214424", plate: "NULL" }, 
        { fleet: "314424", plate: "NULL" }, 
        { fleet: "414424", plate: "NULL" }, 
        { fleet: "514424", plate: "NULL" }, 
        { fleet: "614424", plate: "NULL" },
        { fleet: "914424", plate: "NULL" },], 
        supplies: [], 
        third: true },
    { name: "C2 MÁQUINAS E ENGENHARIA LTDA", vehicles: [
        { fleet: "114073", plate: "NULL" }, 
        { fleet: "114098", plate: "NULL" }, 
        { fleet: "214098", plate: "NULL" }], 
        supplies: [],
        third: true },
    { name: "VALENCE AGRO LTDA", vehicles: [
        { fleet: "214641", plate: "NULL" }], 
        supplies: [], 
        third: true },
    { name: "ELETROMARZINHO INSTALAÇÃO E MANUTENÇÃO", vehicles: [
        { fleet: "950724", plate: "NULL" }], 
        supplies: [], 
        third: true },
    { name: "LL DA SILVA EQUIPAMENTOS INDUSTRIAIS", vehicles: [
        { fleet: "113351", plate: "DWG7H41" }], 
        supplies: [], 
        third: true },
    { name: "POLÍCIA CIVIL", vehicles: [
        { fleet: "2527190", plate: "SYZ0F92" }, 
        { fleet: "2526190", plate: "SYZ0F94" }], 
        supplies: [], 
        third: true },
    { name: "POLÍCIA MILITAR", vehicles: [
        { fleet: "2519190", plate: "QXW2H60" }, 
        { fleet: "2520190", plate: "QXW3C06" }, 
        { fleet: "2510190", plate: "QMV2129" }], 
        supplies: [], 
        third: true },
    { name: "POLÍCIA AMBIENTAL", vehicles: [
        { fleet: "2501190", plate: "PXM4771" }, 
        { fleet: "2522190", plate: "RTP8C12" }], 
        supplies: [], 
        third: true },
    { name: "VIANA PAIVA", vehicles: [
        { fleet: "491502", plate: "NULL" }, 
        { fleet: "491602", plate: "NULL" }, 
        { fleet: "491702", plate: "NULL" }, 
        { fleet: "491902", plate: "NULL" }, 
        { fleet: "492002", plate: "NULL" }, 
        { fleet: "492102", plate: "NULL" }, 
        { fleet: "492202", plate: "NULL" }, 
        { fleet: "492402", plate: "NULL" }, 
        { fleet: "492502", plate: "NULL" }, 
        { fleet: "492602", plate: "NULL" },], 
    supplies: [], 
    third: true },
    { name: "FORÇA VERDE", vehicles: [
        { fleet: "990125", plate: "FKQ4594" }, 
        { fleet: "990225", plate: "TDV5D54" },
        { fleet: "990325", plate: "TDV5D38" },
        { fleet: "990425", plate: "TDP2J32" },
        { fleet: "990525", plate: "QNI1I03" },
        { fleet: "990625", plate: "FUI4I03" },
        { fleet: "990725", plate: "OQA0C24" },
        { fleet: "990825", plate: "TEG0A65" },
        { fleet: "990925", plate: "FVW0B73" },
        { fleet: "991025", plate: "BBM1F39" },
        { fleet: "991125", plate: "FUF7D24" },
        { fleet: "991225", plate: "TCU0I75" },
        { fleet: "991325", plate: "TDW0A06" },
        { fleet: "991425", plate: "DPC7J89" },
        { fleet: "991525", plate: "TDV5D45" },
        { fleet: "991625", plate: "EOD7B32" },
        { fleet: "991725", plate: "TCC7I01" },
        { fleet: "991825", plate: "APQ3459" },
        { fleet: "991925", plate: "TCT2G06" },
        { fleet: "992025", plate: "OXY5C96" },], 
    supplies: [], 
    third: true },
    { name: "ALIST LOCACAO DE MAQ., EQUIP. E SERV. AGRICOLAS LTDA ", vehicles: [
        { fleet: "970125", plate: "NULL" }, 
        { fleet: "970225", plate: "PQM1F39" },], 
    supplies: [], 
    third: true },
    { name: "PRODUTIVA AERO AGRICOLA", vehicles: [
        { fleet: "513471", plate: "EYP4332" }, 
        { fleet: "613471", plate: "NULL" }, 
        { fleet: "713471", plate: "SUI0J11" },  
        { fleet: "813471", plate: "NULL" },], 
    supplies: [], 
    third: true },
];

export default data;
