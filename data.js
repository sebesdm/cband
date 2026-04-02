// C-Band Satellite & Commercial Data

// Source: OnSat Magazine, January 24, 1994
const satellites = [
    {
        name: 'Spacenet 2', short: 'S2', pos: 69.0,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:null },
            { num:2,  freq:3740, pol:'V', name:'GEMS TV', color:'#240828', accent:'#ff44cc', textColor:'#fff', program:'SPANISH PROGRAMMING', type:'entertainment', audio:'6.80', stereo:true, tagline:'Now NBC Universo', videos:[{id:'cRYjMch8edY',duration:2480}] },
            { num:3,  freq:3760, pol:'H', name:'C-SPAN / NASA Worldnet', color:'#141428', accent:'#6666aa', textColor:'#ddd', program:'DEUTSCHE WELLE', type:'educational', audio:'6.20', stereo:false, videos:[{id:'TkjtnteqL64',start:0,end:10293}] },
            { num:4,  freq:3780, pol:'V', name:'Sur Canal de Canales', color:'#240828', accent:'#ff44cc', textColor:'#fff', program:'SPANISH PROGRAMMING', type:'entertainment', audio:'6.80', stereo:false, videos:[{id:'S4TJdkiD3RE',duration:3538,start:2000}] },
            { num:5,  freq:3800, pol:'H', name:null },
            { num:6,  freq:3820, pol:'V', name:null },
            { num:7,  freq:3840, pol:'H', name:'Main Street TV', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'LOCAL PROGRAMMING', type:'entertainment', audio:'6.20', stereo:false, videos:[{id:'SbPHqhlhyG4',duration:257}] },
            { num:8,  freq:3860, pol:'V', name:null },
            { num:9,  freq:3880, pol:'H', name:'NASA TV', color:'#000022', accent:'#4488cc', textColor:'#fff', program:'WORLDNET', type:'educational', audio:'6.80', stereo:false, tagline:'NASA Television', videos:[{id:'4yWOK1Ib4dI',duration:8233,start:2000},{id:'TUBKSq0WYoA',duration:712}] },
            { num:10, freq:3900, pol:'V', name:'Eco / Galavision', color:'#240828', accent:'#ff44cc', textColor:'#fff', program:'NOTICIAS', type:'entertainment', audio:'6.80', stereo:true, videos:[{id:'cRYjMch8edY',duration:2480,start:800}] },
            { num:11, freq:3920, pol:'H', name:'Canal de Noticias', color:'#240828', accent:'#cc44cc', textColor:'#fff', program:'SPANISH NEWS', type:'news', audio:'6.80', stereo:false, videos:[{id:'cRYjMch8edY',duration:2480,start:1500}] },
            { num:12, freq:3940, pol:'V', name:null },
            { num:13, freq:3960, pol:'H', name:null },
            { num:14, freq:3980, pol:'V', name:null },
            { num:15, freq:4000, pol:'H', name:null },
            { num:16, freq:4020, pol:'V', name:null },
            { num:17, freq:4040, pol:'H', name:'Telemundo Alt', color:'#240828', accent:'#ff44cc', textColor:'#fff', program:'TELEMUNDO', type:'entertainment', audio:'6.80', stereo:true, videos:[{id:'S4TJdkiD3RE',duration:3538}] },
            { num:18, freq:4060, pol:'V', name:null },
            { num:19, freq:4080, pol:'H', name:null },
            { num:20, freq:4100, pol:'V', name:'AFRTS', scrambled:true, color:'#0a0a1a', accent:'#4466cc', textColor:'#fff', program:'ARMED FORCES NETWORK', type:'network', audio:'6.80', stereo:false },
            { num:21, freq:4120, pol:'H', name:'Cornerstone TV', color:'#141428', accent:'#8888cc', textColor:'#fff', program:'WPCB PITTSBURGH', type:'religious', audio:'6.20', stereo:false, videos:[{id:'ko0rldI_880',duration:10667,start:3000}] },
            { num:22, freq:4140, pol:'V', name:null },
            { num:23, freq:4160, pol:'H', name:null },
            { num:24, freq:4180, pol:'V', name:null },
        ]
    },
    {
        name: 'Satcom F2R', short: 'F2', pos: 72.0,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:'Arab Network', color:'#0a0a1a', accent:'#44aacc', textColor:'#fff', program:'ARABIC PROGRAMMING', type:'entertainment', audio:'6.80', stereo:false, tagline:'M-Thu 5PM-6AM ET', videos:[{id:'aQpaB9jmNCE',start:0,end:3538}] },
            { num:2,  freq:3740, pol:'V', name:'WRAL Raleigh CBS', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'CBS NEWS', type:'network', audio:'6.80', stereo:true, tagline:'PT24', videos:[{id:'cfgi_H10lMM',duration:3816,start:600}] },
            { num:3,  freq:3760, pol:'H', name:'Outdoor Channel', color:'#0a1a0a', accent:'#44aa44', textColor:'#fff', program:'OUTDOOR ADVENTURES', type:'entertainment', audio:'6.80', stereo:true, videos:[{id:'SbGpCOa3Om8',duration:3626},{id:'4pAiM83kyP4',duration:1155}] },
            { num:4,  freq:3780, pol:'V', name:'WABC New York', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'ABC 7 NEW YORK', type:'network', audio:'6.80', stereo:true, tagline:'PT24', videos:[{id:'ELnq8VFYITs',duration:441}] },
            { num:5,  freq:3800, pol:'H', name:'NASA TV', color:'#000022', accent:'#4488cc', textColor:'#fff', program:'WORLDNET', type:'educational', audio:'6.80', stereo:false, videos:[{id:'4yWOK1Ib4dI',duration:8233,start:6000}] },
            { num:6,  freq:3820, pol:'V', name:null },
            { num:7,  freq:3840, pol:'H', name:'American Infochannel', color:'#141414', accent:'#ccaa44', textColor:'#fff', program:'INFOMERCIALS', type:'shopping', audio:'6.80', stereo:false, videos:[{id:'50mhYBMHBfk',duration:8892,start:7000}] },
            { num:8,  freq:3860, pol:'V', name:null },
            { num:9,  freq:3880, pol:'H', name:null },
            { num:10, freq:3900, pol:'V', name:null },
            { num:11, freq:3920, pol:'H', name:'Home Shopping Club', color:'#161608', accent:'#cccc44', textColor:'#fff', program:'HOME SHOPPING', type:'shopping', audio:'6.80', stereo:false, videos:[{id:'50mhYBMHBfk',duration:8892,start:3000}] },
            { num:12, freq:3940, pol:'V', name:'WXIA Atlanta NBC', color:'#0a0a28', accent:'#ffaa00', textColor:'#fff', program:'NBC ATLANTA', type:'network', audio:'6.80', stereo:true, tagline:'PT24', videos:[{id:'ELnq8VFYITs',duration:441}] },
            { num:13, freq:3960, pol:'H', name:'NASA TV', color:'#000022', accent:'#4488cc', textColor:'#fff', program:'MISSION CONTROL', type:'educational', audio:'6.80', stereo:false, videos:[{id:'4yWOK1Ib4dI',duration:8233,start:4000}] },
            { num:14, freq:3980, pol:'V', name:null },
            { num:15, freq:4000, pol:'H', name:'Showcase America', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'B-MOVIES', type:'entertainment', audio:'6.80', stereo:false, videos:[{id:'SbPHqhlhyG4',duration:257}] },
            { num:16, freq:4020, pol:'V', name:'KBL Sports Pittsburgh', color:'#0a1a0a', accent:'#44cc44', textColor:'#fff', program:'PITTSBURGH SPORTS', type:'sports', audio:'6.80', stereo:true, videos:[{id:'reAxRzormg0',duration:9585,start:2000}] },
            { num:17, freq:4040, pol:'H', name:'SportsChannel NY Plus', color:'#0a1a0a', accent:'#44cc44', textColor:'#fff', program:'NY SPORTS', type:'sports', audio:'6.80', stereo:true, videos:[{id:'dvqE0862LGA',duration:14170}] },
            { num:18, freq:4060, pol:'V', name:'SportsChannel Philly', color:'#0a1a0a', accent:'#44cc44', textColor:'#fff', program:'PHILADELPHIA SPORTS', type:'sports', audio:'6.80', stereo:true, videos:[{id:'reAxRzormg0',duration:9585}] },
            { num:19, freq:4080, pol:'H', name:null },
            { num:20, freq:4100, pol:'V', name:null },
            { num:21, freq:4120, pol:'H', name:'New England Cable News', color:'#0a0a1a', accent:'#cc4444', textColor:'#fff', program:'NECN NEWSCAST', type:'news', audio:'6.80', stereo:true, videos:[{id:'ELnq8VFYITs',duration:441}] },
            { num:22, freq:4140, pol:'V', name:'SportsChannel New York', color:'#0a1a0a', accent:'#44cc44', textColor:'#fff', program:'ISLANDERS HOCKEY', type:'sports', audio:'6.80', stereo:true, videos:[{id:'Bs5T_SzgZ8k',duration:10816}] },
            { num:23, freq:4160, pol:'H', name:'SportsChannel New England', color:'#0a1a0a', accent:'#44cc44', textColor:'#fff', program:'BRUINS HOCKEY', type:'sports', audio:'6.80', stereo:true, videos:[{id:'Bs5T_SzgZ8k',duration:10816,start:4000}] },
            { num:24, freq:4180, pol:'V', name:null },
        ]
    },
    {
        name: 'Galaxy 2', short: 'G2', pos: 74.0,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:'Hughes TV Network', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'HUGHES TELEVISION', videos:[{id:'0tlwcZfJTQg',duration:10}] },
            { num:2,  freq:3740, pol:'V', name:null },
            { num:3,  freq:3760, pol:'H', name:null },
            { num:4,  freq:3780, pol:'V', name:'Hughes TV Network', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'HUGHES TELEVISION', videos:[{id:'0tlwcZfJTQg',duration:10}] },
            { num:5,  freq:3800, pol:'H', name:'Virginia State Ed Network', color:'#0a0a1a', accent:'#6688cc', textColor:'#fff', program:'TELECOURSES', type:'educational', audio:'6.20', stereo:false, videos:[{id:'W4RSwwMymj0',duration:1338,start:2000}] },
            { num:6,  freq:3820, pol:'V', name:null },
            { num:7,  freq:3840, pol:'H', name:'Antenne 2 French', color:'#0a0a28', accent:'#2244cc', textColor:'#fff', program:'JOURNAL T\u00c9L\u00c9VIS\u00c9', type:'entertainment', audio:'6.80', stereo:false, tagline:'France 2', videos:[{id:'NfP7qBPrsFc',start:4,end:129}] },
            { num:8,  freq:3860, pol:'V', name:null },
            { num:9,  freq:3880, pol:'H', name:'CNN Feeds', color:'#180808', accent:'#cc0000', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'CNN \u2014 BACKHAUL', videos:[{id:'aPfpZZsWs70',duration:6776,start:3000}] },
            { num:10, freq:3900, pol:'V', name:'Hughes TV Network', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'HUGHES TELEVISION', videos:[{id:'0tlwcZfJTQg',duration:10}] },
            { num:11, freq:3920, pol:'H', name:null },
            { num:12, freq:3940, pol:'V', name:null },
            { num:13, freq:3960, pol:'H', name:null },
            { num:14, freq:3980, pol:'V', name:'Hughes TV Network', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'HUGHES TELEVISION', videos:[{id:'0tlwcZfJTQg',duration:10}] },
            { num:15, freq:4000, pol:'H', name:'WTN London', color:'#0a0a1a', accent:'#aaa', textColor:'#fff', program:'WORLD TELEVISION NEWS', type:'news', audio:'6.20', stereo:false, tagline:'London Bureau', videos:[{id:'FPUwrDBpUXg',duration:295}] },
            { num:16, freq:4020, pol:'V', name:null },
            { num:17, freq:4040, pol:'H', name:'Hughes TV Network', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'HUGHES TELEVISION', videos:[{id:'0tlwcZfJTQg',duration:10}] },
            { num:18, freq:4060, pol:'V', name:null },
            { num:19, freq:4080, pol:'H', name:null },
            { num:20, freq:4100, pol:'V', name:null },
            { num:21, freq:4120, pol:'H', name:null },
            { num:22, freq:4140, pol:'V', name:'Hughes TV Network', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'HUGHES TELEVISION', videos:[{id:'0tlwcZfJTQg',duration:10}] },
            { num:23, freq:4160, pol:'H', name:null },
            { num:24, freq:4180, pol:'V', name:'Hughes TV Network', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'HUGHES TELEVISION', videos:[{id:'0tlwcZfJTQg',duration:10}] },
        ]
    },
    {
        name: 'Telstar 302', short: 'T2', pos: 85.0,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:null },
            { num:2,  freq:3740, pol:'V', name:'Sports Feed', color:'#0a1a0a', accent:'#44cc44', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:true, tagline:'OCCASIONAL SPORTS', videos:[{id:'SbPHqhlhyG4',duration:257}] },
            { num:3,  freq:3760, pol:'H', name:'Sports Feed 2', color:'#0a1a0a', accent:'#44cc44', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:true, tagline:'OCCASIONAL SPORTS', videos:[{id:'SbPHqhlhyG4',duration:257}] },
            { num:4,  freq:3780, pol:'V', name:'ABC Feeds', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'ABC \u2014 LEITCH UPLINK', videos:[{id:'SbPHqhlhyG4',duration:257}] },
            { num:5,  freq:3800, pol:'H', name:'HBO 2 East', scrambled:true, color:'#160828', accent:'#9b59b6', textColor:'#fff', program:'GRUMPY OLD MEN (1993)', type:'premium', audio:'6.80', stereo:true, videos:[{id:'E9DafN5Isbk',duration:21}] },
            { num:6,  freq:3820, pol:'V', name:'Test \u2014 Bars & Tone', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'1KHZ TONE', type:'test', audio:'6.20', stereo:false, videos:[{id:'EMJhxWN3QvA',duration:600}] },
            { num:7,  freq:3840, pol:'H', name:'Test \u2014 Color Bars', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'TEST PATTERN', type:'test', audio:'6.20', stereo:false, videos:[{id:'l4bDVq-nP-0',duration:3601}] },
            { num:8,  freq:3860, pol:'V', name:'ABC East Feed', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'ABC \u2014 NETWORK FEED', videos:[{id:'BnGBal9UKfQ',duration:2454}] },
            { num:9,  freq:3880, pol:'H', name:'HBO 3 East', scrambled:true, color:'#160828', accent:'#9b59b6', textColor:'#fff', program:'TOMBSTONE (1993)', type:'premium', audio:'6.80', stereo:true },
            { num:10, freq:3900, pol:'V', name:'ABC East Feed', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'WORLD NEWS TONIGHT', type:'network', audio:'6.80', stereo:true, videos:[{id:'w6qH2jBfyVo',start:0,end:1102},{id:'w6qH2jBfyVo',start:1195,end:1417},{id:'EBuvOLjsF00',start:1,end:307},{id:'EBuvOLjsF00',start:368,end:605},{id:'EBuvOLjsF00',start:636,end:666},{id:'EBuvOLjsF00',start:666,end:697},{id:'EBuvOLjsF00',start:697,end:727},{id:'EBuvOLjsF00',start:993,end:1023},{id:'EBuvOLjsF00',start:1023,end:1054},{id:'EBuvOLjsF00',start:1054,end:1084},{id:'EBuvOLjsF00',start:1084,end:1114},{id:'EBuvOLjsF00',start:1370,end:1401},{id:'EBuvOLjsF00',start:1401,end:1431},{id:'EerSHhjR0g0',start:6,end:325},{id:'EerSHhjR0g0',start:385,end:664},{id:'EerSHhjR0g0',start:805,end:972},{id:'EerSHhjR0g0',start:1093,end:1261},{id:'EerSHhjR0g0',start:1368,end:1717}] },
            { num:11, freq:3920, pol:'H', name:'ABC Feeds', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'ABC \u2014 OCCASIONAL VIDEO', videos:[{id:'BnGBal9UKfQ',duration:2454,start:0}] },
            { num:12, freq:3940, pol:'V', name:null },
            { num:13, freq:3960, pol:'H', name:null },
            { num:14, freq:3980, pol:'V', name:'HBO 2 West', scrambled:true, color:'#160828', accent:'#9b59b6', textColor:'#fff', program:'THE FUGITIVE (1993)', type:'premium', audio:'6.80', stereo:true },
            { num:15, freq:4000, pol:'H', name:'AgSat', color:'#0a1a0a', accent:'#44aa44', textColor:'#fff', program:'AGRICULTURE TODAY', type:'educational', audio:'6.20', stereo:false, tagline:'M-F 10-11AM ET', videos:[{id:'55DP2kimCIY',start:2,end:373},{id:'55DP2kimCIY',start:434,end:468},{id:'55DP2kimCIY',start:530,end:710},{id:'55DP2kimCIY',start:772,end:804},{id:'55DP2kimCIY',start:879,end:1071},{id:'55DP2kimCIY',start:1102,end:1138},{id:'55DP2kimCIY',start:1195,end:1396},{id:'55DP2kimCIY',start:1458,end:1490},{id:'55DP2kimCIY',start:1552,end:1587}] },
            { num:16, freq:4020, pol:'V', name:'Starnet', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'LATE NIGHT MOVIES', type:'entertainment', audio:'6.80', stereo:false, videos:[{id:'SbPHqhlhyG4',duration:257}] },
            { num:17, freq:4040, pol:'H', name:'Test \u2014 Audio ID', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'STEREO CHECK', type:'test', audio:'6.20', stereo:true, videos:[{id:'_MIlqc9GTY4',duration:165},{id:'gxUg_03k5LE',duration:49}] },
            { num:18, freq:4060, pol:'V', name:'Test \u2014 SMPTE', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'TEST PATTERN', type:'test', audio:'6.20', stereo:false, videos:[{id:'j91V1nktnH8',duration:4801}] },
            { num:19, freq:4080, pol:'H', name:'ABC Feeds', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'ABC \u2014 OCCASIONAL VIDEO', videos:[{id:'BnGBal9UKfQ',duration:2454,start:500}] },
            { num:20, freq:4100, pol:'V', name:'La Cadena Del Milagro', color:'#141428', accent:'#8888cc', textColor:'#fff', program:'MINISTERIO INTERNACIONAL', type:'religious', audio:'6.20', stereo:false, videos:[{id:'pGVCOLaXioY',duration:509},{id:'FL0fNCKfzH8',duration:2600}] },
            { num:21, freq:4120, pol:'H', name:'Cinemax 2 East', scrambled:true, color:'#081624', accent:'#3498db', textColor:'#fff', program:'TOMBSTONE (1993)', type:'premium', audio:'6.80', stereo:true },
            { num:22, freq:4140, pol:'V', name:'NC Open Network', color:'#0a0a1a', accent:'#6688cc', textColor:'#fff', program:'TELECOURSES', type:'educational', audio:'6.20', stereo:false, tagline:'Tue/Thu 8-10 ET', videos:[{id:'W4RSwwMymj0',duration:2338,start:1000}] },
            { num:23, freq:4160, pol:'H', name:'Test \u2014 Station', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'WGN SIGN OFF', type:'test', audio:'6.20', stereo:false, videos:[{id:'P__67fbdZVg',duration:6151}] },
            { num:24, freq:4180, pol:'V', name:null },
        ]
    },
    {
        name: 'Spacenet 3', short: 'S3', pos: 87.0,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:'Cable Listings', color:'#0a0a0a', accent:'#44dddd', textColor:'#0ff', program:'CHANNEL GUIDE', type:'entertainment', audio:'6.20', stereo:false, videos:[{id:'XOizHA_IvuY',start:0,end:962}] },
            { num:2,  freq:3740, pol:'V', name:'KUON Lincoln PBS', color:'#141408', accent:'#44aa44', textColor:'#fff', program:'NEBRASKA PUBLIC TV', type:'educational', audio:'6.80', stereo:true, tagline:'Public Broadcasting Service', videoId:'W4RSwwMymj0', videoStart:60, videos:[{id:'W4RSwwMymj0',duration:2338,start:1000}] },
            { num:3,  freq:3760, pol:'H', name:'WSBK Boston', color:'#141414', accent:'#aaa', textColor:'#fff', program:'CHEERS', type:'entertainment', audio:'6.80', stereo:true, tagline:'UPN 38 Boston', videos:[{id:'E1mUiedXMPc',duration:5517,maxDur:150}] },
            { num:4,  freq:3780, pol:'V', name:'Community Bulletin Board', color:'#0a0a0a', accent:'#44aa44', textColor:'#0f0', program:'LOCAL COMMUNITY CALENDAR', type:'entertainment', audio:'6.20', stereo:false, tagline:'Public Access', videos:[{id:'AqobbIAJdOE',duration:210},{id:'Da7_AcM5pzk',duration:181},{id:'XOizHA_IvuY',start:0,end:962}] },
            { num:5,  freq:3800, pol:'H', name:'KTVT Dallas', color:'#141414', accent:'#cc8844', textColor:'#fff', program:'DALLAS', type:'entertainment', audio:'6.80', stereo:true, tagline:'CBS 11 Dallas', videos:[{id:'SWzn1qrrJsM',duration:3692}] },
                                    { num:6,  freq:3820, pol:'V', name:'Community Access', color:'#0a0a0a', accent:'#44aa44', textColor:'#0f0', program:'LOCAL EVENTS', type:'entertainment', audio:'6.20', stereo:false, videos:[{id:'XOizHA_IvuY',start:0,end:962},{id:'60aZrE9XItU',duration:90},{id:'u9nOP4hKwJc',duration:177}] },
            { num:7,  freq:3840, pol:'H', name:'Classified Ads', color:'#0a0a0a', accent:'#ccaa44', textColor:'#ff0', program:'BUY SELL TRADE', type:'entertainment', audio:'6.20', stereo:false, videos:[{id:'XOizHA_IvuY',start:0,end:962}] },
            { num:8,  freq:3860, pol:'V', name:'Casino Game Channel', color:'#0a0a0a', accent:'#ccaa44', textColor:'#ff0', program:'VIDEO KENO', type:'entertainment', audio:'6.20', stereo:false, videos:[{id:'MgPeIQJAAoM',start:1,end:459}] },
            { num:9,  freq:3880, pol:'H', name:'WPIX New York', color:'#0a0a1a', accent:'#4488cc', textColor:'#fff', program:'THE HONEYMOONERS', type:'entertainment', audio:'6.80', stereo:true, tagline:'WB 11 New York', videos:[{id:'SbPHqhlhyG4',duration:257}] },
            { num:10,  freq:3900, pol:'V', name:'Satellite Test', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'TEST TRANSMISSION', type:'entertainment', audio:'6.20', stereo:false, videos:[{id:'JOFpnE09nnI',duration:794}] },
            { num:11, freq:3920, pol:'H', name:'CNN International', color:'#180808', accent:'#cc2222', textColor:'#fff', program:'WORLD REPORT', type:'news', audio:'6.80', stereo:true, tagline:'Occasional Video', videos:[{id:'Gg_XJ4xHCIQ',duration:294},{id:'aPfpZZsWs70',duration:6776,start:2000}] },
                        { num:12,  freq:3940, pol:'V', name:'Lottery Channel', color:'#0a0a0a', accent:'#ccaa44', textColor:'#ff0', program:'LIVE DRAWINGS', type:'entertainment', audio:'6.20', stereo:false, videos:[{id:'gLBMCW1onls',start:56,end:296},{id:'gLBMCW1onls',start:296,end:1112},{id:'a6cum2X9YqM',duration:139}] },
            { num:13,  freq:3960, pol:'H', name:'Satellite Feed', color:'#0a0a0a', accent:'#666', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'OCCASIONAL VIDEO', videos:[{id:'JOFpnE09nnI',duration:794}] },
                        { num:14,  freq:3980, pol:'V', name:'Financial News Wire', color:'#0a0a0a', accent:'#44dddd', textColor:'#0ff', program:'MARKET DATA', type:'news', audio:'6.20', stereo:false, videos:[{id:'tEbZswUEnsU',duration:640},{id:'FPUwrDBpUXg',duration:295}] },
            { num:15, freq:4000, pol:'H', name:'KTLA Los Angeles', color:'#141414', accent:'#cc8800', textColor:'#fff', program:'MARRIED... WITH CHILDREN', type:'entertainment', audio:'6.80', stereo:true, tagline:'The WB Los Angeles', videos:[{id:'I4XIxDIlyQs',duration:3605},{id:'n6oyr5LXdNQ',duration:3532}] },
            { num:16,  freq:4020, pol:'V', name:'Infomercial Feed', color:'#141414', accent:'#ccaa44', textColor:'#fff', program:'AMAZING NEW PRODUCT', type:'shopping', audio:'6.80', stereo:false, videos:[{id:'B13TnJgMvtY',duration:1773},{id:'sU5xtAu7B6U',duration:982},{id:'j8WMXyXBGpM',duration:563}] },
            { num:17, freq:4040, pol:'H', name:null },
                        { num:18,  freq:4060, pol:'V', name:null },
            { num:19, freq:4080, pol:'H', name:'SportSouth', color:'#081408', accent:'#44aa44', textColor:'#fff', program:'ATLANTA BRAVES BASEBALL', type:'sports', audio:'6.80', stereo:true, videos:[{id:'cSAZ1um7f-8',duration:6923},{id:'LieeNJh869A',duration:1974}] },
            { num:20,  freq:4100, pol:'V', name:'CBC Test', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'TEST TRANSMISSION', type:'entertainment', audio:'6.20', stereo:false, videos:[{id:'JOFpnE09nnI',duration:794}] },
            { num:21, freq:4120, pol:'H', name:null },
            { num:22,  freq:4140, pol:'V', name:'Local Forecast', color:'#0a0a0a', accent:'#44aaff', textColor:'#fff', program:'TRAVEL CITIES', type:'entertainment', audio:'6.20', stereo:false, videos:[{id:'3lcehyFGeyI',duration:196},{id:'E4q0fDY-F-E',duration:84},{id:'T7CuNZ4lgVI',duration:315}] },
            { num:23, freq:4160, pol:'H', name:'Home Team Sports', color:'#0a1a0a', accent:'#44cc44', textColor:'#fff', program:'WASHINGTON CAPITALS HOCKEY', type:'sports', audio:'6.80', stereo:true, tagline:'Washington DC', videos:[{id:'reAxRzormg0',duration:9585,start:2000}] },
            { num:24, freq:4180, pol:'V', name:'RTP Internacional', color:'#0a0a28', accent:'#4466cc', textColor:'#fff', program:'TELES\u00c1O', type:'entertainment', audio:'6.80', stereo:false, tagline:'Portugal', videos:[{id:'SbPHqhlhyG4',duration:257}] },
        ]
    },
    {
        name: 'Telstar 4', short: 'T4', pos: 89.0,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:null },
            { num:2,  freq:3740, pol:'V', name:null },
            { num:3,  freq:3760, pol:'H', name:'Network Feeds', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'OCCASIONAL VIDEO', videos:[{id:'SbPHqhlhyG4',duration:257}] },
            { num:4,  freq:3780, pol:'V', name:null },
            { num:5,  freq:3800, pol:'H', name:null },
            { num:6,  freq:3820, pol:'V', name:'Sports Backhaul', color:'#0a1a0a', accent:'#44cc44', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:true, tagline:'SPORTS FEED', videos:[{id:'_j0KBm4x6ME',duration:5255}] },
            { num:7,  freq:3840, pol:'H', name:null },
            { num:8,  freq:3860, pol:'V', name:null },
            { num:9,  freq:3880, pol:'H', name:null },
            { num:10, freq:3900, pol:'V', name:null },
            { num:11, freq:3920, pol:'H', name:null },
            { num:12, freq:3940, pol:'V', name:null },
            { num:13, freq:3960, pol:'H', name:null },
            { num:14, freq:3980, pol:'V', name:null },
            { num:15, freq:4000, pol:'H', name:null },
            { num:16, freq:4020, pol:'V', name:null },
            { num:17, freq:4040, pol:'H', name:null },
            { num:18, freq:4060, pol:'V', name:null },
            { num:19, freq:4080, pol:'H', name:null },
            { num:20, freq:4100, pol:'V', name:null },
            { num:21, freq:4120, pol:'H', name:null },
            { num:22, freq:4140, pol:'V', name:null },
            { num:23, freq:4160, pol:'H', name:null },
            { num:24, freq:4180, pol:'V', name:null },
        ]
    },
    {
        name: 'Galaxy 7', short: 'G7', pos: 91.0,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:'Cable Bulletin', color:'#0a0a0a', accent:'#44aa44', textColor:'#0f0', program:'COMMUNITY CALENDAR', type:'entertainment', audio:'6.20', stereo:false, videos:[{id:'60aZrE9XItU',duration:90},{id:'u9nOP4hKwJc',duration:177}] },
            { num:2,  freq:3740, pol:'V', name:'CBS West', scrambled:true, color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'60 MINUTES', type:'network', audio:'6.80', stereo:true, videos:[{id:'SaF__mZECrM',start:5,end:634},{id:'SaF__mZECrM',start:695,end:881},{id:'SaF__mZECrM',start:912,end:1246},{id:'SaF__mZECrM',start:1366,end:1502},{id:'SaF__mZECrM',start:1563,end:1766},{id:'SaF__mZECrM',start:1887,end:2076}] },
            { num:3,  freq:3760, pol:'H', name:'Community Board', color:'#0a0a0a', accent:'#44aa44', textColor:'#0f0', program:'LOCAL INFORMATION', type:'entertainment', audio:'6.20', stereo:false, videos:[{id:'u9nOP4hKwJc',duration:177},{id:'60aZrE9XItU',duration:90}] },
            { num:4,  freq:3780, pol:'V', name:'Weather Data', color:'#0a0a0a', accent:'#44aaff', textColor:'#fff', program:'CURRENT CONDITIONS', type:'entertainment', audio:'6.20', stereo:false, videos:[{id:'T7CuNZ4lgVI',duration:315},{id:'3lcehyFGeyI',duration:196}] },
            { num:5,  freq:3800, pol:'H', name:'Fox News Channel', color:'#0a0a28', accent:'#cc2222', textColor:'#fff', program:'FOX NEWS NOW', type:'news', audio:'6.80', stereo:true, tagline:'Fair and Balanced', videos:[{id:'Fx4rD2UoeA8',duration:572},{id:'iKfkdzsaXnQ',duration:296},{id:'ZC9JSSjs0pM',duration:254},{id:'Xm-3WDa1hT4',duration:408},{id:'Tdx2n6T4-Sg',duration:944}] },
            { num:6,  freq:3820, pol:'V', name:'Cable Program Guide', color:'#000808', accent:'#44dddd', textColor:'#0ff', program:'CHANNEL LISTINGS', type:'entertainment', audio:'6.20', stereo:false, videos:[{id:'7Hx9HaiCIAk',start:11,end:3083}] },
            { num:7,  freq:3840, pol:'H', name:'Test — Audio ID', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'LEFT RIGHT TEST', type:'test', audio:'6.20', stereo:true, videos:[{id:'YCOabuKbJvo',duration:1801}] },
            { num:8,  freq:3860, pol:'V', name:null },
                                    { num:9,  freq:3880, pol:'H', name:'Test — Sign Off', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'STATION SIGN OFF', type:'test', audio:'6.20', stereo:false, videos:[{id:'Cnchea6LHN0',duration:87},{id:'P__67fbdZVg',duration:6151,start:2000}] },
            { num:10,  freq:3900, pol:'V', name:'Government Access', color:'#0a0a1a', accent:'#6666aa', textColor:'#ddd', program:'CITY COUNCIL PROCEEDINGS', type:'educational', audio:'6.20', stereo:false, videos:[{id:'Fq-MaceZU20',duration:4750}] },
                        { num:11,  freq:3920, pol:'H', name:null },
                        { num:12,  freq:3940, pol:'V', name:null },
            { num:13, freq:3960, pol:'H', name:'RAI Italy', color:'#0a0a28', accent:'#2244cc', textColor:'#fff', program:'TG1 NOTIZIARIO', type:'entertainment', audio:'6.80', stereo:false, tagline:'Radiotelevisione Italiana', videos:[{id:'ift1jPqGicY',duration:380},{id:'3ZxFhLpKH3c',duration:2035}] },
            { num:14, freq:3980, pol:'V', name:'FamilyNet', color:'#141428', accent:'#8888cc', textColor:'#fff', program:'WORSHIP SERVICE', type:'religious', audio:'6.20', stereo:false, videos:[{id:'ko0rldI_880',duration:10667,start:300}] },
            { num:15, freq:4000, pol:'H', name:'NBC Feeds', color:'#0a0a28', accent:'#ffaa00', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'NBC / BRIGHTSTAR \u2014 BACKHAUL', videos:[{id:'akNrTrblM3s',duration:3612,maxDur:150}] },
            { num:16,  freq:4020, pol:'V', name:null },
            { num:17, freq:4040, pol:'H', name:'Shop at Home', color:'#161608', accent:'#cccc44', textColor:'#fff', program:'JEWELRY CLEARANCE', type:'shopping', audio:'6.80', stereo:false, tagline:'CALL 1-800-743-2155', videos:[{id:'50mhYBMHBfk',duration:8892,start:4000}] },
            { num:18, freq:4060, pol:'V', name:'CBS News Feeds', color:'#0a0a1a', accent:'#aaa', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'CBS NEWS \u2014 FIELD REPORT', videos:[{id:'SbPHqhlhyG4',duration:257}] },
            { num:19, freq:4080, pol:'H', name:'CBS East', scrambled:true, color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'LATE SHOW WITH DAVID LETTERMAN', type:'network', audio:'6.80', stereo:true, videos:[{id:'SaF__mZECrM',start:5,end:634},{id:'SaF__mZECrM',start:695,end:881},{id:'SaF__mZECrM',start:912,end:1246},{id:'SaF__mZECrM',start:1366,end:1502},{id:'SaF__mZECrM',start:1563,end:1766},{id:'SaF__mZECrM',start:1887,end:2076}] },
            { num:20,  freq:4100, pol:'V', name:'Satellite Feed', color:'#0a0a0a', accent:'#666', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'OCCASIONAL VIDEO', videos:[{id:'JOFpnE09nnI',duration:794}] },
            { num:21, freq:4120, pol:'H', name:null },
            { num:22, freq:4140, pol:'V', name:'Playboy TV', scrambled:true, color:'#141414', accent:'#888', textColor:'#fff', program:'ADULT PROGRAMMING', type:'premium', audio:'6.80', stereo:false, videos:[{id:'ptNr2lYWXhk',duration:677},{id:'MXv7OuWVbko',duration:2986},{id:'uEatcxShbFs',duration:180}] },
            { num:23,  freq:4160, pol:'H', name:null },
                        { num:24,  freq:4180, pol:'V', name:null },
        ]
    },
    {
        name: 'Galaxy 3', short: 'G3', pos: 93.5,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:null },
            { num:2,  freq:3740, pol:'V', name:'Empire Sports Network', color:'#0a1a0a', accent:'#44cc44', textColor:'#fff', program:'BUFFALO SPORTS', type:'sports', audio:'6.80', stereo:true, videos:[{id:'sJVtK-Yrtwk',duration:144}] },
            { num:3,  freq:3760, pol:'H', name:null },
            { num:4,  freq:3780, pol:'V', name:null },
            { num:5,  freq:3800, pol:'H', name:'RTP Portuguese News', color:'#0a0a28', accent:'#4466cc', textColor:'#fff', program:'NOTICIAS', type:'entertainment', audio:'6.80', stereo:false, tagline:'11AM-4PM ET', videos:[{id:'pGVCOLaXioY',duration:509,start:100}] },
            { num:6,  freq:3820, pol:'V', name:null },
            { num:7,  freq:3840, pol:'H', name:'TV Asia', color:'#0a0a1a', accent:'#ccaa44', textColor:'#fff', program:'BOLLYWOOD NEWS', type:'entertainment', audio:'6.80', stereo:false, videos:[{id:'cRYjMch8edY',duration:2480,start:500}] },
            { num:8,  freq:3860, pol:'V', name:null },
            { num:9,  freq:3880, pol:'H', name:'Satellite Market USA', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'CLASSIFIED ADS', type:'shopping', audio:'6.20', stereo:false, videos:[{id:'XOizHA_IvuY',start:0,end:962}] },
            { num:10, freq:3900, pol:'V', name:null },
            { num:11, freq:3920, pol:'H', name:'Keystone Inspiration', color:'#141428', accent:'#8888cc', textColor:'#fff', program:'MINISTRY HOUR', type:'religious', audio:'6.20', stereo:false, videos:[{id:'ko0rldI_880',duration:10667,start:6000}] },
            { num:12, freq:3940, pol:'V', name:'University Network', color:'#141428', accent:'#8888cc', textColor:'#fff', program:'DR. GENE SCOTT', type:'religious', audio:'6.20', stereo:false, tagline:'University Network', videos:[{id:'NSLgSOmVg7g',duration:2312}] },
            { num:13, freq:3960, pol:'H', name:'Video Catalog Channel', color:'#141414', accent:'#ccaa44', textColor:'#fff', program:'INFOMERCIALS', type:'shopping', audio:'6.80', stereo:false, videos:[{id:'50mhYBMHBfk',duration:8892,start:5000}] },
            { num:14, freq:3980, pol:'V', name:'Caribbean Satellite Net', color:'#0a1a1a', accent:'#44ccaa', textColor:'#fff', program:'CARIBBEAN PROGRAMMING', type:'entertainment', audio:'6.80', stereo:false, videos:[{id:'cRYjMch8edY',duration:2480,start:1200}] },
            { num:15, freq:4000, pol:'H', name:'Video Catalog Channel', color:'#141414', accent:'#ccaa44', textColor:'#fff', program:'INFOMERCIALS', type:'shopping', audio:'6.80', stereo:false, videos:[{id:'50mhYBMHBfk',duration:8892,start:7000}] },
            { num:16, freq:4020, pol:'V', name:null },
            { num:17, freq:4040, pol:'H', name:'Shop at Home', color:'#161608', accent:'#cccc44', textColor:'#fff', program:'JEWELRY CLEARANCE', type:'shopping', audio:'6.80', stereo:false, videos:[{id:'50mhYBMHBfk',duration:8892,start:1000}] },
            { num:18, freq:4060, pol:'V', name:'ABC West', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'ABC WEST FEED', type:'network', audio:'6.80', stereo:true, videos:[{id:'EBuvOLjsF00',start:1,end:307},{id:'EBuvOLjsF00',start:368,end:605},{id:'EBuvOLjsF00',start:636,end:666},{id:'EBuvOLjsF00',start:666,end:697},{id:'EBuvOLjsF00',start:697,end:727},{id:'EBuvOLjsF00',start:993,end:1023},{id:'EBuvOLjsF00',start:1023,end:1054},{id:'EBuvOLjsF00',start:1054,end:1084},{id:'EBuvOLjsF00',start:1084,end:1114},{id:'EBuvOLjsF00',start:1370,end:1401},{id:'EBuvOLjsF00',start:1401,end:1431}] },
            { num:19, freq:4080, pol:'H', name:'VIA TV Shopping', color:'#161608', accent:'#cccc44', textColor:'#fff', program:'HOME SHOPPING', type:'shopping', audio:'6.80', stereo:false, videos:[{id:'50mhYBMHBfk',duration:8892,start:3000}] },
            { num:20, freq:4100, pol:'V', name:'ABC Feeds', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'ABC \u2014 OCCASIONAL VIDEO', videos:[{id:'BnGBal9UKfQ',duration:2454,start:1000}] },
            { num:21, freq:4120, pol:'H', name:'American Collectibles', color:'#141414', accent:'#ccaa44', textColor:'#fff', program:'COLLECTIBLES AUCTION', type:'shopping', audio:'6.80', stereo:false, videos:[{id:'50mhYBMHBfk',duration:8892,start:5000}] },
            { num:22, freq:4140, pol:'V', name:'Future Mart', color:'#141414', accent:'#ccaa44', textColor:'#fff', program:'HOME SHOPPING', type:'shopping', audio:'6.80', stereo:false, videos:[{id:'50mhYBMHBfk',duration:8892,start:6000}] },
            { num:23, freq:4160, pol:'H', name:'Access America', color:'#141414', accent:'#ccaa44', textColor:'#fff', program:'INFOMERCIALS', type:'shopping', audio:'6.80', stereo:false, videos:[{id:'50mhYBMHBfk',duration:8892,start:7000}] },
            { num:24, freq:4180, pol:'V', name:'Skyvision', color:'#141414', accent:'#ccaa44', textColor:'#fff', program:'INFOMERCIALS', type:'shopping', audio:'6.80', stereo:false, videos:[{id:'50mhYBMHBfk',duration:8892,start:0}] },
        ]
    },
    {
        name: 'Telstar 301', short: 'T1', pos: 96.0,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:'Hughes TV Network', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'HUGHES TELEVISION', videos:[{id:'0tlwcZfJTQg',duration:10}] },
            { num:2,  freq:3740, pol:'V', name:null },
            { num:3,  freq:3760, pol:'H', name:'Warner Bros. TV Dist.', color:'#0a0a28', accent:'#4466cc', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'WB DISTRIBUTION FEED', videos:[{id:'ELnq8VFYITs',duration:441}] },
            { num:4,  freq:3780, pol:'V', name:'ABC LA-NY Feed', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'ABC \u2014 COAST TO COAST', videos:[{id:'BnGBal9UKfQ',duration:2454,start:500}] },
            { num:5,  freq:3800, pol:'H', name:null },
            { num:6,  freq:3820, pol:'V', name:null },
            { num:7,  freq:3840, pol:'H', name:'ABC Feeds', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'ABC \u2014 OCCASIONAL VIDEO', videos:[{id:'BnGBal9UKfQ',duration:2454,start:1500}] },
            { num:8,  freq:3860, pol:'V', name:'Test \u2014 CBC Bars', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'440HZ TONE', type:'test', audio:'6.20', stereo:false, videos:[{id:'j91V1nktnH8',duration:4801,start:1000}] },
            { num:9,  freq:3880, pol:'H', name:'Sea World Television', color:'#081624', accent:'#44aacc', textColor:'#fff', program:'MARINE LIFE SHOWCASE', type:'entertainment', audio:'6.80', stereo:false, videos:[{id:'PP16r2M8oCE',duration:2368}] },
            { num:10, freq:3900, pol:'V', name:null },
            { num:11, freq:3920, pol:'H', name:'ABC Feeds', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'ABC \u2014 NETWORK FEEDS', videos:[{id:'BnGBal9UKfQ',duration:2454,start:1500}] },
            { num:12, freq:3940, pol:'V', name:null },
            { num:13, freq:3960, pol:'H', name:'SNS / INN Hughes', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'SATELLITE NEWS SERVICE', videos:[{id:'0tlwcZfJTQg',duration:10}] },
            { num:14, freq:3980, pol:'V', name:'Test \u2014 HBO Uplink', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'TRANSMISSION TEST', type:'test', audio:'6.20', stereo:false, videos:[{id:'EMJhxWN3QvA',duration:600}] },
            { num:15, freq:4000, pol:'H', name:'CBS Feeds / Skyvision', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'CBS \u2014 NETWORK FEED', videos:[{id:'kE5_4vBscRs',start:2,end:481},{id:'kE5_4vBscRs',start:543,end:711},{id:'kE5_4vBscRs',start:814,end:1019},{id:'kE5_4vBscRs',start:1121,end:1338},{id:'kE5_4vBscRs',start:1460,end:1737},{id:'LAazz7mIrEE',start:0,end:439},{id:'LAazz7mIrEE',start:500,end:709},{id:'LAazz7mIrEE',start:811,end:961},{id:'LAazz7mIrEE',start:1062,end:1289},{id:'LAazz7mIrEE',start:1411,end:1695}] },
            { num:16, freq:4020, pol:'V', name:null },
            { num:17, freq:4040, pol:'H', name:null },
            { num:18, freq:4060, pol:'V', name:'Video Fashions', color:'#141414', accent:'#cc88aa', textColor:'#fff', program:'FASHION SHOWCASE', type:'entertainment', audio:'6.80', stereo:false, tagline:'Thursday at Noon ET', videos:[{id:'1Hvmk9vk5UQ',duration:13338}] },
            { num:19, freq:4080, pol:'H', name:'Ag Day / PhoneVoter', color:'#0a1a0a', accent:'#44aa44', textColor:'#fff', program:'AGRICULTURE NEWS', type:'educational', audio:'6.20', stereo:false, tagline:'Farm Broadcasting', videos:[{id:'55DP2kimCIY',start:2,end:373},{id:'55DP2kimCIY',start:434,end:468},{id:'55DP2kimCIY',start:530,end:710},{id:'55DP2kimCIY',start:772,end:804},{id:'55DP2kimCIY',start:879,end:1071},{id:'55DP2kimCIY',start:1102,end:1138},{id:'55DP2kimCIY',start:1195,end:1396},{id:'55DP2kimCIY',start:1458,end:1490},{id:'55DP2kimCIY',start:1552,end:1587}] },
            { num:20, freq:4100, pol:'V', name:'Test \u2014 Bars & Tone', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'1KHZ TONE', type:'test', audio:'6.20', stereo:false, videos:[{id:'YCOabuKbJvo',duration:1801}] },
            { num:21, freq:4120, pol:'H', name:'Best Picture Show', color:'#0a0a0a', accent:'#ccaa44', textColor:'#fff', program:'LATE NIGHT MOVIE', type:'entertainment', audio:'6.80', stereo:false, tagline:'Mon 8:30PM, M-Sat 12AM ET', videos:[{id:'SbPHqhlhyG4',duration:257}] },
            { num:22, freq:4140, pol:'V', name:'Test \u2014 Sound Check', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'AUDIO TEST', type:'test', audio:'6.20', stereo:true, videos:[{id:'_MIlqc9GTY4',duration:165}] },
            { num:23, freq:4160, pol:'H', name:null },
            { num:24, freq:4180, pol:'V', name:'Hughes TV Network', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'HUGHES TELEVISION', videos:[{id:'0tlwcZfJTQg',duration:10}] },
        ]
    },
    {
        name: 'Galaxy 4', short: 'G4', pos: 99.0,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:null },
            { num:2,  freq:3740, pol:'V', name:null },
            { num:3,  freq:3760, pol:'H', name:null },
            { num:4,  freq:3780, pol:'V', name:null },
            { num:5,  freq:3800, pol:'H', name:null },
            { num:6,  freq:3820, pol:'V', name:'National Christian Net', color:'#141428', accent:'#8888cc', textColor:'#fff', program:'CHRISTIAN PROGRAMMING', type:'religious', audio:'6.20', stereo:false, videos:[{id:'ko0rldI_880',duration:10667,start:8000}] },
            { num:7,  freq:3840, pol:'H', name:'CBS Feeds', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'CBS \u2014 OCCASIONAL VIDEO', videos:[{id:'kE5_4vBscRs',start:2,end:481},{id:'kE5_4vBscRs',start:543,end:711},{id:'kE5_4vBscRs',start:814,end:1019},{id:'kE5_4vBscRs',start:1121,end:1338},{id:'kE5_4vBscRs',start:1460,end:1737},{id:'LAazz7mIrEE',start:0,end:439},{id:'LAazz7mIrEE',start:500,end:709},{id:'LAazz7mIrEE',start:811,end:961},{id:'LAazz7mIrEE',start:1062,end:1289},{id:'LAazz7mIrEE',start:1411,end:1695}] },
            { num:8,  freq:3860, pol:'V', name:'Telemundo', color:'#240828', accent:'#ff44cc', textColor:'#fff', program:'TELEMUNDO', type:'entertainment', audio:'6.80', stereo:true, videos:[{id:'S4TJdkiD3RE',duration:3538,start:1000}] },
            { num:9,  freq:3880, pol:'H', name:null },
            { num:10, freq:3900, pol:'V', name:'WV State Telecourses', color:'#0a0a1a', accent:'#6688cc', textColor:'#fff', program:'TELECOURSES', type:'educational', audio:'6.20', stereo:false, videos:[{id:'W4RSwwMymj0',duration:2838,start:500}] },
            { num:11, freq:3920, pol:'H', name:null },
            { num:12, freq:3940, pol:'V', name:null },
            { num:13, freq:3960, pol:'H', name:null },
            { num:14, freq:3980, pol:'V', name:null },
            { num:15, freq:4000, pol:'H', name:'World Harvest TV', color:'#141428', accent:'#8888cc', textColor:'#fff', program:'LESTER SUMRALL MINISTRIES', type:'religious', audio:'6.20', stereo:false, videos:[{id:'HI3kTGBNqZU',duration:3536},{id:'kOCNglp2jw8',duration:3536}] },
            { num:16, freq:4020, pol:'V', name:'CBS West', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'CBS WEST FEED', type:'network', audio:'6.80', stereo:true, videos:[{id:'kE5_4vBscRs',start:2,end:481},{id:'kE5_4vBscRs',start:543,end:711},{id:'kE5_4vBscRs',start:814,end:1019},{id:'kE5_4vBscRs',start:1121,end:1338},{id:'kE5_4vBscRs',start:1460,end:1737}] },
            { num:17, freq:4040, pol:'H', name:'CBS East', scrambled:true, color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'CBS EVENING NEWS', type:'network', audio:'6.80', stereo:true, videos:[{id:'cfgi_H10lMM',duration:3816}] },
            { num:18, freq:4060, pol:'V', name:'CBS Feeds', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'CBS \u2014 OCCASIONAL VIDEO', videos:[{id:'kE5_4vBscRs',start:2,end:481},{id:'kE5_4vBscRs',start:543,end:711},{id:'kE5_4vBscRs',start:814,end:1019},{id:'kE5_4vBscRs',start:1121,end:1338},{id:'kE5_4vBscRs',start:1460,end:1737},{id:'LAazz7mIrEE',start:0,end:439},{id:'LAazz7mIrEE',start:500,end:709},{id:'LAazz7mIrEE',start:811,end:961},{id:'LAazz7mIrEE',start:1062,end:1289},{id:'LAazz7mIrEE',start:1411,end:1695}] },
            { num:19, freq:4080, pol:'H', name:'CBS East', scrambled:true, color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'CBS LATE NIGHT', type:'network', audio:'6.80', stereo:true },
            { num:20, freq:4100, pol:'V', name:'CBS East Feed', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'CBS NETWORK', type:'network', audio:'6.80', stereo:true, videos:[{id:'kE5_4vBscRs',start:2,end:481},{id:'kE5_4vBscRs',start:543,end:711},{id:'kE5_4vBscRs',start:814,end:1019},{id:'kE5_4vBscRs',start:1121,end:1338},{id:'kE5_4vBscRs',start:1460,end:1737},{id:'LAazz7mIrEE',start:0,end:439},{id:'LAazz7mIrEE',start:500,end:709},{id:'LAazz7mIrEE',start:811,end:961},{id:'LAazz7mIrEE',start:1062,end:1289},{id:'LAazz7mIrEE',start:1411,end:1695}] },
            { num:21, freq:4120, pol:'H', name:'CBS Feeds', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'KEYSTONE / CBS', videos:[{id:'kE5_4vBscRs',start:2,end:481},{id:'kE5_4vBscRs',start:543,end:711},{id:'kE5_4vBscRs',start:814,end:1019},{id:'kE5_4vBscRs',start:1121,end:1338},{id:'kE5_4vBscRs',start:1460,end:1737},{id:'LAazz7mIrEE',start:0,end:439},{id:'LAazz7mIrEE',start:500,end:709},{id:'LAazz7mIrEE',start:811,end:961},{id:'LAazz7mIrEE',start:1062,end:1289},{id:'LAazz7mIrEE',start:1411,end:1695}] },
            { num:22, freq:4140, pol:'V', name:null },
            { num:23, freq:4160, pol:'H', name:null },
            { num:24, freq:4180, pol:'V', name:'CBS News Feeds', color:'#0a0a1a', accent:'#aaa', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'CBS NEWS \u2014 FEEDS', videos:[{id:'LAazz7mIrEE',start:0,end:439},{id:'LAazz7mIrEE',start:500,end:709},{id:'LAazz7mIrEE',start:811,end:961},{id:'LAazz7mIrEE',start:1062,end:1289},{id:'LAazz7mIrEE',start:1411,end:1695}] },
        ]
    },
    {
        name: 'Spacenet 4', short: 'S4', pos: 101.0,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:null },
            { num:2,  freq:3740, pol:'V', name:null },
            { num:3,  freq:3760, pol:'H', name:null },
            { num:4,  freq:3780, pol:'V', name:'PBS Feeds', color:'#141408', accent:'#44aa44', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'PBS \u2014 OCCASIONAL VIDEO', videos:[{id:'W4RSwwMymj0',duration:3038,start:300}] },
            { num:5,  freq:3800, pol:'H', name:null },
            { num:6,  freq:3820, pol:'V', name:'PBS-B Feed', color:'#141408', accent:'#44aa44', textColor:'#fff', program:'PUBLIC BROADCASTING', type:'educational', audio:'6.80', stereo:true, tagline:'PBS Network Feed B', videos:[{id:'W4RSwwMymj0',duration:1838,start:1500}] },
            { num:7,  freq:3840, pol:'H', name:null },
            { num:8,  freq:3860, pol:'V', name:'PBS-A Feed', color:'#141408', accent:'#44aa44', textColor:'#fff', program:'PUBLIC BROADCASTING', type:'educational', audio:'6.80', stereo:true, tagline:'PBS Network Feed A', videos:[{id:'W4RSwwMymj0',duration:3320,start:18}] },
            { num:9,  freq:3880, pol:'H', name:'3ABN', color:'#141428', accent:'#8888cc', textColor:'#fff', program:'THREE ANGELS BROADCASTING', type:'religious', audio:'6.20', stereo:false, videos:[{id:'pbBvEp4xScc',start:0,end:3453}] },
            { num:10, freq:3900, pol:'V', name:'PBS-C Feed', color:'#141408', accent:'#44aa44', textColor:'#fff', program:'PUBLIC BROADCASTING', type:'educational', audio:'6.80', stereo:true, tagline:'PBS Network Feed C', videos:[{id:'W4RSwwMymj0',duration:838,start:2500}] },
            { num:11, freq:3920, pol:'H', name:null },
            { num:12, freq:3940, pol:'V', name:'PBS-D Feed', color:'#141408', accent:'#44aa44', textColor:'#fff', program:'PUBLIC BROADCASTING', type:'educational', audio:'6.80', stereo:true, tagline:'PBS Network Feed D', videos:[{id:'6vbFGn1QhVs',duration:13663}] },
            { num:13, freq:3960, pol:'H', name:null },
            { num:14, freq:3980, pol:'V', name:null },
            { num:15, freq:4000, pol:'H', name:null },
            { num:16, freq:4020, pol:'V', name:null },
            { num:17, freq:4040, pol:'H', name:null },
            { num:18, freq:4060, pol:'V', name:null },
            { num:19, freq:4080, pol:'H', name:null },
            { num:20, freq:4100, pol:'V', name:null },
            { num:21, freq:4120, pol:'H', name:null },
            { num:22, freq:4140, pol:'V', name:null },
            { num:23, freq:4160, pol:'H', name:null },
            { num:24, freq:4180, pol:'V', name:null },
        ]
    },
    {
        name: 'Anik E2', short: 'E2', pos: 107.3,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:'Weather Network', color:'#081624', accent:'#44aaff', textColor:'#fff', program:'CURRENT CONDITIONS', type:'entertainment', audio:'6.20', stereo:false, tagline:'M\u00e9t\u00e9oM\u00e9dia', videos:[{id:'G6mbXHyBY3s',duration:1465},{id:'u8Z0B968GRc',duration:1094}] },
            { num:2,  freq:3740, pol:'V', name:'TSN', scrambled:true, color:'#080818', accent:'#4488ff', textColor:'#fff', program:'SPORTSDESK', type:'sports', audio:'6.80', stereo:true, tagline:'The Sports Network' },
            { num:3,  freq:3760, pol:'H', name:'CBC Feeds', color:'#240808', accent:'#cc2222', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'CBC \u2014 OCCASIONAL VIDEO', videos:[{id:'NgPMeDgDJOs',start:0,end:397}] },
            { num:4,  freq:3780, pol:'V', name:'The Movie Network', scrambled:true, color:'#0a0a28', accent:'#6644cc', textColor:'#fff', program:'SCHINDLER\u2019S LIST (1993)', type:'premium', audio:'6.80', stereo:true },
            { num:5,  freq:3800, pol:'H', name:'CBC Feeds', color:'#240808', accent:'#cc2222', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'CBC \u2014 REMOTE STANDBY', videos:[{id:'cVzNZyLjGWk',start:0,end:336}] },
            { num:6,  freq:3820, pol:'V', name:'MuchMusic', color:'#160828', accent:'#ff44ff', textColor:'#fff', program:'ELECTRIC CIRCUS', type:'music', audio:'6.80', stereo:true, tagline:"Canada\u2019s Music Station", videos:[{id:'LJAJOmQsJb0',duration:4306}] },
            { num:7,  freq:3840, pol:'H', name:'CBC / BBC News', color:'#240808', accent:'#cc4444', textColor:'#fff', program:'BBC WORLD SERVICE', type:'news', audio:'6.80', stereo:false, tagline:'M-F 4:54 & 8:25AM ET', videos:[{id:'cVzNZyLjGWk',start:0,end:336},{id:'P4g3h9U4PoQ',start:0,end:34}] },
            { num:8,  freq:3860, pol:'V', name:'CHCH Hamilton', scrambled:true, color:'#141414', accent:'#888', textColor:'#fff', program:'LOCAL NEWS', type:'network', audio:'6.80', stereo:false },
            { num:9,  freq:3880, pol:'H', name:'WDIV Detroit NBC', scrambled:true, color:'#0a0a28', accent:'#ffaa00', textColor:'#fff', program:'NBC 4 DETROIT', type:'network', audio:'6.80', stereo:true },
            { num:10, freq:3900, pol:'V', name:'WXYZ Detroit ABC', scrambled:true, color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'ABC 7 DETROIT', type:'network', audio:'6.80', stereo:true },
            { num:11, freq:3920, pol:'H', name:'CBC North West', color:'#240808', accent:'#cc2222', textColor:'#fff', program:'HOCKEY NIGHT IN CANADA', type:'network', audio:'6.80', stereo:true, tagline:'Canadian Broadcasting Corporation', videos:[{id:'cVzNZyLjGWk',start:0,end:336},{id:'qvfvnz_cAfU',start:0,end:73}] },
            { num:12, freq:3940, pol:'V', name:'Global TV', color:'#081408', accent:'#22aa22', textColor:'#fff', program:'ENTERTAINMENT TONIGHT CANADA', type:'network', audio:'6.80', stereo:true, videos:[{id:'xnvvvrH5l8w',duration:633},{id:'rmZAWNFWO_U',duration:769}] },
            { num:13, freq:3960, pol:'H', name:'Superchannel', scrambled:true, color:'#0a0a28', accent:'#cc8800', textColor:'#fff', program:'THE FUGITIVE (1993)', type:'premium', audio:'6.80', stereo:true },
            { num:14, freq:3980, pol:'V', name:'CFTM Montr\u00e9al', color:'#0a0a28', accent:'#2244cc', textColor:'#fff', program:'TCTV', type:'network', audio:'6.80', stereo:true, tagline:'T\u00e9l\u00e9vision Quatre-Saisons', videos:[{id:'rmZAWNFWO_U',duration:769}] },
            { num:15, freq:4000, pol:'H', name:'CBFT Montr\u00e9al SRC', color:'#080828', accent:'#2244cc', textColor:'#fff', program:'LE T\u00c9L\u00c9JOURNAL', type:'network', audio:'6.80', stereo:true, tagline:'Soci\u00e9t\u00e9 Radio-Canada', videos:[{id:'rmZAWNFWO_U',duration:769}] },
            { num:16, freq:4020, pol:'V', name:'CBC Newsworld', scrambled:true, color:'#240808', accent:'#cc4444', textColor:'#fff', program:'THE NATIONAL', type:'news', audio:'6.80', stereo:true },
            { num:17, freq:4040, pol:'H', name:'CBC / VISNews', color:'#180808', accent:'#aa2222', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'CBC \u2014 VISNEWS FEED', videos:[{id:'NgPMeDgDJOs',start:0,end:397}] },
            { num:18, freq:4060, pol:'V', name:'CITV Edmonton', scrambled:true, color:'#141414', accent:'#888', textColor:'#fff', program:'LOCAL NEWS', type:'network', audio:'6.80', stereo:false },
            { num:19, freq:4080, pol:'H', name:'CBC North East', color:'#240808', accent:'#cc2222', textColor:'#fff', program:'CBC NORTH', type:'network', audio:'6.80', stereo:true, tagline:'Canadian Broadcasting Corporation', videos:[{id:'cVzNZyLjGWk',start:0,end:336}] },
            { num:20, freq:4100, pol:'V', name:null },
        ]
    },
    {
        name: 'Solidaridad 1', short: 'SD1', pos: 109.2,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:'Canal 2 Televisa', color:'#1a0a0a', accent:'#cc4444', textColor:'#fff', program:'EL CANAL DE LAS ESTRELLAS', type:'entertainment', audio:'6.80', stereo:true, tagline:'Televisa', videos:[{id:'Vja_srr-ack',start:0,end:3294}] },
            { num:2,  freq:3740, pol:'V', name:'Canal 5 XHGC', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'CARTOONS', type:'kids', audio:'6.80', stereo:true, tagline:'Televisa', videos:[{id:'ytb0w0RqjY0',start:8,end:1926},{id:'Qv6Yie7hLdo',start:0,end:768}] },
            { num:3,  freq:3760, pol:'H', name:null },
            { num:4,  freq:3780, pol:'V', name:'Canal 13 Azteca', color:'#0a1a0a', accent:'#44aa44', textColor:'#fff', program:'NOTICIAS', type:'news', audio:'6.80', stereo:true, videos:[{id:'wkt_gvcp_ZM',start:18,end:986}] },
            { num:5,  freq:3800, pol:'H', name:null },
            { num:6,  freq:3820, pol:'V', name:'Gobierno Federal', color:'#0a0a1a', accent:'#888', textColor:'#fff', program:'RED FEDERAL', type:'educational', audio:'6.20', stereo:false, videos:[{id:'X5zvjGq6Rsg',duration:921}] },
            { num:7,  freq:3840, pol:'H', name:null },
            { num:8,  freq:3860, pol:'V', name:null },
            { num:9,  freq:3880, pol:'H', name:'Televisa Regional', color:'#1a0a0a', accent:'#cc4444', textColor:'#fff', program:'PROGRAMACION REGIONAL', type:'entertainment', audio:'6.80', stereo:false, videos:[{id:'Qn3nTMhntOg',duration:62}] },
            { num:10, freq:3900, pol:'V', name:null },
            { num:11, freq:3920, pol:'H', name:null },
            { num:12, freq:3940, pol:'V', name:'Red Educativa', color:'#0a0a1a', accent:'#6688cc', textColor:'#fff', program:'TELESECUNDARIA', type:'educational', audio:'6.20', stereo:false, videos:[{id:'X5zvjGq6Rsg',duration:921,start:300},{id:'2Da56flkNFY',duration:35}] },
            { num:13, freq:3960, pol:'H', name:null },
            { num:14, freq:3980, pol:'V', name:null },
            { num:15, freq:4000, pol:'H', name:null },
            { num:16, freq:4020, pol:'V', name:null },
            { num:17, freq:4040, pol:'H', name:null },
            { num:18, freq:4060, pol:'V', name:null },
        ]
    },
    {
        name: 'Morelos 2', short: 'M2', pos: 116.8,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:'Televisa Feed', color:'#1a0a0a', accent:'#cc4444', textColor:'#fff', program:'TELEVISA NETWORK', type:'entertainment', audio:'6.80', stereo:true, videos:[{id:'Vja_srr-ack',start:0,end:3294}] },
            { num:2,  freq:3740, pol:'V', name:null },
            { num:3,  freq:3760, pol:'H', name:null },
            { num:4,  freq:3780, pol:'V', name:'Canal 9 Televisa', color:'#1a0a0a', accent:'#cc8844', textColor:'#fff', program:'GALAVISIÓN', type:'entertainment', audio:'6.80', stereo:true, videos:[{id:'cRYjMch8edY',duration:2480}] },
            { num:5,  freq:3800, pol:'H', name:null },
            { num:6,  freq:3820, pol:'V', name:null },
            { num:7,  freq:3840, pol:'H', name:'SCT Gobierno', color:'#0a0a1a', accent:'#888', textColor:'#fff', program:'GOBIERNO DE MEXICO', type:'educational', audio:'6.20', stereo:false, videos:[{id:'X5zvjGq6Rsg',duration:921,start:500}] },
            { num:8,  freq:3860, pol:'V', name:null },
            { num:9,  freq:3880, pol:'H', name:null },
            { num:10, freq:3900, pol:'V', name:null },
            { num:11, freq:3920, pol:'H', name:null },
            { num:12, freq:3940, pol:'V', name:null },
        ]
    },
    {
        name: 'Galaxy 5', short: 'G5', pos: 125.0,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:'Disney Channel East', scrambled:true, color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'ADVENTURES IN WONDERLAND', type:'premium', audio:'6.80', stereo:true, videos:[{id:'X3HcL4-2QGE',duration:888},{id:'wniDCiLSgyk',duration:530}] },
            { num:2,  freq:3740, pol:'V', name:'Playboy / Satellite City', scrambled:true, color:'#141414', accent:'#888', textColor:'#fff', program:'ADULT PROGRAMMING', type:'premium', audio:'6.80', stereo:false, videos:[{id:'jB26fv_fWcs',duration:1295},{id:'0-SiH2gdgMQ',duration:675},{id:'b8lW5Gau990',duration:293}] },
            { num:3,  freq:3760, pol:'H', name:'TBN', color:'#141428', accent:'#8888cc', textColor:'#fff', program:'PRAISE THE LORD', type:'religious', audio:'6.20', stereo:false, tagline:'Trinity Broadcasting Network', videos:[{id:'ko0rldI_880',duration:10667},{id:'3tabgMitNVk',duration:84}] },
            { num:4,  freq:3780, pol:'V', name:'Sci-Fi Channel', color:'#080818', accent:'#4488aa', textColor:'#fff', program:'QUANTUM LEAP', type:'entertainment', audio:'6.80', stereo:true, tagline:'The Sci-Fi Channel', videos:[{id:'GW5DsNBT0yY',duration:1704}] },
            { num:5,  freq:3800, pol:'H', name:'CNN', color:'#280808', accent:'#cc0000', textColor:'#fff', program:'LARRY KING LIVE', type:'news', audio:'6.80', stereo:true, tagline:'Cable News Network', ticker:'WHITEWATER HEARINGS CONTINUE \u2022 NAFTA TAKES EFFECT JAN 1 \u2022 LORENA BOBBITT TRIAL \u2022 TONYA HARDING INVESTIGATION \u2022 DOW AT 3,978', videos:[{id:'mEMjtQlXyLM',duration:5975,start:120},{id:'aPfpZZsWs70',duration:6776},{id:'rdmXB-OYnS4',duration:2651},{id:'WyDBh2NdeuU',duration:5537},{id:'M9OZb85mT8M',duration:22151},{id:'5X-AqZkgI0g',duration:7353},] },
            { num:6,  freq:3820, pol:'V', name:'TBS', color:'#080818', accent:'#2266bb', textColor:'#fff', program:'THE ANDY GRIFFITH SHOW', type:'entertainment', audio:'6.80', stereo:false, tagline:'The Superstation', videos:[{id:'AuXYcBz6mBM',duration:1601,start:30},{id:'iZSXWlUdYts',duration:3689},{id:'RXNVdyDGaU8',duration:814},{id:'MaAN6TylSZg',duration:861},{id:'A1sJYxJH_rw',duration:3365},{id:'cTiDVkemqc4',duration:5050},{id:'LF1QxAi0O6s',duration:547},{id:'1fVpfgqKKdA',duration:543},{id:'XjHTp86JkTA',duration:677},{id:'hrHK7ZjrtTE',duration:692},{id:'8px-GRahXPU',duration:466},{id:'qcUyM6efvCE',duration:965},{id:'HI3xyiTh48g',duration:1111}] },
            { num:7,  freq:3840, pol:'H', name:'WGN', color:'#141414', accent:'#aaa', textColor:'#fff', program:'BOZO SUPER SUNDAY', type:'entertainment', audio:'6.80', stereo:true, tagline:'Chicago Superstation', videos:[{id:'QHucRHAHyFk',duration:1154},{id:'iZefMSbIvE4',duration:587},{id:'mr2kIROP00Y',duration:308}] },
            { num:8,  freq:3860, pol:'V', name:'HBO West', scrambled:true, color:'#160828', accent:'#9b59b6', textColor:'#fff', program:'PHILADELPHIA (1993)', type:'premium', audio:'6.80', stereo:true, videos:[{id:'k_xRP3B2YzQ',duration:32},{id:'NtzUlSZTSeA',duration:37}] },
            { num:9,  freq:3880, pol:'H', name:'ESPN', color:'#280808', accent:'#cc2222', textColor:'#fff', program:'SPORTSCENTER', type:'sports', audio:'6.80', stereo:true, videos:[{id:'mQ8hp41jFbg',duration:1797},{id:'d3E4_wpdBLo',duration:1899},{id:'ncJCX3QK9zw',duration:4916},{id:'hY_BwJcrK4g',duration:4201},{id:'vhxBT-kycyI',duration:1696},{id:'qZrLsUqQCHg',duration:6408}] },
            { num:10, freq:3900, pol:'V', name:'MOR Music TV', color:'#0a0a1a', accent:'#6688cc', textColor:'#fff', program:'EASY LISTENING', type:'music', audio:'6.80', stereo:true, videos:[{id:'ZyR_KDYJ90A',duration:5005},{id:'8LwTAqEY7cU',duration:4780}] },
            { num:11, freq:3920, pol:'H', name:'Family Channel East', color:'#081624', accent:'#44aacc', textColor:'#fff', program:'THE 700 CLUB', type:'entertainment', audio:'6.80', stereo:false, tagline:'The Family Channel', videos:[{id:'RRPgfv-g7T4',duration:381}] },
            { num:12, freq:3940, pol:'V', name:'Discovery Channel West', color:'#081624', accent:'#1a8cff', textColor:'#fff', program:'BEYOND 2000', type:'entertainment', audio:'6.80', stereo:true, tagline:'Explore Your World', videos:[{id:'Rnyas0Ib_o8',duration:1960},{id:'OhUwwr1sbwQ',duration:1804}] },
            { num:13, freq:3960, pol:'H', name:'CNBC', color:'#001616', accent:'#00bbbb', textColor:'#fff', program:'MARKET WRAP', type:'news', audio:'6.80', stereo:true, tagline:'First in Business Worldwide', ticker:'DOW 3,978 +12.50 \u2022 S&P 466 +1.80 \u2022 NASDAQ 803 +4.20 \u2022 T-BONDS 6.35% \u2022 GOLD $383.40', videos:[{id:'Zf_0GhbyiFU',duration:256},{id:'ydCXiPlXUQY',duration:3475}] },
            { num:14, freq:3980, pol:'V', name:'ESPN2', color:'#280808', accent:'#cc4422', textColor:'#fff', program:'MAX OUT', type:'sports', audio:'6.80', stereo:true, tagline:'The Deuce', videos:[{id:'IcI12OV-4Lg',duration:9250}] },
            { num:15, freq:4000, pol:'H', name:'HBO East', scrambled:true, color:'#160828', accent:'#9b59b6', textColor:'#fff', program:'THE PELICAN BRIEF (1993)', type:'premium', audio:'6.80', stereo:true, videos:[{id:'k_xRP3B2YzQ',duration:32},{id:'B1snFyV-1Yc',duration:170}] },
            { num:16, freq:4020, pol:'V', name:'Cinemax West', scrambled:true, color:'#081624', accent:'#3498db', textColor:'#fff', program:'DEMOLITION MAN (1993)', type:'premium', audio:'6.80', stereo:true, videos:[{id:'GxyxPWX1LcY',start:0,end:35},{id:'MQgRg53Xk-o',start:0,end:170}] },
            { num:17, freq:4040, pol:'H', name:'TNT', color:'#141414', accent:'#cc8800', textColor:'#fff', program:'WCW SATURDAY NIGHT', type:'entertainment', audio:'6.80', stereo:true, tagline:'We Know Drama', videos:[{id:'pPl_LuCAXOQ',duration:5519,start:60},{id:'flFgfPBr8Gs',duration:3093},{id:'rsy3xQeAu7E',duration:3296}] },
            { num:18, freq:4060, pol:'V', name:'TNN', color:'#161608', accent:'#cc8844', textColor:'#fff', program:'NASHVILLE NOW', type:'music', audio:'6.80', stereo:true, tagline:'The Nashville Network', videos:[{id:'BIaDdgpsF-M',duration:860},{id:'MNjdSI0XkmQ',duration:7952}] },
            { num:19, freq:4080, pol:'H', name:'USA East', color:'#080828', accent:'#2244cc', textColor:'#fff', program:'SILK STALKINGS', type:'entertainment', audio:'6.80', stereo:true, tagline:'USA Network', videos:[{id:'JLvVDfokf_8',duration:1337,start:60},{id:'5fcOoVnUHws',duration:5041},{id:'YisSdQMPs1w',duration:1670},{id:'DbmRa5T5ebs',duration:722}] },
            { num:20, freq:4100, pol:'V', name:'BET', color:'#160816', accent:'#cc44cc', textColor:'#fff', program:'RAP CITY: THE BASEMENT', type:'entertainment', audio:'6.80', stereo:true, tagline:'Black Entertainment Television', videos:[{id:'F6xkQCgkxd0',start:0,end:4618}] },
            { num:21, freq:4120, pol:'H', name:'Mind Extension University', color:'#080828', accent:'#6688cc', textColor:'#fff', program:'PERSONAL COMPUTING', type:'educational', audio:'6.20', stereo:false, tagline:'Knowledge TV', videos:[{id:'KYUdE5mOZuU',duration:6994}] },
            { num:22, freq:4140, pol:'V', name:'CNN Headline News', color:'#280808', accent:'#ee2222', textColor:'#fff', program:'HEADLINE NEWS', type:'news', audio:'6.80', stereo:true, ticker:'NORTHRIDGE EARTHQUAKE KILLS 57 \u2022 NANCY KERRIGAN ATTACK \u2022 BRADY BILL SIGNED INTO LAW \u2022 SPACE SHUTTLE DISCOVERY LAUNCHES', videos:[{id:'Y4NwW47FHAA',duration:1657},{id:'hzUFpF5o0RU',duration:118},{id:'IojG8h36lLM',duration:136}] },
            { num:23, freq:4160, pol:'H', name:'A&E', color:'#141414', accent:'#aaa', textColor:'#fff', program:'BIOGRAPHY: ELVIS PRESLEY', type:'entertainment', audio:'6.80', stereo:true, tagline:'Arts & Entertainment', videos:[{id:'9gqdqtv14mE',start:0,end:2811},{id:'P4w5CwCAq20',start:10,end:40},{id:'P4w5CwCAq20',start:40,end:70},{id:'P4w5CwCAq20',start:70,end:100},{id:'P4w5CwCAq20',start:100,end:130},{id:'P4w5CwCAq20',start:131,end:176},{id:'P4w5CwCAq20',start:176,end:206},{id:'P4w5CwCAq20',start:206,end:236},{id:'P4w5CwCAq20',start:236,end:266},{id:'P4w5CwCAq20',start:266,end:296},{id:'P4w5CwCAq20',start:296,end:326},{id:'P4w5CwCAq20',start:326,end:356},{id:'P4w5CwCAq20',start:356,end:366},{id:'P4w5CwCAq20',start:366,end:396},{id:'P4w5CwCAq20',start:396,end:426},{id:'P4w5CwCAq20',start:426,end:456},{id:'P4w5CwCAq20',start:456,end:466},{id:'P4w5CwCAq20',start:466,end:496},{id:'P4w5CwCAq20',start:496,end:526},{id:'P4w5CwCAq20',start:526,end:556},{id:'P4w5CwCAq20',start:556,end:586},{id:'P4w5CwCAq20',start:586,end:616},{id:'P4w5CwCAq20',start:616,end:646},{id:'P4w5CwCAq20',start:646,end:666},{id:'P4w5CwCAq20',start:666,end:676},{id:'frQEgjJRgRg',start:0,end:2644}] },
                        { num:24,  freq:4180, pol:'V', name:'NASA TV', color:'#000022', accent:'#4488cc', textColor:'#fff', program:'MISSION CONTROL — HOUSTON', type:'educational', audio:'6.80', stereo:false, tagline:'STS-64 SAFER Spacewalk', videos:[{id:'4yWOK1Ib4dI',duration:8233},{id:'TUBKSq0WYoA',duration:712}]  },
        ]
    },
    {
        name: 'Satcom C3', short: 'C3', pos: 131.0,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:'Family Channel West', color:'#081624', accent:'#44aacc', textColor:'#fff', program:'YOUNG RIDERS', type:'entertainment', audio:'6.80', stereo:true, tagline:'The Family Channel', videos:[{id:'RRPgfv-g7T4',duration:381}] },
            { num:2,  freq:3740, pol:'V', name:'TLC', color:'#160824', accent:'#cc44ff', textColor:'#fff', program:'HOMETIME', type:'educational', audio:'6.80', stereo:true, tagline:'The Learning Channel', videos:[{id:'2Z0ZIsPiz4M',duration:2029},{id:'RybzHuYpAbk',duration:857}] },
            { num:3,  freq:3760, pol:'H', name:'Viewers Choice PPV', color:'#0a0a0a', accent:'#ccaa44', textColor:'#fff', program:'ORDER NOW — CALL YOUR CABLE OPERATOR', type:'shopping', audio:'6.80', stereo:true, videos:[{id:'jQjqtEZESzM',duration:1165},{id:'At9FlUCn0uo',duration:107},{id:'Qj2ihfq7y8c',duration:379}] },
            { num:4,  freq:3780, pol:'V', name:'Lifetime West', color:'#240816', accent:'#cc4488', textColor:'#fff', program:'INTIMATE PORTRAIT', type:'entertainment', audio:'6.80', stereo:true, tagline:'Television for Women', videos:[{id:'pe96PDJK6W0',duration:754},{id:'6QtI6TwNDnw',duration:149}] },
            { num:5,  freq:3800, pol:'H', name:'Faith & Values / VISN', color:'#141428', accent:'#8888cc', textColor:'#fff', program:'INTERFAITH DIALOGUE', type:'religious', audio:'6.20', stereo:false, videos:[{id:'ko0rldI_880',duration:10667,start:5000}] },
            { num:6,  freq:3820, pol:'V', name:'Court TV', color:'#161608', accent:'#aaaa44', textColor:'#fff', program:'TRIAL STORY', type:'news', audio:'6.80', stereo:false, tagline:'The Court Television Network', videos:[{id:'5huCjfZ6d3U',duration:2714},{id:'bkrxarLhX7A',duration:2590},{id:'LWhx93b-Uow',duration:17181}] },
            { num:7,  freq:3840, pol:'H', name:'C-SPAN', color:'#141428', accent:'#6666aa', textColor:'#ddd', program:'U.S. HOUSE OF REPRESENTATIVES', type:'educational', audio:'6.20', stereo:false, videos:[{id:'TkjtnteqL64',start:0,end:10293}] },
            { num:8,  freq:3860, pol:'V', name:'QVC Fashion Channel', color:'#080828', accent:'#4466cc', textColor:'#fff', program:'FASHION SHOWCASE', type:'shopping', audio:'6.80', stereo:false, tagline:'CALL 1-800-345-1515', videos:[{id:'50mhYBMHBfk',duration:8892,start:300},{id:'sC2uMxL0Wqc',duration:2714},{id:'9o671jl-HKk',duration:11588}] },
            { num:9,  freq:3880, pol:'H', name:'Digital Cable Radio', color:'#0a0a0a', accent:'#44dddd', textColor:'#0ff', program:'MUSIC SERVICE', type:'music', audio:'6.20', stereo:true, videos:[{id:'HgD7TMtF1xk',duration:2836}] },
            { num:10, freq:3900, pol:'V', name:'Home Shopping Club', color:'#161608', accent:'#cccc44', textColor:'#fff', program:'ELECTRONICS TODAY', type:'shopping', audio:'6.80', stereo:false, tagline:'CALL 1-800-284-3100', videos:[{id:'ttpuvSoop6g',duration:4087,start:60}] },
                        { num:11,  freq:3920, pol:'H', name:'Prime Network', color:'#0a1a0a', accent:'#44aa44', textColor:'#fff', program:'REGIONAL SPORTS', type:'sports', audio:'6.80', stereo:true , videos:[{id:'reAxRzormg0',duration:9585,start:5000}] },
                        { num:12,  freq:3940, pol:'V', name:'Future: History Channel', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'COMING SOON', type:'entertainment', audio:'6.20', stereo:false, tagline:'Launching 1995' , videos:[{id:'6vbFGn1QhVs',duration:13663,start:5000}] },
            { num:13, freq:3960, pol:'H', name:'The Weather Channel', color:'#081624', accent:'#44aaff', textColor:'#fff', program:'LOCAL ON THE 8s', type:'entertainment', audio:'6.80', stereo:false, tagline:'Your Weather Authority', videos:[{id:'bYXGYf3uTrw',duration:789},{id:'RC5z6rUswdA',duration:11754},{id:'pmwkSQ4zx7k',duration:2076},{id:'geV2p_Zkt_M',duration:644},{id:'5Y32e42dMgM',duration:7249}] },
            { num:14, freq:3980, pol:'V', name:'NESN', color:'#0a1a0a', accent:'#44aa44', textColor:'#fff', program:'BOSTON RED SOX BASEBALL', type:'sports', audio:'6.80', stereo:true, tagline:'New England Sports Network', videos:[{id:'E_Lv8GusTnE',duration:6322},{id:'ZASOgPZoxvc',duration:663}] },
            { num:15, freq:4000, pol:'H', name:'Showtime East', scrambled:true, color:'#240808', accent:'#cc2244', textColor:'#fff', program:'THE FIRM (1993)', type:'premium', audio:'6.80', stereo:true, videos:[{id:'IlEGvqTJnQk',duration:432},{id:'i0EWWaMqJWk',duration:1940}] },
            { num:16, freq:4020, pol:'V', name:'MTV West', color:'#141414', accent:'#ffdd00', textColor:'#fff', program:'BEAVIS AND BUTT-HEAD', type:'music', audio:'6.80', stereo:true, tagline:'Music Television', videos:[{id:'u24qFvvR1V0',duration:2803},{id:'oN9CeZWkbUw',duration:993},{id:'wqS4Jqn5rmg',duration:1454},{id:'jIBN4FKM3SQ',duration:1916},{id:'bZttp_KSYHo',duration:5623}] },
            { num:17, freq:4040, pol:'H', name:'The Movie Channel East', scrambled:true, color:'#080828', accent:'#4444cc', textColor:'#fff', program:'CLIFFHANGER (1993)', type:'premium', audio:'6.80', stereo:true, videos:[{id:'2Byle7-67qo',duration:327},{id:'UspwBKRzhyk',duration:65},{id:'KqmwcwGRFVI',duration:438}] },
            { num:18, freq:4060, pol:'V', name:'Nickelodeon West', color:'#161608', accent:'#ff8800', textColor:'#fff', program:'RUGRATS', type:'kids', audio:'6.80', stereo:true, tagline:"Kids\u2019 Network", videos:[{id:'dO7Iw5vh1s4',duration:3716,start:60},{id:'IFa-P8RLlrI',duration:2961},{id:'zMx9IUv_Zl0',duration:2645},{id:'n1A1mktLCF0',duration:573},{id:'hlye_ByLyLc',duration:1465}] },
            { num:19, freq:4080, pol:'H', name:'Flix', scrambled:true, color:'#0a0a1a', accent:'#6688aa', textColor:'#fff', program:'THE BREAKFAST CLUB (1985)', type:'premium', audio:'6.80', stereo:true, videos:[{id:'KEIwo4P9EWY',duration:151},{id:'8GnXfo-H8nU',duration:684}] },
            { num:20, freq:4100, pol:'V', name:null },
            { num:21, freq:4120, pol:'H', name:'Comedy Central East', color:'#141414', accent:'#ffaa00', textColor:'#fff', program:'MYSTERY SCIENCE THEATER 3000', type:'entertainment', audio:'6.80', stereo:true, tagline:'Ha!', videos:[{id:'4PJRzYiPmCw',duration:1163,start:30},{id:'ZqOgANyx3UA',duration:1986},{id:'8OMwzUZQywc',duration:533},{id:'MIjlvo5-cCs',duration:475}] },
            { num:22, freq:4140, pol:'V', name:'SportsChannel America', color:'#0a1a0a', accent:'#44cc44', textColor:'#fff', program:'SPORTS TONIGHT', type:'sports', audio:'6.80', stereo:true, videos:[{id:'reAxRzormg0',duration:9585,start:2000}] },
            { num:23, freq:4160, pol:'H', name:'E! Entertainment', color:'#141414', accent:'#ddd', textColor:'#111', program:'TALK SOUP WITH GREG KINNEAR', type:'entertainment', audio:'6.80', stereo:true, videos:[{id:'_IccRt_-vuw',duration:1323},{id:'qTdE-LgUEyw',duration:1322},{id:'rU3PECuIheI',duration:1319}] },
            { num:24, freq:4180, pol:'V', name:null },
        ]
    },
    {
        name: 'Galaxy 1', short: 'G1', pos: 133.0,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:'Comedy Central West', color:'#141414', accent:'#ffaa00', textColor:'#fff', program:'POLITICALLY INCORRECT', type:'entertainment', audio:'6.80', stereo:true, tagline:'Ha!', videos:[{id:'4PJRzYiPmCw',duration:560,start:600},{id:'ZqOgANyx3UA',duration:1986}] },
            { num:2,  freq:3740, pol:'V', name:'Action PPV', color:'#0a0a0a', accent:'#cc8844', textColor:'#fff', program:'ORDER NOW — 1-800-885-4000', type:'shopping', audio:'6.80', stereo:true, videos:[{id:'eOP0CmrNT2A',start:2,end:842},{id:'eOP0CmrNT2A',start:855,end:1490},{id:'fdhtsuGBuAI',start:0,end:141}] },
            { num:3,  freq:3760, pol:'H', name:'Encore', scrambled:true, color:'#180808', accent:'#cc4444', textColor:'#fff', program:'BUTCH CASSIDY AND THE SUNDANCE KID (1969)', type:'premium', audio:'6.80', stereo:true, videos:[{id:'B1snFyV-1Yc',duration:170}] },
            { num:4,  freq:3780, pol:'V', name:'TV Food Network', color:'#161608', accent:'#ccaa44', textColor:'#fff', program:'EMERIL LIVE', type:'entertainment', audio:'6.80', stereo:true, tagline:'Food Network', videos:[{id:'iQ9d-EYHaII',duration:832}] },
            { num:5,  freq:3800, pol:'H', name:'All News Channel', color:'#0a0a1a', accent:'#aaa', textColor:'#fff', program:'NEWS UPDATE', type:'news', audio:'6.80', stereo:false, videos:[{id:'Y4NwW47FHAA',duration:1657}] },
            { num:6,  freq:3820, pol:'V', name:'Univision', color:'#240828', accent:'#ff44cc', textColor:'#fff', program:'S\u00c1BADO GIGANTE', type:'entertainment', audio:'6.80', stereo:true, tagline:'La Cadena Hispana', videos:[{id:'GmPQHy2xJYA',duration:2551},{id:'cRYjMch8edY',duration:2480},{id:'y86YT4KQzg8',duration:227}] },
            { num:7,  freq:3840, pol:'H', name:'Turner Classic Movies', color:'#0a0a0a', accent:'#999', textColor:'#fff', program:'CASABLANCA (1942)', type:'entertainment', audio:'6.80', stereo:false, tagline:'Coming April 14, 1994', videos:[{id:'6jgZfxvlUek',duration:108},{id:'o1PE8ATRkHU',duration:46}] },
            { num:8,  freq:3860, pol:'V', name:'Cartoon Network', color:'#080808', accent:'#44dddd', textColor:'#fff', program:'SPACE GHOST COAST TO COAST', type:'kids', audio:'6.80', stereo:true, tagline:'The Best Place for Cartoons', videos:[{id:'ES7ctnbjNuA',duration:9900,start:120},{id:'KCVTgeFu03o',duration:315},{id:'-EUNOnxY6IY',duration:647},{id:'WpAQmKyxXs4',duration:587}] },
            { num:9,  freq:3880, pol:'H', name:'ESPN2 / ESPN Alt', color:'#280808', accent:'#cc4422', textColor:'#fff', program:'ALTERNATE FEED', type:'sports', audio:'6.80', stereo:true, videos:[{id:'IcI12OV-4Lg',duration:9250,start:3000}] },
            { num:10, freq:3900, pol:'V', name:'Flix', scrambled:true, color:'#0a0a1a', accent:'#6688aa', textColor:'#fff', program:'STAND BY ME (1986)', type:'premium', audio:'6.80', stereo:true },
            { num:11, freq:3920, pol:'H', name:'EWTN', color:'#141428', accent:'#8888cc', textColor:'#fff', program:'MOTHER ANGELICA LIVE', type:'religious', audio:'6.20', stereo:false, tagline:'Eternal Word Television Network', videos:[{id:'8bTcPCyaoBw',duration:3242},{id:'X277uoboX5c',duration:3036},{id:'fqmo-KEOx2c',duration:3427}] },
            { num:12, freq:3940, pol:'V', name:'ValueVision', color:'#161608', accent:'#cccc44', textColor:'#fff', program:'GEMSTONE GALLERY', type:'shopping', audio:'6.80', stereo:false, tagline:'CALL 1-800-365-0999', videos:[{id:'50mhYBMHBfk',duration:8892,start:2000}] },
            { num:13, freq:3960, pol:'H', name:null },
                        { num:14,  freq:3980, pol:'V', name:'Test — Color Bars', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'TEST PATTERN', type:'test', audio:'6.20', stereo:false, videos:[{id:'EMJhxWN3QvA',duration:600}] },
            { num:15,  freq:4000, pol:'H', name:'Infomercial Channel', color:'#141414', accent:'#ccaa44', textColor:'#fff', program:'PASTA MAKER', type:'shopping', audio:'6.80', stereo:false, videos:[{id:'B13TnJgMvtY',duration:1773},{id:'1HCRjCnIDM4',duration:1718}] },
            { num:16, freq:4020, pol:'V', name:'Showtime 2', scrambled:true, color:'#240808', accent:'#cc2244', textColor:'#fff', program:'IN THE LINE OF FIRE (1993)', type:'premium', audio:'6.80', stereo:true, videos:[{id:'IlEGvqTJnQk',duration:432,start:200},{id:'i0EWWaMqJWk',duration:1940,start:500}] },
            { num:17, freq:4040, pol:'H', name:'Inspirational Network', color:'#141428', accent:'#8888cc', textColor:'#fff', program:'WORSHIP HOUR', type:'religious', audio:'6.20', stereo:false, videos:[{id:'ko0rldI_880',duration:10667,start:2000}] },
                        { num:18,  freq:4060, pol:'V', name:'Satellite Bulletin', color:'#0a0a0a', accent:'#44aa44', textColor:'#0f0', program:'COMMUNITY INFORMATION', type:'entertainment', audio:'6.20', stereo:false, videos:[{id:'QitkfJgCWsU',duration:2090}]  },
            { num:19, freq:4080, pol:'H', name:'Cinemax East', scrambled:true, color:'#081624', accent:'#3498db', textColor:'#fff', program:'DEMOLITION MAN (1993)', type:'premium', audio:'6.80', stereo:true, videos:[{id:'GxyxPWX1LcY',start:0,end:35},{id:'MQgRg53Xk-o',start:0,end:170}] },
            { num:20, freq:4100, pol:'V', name:'Galavision', color:'#240828', accent:'#ff44cc', textColor:'#fff', program:'PRIMER IMPACTO', type:'entertainment', audio:'6.80', stereo:true, videos:[{id:'GmPQHy2xJYA',duration:2551,start:500},{id:'S4TJdkiD3RE',duration:3538}] },
            { num:21, freq:4120, pol:'H', name:'USA West', color:'#080828', accent:'#2244cc', textColor:'#fff', program:'WINGS', type:'entertainment', audio:'6.80', stereo:true, tagline:'USA Network', videos:[{id:'5fcOoVnUHws',duration:3000,start:2000},{id:'YisSdQMPs1w',duration:1669}] },
            { num:22, freq:4140, pol:'V', name:'Nostalgia TV', color:'#0a0a0a', accent:'#999', textColor:'#fff', program:'THE ED SULLIVAN SHOW', type:'entertainment', audio:'6.80', stereo:false, videos:[{id:'P__67fbdZVg',duration:6151}] },
            { num:23, freq:4160, pol:'H', name:'HBO East', scrambled:true, color:'#160828', accent:'#9b59b6', textColor:'#fff', program:'MRS. DOUBTFIRE (1993)', type:'premium', audio:'6.80', stereo:true, videos:[{id:'B1snFyV-1Yc',duration:170}] },
            { num:24, freq:4180, pol:'V', name:'Disney Channel West', scrambled:true, color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'GARGOYLES', type:'premium', audio:'6.80', stereo:true, videos:[{id:'X3HcL4-2QGE',duration:888,start:200},{id:'wniDCiLSgyk',duration:530}] },
        ]
    },
    {
        name: 'Satcom C4', short: 'C4', pos: 135.0,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:'AMC', color:'#180808', accent:'#cc4444', textColor:'#fff', program:'REAR WINDOW (1954)', type:'entertainment', audio:'6.80', stereo:true, tagline:'American Movie Classics', videos:[{id:'MCxmwieh43Y',start:148,end:628},{id:'j5jn7fu_zos',start:0,end:828},{id:'DmZG5CVbYfs',start:0,end:626}] },
            { num:2,  freq:3740, pol:'V', name:'Request 2 PPV', color:'#0a0a0a', accent:'#cc8844', textColor:'#fff', program:'REQUEST TV — CALL TO ORDER', type:'shopping', audio:'6.80', stereo:true, videos:[{id:'GN9r-WC7K00',duration:744},{id:'x-rl_EEnaW4',duration:397},{id:'0CRA4W6LyRY',duration:1884}] },
            { num:3,  freq:3760, pol:'H', name:'Nickelodeon East', color:'#161608', accent:'#ff8800', textColor:'#fff', program:'RUGRATS', type:'kids', audio:'6.80', stereo:true, tagline:'Nick', videos:[{id:'dO7Iw5vh1s4',duration:3716,start:120},{id:'IFa-P8RLlrI',duration:2961},{id:'hlye_ByLyLc',duration:1465}] },
            { num:4,  freq:3780, pol:'V', name:'Lifetime East', color:'#240816', accent:'#cc4488', textColor:'#fff', program:'UNSOLVED MYSTERIES', type:'entertainment', audio:'6.80', stereo:true, tagline:'Television for Women', videos:[{id:'pe96PDJK6W0',duration:754},{id:'6QtI6TwNDnw',duration:149}] },
            { num:5,  freq:3800, pol:'H', name:'Deutsche Welle', color:'#0a0a28', accent:'#4466cc', textColor:'#fff', program:'JOURNAL', type:'entertainment', audio:'6.80', stereo:false, tagline:'German Television', videos:[{id:'0hPlD5gyBNk',duration:383},{id:'4-_Tp-sOvPE',duration:51}] },
            { num:6,  freq:3820, pol:'V', name:'MSG', color:'#0a1a0a', accent:'#44aa44', textColor:'#fff', program:'NEW YORK KNICKS BASKETBALL', type:'sports', audio:'6.80', stereo:true, tagline:'Madison Square Garden Network', videos:[{id:'uEuZOYdsJkM',duration:7515},{id:'hLfS2OBsiag',duration:83}] },
            { num:7,  freq:3840, pol:'H', name:'Bravo', color:'#0a0a1a', accent:'#cc4444', textColor:'#fff', program:'INSIDE THE ACTORS STUDIO', type:'entertainment', audio:'6.80', stereo:true, videos:[{id:'MCxmwieh43Y',start:148,end:628},{id:'DmZG5CVbYfs',start:0,end:626}] },
            { num:8,  freq:3860, pol:'V', name:'Prevue Channel', color:'#0a0a0a', accent:'#44dddd', textColor:'#fff', program:'TONIGHT ON CABLE', type:'entertainment', audio:'6.80', stereo:false, tagline:'Your Guide to Cable TV', videos:[{id:'FK1lHWRFWB8',duration:4746},{id:'g-g2TMx9gO8',duration:331}] },
            { num:9,  freq:3880, pol:'H', name:'QVC', color:'#080828', accent:'#4466cc', textColor:'#fff', program:'DIAMONIQUE JEWELRY HOUR', type:'shopping', audio:'6.80', stereo:false, tagline:'CALL 1-800-345-1515', videos:[{id:'50mhYBMHBfk',duration:8892,start:600},{id:'sC2uMxL0Wqc',duration:2714}] },
            { num:10, freq:3900, pol:'V', name:'HSN', color:'#161608', accent:'#cccc44', textColor:'#fff', program:'HOME SHOPPING NETWORK', type:'shopping', audio:'6.80', stereo:false, tagline:'CALL 1-800-284-3100', videos:[{id:'ttpuvSoop6g',duration:4087,start:120}] },
            { num:11, freq:3920, pol:'H', name:'The Box', color:'#141414', accent:'#ff4444', textColor:'#fff', program:'MUSIC TELEVISION JUKEBOX', type:'music', audio:'6.80', stereo:true, tagline:'Music Television You Control', videos:[{id:'nJrjIPotMw8',duration:587},{id:'_W4OVeCiFp0',duration:1204}] },
                        { num:12,  freq:3940, pol:'V', name:'Nustar Promos', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'CABLE PROMOTIONAL CHANNEL', type:'entertainment', audio:'6.20', stereo:false, videos:[{id:'FK1lHWRFWB8',duration:4746,start:1000}]  },
            { num:13, freq:3960, pol:'H', name:'Travel Channel', color:'#082416', accent:'#44ccaa', textColor:'#fff', program:'AMAZING VACATIONS', type:'entertainment', audio:'6.80', stereo:true, videos:[{id:'3oa9tWccRJw',duration:2901}] },
            { num:14, freq:3980, pol:'V', name:'Cable Health Club', color:'#141408', accent:'#44aa44', textColor:'#fff', program:'FITNESS TODAY', type:'entertainment', audio:'6.80', stereo:false, videos:[{id:'sU5xtAu7B6U',duration:982}] },
            { num:15, freq:4000, pol:'H', name:'WWOR EMI Service', color:'#141414', accent:'#aaa', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'WWOR \u2014 SECAUCUS NJ', videos:[{id:'SbPHqhlhyG4',duration:257}] },
            { num:16, freq:4020, pol:'V', name:'Request TV 1', color:'#0a0a0a', accent:'#cc8844', textColor:'#fff', program:'REQUEST TV — CALL TO ORDER', type:'shopping', audio:'6.80', stereo:true, videos:[{id:'GN9r-WC7K00',duration:744,start:200},{id:'x-rl_EEnaW4',duration:397},{id:'VL2j5stvVhU',duration:1079}] },
            { num:17, freq:4040, pol:'H', name:'MTV East', color:'#141414', accent:'#ffdd00', textColor:'#fff', program:'BEAVIS AND BUTT-HEAD', type:'music', audio:'6.80', stereo:true, tagline:'Music Television', videos:[{id:'bZttp_KSYHo',duration:5623},{id:'wqS4Jqn5rmg',duration:1454},{id:'oN9CeZWkbUw',duration:993},{id:'u24qFvvR1V0',duration:2803}] },
            { num:18, freq:4060, pol:'V', name:'Hot Choice PPV', color:'#0a0a0a', accent:'#cc4444', textColor:'#fff', program:'HOT CHOICE — ORDER NOW', type:'shopping', audio:'6.80', stereo:true, videos:[{id:'eOP0CmrNT2A',start:2,end:842},{id:'eOP0CmrNT2A',start:855,end:1490},{id:'Qj2ihfq7y8c',duration:379}] },
            { num:19, freq:4080, pol:'H', name:'C-SPAN 2', color:'#141428', accent:'#6666aa', textColor:'#ddd', program:'U.S. SENATE PROCEEDINGS', type:'educational', audio:'6.20', stereo:false, videos:[{id:'LbPF6ptGLnI',start:0,end:25886}] },
            { num:20, freq:4100, pol:'V', name:'Showtime West', scrambled:true, color:'#240808', accent:'#cc2244', textColor:'#fff', program:'THE FUGITIVE (1993)', type:'premium', audio:'6.80', stereo:true, videos:[{id:'IlEGvqTJnQk',duration:432,start:100},{id:'i0EWWaMqJWk',duration:1940}] },
            { num:21, freq:4120, pol:'H', name:'Discovery Channel East', color:'#081624', accent:'#1a8cff', textColor:'#fff', program:'NEXT STEP', type:'entertainment', audio:'6.80', stereo:true, tagline:'Explore Your World', videos:[{id:'Rnyas0Ib_o8',duration:1960},{id:'OhUwwr1sbwQ',duration:1804}] },
            { num:22, freq:4140, pol:'V', name:'The Movie Channel West', scrambled:true, color:'#080828', accent:'#4444cc', textColor:'#fff', program:'BLADE RUNNER (1982)', type:'premium', audio:'6.80', stereo:true, videos:[{id:'2Byle7-67qo',duration:327},{id:'KqmwcwGRFVI',duration:438}] },
            { num:23, freq:4160, pol:'H', name:'VH1', color:'#160828', accent:'#aa44cc', textColor:'#fff', program:'TOP 20 COUNTDOWN', type:'music', audio:'6.80', stereo:true, tagline:'Music First', videos:[{id:'bZttp_KSYHo',duration:5623,start:120},{id:'3Ce18ZqOUwI',duration:786}] },
            { num:24, freq:4180, pol:'V', name:'CMT', color:'#161608', accent:'#ccaa44', textColor:'#fff', program:'CMT COUNTRY COUNTDOWN', type:'music', audio:'6.80', stereo:true, tagline:'Country Music Television', videos:[{id:'MNjdSI0XkmQ',duration:7952},{id:'TwCkZ4inwFw',duration:7264}] },
        ]
    },
    {
        name: 'Satcom C1', short: 'C1', pos: 137.0,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:null },
            { num:2,  freq:3740, pol:'V', name:'KUSA Denver ABC', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'WORLD NEWS TONIGHT', type:'network', audio:'6.80', stereo:true, tagline:'Denver 5', videos:[{id:'SbPHqhlhyG4',duration:257}] },
            { num:3,  freq:3760, pol:'H', name:'KRMA Denver PBS', color:'#141408', accent:'#44aa44', textColor:'#fff', program:'ROCKY MOUNTAIN PBS', type:'educational', audio:'6.80', stereo:true, videos:[{id:'W4RSwwMymj0',duration:3320,start:18}] },
            { num:4,  freq:3780, pol:'V', name:'Lottery Results', color:'#0a0a0a', accent:'#ccaa44', textColor:'#ff0', program:'WINNING NUMBERS', type:'entertainment', audio:'6.20', stereo:false, videos:[{id:'gLBMCW1onls',start:296,end:1112},{id:'a6cum2X9YqM',duration:139}] },
            { num:5,  freq:3800, pol:'H', name:null },
            { num:6,  freq:3820, pol:'V', name:'KMGH Denver CBS', color:'#0a0a28', accent:'#4488ff', textColor:'#fff', program:'CBS 7 DENVER', type:'network', audio:'6.80', stereo:true, videos:[{id:'SbPHqhlhyG4',duration:257}] },
            { num:7,  freq:3840, pol:'H', name:null },
            { num:8,  freq:3860, pol:'V', name:'NBC East', color:'#0a0a28', accent:'#ffaa00', textColor:'#fff', program:'TONIGHT SHOW WITH JAY LENO', type:'network', audio:'6.80', stereo:true, tagline:'NBC Network Feed', videos:[{id:'akNrTrblM3s',duration:3612,maxDur:150}] },
            { num:9,  freq:3880, pol:'H', name:null },
            { num:10, freq:3900, pol:'V', name:null },
            { num:11,  freq:3920, pol:'H', name:null },
            { num:12, freq:3940, pol:'V', name:null },
            { num:13, freq:3960, pol:'H', name:'SportsChannel Chicago', color:'#0a1a0a', accent:'#44cc44', textColor:'#fff', program:'CHICAGO BLACKHAWKS HOCKEY', type:'sports', audio:'6.80', stereo:true, videos:[{id:'reAxRzormg0',duration:9585,start:2000}] },
            { num:14, freq:3980, pol:'V', name:'KCNC Denver NBC', color:'#0a0a28', accent:'#ffaa00', textColor:'#fff', program:'NBC 4 DENVER', type:'network', audio:'6.80', stereo:true, videos:[{id:'akNrTrblM3s',duration:3612,maxDur:150}] },
            { num:15,  freq:4000, pol:'H', name:null },
            { num:16, freq:4020, pol:'V', name:null },
            { num:17, freq:4040, pol:'H', name:null },
            { num:18, freq:4060, pol:'V', name:null },
            { num:19, freq:4080, pol:'H', name:'FoxNet', color:'#080828', accent:'#4488ff', textColor:'#fff', program:'THE SIMPSONS', type:'network', audio:'6.80', stereo:true, tagline:'Fox Broadcasting Company', videos:[{id:'p9crm0fEdts',duration:1121,start:30}] },
            { num:20, freq:4100, pol:'V', name:'International Channel', color:'#0a0a28', accent:'#44aacc', textColor:'#fff', program:'WORLD CINEMA', type:'entertainment', audio:'6.80', stereo:false, videos:[{id:'3ZxFhLpKH3c',duration:2035}] },
            { num:21, freq:4120, pol:'H', name:null },
            { num:22, freq:4140, pol:'V', name:null },
            { num:23, freq:4160, pol:'H', name:'KWGN Denver', color:'#141414', accent:'#aaa', textColor:'#fff', program:'STAR TREK: THE NEXT GENERATION', type:'entertainment', audio:'6.80', stereo:true, tagline:'WB 2 Denver', videos:[{id:'WF6u-nukq5s',duration:1197},{id:'JAR7HyXL1Hk',duration:1198}] },
            { num:24, freq:4180, pol:'V', name:'Sunshine Network', color:'#161608', accent:'#ccaa44', textColor:'#fff', program:'FLORIDA SPORTS TONIGHT', type:'sports', audio:'6.80', stereo:true, tagline:'Florida Regional Sports', videos:[{id:'reAxRzormg0',duration:9585,start:2000}] },
        ]
    },
    {
        name: 'Aurora 1', short: 'A1', pos: 139.0,
        transponders: [
            { num:1,  freq:3720, pol:'H', name:'ARCS Alaska', color:'#0a0a1a', accent:'#44aacc', textColor:'#fff', program:'ALASKA RURAL TV', type:'educational', audio:'6.20', stereo:false, videos:[{id:'Z_ITOFglu2o',start:0,end:3480}] },
            { num:2,  freq:3740, pol:'V', name:null },
            { num:3,  freq:3760, pol:'H', name:null },
            { num:4,  freq:3780, pol:'V', name:'ARCS Feed 2', color:'#0a0a1a', accent:'#44aacc', textColor:'#fff', program:'ALASKA PROGRAMMING', type:'educational', audio:'6.20', stereo:false, videos:[{id:'HLdtxE3uQks',start:0,end:3698}] },
            { num:5,  freq:3800, pol:'H', name:null },
            { num:6,  freq:3820, pol:'V', name:null },
            { num:7,  freq:3840, pol:'H', name:'RATPAC', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'RURAL ALASKA TV', type:'educational', audio:'6.20', stereo:false, videos:[{id:'5U-CPNUN-kA',duration:1956}] },
            { num:8,  freq:3860, pol:'V', name:null },
            { num:9,  freq:3880, pol:'H', name:null },
            { num:10, freq:3900, pol:'V', name:null },
            { num:11, freq:3920, pol:'H', name:null },
            { num:12, freq:3940, pol:'V', name:null },
            { num:13, freq:3960, pol:'H', name:null },
            { num:14, freq:3980, pol:'V', name:null },
            { num:15, freq:4000, pol:'H', name:null },
            { num:16, freq:4020, pol:'V', name:null },
            { num:17, freq:4040, pol:'H', name:null },
            { num:18, freq:4060, pol:'V', name:null },
            { num:19, freq:4080, pol:'H', name:null },
            { num:20, freq:4100, pol:'V', name:null },
            { num:21, freq:4120, pol:'H', name:null },
            { num:22, freq:4140, pol:'V', name:null },
            { num:23, freq:4160, pol:'H', name:null },
            { num:24, freq:4180, pol:'V', name:'Pacific Feeds', color:'#0a0a0a', accent:'#888', textColor:'#fff', program:'LIVE SATELLITE FEED', type:'wild_feed', audio:'6.20', stereo:false, tagline:'PACIFIC REGION', videos:[{id:'SbPHqhlhyG4',duration:257}] },
        ]
    },
];


const BREAK_DURATION = 120; // 2 minutes of commercials between content

const commercials = [
    // "Half Hour of 1994 TV Commercials" — 1HBgJojaOGQ
    { id:'1HBgJojaOGQ', start:0, end:31 },
    { id:'1HBgJojaOGQ', start:31, end:62 },
    { id:'1HBgJojaOGQ', start:62, end:93 },
    { id:'1HBgJojaOGQ', start:93, end:124 },
    { id:'1HBgJojaOGQ', start:200, end:231 },
    { id:'1HBgJojaOGQ', start:300, end:331 },
    { id:'1HBgJojaOGQ', start:450, end:481 },
    { id:'1HBgJojaOGQ', start:600, end:631 },
    { id:'1HBgJojaOGQ', start:800, end:831 },
    { id:'1HBgJojaOGQ', start:1000, end:1031 },
    { id:'1HBgJojaOGQ', start:1200, end:1231 },
    { id:'1HBgJojaOGQ', start:1500, end:1531 },
    { id:'1HBgJojaOGQ', start:1700, end:1731 },
    // "Nostalgia Induced TV Commercials from 1994" — 08WE4ca1e-M
    { id:'08WE4ca1e-M', start:0, end:31 },
    { id:'08WE4ca1e-M', start:60, end:91 },
    { id:'08WE4ca1e-M', start:150, end:181 },
    { id:'08WE4ca1e-M', start:300, end:331 },
    { id:'08WE4ca1e-M', start:500, end:531 },
    { id:'08WE4ca1e-M', start:700, end:731 },
    { id:'08WE4ca1e-M', start:900, end:931 },
    // "VHS TV Commercials - 1993" — E1mUiedXMPc
    { id:'E1mUiedXMPc', start:0, end:31 },
    { id:'E1mUiedXMPc', start:120, end:151 },
    { id:'E1mUiedXMPc', start:400, end:431 },
    { id:'E1mUiedXMPc', start:800, end:831 },
    { id:'E1mUiedXMPc', start:1200, end:1231 },
    { id:'E1mUiedXMPc', start:1800, end:1831 },
    { id:'E1mUiedXMPc', start:2400, end:2431 },
    { id:'E1mUiedXMPc', start:3000, end:3031 },
    { id:'E1mUiedXMPc', start:3600, end:3631 },
    { id:'E1mUiedXMPc', start:4200, end:4231 },
    // "One Hour of NBC Commercials 1993-1994" — akNrTrblM3s
    { id:'akNrTrblM3s', start:0, end:31 },
    { id:'akNrTrblM3s', start:200, end:231 },
    { id:'akNrTrblM3s', start:500, end:531 },
    { id:'akNrTrblM3s', start:900, end:931 },
    { id:'akNrTrblM3s', start:1400, end:1431 },
    { id:'akNrTrblM3s', start:2000, end:2031 },
    { id:'akNrTrblM3s', start:2600, end:2631 },
    { id:'akNrTrblM3s', start:3200, end:3231 },
    // "March 1991 Commercials and News" — 1tfJAJGR_iM
    { id:'1tfJAJGR_iM', start:0, end:31 },
    { id:'1tfJAJGR_iM', start:150, end:181 },
    { id:'1tfJAJGR_iM', start:400, end:431 },
    { id:'1tfJAJGR_iM', start:800, end:831 },
    { id:'1tfJAJGR_iM', start:1200, end:1231 },
    { id:'1tfJAJGR_iM', start:1600, end:1631 },
    { id:'1tfJAJGR_iM', start:2000, end:2031 },
    // "1993-1994 Fox Commercials" — nSIlomMNLa0
    { id:'nSIlomMNLa0', start:0, end:31 },
    { id:'nSIlomMNLa0', start:100, end:131 },
    { id:'nSIlomMNLa0', start:250, end:281 },
    { id:'nSIlomMNLa0', start:450, end:481 },
    { id:'nSIlomMNLa0', start:650, end:681 },
    // "A few vintage commercials 1993-1994" — YEUtLAg-vgc
    { id:'YEUtLAg-vgc', start:0, end:31 },
    { id:'YEUtLAg-vgc', start:60, end:91 },
    { id:'YEUtLAg-vgc', start:130, end:161 },
    { id:'YEUtLAg-vgc', start:190, end:221 },

    // From DB.json clip editor
    { id:'w6qH2jBfyVo', start:1104, end:1134 },  // Commercial - Royal Caribbean
    { id:'w6qH2jBfyVo', start:1136, end:1164 },  // Commercial - Aquafresh Sensitive
    { id:'w6qH2jBfyVo', start:1165, end:1195 },  // Commercial - Serenity Pads
    { id:'EBuvOLjsF00', start:307, end:337 },  // Commercial - Oldsmobile
    { id:'EBuvOLjsF00', start:337, end:368 },  // Commercial - Aquafresh Sensitive
    { id:'EBuvOLjsF00', start:605, end:636 },  // Commercial - York Peppermint Pattie
    { id:'EBuvOLjsF00', start:728, end:993 },  // ABC World News Tonight
    { id:'EBuvOLjsF00', start:1114, end:1370 },  // ABC World News Tonight
    { id:'EBuvOLjsF00', start:1431, end:1736 },  // ABC World News Tonight
    { id:'EerSHhjR0g0', start:325, end:355 },  // Arthritis Foundation
    { id:'EerSHhjR0g0', start:355, end:385 },  // American Family Sweepstakes
    { id:'EerSHhjR0g0', start:664, end:679 },  // Nytol
    { id:'EerSHhjR0g0', start:680, end:709 },  // USPS
    { id:'EerSHhjR0g0', start:710, end:739 },  // Interplak Toothbrush
    { id:'EerSHhjR0g0', start:740, end:769 },  // Sprint
    { id:'EerSHhjR0g0', start:770, end:785 },  // Fibercon
    { id:'EerSHhjR0g0', start:785, end:805 },  // ABC 20/20
    { id:'EerSHhjR0g0', start:972, end:1002 },  // Advil
    { id:'EerSHhjR0g0', start:1002, end:1017 },  // Norelco
    { id:'EerSHhjR0g0', start:1017, end:1047 },  // Budwieser
    { id:'EerSHhjR0g0', start:1047, end:1062 },  // Mylanta
    { id:'EerSHhjR0g0', start:1062, end:1092 },  // Publishers Clearing House
    { id:'EerSHhjR0g0', start:1261, end:1277 },  // Glaxo - Heartburn
    { id:'EerSHhjR0g0', start:1277, end:1292 },  // Remington
    { id:'EerSHhjR0g0', start:1292, end:1322 },  // Maxwell House
    { id:'EerSHhjR0g0', start:1323, end:1337 },  // Elizabeth Arden Perfume
    { id:'EerSHhjR0g0', start:1337, end:1352 },  // Listerine
    { id:'EerSHhjR0g0', start:1352, end:1367 },  // Channel 2 News
    { id:'55DP2kimCIY', start:373, end:403 },  // Carnival Cruise / Abbot Travel
    { id:'55DP2kimCIY', start:403, end:433 },  // A Current Affair
    { id:'55DP2kimCIY', start:468, end:498 },  // Big A Auto Parts
    { id:'55DP2kimCIY', start:499, end:529 },  // Chevy Truck
    { id:'55DP2kimCIY', start:711, end:741 },  // DuPont Extrazine
    { id:'55DP2kimCIY', start:741, end:771 },  // Folgers
    { id:'55DP2kimCIY', start:805, end:835 },  // Rapid City Iowa Boys Basketball Championship
    { id:'55DP2kimCIY', start:835, end:868 },  // Entertainment Tonight
    { id:'55DP2kimCIY', start:1134, end:1164 },  // DuPont
    { id:'55DP2kimCIY', start:1164, end:1195 },  // Bower Trading
    { id:'55DP2kimCIY', start:1427, end:1458 },  // Champion Car Center
    { id:'55DP2kimCIY', start:1491, end:1521 },  // Armstrong
    { id:'55DP2kimCIY', start:1521, end:1551 },  // Kent
    { id:'MCxmwieh43Y', start:1, end:65 },  // AMC Promo Content
    { id:'MCxmwieh43Y', start:65, end:148 },  // AMC Ad Content
    { id:'MCxmwieh43Y', start:628, end:663 },  // AMC Film Preservation
    { id:'MCxmwieh43Y', start:663, end:758 },  // AMC Ad Content
    { id:'ES7ctnbjNuA', start:0, end:9 },  // Cartoon Network - Afternoon Adventures
    { id:'ES7ctnbjNuA', start:9, end:39 },  // Golden Grahams
    { id:'ES7ctnbjNuA', start:40, end:54 },  // Twister
    { id:'ES7ctnbjNuA', start:55, end:70 },  // Secret Deodorant
    { id:'ES7ctnbjNuA', start:71, end:100 },  // Carrot Top's AM Mayhem
    { id:'kE5_4vBscRs', start:482, end:512 },  // Scalpicin
    { id:'kE5_4vBscRs', start:512, end:527 },  // Robitussin
    { id:'kE5_4vBscRs', start:527, end:542 },  // Enterprise Rent a Car
    { id:'kE5_4vBscRs', start:712, end:743 },  // Phazyme
    { id:'kE5_4vBscRs', start:743, end:773 },  // Tavist
    { id:'kE5_4vBscRs', start:773, end:788 },  // Bengay
    { id:'kE5_4vBscRs', start:788, end:803 },  // Listerine
    { id:'kE5_4vBscRs', start:803, end:813 },  // CBS Eye to Eye
    { id:'kE5_4vBscRs', start:1020, end:1050 },  // Presto Chip Shot
    { id:'kE5_4vBscRs', start:1050, end:1065 },  // Total Cereal
    { id:'kE5_4vBscRs', start:1065, end:1080 },  // Robitussin
    { id:'kE5_4vBscRs', start:1080, end:1110 },  // Dow Chemicals
    { id:'kE5_4vBscRs', start:1110, end:1121 },  // CBS This Morning
    { id:'kE5_4vBscRs', start:1338, end:1353 },  // Serenity Pads
    { id:'kE5_4vBscRs', start:1353, end:1368 },  // Mylanta
    { id:'kE5_4vBscRs', start:1369, end:1398 },  // Farmers Insurance Group
    { id:'kE5_4vBscRs', start:1398, end:1428 },  // Oldsmobile
    { id:'kE5_4vBscRs', start:1428, end:1458 },  // Protegra
    { id:'SaF__mZECrM', start:881, end:911 },  // Brevard TV and Satellite
];

